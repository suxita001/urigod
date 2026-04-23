// მარგე — მონაცემები
const RESTAURANT = {
  name:    { ka: "მარგე", en: "Marge" },
  Image:   "img/marge_logo.jpg",
  cuisine: { ka: "საშაურმე", en: "Shawarma" },
  cuisineTag: "shawarma",
  rating: 4.8, reviewCount: 1240,
  email:  "info@marge.ge",
  phone:  "032 2 11 22 33",
  description: {
    ka: "მარგე = თბილისის საუკეთესო საშაურმე. ყველა შაურმა მზადდება უმაღლესი ხარისხის ჯანსაღი ხორცით, ახალი ბოსტნეულით და ჩვენი საფირმო სოუსებით.",
    en: "Marge is Tbilisi's best shawarma place. Every shawarma is made with premium quality meat, fresh vegetables, and our signature sauces."
  },
  founded: "2015", slug: "marge-shawarma", badge: null,
  heroImg: "img/marge_hero.jpg",
  branches: [
    { id:"marge-vake",
      name:    { ka:"მარგე — ვაკე", en:"Marge — Vake"  },
      address: { ka:"ჭავჭავაძის გამზირი. 34", en:"Chavchavadze Ave. 34" },
      lat:41.7100, lng:44.7600, phone:"032 2 11 22 33",
      hours:{ ka:"ყოველდღე: 24/7", en:"Daily: 24/7" }, status:"open" },
    { id:"marge-saburtalo",
      name:    { ka:"მარგე — საბურთალო", en:"Marge — Saburtalo" },
      address: { ka:"პეკინის გამზირი. 14", en:"Pekini Ave. 14" },
      lat:41.7250, lng:44.7650, phone:"032 2 11 22 34",
      hours:{ ka:"ყოველდღე: 24/7", en:"Daily: 24/7" }, status:"open" },
    { id:"marge-gldani",
      name:    { ka:"მარგე — გლდანი", en:"Marge — Gldani" },
      address: { ka:"ხიზანიშვილის ქ. 12", en:"Khizanishvili St. 12" },
      lat:41.7990, lng:44.8320, phone:"032 2 11 22 35",
      hours:{ ka:"ყოველდღე: 10:00–02:00", en:"Daily: 10:00–02:00" }, status:"open" },
    { id:"marge-isani",
      name:    { ka:"მარგე — ისანი", en:"Marge — Isani" },
      address: { ka:"ქეთევან წამებულის გამზ. 71", en:"K. Tsamebuli Ave. 71" },
      lat:41.6870, lng:44.8290, phone:"032 2 11 22 36",
      hours:{ ka:"ყოველდღე: 24/7", en:"Daily: 24/7" }, status:"open" },
    { id:"marge-didube",
      name:    { ka:"მარგე — დიდუბე", en:"Marge — Didube" },
      address: { ka:"წერეთლის გამზირი. 55", en:"Tsereteli Ave. 55" },
      lat:41.7340, lng:44.7830, phone:"032 2 11 22 37",
      hours:{ ka:"ყოველდღე: 10:00–03:00", en:"Daily: 10:00–03:00" }, status:"open" }
  ],
  gallery: [
    {img:"img/shawarma_pork.jpg",emoji:"🌯",label:{ka:"შაურმა",en:"Shawarma"}},
    {img:"img/french_fries.jpg",emoji:"🍟",label:{ka:"კარტოფილი",en:"Fries"}},
    {img:"img/meat_grill.jpg",emoji:"🥩",label:{ka:"გრილი",en:"Grill"}},
    {img:"img/sauces.jpg",emoji:"🌶️",label:{ka:"სოუსები",en:"Sauces"}},
    {img:"img/marge_interior.jpg",emoji:"🏪",label:{ka:"ინტერიერი",en:"Interior"}},
    {img:"img/delivery_box.jpg",emoji:"🚀",label:{ka:"მიტანა",en:"Delivery"}}
  ],
  features: [
    {icon:"🚀",ka:"მიტანის სერვისი",en:"Delivery"},
    {icon:"🥩",ka:"100% სუფთა ხორცი",en:"100% Fresh Meat"},
    {icon:"🕒",ka:"24/7 მუშაობს",en:"Open 24/7"},
    {icon:"🌶️",ka:"ცხარე ვარიანტები",en:"Spicy Options"},
    {icon:"🅿️",ka:"პარკინგი",en:"Parking"},
    {icon:"💳",ka:"ბარათით გადახდა",en:"Card Payment"}
  ],
  socials: { facebook:"https://facebook.com/marge.ge", instagram:"https://instagram.com/marge_shawarma", tiktok:"https://tiktok.com/@marge_shawarma" },

  menu: [
    {
      id: "pork_shawarma",
      name:  { ka: "ღორის შაურმა", en: "Pork Shawarma" },
      emoji: "🌯",
      catImg: "img/cat_pork_shawarma.jpg",
      items: [
        { img:"img/pork_small.jpg", name:{ka:"პატარა",en:"Small"},
          desc:{ka:"ღორის ხორცი, პომიდორი, კიტრი, ხახვი, სოუსი",en:"Pork meat, tomato, cucumber, onion, sauce"},
          price:"10",  popular:false, type:"main" },
        
        { img:"img/pork_medium.jpg", name:{ka:"სტანდარტული",en:"Standard"},
          desc:{ka:"ღორის ხორცი, პომიდორი, კიტრი, ხახვი, სოუსი",en:"Pork meat, tomato, cucumber, onion, sauce"},
          price:"14",  popular:true, type:"main" },

        { img:"img/pork_large.jpg", name:{ka:"დიდი",en:"Large"},
          desc:{ka:"ორმაგი ხორცი, პომიდორი, კიტრი, ხახვი, სოუსი",en:"Double meat, tomato, cucumber, onion, sauce"},
          price:"18",  popular:true, type:"main" },

        { img:"img/pork_xl.jpg", name:{ka:"XL შაურმა",en:"XL Shawarma"},
          desc:{ka:"ექსტრა ხორცი და ბოსტნეული მშიერებისთვის",en:"Extra meat and vegetables for the hungry"},
          price:"22",  popular:false, type:"main" },

        { img:"img/pork_cheese.jpg", name:{ka:"ყველით (სტანდარტული)",en:"With Cheese (Standard)"},
          desc:{ka:"ღორის შაურმა გამდნარი ყველით",en:"Pork shawarma with melted cheese"},
          price:"16",  popular:true, type:"main" },

        { img:"img/pork_mexican.jpg", name:{ka:"მექსიკური",en:"Mexican"},
          desc:{ka:"ღორის ხორცი, მექსიკური სოუსი, ჰალაპენიო",en:"Pork meat, mexican sauce, jalapeno"},
          price:"16",  popular:true, type:"main" },

        { img:"img/pork_spicy.jpg", name:{ka:"ცხარე (სტანდარტული)",en:"Spicy (Standard)"},
          desc:{ka:"ღორის ხორცი, ცხარე სოუსი, წიწაკა",en:"Pork meat, spicy sauce, chili pepper"},
          price:"14",  popular:false, type:"main" },

        { img:"img/pork_mixed.jpg", name:{ka:"მიქსი (ღორი+ქათამი)",en:"Mixed (Pork+Chicken)"},
          desc:{ka:"ღორის და ქათმის ხორცის მიქსი",en:"Mix of pork and chicken meat"},
          price:"15",  popular:true, type:"main" }
      ]
    },
    {
      id: "chicken_shawarma",
      name:  { ka: "ქათმის შაურმა", en: "Chicken Shawarma" },
      emoji: "🍗",
      catImg: "img/cat_chicken_shawarma.jpg",
      items: [
        { img:"img/chicken_small.jpg", name:{ka:"პატარა",en:"Small"},
          desc:{ka:"ქათმის ფილე, პომიდორი, კიტრი, სოუსი",en:"Chicken fillet, tomato, cucumber, sauce"},
          price:"9",  popular:false, type:"side" },

        { img:"img/chicken_medium.jpg", name:{ka:"სტანდარტული",en:"Standard"},
          desc:{ka:"ქათმის ფილე, პომიდორი, კიტრი, სოუსი",en:"Chicken fillet, tomato, cucumber, sauce"},
          price:"13",  popular:true, type:"side" },

        { img:"img/chicken_large.jpg", name:{ka:"დიდი",en:"Large"},
          desc:{ka:"ორმაგი ქათმის ფილე, პომიდორი, კიტრი, სოუსი",en:"Double chicken fillet, tomato, cucumber, sauce"},
          price:"17",  popular:true, type:"side" },

        { img:"img/chicken_cheese.jpg", name:{ka:"ყველით (სტანდარტული)",en:"With Cheese (Standard)"},
          desc:{ka:"ქათმის ფილე, გამდნარი ყველი, ბოსტნეული",en:"Chicken fillet, melted cheese, vegetables"},
          price:"15",  popular:true, type:"side" },

        { img:"img/chicken_diet.jpg", name:{ka:"ფიტნეს შაურმა",en:"Fitness Shawarma"},
          desc:{ka:"მხოლოდ ქათმის ფილე, სალათის ფურცელი, უმაიონეზო",en:"Only chicken fillet, lettuce, no mayo"},
          price:"14",  popular:false, type:"side" }
      ]
    },
    {
      id: "combo_meals",
      name:  { ka: "კომბო მენიუ", en: "Combo Meals" },
      emoji: "🍱",
      catImg: "img/cat_combo.jpg",
      items: [
        { img:"img/combo_pork.jpg", name:{ka:"ღორის კომბო",en:"Pork Combo"},
          desc:{ka:"სტანდ. ღორის შაურმა + კარტოფილი ფრი + კოკა-კოლა",en:"Std. Pork Shawarma + Fries + Coca-Cola"},
          price:"20",  popular:true, type:"main" },
          
        { img:"img/combo_chicken.jpg", name:{ka:"ქათმის კომბო",en:"Chicken Combo"},
          desc:{ka:"სტანდ. ქათმის შაურმა + კარტოფილი ფრი + კოკა-კოლა",en:"Std. Chicken Shawarma + Fries + Coca-Cola"},
          price:"19",  popular:false, type:"main" },

        { img:"img/combo_large.jpg", name:{ka:"დიდი კომბო",en:"Large Combo"},
          desc:{ka:"დიდი შაურმა + მექსიკური კარტოფილი + 0.5ლ სასმელი",en:"Large Shawarma + Mexican Potatoes + 0.5L Drink"},
          price:"26",  popular:true, type:"main" },

        { img:"img/combo_friends.jpg", name:{ka:"მეგობრების კომბო",en:"Friends Combo"},
          desc:{ka:"3 სტანდ. შაურმა + 2 დიდი ფრი + 1ლ კოკა-კოლა",en:"3 Std. Shawarmas + 2 Large Fries + 1L Coca-Cola"},
          price:"55",  popular:true, type:"main" },

        { img:"img/combo_snack.jpg", name:{ka:"სნექ კომბო",en:"Snack Combo"},
          desc:{ka:"პატარა შაურმა + ნაგეტსები + სოუსი",en:"Small Shawarma + Nuggets + Sauce"},
          price:"16",  popular:false, type:"main" }
      ]
    },
    {
      id: "sides",
      name:  { ka: "გარნირი & სნექები", en: "Sides & Snacks" },
      emoji: "🍟",
      catImg: "img/cat_sides.jpg",
      items: [
        { img:"img/fries_std.jpg", name:{ka:"კარტოფილი ფრი",en:"French Fries"},
          desc:{ka:"სტანდარტული პორცია",en:"Standard portion"},
          price:"5",  popular:true, type:"side" },
          
        { img:"img/fries_large.jpg", name:{ka:"დიდი ფრი",en:"Large Fries"},
          desc:{ka:"დიდი პორცია",en:"Large portion"},
          price:"7",  popular:false, type:"side" },

        { img:"img/mexican_potatoes.jpg", name:{ka:"მექსიკური კარტოფილი",en:"Mexican Potatoes"},
          desc:{ka:"ოდნავ ცხარე, სოუსთან ერთად",en:"Slightly spicy, comes with sauce"},
          price:"8",  popular:true, type:"side" },

        { img:"img/nuggets_6.jpg", name:{ka:"ქათმის ნაგეტსები (6ც)",en:"Chicken Nuggets (6pcs)"},
          desc:{ka:"ხრაშუნა ნაგეტსები 6 ცალი",en:"Crispy nuggets 6 pieces"},
          price:"8",  popular:false, type:"side" },

        { img:"img/nuggets_9.jpg", name:{ka:"ქათმის ნაგეტსები (9ც)",en:"Chicken Nuggets (9pcs)"},
          desc:{ka:"ხრაშუნა ნაგეტსები 9 ცალი",en:"Crispy nuggets 9 pieces"},
          price:"11",  popular:true, type:"side" },

        { img:"img/onion_rings.jpg", name:{ka:"ხახვის რგოლები",en:"Onion Rings"},
          desc:{ka:"შემწვარი ხახვის რგოლები სოუსით",en:"Fried onion rings with sauce"},
          price:"6",  popular:false, type:"side" }
      ]
    },
    {
      id: "drinks",
      name:  { ka: "სასმელები", en: "Drinks" },
      emoji: "🥤",
      catImg: "img/cat_drinks.jpg",
      items: [
        { img:"img/coke.jpg", name:{ka:"კოკა-კოლა 0.33ლ",en:"Coca-Cola 0.33L"},
          desc:{ka:"ქილის",en:"Can"},
          price:"3",  popular:true, type:"drink" },
          
        { img:"img/fanta.jpg", name:{ka:"ფანტა 0.33ლ",en:"Fanta 0.33L"},
          desc:{ka:"ქილის",en:"Can"},
          price:"3",  popular:false, type:"drink" },
          
        { img:"img/ayran.jpg", name:{ka:"აირანი",en:"Ayran"},
          desc:{ka:"ტრადიციული ცივი აირანი",en:"Traditional cold ayran"},
          price:"3.5",  popular:true, type:"drink" },

        { img:"img/water.jpg", name:{ka:"წყალი ბაკურიანი",en:"Water Bakuriani"},
          desc:{ka:"0.5ლ",en:"0.5L"},
          price:"1.5",  popular:false, type:"drink" },

        { img:"img/beer_natakhtari.jpg", name:{ka:"ლუდი ნატახტარი",en:"Beer Natakhtari"},
          desc:{ka:"0.5ლ",en:"0.5L"},
          price:"4.5",  popular:true, type:"drink" },

        { img:"img/redbull.jpg", name:{ka:"რედ ბული",en:"Red Bull"},
          desc:{ka:"ენერგეტიკული სასმელი",en:"Energy drink"},
          price:"7",  popular:false, type:"drink" }
      ]
    },
    {
      id: "extras_sauces",
      name:  { ka: "სოუსები", en: "Extra Sauces" },
      emoji: "🥫",
      catImg: "img/cat_sauces.jpg",
      items: [
        { img:"img/sauce_garlic.jpg", name:{ka:"ნივრის სოუსი",en:"Garlic Sauce"},
          desc:{ka:"საფირმო ნივრის სოუსი",en:"Signature garlic sauce"},
          price:"1.5",  popular:true, type:"side" },

        { img:"img/sauce_mexican.jpg", name:{ka:"მექსიკური სოუსი",en:"Mexican Sauce"},
          desc:{ka:"ცხარე სოუსი",en:"Spicy sauce"},
          price:"1.5",  popular:true, type:"side" },

        { img:"img/sauce_ketchup.jpg", name:{ka:"კეტჩუპი",en:"Ketchup"},
          desc:{ka:"ტკბილი კეტჩუპი",en:"Sweet ketchup"},
          price:"1",  popular:false, type:"side" }
      ]
    }
  ]
};