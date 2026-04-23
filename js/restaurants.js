// ══════════════════════════════════════════════════════════
// URIGOD.GE — Restaurant Registry & Categories
// ══════════════════════════════════════════════════════════

const HERO_SLIDES = [
  { img: "https://i.natgeofe.com/n/aed9f829-849c-4902-88bb-27e570c2a398/GettyImages-180258510.jpg", label: { ka: "ქართული სამზარეულო", en: "Georgian Cuisine" } },
  { img: "https://hotsale.ge/files/offers/aqciebi/kveba/oishi/43.jpg", label: { ka: "აზიური არომატები",   en: "Asian Flavours"  } },
  { img: "https://hotsale.ge/files/offers/kolkheti2/33-1.jpg", label: { ka: "თბილისი ღამით",       en: "Tbilisi by Night"} },
];

const CATEGORIES = [
  { id:"all",      ka:"ყველა",        en:"All",        emoji:"🍽️" },
  { id:"georgian", ka:"ქართული",      en:"Georgian",   emoji:"🥟" },
  { id:"asian",    ka:"აზიური",       en:"Asian",      emoji:"🍣" },
  { id:"shawarma", ka:"შაურმა",   en:"shawarma",  emoji:"🌯" },
  { id:"european", ka:"ევროპული",     en:"European",   emoji:"🍕" },
  { id:"italian",  ka:"იტალიური",     en:"Italian",    emoji:"🍝" },
  { id:"seafood",  ka:"ზღვის პრ.",    en:"Seafood",    emoji:"🦞" },
  { id:"fastfood", ka:"ფასტ-ფუდი",   en:"Fast Food",  emoji:"🍔" },
  
  // ახალი კატეგორიები
  { id:"vegan",    ka:"ვეგანური",     en:"Vegan",      emoji:"🥗" },
  { id:"dessert",  ka:"დესერტები",    en:"Desserts",   emoji:"🍰" },
  { id:"bar",      ka:"ბარი / ფაბი",  en:"Bar / Pub",  emoji:"🍻" }
];

