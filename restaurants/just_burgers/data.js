// ══════════════════════════════════════════════════
// ზოდიაქო — მონაცემები
// სურათების ჩასმა: null-ის ნაცვლად დაწერეთ
//   'img/zodiako-cover.jpg'  ← ფოლდერი restaurants/zodiako/img/
//   ან სრული URL
// ══════════════════════════════════════════════════
const RESTAURANT = {
  name:  { ka: "just burgers",              en: "just burgers"          },
  emoji: "🍔",
  cuisine:{ ka:"ქართული სამზარეულო",  en:"Georgian Cuisine"  },
  cuisineTag: "georgian",
  rating: 4.7,  reviewCount: 312,
  email:  "info@tbilisee.ge",
  phone:  "+995591553535",
  description: {
    ka: "რესტორანი სახურავზე ძველი თბილისის ულამაზესი ხედებით და ცოცხალი მუსიკით ყოველ შაბათ-კვირას, გემრიელი კერძები ტრადიციული ქართული და თანამედროვე ევროპული სამზარეულოს შერწყმით. უფასო პარკინგი ძველი თბილისის გულში.",
    en: "Rooftop restaurant with Beautiful views of Old Tbilisi and live music every weekend, Delicious Dishes connection of Traditional Georgian With modern European Kitchen. Free parking in the heart of old Tbilisi"
  },
  founded: "2018",
  slug: "just_burgers",

  // ── HERO PHOTO ─────────────────────────────────
  // ✏️  ჩასვით: heroImg: 'img/hero.jpg'
  heroImg: "https://imageproxy.wolt.com/assets/6897c554d55eea19ac949123",

  // ── BRANCHES ───────────────────────────────────
  branches: [
    {
      id: "just_burgers",
      name:    { ka: "just burgers",       en: "just burgers"      },
      address: { ka: "რომან მიმინოშვილის 2, თბილისი", en: "2 Roman Miminoshvili Street, Tbilisi" },
      lat: 41.70636818807825,  lng: 44.78834745369621,
      phone: "+995 596 46 04 04",
      hours: { ka: "ორ–პარ: 12:00–23:00  |  შ–კვ: 12:00–23:00",
               en: "Mon–Fri: 12:00–23:00  |  Sat–Sun: 12:00–23:00" },
      status: "open"
    },
  ],

  // ── GALLERY ────────────────────────────────────
  // ✏️  ჩასვით: img: 'img/gallery-1.jpg'
  gallery: [
    { img: "https://imageproxy.wolt.com/assets/6897c58a6ab951f1d2d67c9a?w=600", emoji: "🏛️", label: { ka: "",   en: ""   } },
    { img: "https://imageproxy.wolt.com/assets/6897c5b96ab951f1d2d67c9d?w=600", emoji: "🥟", label: { ka: "",     en: ""   } },
    { img: "https://imageproxy.wolt.com/assets/6897c47ba3b8bf11ca23b43d?w=600", emoji: "🍲", label: { ka: "",   en: ""} },
    { img: "https://imageproxy.wolt.com/assets/6899dc3d39bc32f634c1878b?w=600", emoji: "🍷", label: { ka: "",        en: ""        } },
    { img: "https://imageproxy.wolt.com/assets/6899dc3739bc32f634c18784?w=600", emoji: "🌿", label: { ka: "",       en: ""     } },
    { img: "https://imageproxy.wolt.com/assets/6899dc4439bc32f634c18795?w=600", emoji: "🍮", label: { ka: "",      en: ""     } },
  ],

  features: [
    // { icon:"🅿️", ka:"პარკინგი",       en:"Parking"      },
    // { icon:"♿",  ka:"ხელმისაწვდ.",   en:"Accessible"   },
    // { icon:"🍷", ka:"ღვინის სია",     en:"Wine List"    },
    // { icon:"🎵", ka:"ცოცხ. მუსიკა",  en:"Live Music"   },
    // { icon:"🌿", ka:"ტერასა",         en:"Terrace"      },
    // { icon:"👶", ka:"ოჯახ. კეთ.",    en:"Kid Friendly" },
  ],

  socials: {
    facebook:  "https://www.facebook.com/americanburgerstbilisi/?locale=ka_GE",
    instagram: "https://www.instagram.com/justburgerstbilisi/",
    tiktok:    ""
  },

  // ── MENU ───────────────────────────────────────
  menu: [
    // --- BOWLS ---
    {
      id: "bowls",
      name: { ka: "ბოულები", en: "Bowls" },
      emoji: "🥗",
      catImg: "https://imageproxy.wolt.com/assets/6899dc3739bc32f634c18784?w=600",
      items: [
        {
          img: "https://imageproxy.wolt.com/assets/6899dc4439bc32f634c18795?w=600",
          name: { ka: "Smash Burger Bowl", en: "Smash Burger Bowl" },
          desc: { ka: "ფრი, ყველის სოუსი, საქონლის ხორცი, ყველი ჩედარი, ბეკონი, პიკული, პომიდორი, კარამელიზებული ხახვი, საფირმო სოუსი", en: "" },
          price: "26 ₾",
          popular: true
        },
        {
          img: "https://imageproxy.wolt.com/assets/6899dc3739bc32f634c18784?w=600",
          name: { ka: "Chili Burger Bowl", en: "Chili Burger Bowl" },
          desc: { ka: "ფრი, ყველის სოუსი, საქონლის ხორცი, ყველი ჩედარი, ჩილის სოუსი, ჰალაპენიო, საფირმო სოუსი", en: "" },
          price: "26 ₾",
          popular: false
        },
        {
          img: "https://imageproxy.wolt.com/assets/6899dc3539bc32f634c18782?w=600",
          name: { ka: "Texas BBQ Burger Bowl", en: "Texas BBQ Burger Bowl" },
          desc: { ka: "ფრი, ყველის სოუსი, საქონლის ხორცი, ყველი ჩედარი, ქოულსლოუ სალათი, ხახვის რგოლები, ბეკონი, ბარბექიუ სოუსი", en: "" },
          price: "26 ₾",
          popular: false
        },
        {
          img: "https://imageproxy.wolt.com/assets/6899dc3b39bc32f634c18789?w=600",
          name: { ka: "Chilli Bowl", en: "Chilli Bowl" },
          desc: { ka: "ფრი, ყველის სოუსი, ჩილის სოუსი", en: "" },
          price: "16 ₾",
          popular: false
        },
        {
          img: "https://imageproxy.wolt.com/assets/6899dc3d39bc32f634c1878b?w=600",
          name: { ka: "Bacon and Cheese", en: "Bacon and Cheese" },
          desc: { ka: "ფრი, ყველის სოუსი, ბეკონი", en: "" },
          price: "14 ₾",
          popular: false
        }
      ]
    },

    // --- BURGERS ---
    {
      id: "burgers",
      name: { ka: "ბურგერები", en: "Burgers" },
      emoji: "🍔",
      catImg: "https://imageproxy.wolt.com/assets/6897c58a6ab951f1d2d67c9a?w=600",
      items: [
        {
          img: "https://imageproxy.wolt.com/assets/6897c58a6ab951f1d2d67c9a?w=600",
          name: { ka: "Smash Burger", en: "Smash Burger" },
          desc: { ka: "საქონლის ხორცი, ამერიკული ჩედარი, პომიდორი, კარამელიზებული ხახვი, მჟავე კიტრი, აისბერგი, ბეკონი, საფირმო სოუსი, ფრი", en: "" },
          price: "24 ₾",
          popular: true,
          variants: [
            {
              groupLabel: { ka: "ზომა", en: "Size" },
              groupType: "size",
              options: [
                { label: { ka: "Burger 1X", en: "Burger 1X" }, price: "24 ₾", default: true },
                { label: { ka: "Burger 2X", en: "Burger 2X" }, price: "30 ₾", default: false },
                { label: { ka: "Burger 3X", en: "Burger 3X" }, price: "36 ₾", default: false }
              ]
            }
          ]
        },
        {
          img: "/assets/just_burgers_breakfast.jpeg",
          name: { ka: "Breakfast Burger", en: "Breakfast Burger" },
          desc: { ka: "საქონლის ხორცი, ამერიკული ჩედარი, საფირმო სოუსი, მჟავე კიტრი, ბეკონი, კვერცხი, ფრი", en: "" },
          price: "30 ₾",
          popular: false
        },
        {
          img: "",
          name: { ka: "Chopped Cheese Burger", en: "Chopped Cheese Burger" },
          desc: { ka: "საქონლის ხორცი, ამერიკული ჩედარი, მყარი ჩედარი, ყველი გაუდა, კარამელიზებული ხახვი, აისბერგი, პომიდორი, საფირმო სოუსი, ფრი", en: "" },
          price: "27 ₾",
          popular: false
        },
        {
          img: "https://imageproxy.wolt.com/assets/6897c60a6ab951f1d2d67ca1?w=600",
          name: { ka: "Texas BBQ Burger", en: "Texas BBQ Burger" },
          desc: { ka: "საქონლის ხორცი, ქოულსლოუ სალათი, ამერიკული ჩედარი, ხახვის რგოლები, ბეკონი, ბარბექიუ სოუსი, ფრი", en: "" },
          price: "24 ₾",
          popular: false,
          variants: [
            {
              groupLabel: { ka: "ზომა", en: "Size" },
              groupType: "size",
              options: [
                { label: { ka: "Burger 1X", en: "Burger 1X" }, price: "24 ₾", default: true },
                { label: { ka: "Burger 2X", en: "Burger 2X" }, price: "30 ₾", default: false },
                { label: { ka: "Burger 3X", en: "Burger 3X" }, price: "36 ₾", default: false }
              ]
            }
          ]
        },
        {
          img: "/assets/just_burgers_swiss.jpeg",
          name: { ka: "Swiss Cheeses Burger", en: "Swiss Cheeses Burger" },
          desc: { ka: "საქონლის ხორცი, ნივრის სოუსი, ამერიკული ჩედარი, შვეიცარიული ყველი ემენტალი, ბეკონი, ხახვი, პომიდორი, აისბერგი, სოკო, ფრი", en: "" },
          price: "32 ₾",
          popular: false
        },
        {
          img: "https://imageproxy.wolt.com/assets/6897c554d55eea19ac949122?w=600",
          name: { ka: "Blue Cheese", en: "Blue Cheese" },
          desc: { ka: "საქონლის ხორცი, ბეკონი, ხახვის ჯემი, ნივრის სოუსი, ლურჯი ყველი, ფრი", en: "" },
          price: "23 ₾",
          popular: false,
          variants: [
            {
              groupLabel: { ka: "ზომა", en: "Size" },
              groupType: "size",
              options: [
                { label: { ka: "Burger 1X", en: "Burger 1X" }, price: "23 ₾", default: true },
                { label: { ka: "Burger 2X", en: "Burger 2X" }, price: "29 ₾", default: false },
                { label: { ka: "Burger 3X", en: "Burger 3X" }, price: "35 ₾", default: false }
              ]
            }
          ]
        },
        {
          img: "https://imageproxy.wolt.com/assets/6897c5b96ab951f1d2d67c9d?w=600",
          name: { ka: "Juicy Lucy", en: "Juicy Lucy" },
          desc: { ka: "საქონლის ხორცი, ხორცში ჩამდნარი ჩედარი, მჟავე კიტრი, აისბერგი, საფირმო სოუსი, ფრი", en: "" },
          price: "29 ₾",
          popular: false
        },
        {
          img: "https://imageproxy.wolt.com/assets/6897c5e2a3b8bf11ca23b452?w=600",
          name: { ka: "Chili Burger", en: "Chili Burger" },
          desc: { ka: "საქონლის ხორცი, ჰალაპენიო, ჩილის სოუსი, საფირმო სოუსი, ფრი", en: "" },
          price: "24 ₾",
          popular: false,
          variants: [
            {
              groupLabel: { ka: "ზომა", en: "Size" },
              groupType: "size",
              options: [
                { label: { ka: "Burger 1X", en: "Burger 1X" }, price: "24 ₾", default: true },
                { label: { ka: "Burger 2X", en: "Burger 2X" }, price: "30 ₾", default: false },
                { label: { ka: "Burger 3X", en: "Burger 3X" }, price: "36 ₾", default: false }
              ]
            }
          ]
        }
      ]
    },

    // --- IN N OUT BURGERS ---
    {
      id: "in_n_out",
      name: { ka: "In N Out Burgers", en: "In N Out Burgers" },
      emoji: "🍔",
      catImg: "/assets/just_burgers_n2.png",
      items: [
        {
          img: "/assets/just_burgers_n1.png",
          name: { ka: "Flying Dutchman", en: "Flying Dutchman" },
          desc: { ka: "", en: "" },
          price: "15 ₾",
          popular: false
        },
        {
          img: "/assets/just_burgers_n2.png",
          name: { ka: "Tomato Wrapped", en: "Tomato Wrapped" },
          desc: { ka: "", en: "" },
          price: "15 ₾",
          popular: false
        },
        {
          img: "/assets/just_burgers_n3.png",
          name: { ka: "Lettuce Wrapped", en: "Lettuce Wrapped" },
          desc: { ka: "", en: "" },
          price: "15 ₾",
          popular: false
        },
        {
          img: "/assets/just_burgers_n4.png",
          name: { ka: "სეტი", en: "Set" },
          desc: { ka: "", en: "" },
          price: "38 ₾",
          popular: true
        }
      ]
    },

    // --- SAUCES ---
    {
      id: "sauces",
      name: { ka: "სოუსები", en: "Sauces" },
      emoji: "🍯",
      catImg: "https://imageproxy.wolt.com/assets/6899dc3539bc32f634c18781?w=1920",
      items: [
        { img: "https://imageproxy.wolt.com/assets/6899dc3d39bc32f634c1878c?w=600", name: { ka: "BBQ", en: "BBQ" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false },
        { img: "https://imageproxy.wolt.com/assets/6899dc3f39bc32f634c1878e?w=600", name: { ka: "Cheese Sauce", en: "Cheese Sauce" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "https://imageproxy.wolt.com/assets/6899dc3c39bc32f634c1878a?w=600", name: { ka: "Mayo", en: "Mayo" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false },
        { img: "/assets/just_burgers_specsouce.jpeg", name: { ka: "Special Sauce", en: "Special Sauce" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "https://imageproxy.wolt.com/assets/6899dc3939bc32f634c18786?w=600", name: { ka: "Sriracha", en: "Sriracha" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false },
        { img: "https://imageproxy.wolt.com/assets/6899dc3539bc32f634c18781?w=1920", name: { ka: "Ketchup", en: "Ketchup" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false }
      ]
    },

    // --- DRINKS ---
    {
      id: "drinks",
      name: { ka: "სასმელები", en: "Drinks" },
      emoji: "🥤",
      catImg: "https://imageproxy.wolt.com/menu/menu-images/63761b1db2c2b8618c25dfce/73b1dbf0-667c-11ed-b8b0-f238c735deb6__________________.jpeg?w=600",
      items: [
        { img: "https://imageproxy.wolt.com/menu/menu-images/63761b1db2c2b8618c25dfce/73b1dbf0-667c-11ed-b8b0-f238c735deb6__________________.jpeg?w=600", name: { ka: "Coca-Cola Classic / Zero", en: "Coca-Cola Classic / Zero" }, desc: { ka: "", en: "" }, price: "3.5 ₾", popular: false },
        { img: "https://imageproxy.wolt.com/menu/menu-images/63761b1db2c2b8618c25dfce/875e4346-667c-11ed-8bae-2a45ff5406dd_fanta_0.33.jpeg?w=600", name: { ka: "Fanta", en: "Fanta" }, desc: { ka: "", en: "" }, price: "3.5 ₾", popular: false },
        { img: "https://imageproxy.wolt.com/menu/menu-images/63761b1db2c2b8618c25dfce/923e702e-667c-11ed-a652-e6a1cc4418d9_____________.jpeg?w=600", name: { ka: "Sprite", en: "Sprite" }, desc: { ka: "", en: "" }, price: "3.5 ₾", popular: false },
        { img: "", name: { ka: "Fuse Tea", en: "Fuse Tea" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "", name: { ka: "Cappy", en: "Cappy" }, desc: { ka: "", en: "" }, price: "5.5 ₾", popular: false },
        { img: "", name: { ka: "Water", en: "Water" }, desc: { ka: "", en: "" }, price: "2 ₾", popular: false },
        { img: "", name: { ka: "Erdinger Weisbrau", en: "Erdinger Weisbrau" }, desc: { ka: "", en: "" }, price: "9 ₾", popular: false },
        { img: "", name: { ka: "HB", en: "HB" }, desc: { ka: "", en: "" }, price: "12 ₾", popular: false },
        { img: "", name: { ka: "Erdinger Helles", en: "Erdinger Helles" }, desc: { ka: "", en: "" }, price: "10 ₾", popular: false },
        { img: "", name: { ka: "Estrella", en: "Estrella" }, desc: { ka: "", en: "" }, price: "8 ₾", popular: false }
      ]
    },

    // --- MEALS (SIDES) ---
    {
      id: "meal",
      name: { ka: "გარნირი", en: "Meal" },
      emoji: "🍟",
      catImg: "https://imageproxy.wolt.com/menu/menu-images/63761b1db2c2b8618c25dfce/fcaff976-9257-11ed-9e6a-6eb963909ec7___opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309_french_fries_vicky_wasik_15_5a9844742c2446c7a7be9fbd41b6e27d.jpeg?w=600",
      items: [
        {
          img: "https://imageproxy.wolt.com/assets/6899dc4439bc32f634c18794?w=600",
          name: { ka: "ხახვის რგოლები (8 Pcs)", en: "Onion Rings (8 Pcs)" },
          desc: { ka: "", en: "" },
          price: "6 ₾",
          popular: false
        },
        {
          img: "https://imageproxy.wolt.com/menu/menu-images/63761b1db2c2b8618c25dfce/fcaff976-9257-11ed-9e6a-6eb963909ec7___opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309_french_fries_vicky_wasik_15_5a9844742c2446c7a7be9fbd41b6e27d.jpeg?w=600",
          name: { ka: "ფრი (250g)", en: "Fries (250g)" },
          desc: { ka: "", en: "" },
          price: "6 ₾",
          popular: false
        }
      ]
    }
  ]
};