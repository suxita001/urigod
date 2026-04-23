// URIGOD.GE — Map Module v2
// clustering + zoom fade + city grouping
// საჭიროა: leaflet.markercluster (CDN-ით ან locally)
// <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css">
// <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css">
// <script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>

const UrigodMap = {
  map: null,
  clusterLayer: null,   // MarkerClusterGroup
  plainLayer: null,     // fallback LayerGroup (no cluster plugin)
  all: [],
  _currentData: [],
  tileLayer: null,

  TILES: {
    dark:  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    light: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  },

  // ── Cities config ────────────────────────────────────────
  // Add more cities here as you expand
  CITIES: {
    tbilisi: { ka: 'თბილისი', en: 'Tbilisi', center: [41.710, 44.790], zoom: 13 },
    // kutaisi: { ka: 'ქუთაისი', en: 'Kutaisi', center: [42.270, 42.697], zoom: 13 },
    // batumi:  { ka: 'ბათუმი',  en: 'Batumi',  center: [41.642, 41.634], zoom: 13 },
  },

  // ── Init ─────────────────────────────────────────────────
  init(id, opts = {}) {
    const cfg = Object.assign({
      center: [41.710, 44.790], zoom: 13, restaurants: []
    }, opts);

    if (this.map) { this.map.remove(); this.map = null; }

    this.map = L.map(id, {
      center: cfg.center, zoom: cfg.zoom,
      zoomControl: false, attributionControl: true,
      zoomAnimation: true, fadeAnimation: true,
    });

    this._tiles();
    L.control.zoom({ position: 'topleft' }).addTo(this.map);

    // Try to use MarkerCluster, fall back to plain LayerGroup
    if (window.L && L.markerClusterGroup) {
      this.clusterLayer = L.markerClusterGroup({
        maxClusterRadius: 60,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
        disableClusteringAtZoom: 16,
        animate: true,
        animateAddingMarkers: false,

        // Custom cluster icon
        iconCreateFunction: (cluster) => {
          const count = cluster.getChildCount();
          const isDark = !document.body.classList.contains('light');
          const bg    = isDark ? '#1a1a1a' : '#ffffff';
          const border = '#00e5c8';
          const size = count > 20 ? 52 : count > 10 ? 46 : 40;
          return L.divIcon({
            className: '',
            html: `<div style="
              width:${size}px;height:${size}px;border-radius:50%;
              background:${bg};border:2.5px solid ${border};
              display:flex;align-items:center;justify-content:center;flex-direction:column;
              box-shadow:0 4px 20px rgba(0,229,200,.35),0 2px 8px rgba(0,0,0,.5);
              cursor:pointer;transition:transform .2s;
            ">
              <span style="font-size:${count>9?11:13}px;font-weight:800;color:${border};line-height:1.1">${count}</span>
              <span style="font-size:8px;color:rgba(0,229,200,.6);font-weight:600;letter-spacing:.5px">
                ${document.documentElement.lang==='en'?'venues':'ობიექ.'}
              </span>
            </div>`,
            iconSize: [size, size], iconAnchor: [size/2, size/2],
          });
        },
      });
      this.map.addLayer(this.clusterLayer);
      this.plainLayer = null;
    } else {
      // No cluster plugin — plain layer
      this.plainLayer = L.layerGroup().addTo(this.map);
      this.clusterLayer = null;
    }

    // Zoom event: update cluster labels language
    this.map.on('zoomend', () => this._onZoomEnd());

    if (cfg.restaurants.length) {
      this.all = cfg.restaurants;
      this.render(cfg.restaurants);
    }
    return this;
  },

  // ── Tiles ────────────────────────────────────────────────
  _tiles() {
    const t = document.body.classList.contains('light') ? 'light' : 'dark';
    if (this.tileLayer) this.map.removeLayer(this.tileLayer);
    this.tileLayer = L.tileLayer(this.TILES[t], {
      subdomains: 'abcd', maxZoom: 20, attribution: '&copy; CartoDB',
    }).addTo(this.map);
  },
  rerenderTiles() { if (this.map) { this._tiles(); this._refreshClusters(); } },

  _refreshClusters() {
    // Re-render to update cluster icon colors after theme change
    if (this._currentData.length) this.render(this._currentData);
  },

  // ── Zoom handler ─────────────────────────────────────────
  _onZoomEnd() {
    const z = this.map.getZoom();
    // At low zoom levels show a gentle overlay hint
    const hint = document.getElementById('_mapZoomHint');
    if (hint) {
      if (z < 11) {
        hint.style.opacity = '1';
        hint.style.pointerEvents = 'auto';
      } else {
        hint.style.opacity = '0';
        hint.style.pointerEvents = 'none';
      }
    }
  },

  // ── Marker icon ──────────────────────────────────────────
  icon(emoji, open) {
    const c  = open ? '#00e5c8' : '#ff3d6b';
    const sh = open ? 'rgba(0,229,200,.4)' : 'rgba(255,61,107,.4)';
    const bg = document.body.classList.contains('light') ? '#ffffff' : '#1a1a1a';
    return L.divIcon({
      className: '',
      html: `<div class="_umap-pin" style="
        width:42px;height:42px;border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        background:${bg};border:2.5px solid ${c};
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 4px 18px ${sh},0 2px 8px rgba(0,0,0,.4);
        cursor:pointer;
        transition:transform .2s, box-shadow .2s;
      ">
        <span style="transform:rotate(45deg);font-size:18px;line-height:1">${emoji}</span>
      </div>`,
      iconSize: [42, 42], iconAnchor: [21, 42], popupAnchor: [0, -46],
    });
  },

  // ── Popup ────────────────────────────────────────────────
  popup(r, b) {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ka';
    const t    = o => typeof o === 'object' ? (o[lang] || o.ka || '') : (o || '');
    const open = b.status === 'open';
    const isDark = !document.body.classList.contains('light');
    const bg   = isDark ? '#1c1c1c' : '#fff';
    const tc   = isDark ? '#f0f0f0' : '#111';
    const ts   = isDark ? '#888'    : '#666';
    const stBg = open ? 'rgba(0,229,200,.14)' : 'rgba(255,61,107,.14)';
    const stC  = open ? '#00e5c8' : '#ff3d6b';
    const stBd = open ? 'rgba(0,229,200,.3)' : 'rgba(255,61,107,.3)';
    const stTx = open ? (lang === 'en' ? '● Open' : '● ღიაა') : (lang === 'en' ? '● Closed' : '● დახ.');
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const pre   = depth >= 2 ? '../../' : '';
    const brStr = JSON.stringify(r.branches)
      .replace(/\\/g, '\\\\').replace(/"/g, '&quot;').replace(/'/g, "\\'");

    return `<div style="font-family:'Noto Sans Georgian',system-ui,sans-serif;min-width:240px;color:${tc}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:26px;flex-shrink:0">${r.emoji}</span>
        <div>
          <div style="font-size:14px;font-weight:700;margin-bottom:2px;color:${tc}">${t(b.name)}</div>
          <div style="font-size:12px;color:${ts}">${t(r.cuisine)}</div>
        </div>
      </div>
      <div style="font-size:12px;color:${ts};margin-bottom:4px">📍 ${t(b.address)}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <span style="font-size:12px;color:${ts}">🕐 ${b.hours}</span>
        <span style="font-size:11px;padding:2px 10px;border-radius:100px;
          background:${stBg};color:${stC};border:1px solid ${stBd}">${stTx}</span>
      </div>
      <div style="display:flex;gap:8px">
        <a href="${pre}restaurants/${r.slug}/index.html"
          style="flex:2;text-align:center;padding:9px;background:#00e5c8;color:#080808;
          border-radius:10px;font-size:12px;font-weight:700;text-decoration:none;font-family:inherit">
          ${lang === 'en' ? 'View →' : 'ნახვა →'}
        </a>
        <button onclick="openBooking(${JSON.stringify(r.name).replace(/"/g,"'")},
          '${r.email}',JSON.parse('${brStr}'),'${b.id}')"
          style="flex:1;padding:9px;background:rgba(255,61,107,.15);color:#ff3d6b;
          border:1px solid rgba(255,61,107,.3);border-radius:10px;font-size:15px;
          cursor:pointer;font-family:inherit">📅</button>
      </div>
    </div>`;
  },

  // ── Render markers ───────────────────────────────────────
  render(restaurants) {
    this._currentData = restaurants;

    // Clear
    if (this.clusterLayer) this.clusterLayer.clearLayers();
    if (this.plainLayer)   this.plainLayer.clearLayers();

    const markers = [];
    restaurants.forEach(r => {
      r.branches.forEach(b => {
        const m = L.marker([b.lat, b.lng], { icon: this.icon(r.emoji, b.status === 'open') })
          .bindPopup(this.popup(r, b), { maxWidth: 280, className: 'ug-popup' });
        markers.push(m);
      });
    });

    if (this.clusterLayer) {
      this.clusterLayer.addLayers(markers);
    } else {
      markers.forEach(m => m.addTo(this.plainLayer));
    }

    // Trigger zoom hint check
    this._onZoomEnd();
  },

  // ── Filter / search ──────────────────────────────────────
  filter(tag) {
    const d = tag === 'all' ? this.all : this.all.filter(r => r.cuisineTag === tag);
    this.render(d);
    return d;
  },
  search(q) {
    const s = o => typeof o === 'object' ? Object.values(o).join(' ') : (o || '');
    const d = !q ? this.all : this.all.filter(r =>
      s(r.name).toLowerCase().includes(q) ||
      r.branches.some(b => s(b.address).toLowerCase().includes(q))
    );
    this.render(d);
    return d;
  },

  // ── Navigation ───────────────────────────────────────────
  flyTo(lat, lng, zoom = 16) {
    this.map.flyTo([lat, lng], zoom, { duration: 1.0, easeLinearity: 0.25 });
  },
  fitAll() {
    const pts = [];
    (this.clusterLayer || this.plainLayer).eachLayer(m => {
      if (m.getLatLng) pts.push(m.getLatLng());
    });
    if (pts.length > 1) this.map.fitBounds(L.latLngBounds(pts).pad(.15), { animate: true, duration: 0.8 });
    else if (pts.length === 1) this.map.flyTo(pts[0], 15, { duration: 0.8 });
  },

  // ── Go to city ───────────────────────────────────────────
  flyToCity(cityKey) {
    const city = this.CITIES[cityKey];
    if (!city || !this.map) return;
    this.map.flyTo(city.center, city.zoom, { duration: 1.2, easeLinearity: 0.2 });
  },
};

window.rerenderMap = () => UrigodMap.rerenderTiles();