const RESTAURANTS = [
  {
    id:"zodiako", slug:"zodiako",
    name:{ ka:"ზოდიაქო", en:"Zodiako" },
    emoji:"🥟",
    cuisine:{ ka:"ქართული სამზარეულო", en:"Georgian Cuisine" },
    cuisineTag:"georgian",
    // დამატებული tags ველი ფილტრისთვის
    tags: ["georgian", "fastfood"], 
    rating:2.1, status:"open", hours:"11:00 – 23:00",
    phone:"032 205 22 22", email:"zodiako@restaurant.ge",
    featured:true, badge:{ ka:"დაპიტილა", en:"Premium" },
    cover:  "https://i.natgeofe.com/n/aed9f829-849c-4902-88bb-27e570c2a398/GettyImages-180258510.jpg",
    heroImg:null,
    branches:[
      { id:"zodiako-vake", name:{ ka:"ზოდიაქო — ვაკე", en:"Zodiako — Vake" }, address:{ ka:"ალ. ყაზბეგის გამz. 12, თბილისი", en:"Al. Kazbegi Ave. 12, Tbilisi" }, lat:41.7225, lng:44.7580, phone:"032 205 22 22", hours:"11:00 – 23:00", status:"open" },
      { id:"zodiako-saburtalo", name:{ ka:"ზოდიაქო — საბურთალო",  en:"Zodiako — Saburtalo" }, address:{ ka:"ვაჟა-ფშაველას გამz. 45", en:"Vazha-Pshavela Ave. 45" }, lat:41.7380, lng:44.7710, phone:"032 205 33 33", hours:"12:00 – 22:00", status:"open" },
      { id:"zodiako-isani", name:{ ka:"ზოდიაქო — ისანი", en:"Zodiako — Isani" }, address:{ ka:"კახეთის გზ. 1", en:"Kakheti Hwy 1" }, lat:41.6860, lng:44.8340, phone:"032 205 44 44", hours:"11:00 – 23:00", status:"open" }
    ]
  },
  {
    id:"sushi-zone", slug:"sushi-zone",
    name:{ ka:"სუში ზონა",  en:"Sushi Zone" },
    emoji:"🍣",
    cuisine:{ ka:"აზიური სამზარეულო", en:"Asian Cuisine" },
    cuisineTag:"asian",
    tags: ["asian", "seafood", "vegan"], 
    rating:4.7, status:"open", hours:"06:00 – 24:00",
    phone:"032 205 11 11", email:"sushizone@restaurant.ge",
    featured:true, badge:null,
    cover:"https://hotsale.ge/files/offers/aqciebi/kveba/oishi/43.jpg", heroImg:null,
    branches:[
      { id:"sushi-main", name:{ ka:"სუში ზონა — მთავარი", en:"Sushi Zone — Main" }, address:{ ka:"კეთ. წამებულის გამz. 65", en:"K. Tsamebuli Ave. 65" }, lat:41.6938, lng:44.8015, phone:"032 205 11 11", hours:"06:00 – 24:00", status:"open" },
      { id:"sushi-vake", name:{ ka:"სუში ზონა — ვაკე", en:"Sushi Zone — Vake" }, address:{ ka:"ჭავჭავაძის გამz. 22", en:"Chavchavadze Ave. 22" }, lat:41.7210, lng:44.7520, phone:"032 205 12 12", hours:"11:00 – 23:30", status:"open" }
    ]
  },
  {
    id:"ronnys_pizza", slug:"ronnys_pizza",
    name:{ ka:"რონის პიცა", en:"Ronnys Pizza" },
    emoji:"🍕",
    cuisine:{ ka:"პიცერია", en:"Pizza" },
    cuisineTag:"european",
    tags: ["pizza", "european", "bar"], 
    rating:4.9, 
    status:"open", hours:"12:00 – 24:00",
    phone:"032 211 44 44", email:"chveni@restaurant.ge",
    featured:true, badge:{ ka:"ღიაა", en:"Premium" },
    cover:"https://img.marketer.ge/2019/10/Untitled-1-1.png", heroImg:null,
    branches:[
      { id:"ronnys_pizza-avlabari", name:{ ka:"რონის პიცა — საბურთალო",  en:"Ronnys Pizza — Saburtalo"  }, 
      address:{ ka:"3 ვაჟა ფშაველას გამზირი", en:"3 Vazha Pshavela Ave" }, lat:41.727744840516905,  lng: 44.76638671391406, phone:"032 211 44 44", hours:"12:00 – 24:00", status:"open" },
      
      { id:"ronnys_pizza-mtatsminda", name:{ ka:"რონის პიცა — გლდანი", en:"Ronnys Pizza — Gldani" }, 
      address:{ ka:"მთაწმინდის ქ. 8",  en:"Mtatsminda St. 8"   }, lat:41.79737269545972,  lng:44.82570080719443, phone:"032 211 55 55", hours:"12:00 – 23:30", status:"open" },

      { id:"ronnys_pizza-avlabari", name:{ ka:"რონის პიცა — ავლაბარი", en:"Ronnys Pizza — Avlabari" }, 
      address:{ ka:"12 ქეთევან დედედოფლის გამზირი",  en:"12 Ketevan Dedofali Ave"   }, lat:41.6908681599176,  lng: 44.81751435690792, phone:"032 211 55 55", hours:"12:00 – 23:30", status:"open" },

      { id:"ronnys_pizza-vake", name:{ ka:"რონის პიცა — ვაკე", en:"Ronnys Pizza — Vake" }, 
      address:{ ka:"7 ილია ჭავჭავაძის გამზირი",  en:"7 Ilia Chavchavadze Ave"   }, lat:41.70930591282304,   lng: 44.77462747671794, phone:"032 211 55 55", hours:"12:00 – 23:30", status:"open" },

      { id:"ronnys_pizza-digomi", name:{ ka:"რონის პიცა — დიღომი", en:"Ronnys Pizza — Digomi" }, 
      address:{ ka:"67 მირიან მეფის ქუჩა",  en:"67 Mirian mefis St"   }, lat:41.78751033307033,    lng: 44.744704706119315, phone:"032 211 55 55", hours:"12:00 – 23:30", status:"open" },
    ]
  },

  {
    id: "marge", slug: "marge-shawarma",
    name: { ka: "მარგე",  en: "Marge" },
    emoji: "🌯",
    cuisine: { ka: "საშაურმე", en: "Shawarma" },
    cuisineTag: "shawarma",
    tags: ["shawarma", "fastfood", "24/7"], 
    rating: 4.8, status: "open", hours: "24/7",
    phone: "032 2 11 22 33", email: "info@marge.ge",
    featured: true, badge: null,
    cover: "img/marge_hero.jpg", heroImg: "img/marge_hero.jpg",
    branches: [
      { id: "marge-vake", name: { ka: "ვაკე", en: "Vake" }, address: { ka: "ჭავჭავაძის გამზირი. 34", en: "Chavchavadze Ave. 34" }, lat: 41.7100, lng: 44.7600, phone: "032 2 11 22 33", hours: "24/7", status: "open" },
      { id: "marge-saburtalo", name: { ka: "საბურთალო", en: "Saburtalo" }, address: { ka: "პეკინის გამზირი. 14", en: "Pekini Ave. 14" }, lat: 41.7250, lng: 44.7650, phone: "032 2 11 22 34", hours: "24/7", status: "open" },
      { id: "marge-gldani", name: { ka: "გლდანი", en: "Gldani" }, address: { ka: "ხიზანიშვილის ქ. 12", en: "Khizanishvili St. 12" }, lat: 41.7990, lng: 44.8320, phone: "032 2 11 22 35", hours: "10:00–02:00", status: "open" },
      { id: "marge-isani", name: { ka: "ისანი", en: "Isani" }, address: { ka: "ქეთევან წამებულის გამზ. 71", en: "K. Tsamebuli Ave. 71" }, lat: 41.6870, lng: 44.8290, phone: "032 2 11 22 36", hours: "24/7", status: "open" },
      { id: "marge-didube", name: { ka: "დიდუბე", en: "Didube" }, address: { ka: "წერეთლის გამზირი. 55", en: "Tsereteli Ave. 55" }, lat: 41.7340, lng: 44.7830, phone: "032 2 11 22 37", hours: "10:00–03:00", status: "open" }
    ]
  }
];

