// ══════════════════════════════════════════════════
// ზოდიაქო — მონაცემები
// სურათების ჩასმა: null-ის ნაცვლად დაწერეთ
//   'img/zodiako-cover.jpg'  ← ფოლდერი restaurants/zodiako/img/
//   ან სრული URL
// ══════════════════════════════════════════════════
const RESTAURANT = {
  name:  { ka: "ზოდიაქო",              en: "Zodiako"          },
  emoji: "🥟",
  cuisine:{ ka:"ქართული სამზარეულო",  en:"Georgian Cuisine"  },
  cuisineTag: "georgian",
  rating: 4.5,  reviewCount: 312,
  email:  "zodiako@restaurant.ge",
  phone:  "032 205 22 22",
  description: {
    ka: "ზოდიაქო — ადგილი, სადაც ქართული სამზარეულო ხელოვნებად გადაიქცევა. ვამზადებთ ყველა კერძს ახალი, ხარისხიანი ინგრედიენტებით და ტრადიციული რეცეპტებით, რომლებიც თაობიდან თაობას გადაეცემა.",
    en: "Zodiako is a place where Georgian cuisine becomes art. Every dish is prepared with fresh, quality ingredients and traditional recipes passed down through generations."
  },
  founded: "2018",
  slug: "zodiako",
  badge: { ka: "დაპიტილა", en: "Premium" },

  // ── HERO PHOTO ─────────────────────────────────
  // ✏️  ჩასვით: heroImg: 'img/hero.jpg'
  heroImg: "https://i.natgeofe.com/n/aed9f829-849c-4902-88bb-27e570c2a398/GettyImages-180258510.jpg",

  // ── BRANCHES ───────────────────────────────────
  branches: [
    {
      id: "zodiako-vake",
      name:    { ka: "ზოდიაქო — ვაკე",       en: "Zodiako — Vake"      },
      address: { ka: "ალ. ყაზბეგის გამz. 12", en: "Al. Kazbegi Ave. 12" },
      lat: 41.7225, lng: 44.7580,
      phone: "032 205 22 22",
      hours: { ka: "ორ–პარ: 11:00–23:00  |  შ–კვ: 10:00–00:00",
               en: "Mon–Fri: 11:00–23:00  |  Sat–Sun: 10:00–00:00" },
      status: "open"
    },
    {
      id: "zodiako-saburtalo",
      name:    { ka: "ზოდიაქო — საბურთალო",    en: "Zodiako — Saburtalo"   },
      address: { ka: "ვაჟა-ფშაველას გამz. 45", en: "Vazha-Pshavela Ave. 45" },
      lat: 41.7380, lng: 44.7710,
      phone: "032 205 33 33",
      hours: { ka: "ყოველდღე: 12:00–22:00", en: "Daily: 12:00–22:00" },
      status: "open"
    },
    {
      id: "zodiako-isani",
      name:    { ka: "ზოდიაქო — ისანი",  en: "Zodiako — Isani" },
      address: { ka: "კახეთის გზ. 1",   en: "Kakheti Hwy 1"   },
      lat: 41.6860, lng: 44.8340,
      phone: "032 205 44 44",
      hours: { ka: "ყოველდღე: 11:00–23:00", en: "Daily: 11:00–23:00" },
      status: "open"
    }
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
      id: "main",
      name:  { ka: "მთავარი კერძები", en: "Main Courses" },
      emoji: "🍲",
      catImg: "/assets/mtsvadi.png",
      items: [
        { img:"/assets/kebab.png", name:{ka:"ქაბაბი",en:"Kebab"},
          desc:{ka:"",en:""},
          price:"23",  popular:false },
        
        { img:"/assets/kebab2.png", name:{ka:"ქაბაბი პომიდვრის სოუსით",en:"Kebab with Tomato Sauce"},
          desc:{ka:"",en:""},
          price:"23",  popular:false },

        { img:"/assets/mushroom.png", name:{ka:"სოკო კეცზე",en:"mushroom on spin"},
          desc:{ka:"",en:""},
          price:"22",  popular:false },

        { img:"/assets/mtsvadi.png", name:{ka:"მწვადი",en:"Mtsvadi"},
          desc:{ka:"",en:""},
          price:"26",  popular:false },

        { img:"/assets/fries.png", name:{ka:"კარტოფილი ფრი",en:"franch fries"},
          desc:{ka:"",en:""},
          price:"17",  popular:false },
          
        { img:"/assets/kharcho.png", name:{ka:"ხარჩო",en:"soup kharcho"},
          desc:{ka:"",en:""},
          price:"23",  popular:false },
      ]
    },
    {
      id: "khinkali",
      name:  { ka: "ხინკალი",          en: "ხინკალი"     },
      emoji: "🥟",
      catImg: "/assets/khinkali.png",
      items: [
        { img:"/assets/khinkali.png", name:{ka:"საქონლის ხინკალი",en:"beef khinkali"},
          desc:{ka:"",en:""},
          price:"2.80",  popular:false },

        { img:"/assets/khinkali.png", name:{ka:"თელავური ხინკალი",en:"telavuri khinkali"},
          desc:{ka:"",en:""},
          price:"2",  popular:false },

        { img:"/assets/khinkali.png", name:{ka:"ქალაქური ხინკალი",en:"kalakuri Khinkali"},
          desc:{ka:"",en:""},
          price:"2",  popular:true },

        { img:"/assets/khinkali.png", name:{ka:"საფირმო ხინკალი",en:"branded khinkali"},
          desc:{ka:"",en:""},
          price:"2.80",  popular:false },

        { img:"/assets/khinkali.png", name:{ka:"სოკოს ხინკალი",en:"mushroom khinkali"},
          desc:{ka:"",en:""},
          price:"2.50",  popular:false },
      ]
    },
    {
      id: "baked",
      name:  { ka: "ცომეული",    en: "baked" },
      emoji: "🍮",
      catImg: "/assets/baked.png",
      items: [
        { img:"/assets/khachapuri.png", name:{ka:"იმერული ხაჭაპური",en:"Imeruli Khachapuri"},
          desc:{ka:"",en:""},
          price:"22",  popular:true },
      ]
    },
    {
      id: "salads",
      name:  { ka: "სალათები",   en: "Salads"  },
      emoji: "🥗",
      catImg: "/assets/salad.png",
      items: [
        { img:"/assets/caesar.png", name:{ka:"ცეზარი",en:"caesar"},
          desc:{ka:"",en:""},
          price:"28",  popular:true },
      ]
    },
    {
      id: "cold_dishes",
      name:  { ka: "ცივი კერძები",    en: "cold dishes" },
      emoji: "🍮",
      catImg: "/assets/cold_dishes.png",
      items: [
        { img:"/assets/cold_dishes.png", name:{ka:"ფხალი",en:"Pkhali"},
          desc:{ka:"",en:""},
          price:"25",  popular:false },
      ]
    },
    {
      id: "drinks",
      name:  { ka: "სასმელები",    en: "Drinks"   },
      emoji: "🍷",
      catImg: "/assets/drinks.png",
      items: [
        { img:"/assets/drinks1.png", name:{ka:"კოკა-კოლა",en:"Coca-Cola"},
          desc:{ka:"",en:""},
          price:"4",  popular:false },
      ]
    },
    {
      id: "desserts",
      name:  { ka: "დესერტი",    en: "Desserts" },
      emoji: "🍮",
      catImg: "/assets/desserts.png",
      items: [
        { img:"/assets/desserts1.png", name:{ka:"ქართული დესერტი",en:"Georgian Dessert"},
          desc:{ka:"თათარა, ნიგოზი, სოუსი",en:""},
          price:"28",  popular:true },
      ]
    },

  ]
};
