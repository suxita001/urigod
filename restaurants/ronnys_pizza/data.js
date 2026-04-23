// ══════════════════════════════════════════════════
// ზოდიაქო — მონაცემები
// სურათების ჩასმა: null-ის ნაცვლად დაწერეთ
//   'img/zodiako-cover.jpg'  ← ფოლდერი restaurants/zodiako/img/
//   ან სრული URL
// ══════════════════════════════════════════════════
const RESTAURANT = {
  name:  { ka: "რონის პიცა",              en: "Ronnys Pizza"          },
  emoji: "🍕",
  cuisine:{ ka:"პიცერია",  en:"Pizza"  },
  cuisineTag: "pizza",
  rating: 4.9,  reviewCount: 312,
  email:  "zodiako@restaurant.ge",
  phone:  "032 205 22 22",
  description: {
    ka: "ზოდიაქო — ადგილი, სადაც ქართული სამზარეულო ხელოვნებად გადაიქცევა. ვამზადებთ ყველა კერძს ახალი, ხარისხიანი ინგრედიენტებით და ტრადიციული რეცეპტებით, რომლებიც თაობიდან თაობას გადაეცემა.",
    en: "Zodiako is a place where Georgian cuisine becomes art. Every dish is prepared with fresh, quality ingredients and traditional recipes passed down through generations."
  },
  founded: "2018",
  slug: "zodiako",
  badge: { ka: "ღიაა", en: "Premium" },

  // ── HERO PHOTO ─────────────────────────────────
  // ✏️  ჩასვით: heroImg: 'img/hero.jpg'
  heroImg: "https://img.marketer.ge/2019/10/Untitled-1-1.png",

  // ── BRANCHES ───────────────────────────────────
  branches: [
    {
      id: "ronnys_pizza-saburtalo",
      name:    { ka: "რონის პიცა — საბურთალო",       en: "Ronnys Pizza — saburtalo"      },
      address: { ka: "3 ვაჟა ფშაველას გამზირი", en: "3 Vazha Pshavela Ave" },
      lat: 41.727744840516905,  lng: 44.76638671391406,
      phone: "032 205 22 22",
      hours: { ka: "ორ–პარ: 11:00–23:00  |  შ–კვ: 10:00–00:00",
               en: "Mon–Fri: 11:00–23:00  |  Sat–Sun: 10:00–00:00" },
      status: "open"
    },
    {
      id: "ronnys_pizza-gldani",
      name:    { ka: "რონის პიცა — გლდანი",    en: "Ronnys Pizza — Gldani"   },
      address: { ka: "მესამე მიკრო, მეხუთე კორპუსი", en: "third micro, fifth building" },
      lat: 41.79737269545972,  lng:44.82570080719443,
      phone: "032 205 33 33",
      hours: { ka: "ყოველდღე: 12:00–22:00", en: "Daily: 12:00–22:00" },
      status: "open"
    },
    {
      id: "ronnys_pizza-avlabari",
      name:    { ka: "რონის პიცა — ავლაბარი",  en: "Ronnys Pizza — Avlabari" },
      address: { ka: "12 ქეთევან დედედოფლის გამზირი",   en: "12 Ketevan Dedofali Ave"   },
      lat: 41.6908681599176,  lng: 44.81751435690792,
      phone: "032 205 44 44",
      hours: { ka: "ყოველდღე: 11:00–23:00", en: "Daily: 11:00–23:00" },
      status: "open"
    },

    {
      id: "ronnys_pizza-vake",
      name:    { ka: "რონის პიცა — ვაკე",  en: "Ronnys Pizza — Vake" },
      address: { ka: "7 ილია ჭავჭავაძის გამზირი",  en: "7 Ilia Chavchavadze Ave"   },
      lat: 41.70930591282304,   lng: 44.77462747671794,
      phone: "032 205 44 44",
      hours: { ka: "ყოველდღე: 11:00–23:00", en: "Daily: 11:00–23:00" },
      status: "open"
    },

    {
      id: "ronnys_pizza-digomi",
      name:    { ka: "რონის პიცა — დიღომი",  en: "Ronnys Pizza — Digomi" },
      address: { ka: "67 მირიან მეფის ქუჩა",  en: "67 Mirian mefis St"   },
      lat: 41.78751033307033,    lng: 44.744704706119315,
      phone: "032 205 44 44",
      hours: { ka: "ყოველდღე: 11:00–23:00", en: "Daily: 11:00–23:00" },
      status: "open"
    },
  ],

  // ── GALLERY ────────────────────────────────────
  // ✏️  ჩასვით: img: 'img/gallery-1.jpg'
  gallery: [
    { img: "https://i.natgeofe.com/n/aed9f829-849c-4902-88bb-27e570c2a398/GettyImages-180258510.jpg", emoji: "🏛️", label: { ka: "ინტერიერი",   en: "Interior"   } },
    { img: null, emoji: "🥟", label: { ka: "ხინკალი",     en: "Khinkali"   } },
    { img: null, emoji: "🍲", label: { ka: "ჩახოხბილი",   en: "Chakhokhbili"} },
    { img: null, emoji: "🍷", label: { ka: "ღვინო",        en: "Wine"        } },
    { img: null, emoji: "🌿", label: { ka: "ტერასა",       en: "Terrace"     } },
    { img: null, emoji: "🍮", label: { ka: "დესერტი",      en: "Dessert"     } },
  ],

  features: [
    { icon:"🅿️", ka:"პარკინგი",       en:"Parking"      },
    { icon:"♿",  ka:"ხელმისაწვდ.",   en:"Accessible"   },
    { icon:"🍷", ka:"ღვინის სია",     en:"Wine List"    },
    { icon:"🎵", ka:"ცოცხ. მუსიკა",  en:"Live Music"   },
    { icon:"🌿", ka:"ტერასა",         en:"Terrace"      },
    { icon:"👶", ka:"ოჯახ. კეთ.",    en:"Kid Friendly" },
  ],

  socials: {
    facebook:  "https://facebook.com/zodiako",
    instagram: "https://instagram.com/zodiako.ge",
    tiktok:    ""
  },

  // ── MENU ───────────────────────────────────────
  menu: [
    
    {
      id: "pizza",
      name:  { ka: "პიცა", en: "Pizza" },
      emoji: "🍕",
      catImg: "/assets/pizza.png",
      items: [
        { img:"/assets/pizza.png", name:{ka:"ნახევარ - ნახევარი",en:"half & half"},
          desc:{ka:"ორი პიცა ერთში! გააორმაგეთ თქვენი გემოს გამოცდილება. შესანიშნავია სხვადასხვა გემოვნების მეგობრებს შორის გაზიარებისთვის.",en:"two pizzas in one! Double your flavor experience. Perfect for sharing between friends with different tastes."},
          price:"x",  popular:false },

        { img:"https://ronnyspizza.com/product_images/medium-pizza-4x4-ronnys_pizza.png", name:{ka:"4X4",en:"4X4"},
          desc:{ka:"",en:""},
          price:"15.10",  popular:false },

        { img:"https://ronnyspizza.ge/product_images/medium-pizza-cheese_lovers-ronnys_pizza.png", name:{ka:"ჩიზი ლოვერსი",en:"Cheese Lovers"},
          desc:{ka:"",en:""},
          price:"15.80",  popular:false },

        { img:"", name:{ka:"",en:""},
          desc:{ka:"",en:""},
          price:"",  popular:false },
      ]
    },

  ]
};