function tl(obj) {
  if (!obj || typeof obj === 'string') return obj || '';
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ka';
  return obj[lang] || obj.ka || '';
}

function photoOrEmoji(src, emoji, cls = '', style = '') {
  if (src) {
    return `<img src="${src}" alt="" class="${cls}" style="${style}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <span class="emoji-fallback" style="display:none">${emoji}</span>`;
  }
  return `<span class="emoji-fallback">${emoji}</span>`;
}










// {
//       id: "",
//       name:  { ka: "", en: "" },
//       emoji: "",
//       catImg: "",
//       items: [
//         { img:"", name:{ka:"",en:""},
//           desc:{ka:"",en:""},
//           price:"",  popular:false },
//       ]
//     },






  // {
  //   id:"", slug:"",
  //   name:{ ka:"",  en:"" },
  //   emoji:"🍣",
  //   cuisine:{ ka:"", en:"" },
  //   cuisineTag:"asian",
  //   tags: ["", "", ""], 
  //   rating:4.7, status:"open", hours:"06:00 – 24:00",
  //   phone:"032 205 11 11", email:"sushizone@restaurant.ge",
  //   featured:true, badge:null,
  //   cover:"https://hotsale.ge/files/offers/aqciebi/kveba/oishi/43.jpg", heroImg:null,
  //   branches:[
  //     { id:"", name:{ ka:"", en:"" }, address:{ ka:"", en:"" }, lat:, lng:, phone:"032 205 11 11", hours:"06:00 – 24:00", status:"open" },
      
  //   ]
  // },