// ══════════════════════════════════════════════════
// ზოდიაქო — მონაცემები
// სურათების ჩასმა: null-ის ნაცვლად დაწერეთ
//   'img/zodiako-cover.jpg'  ← ფოლდერი restaurants/zodiako/img/
//   ან სრული URL
// ══════════════════════════════════════════════════
const RESTAURANT = {
  name:  { ka: "see360",              en: "see360"          },
  emoji: "🍽️",
  cuisine:{ ka:"ქართული სამზარეულო",  en:"Georgian Cuisine"  },
  cuisineTag: "georgian",
  rating: 4.8,  reviewCount: 312,
  email:  "info@tbilisee.ge",
  phone:  "+995 596 46 04 04",
  serviceCharge: 10,   // ← ეს ჩაამატე (0 თუ არ გინდა)
  description: {
    ka: "რესტორანი სახურავზე ძველი თბილისის ულამაზესი ხედებით და ცოცხალი მუსიკით ყოველ შაბათ-კვირას, გემრიელი კერძები ტრადიციული ქართული და თანამედროვე ევროპული სამზარეულოს შერწყმით. უფასო პარკინგი ძველი თბილისის გულში.",
    en: "Rooftop restaurant with Beautiful views of Old Tbilisi and live music every weekend, Delicious Dishes connection of Traditional Georgian With modern European Kitchen. Free parking in the heart of old Tbilisi"
  },
  founded: "2018",
  slug: "see360",

  // ── HERO PHOTO ─────────────────────────────────
  // ✏️  ჩასვით: heroImg: 'img/hero.jpg'
  heroImg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/c3/b2/75/restaurant-see360.jpg?w=900&h=500&s=1",

  // ── BRANCHES ───────────────────────────────────
  branches: [
    {
      id: "see360",
      name:    { ka: "see360",       en: "see360"      },
      address: { ka: "24 ბეთლემის ქუჩა, თბილისი", en: "24 Bethlehem Street, Tbilisi" },
      lat: 41.7225, lng: 44.7580,
      phone: "+995 596 46 04 04",
      hours: { ka: "ორ–პარ: 13:00–01:00  |  შ–კვ: 13:00–01:00",
               en: "Mon–Fri: 13:00–01:00  |  Sat–Sun: 13:00–01:00" },
      status: "open"
    },
  ],

  // ── GALLERY ────────────────────────────────────
  // ✏️  ჩასვით: img: 'img/gallery-1.jpg'
  gallery: [
    { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/40/73/6f/caption.jpg?w=400&h=-1&s=1", emoji: "🏛️", label: { ka: "ინტერიერი",   en: "Interior"   } },
    { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/7e/3c/15/cheese-cake.jpg?w=1000&h=-1&s=1", emoji: "🥟", label: { ka: "",     en: ""   } },
    { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/c3/d3/73/set-of-best-dishes.jpg?w=1000&h=-1&s=1", emoji: "🍲", label: { ka: "",   en: ""} },
    { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/06/30/5f/georgian-traditional.jpg?w=1000&h=-1&s=1", emoji: "🍷", label: { ka: "",        en: ""        } },
    { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/3a/77/69/chocolate-brownie.jpg?w=1000&h=-1&s=1", emoji: "🌿", label: { ka: "",       en: ""     } },
    { img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/eb/74/8f/green-salad-with-kiwi.jpg?w=1000&h=-1&s=1", emoji: "🍮", label: { ka: "",      en: ""     } },
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
    facebook:  "https://www.facebook.com/See360TbiliSee",
    instagram: "https://www.instagram.com/see360_restaurant/",
    tiktok:    ""
  },

  // ── MENU ───────────────────────────────────────
  menu: [
    
    {
      id: "xemsi",
      name:  { ka: "ხემსი", en: "Khemsi" },
      emoji: "🥗",
      catImg: "https://imageproxy.wolt.com/assets/6917189e2d5740aaaa5a4406?w=600",
      items: [
        { img:"https://imageproxy.wolt.com/assets/690f355d8921522163250dea?w=600", 
          name:{ka:"იმერული ფხალის დაფა მჭადით",en:"Imeretian Pkhali board with mchadi"},
          desc:{ka:"",en:""},
          price:"34" + " ₾",  popular:false,
          variants: [
    { label:{ka:"პატარა",    en:"Small"},   price:"12 ₾" },
    { label:{ka:"დიდი",      en:"Large"},   price:"16 ₾" },
  ] 
        },

        { img:"https://imageproxy.wolt.com/assets/67ffcc9b7286fc0e77523792?w=600", 
          name:{ka:"ნიგვზიანი ბადრიჯნის ხვეულა არაჟნის კრემით",en:"Walnut eggplant rolls with sour cream"},
          desc:{ka:"",en:""},
          price:"26" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffccf47286fc0e77523798?w=600", 
          name:{ka:"იმერული ბაჟე (ტრადიციული ქართული ნიგვზის სოუსი სანელებლებით) ქათმის მკერდით",en:"Imeretian Baje (traditional Georgian walnut sauce with spices) with chicken breast"},
          desc:{ka:"",en:""},
          price:"34" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffcd0cad8c24afb1ee2939?w=600", 
          name:{ka:"იმერული ბაჟე (ტრადიციული ქართული ნიგვზის სოუსი სანელებლებით) ხრაშუნა ბადრიჯნით",en:"Imeretian Baje (traditional Georgian walnut sauce with spices) with crispy eggplant"},
          desc:{ka:"",en:""},
          price:"28" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffcf53ad8c24afb1ee2953?w=600",
          name:{ka:"აჯაფსანდალი ხრაშუნა ბადრიჯნით (ბადრიჯნითა და ბოსტნეულით მომზადებული ქართული რაგუ",en:"Ajapsandali with crispy eggplant (Georgian ragout made with eggplant and vegetables)"},
          desc:{ka:"",en:""},
          price:"28" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffcc067286fc0e7752377d?w=600", 
          name:{ka:"მეგრული გებჟალია მაწვნის სოუსით, წიწაკისა და ქინძის ზეთით",en:"Megrelian Gebzhalia with sour cream sauce, pepper and coriander oil"},
          desc:{ka:"",en:""},
          price:"34" + " ₾",  popular:false },

        { img:"", 
          name:{ka:"თუშური გუდის ყველის მუსი პომიდვრით და მჭადის ჩიფსით",en:"Tushur Goudi cheese mousse with tomatoes and Mchadi chips"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/690f353269fd93f045fb9d5a?w=600", 
          name:{ka:"კახური ხრაშუნა კალმახა სოკო მდოგვით თაფლით და პიტნის სოუსით",en:"Kakhetian crispy trout with mushrooms, honey mustard and mint sauce"},
          desc:{ka:"",en:""},
          price:"32" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/690f351c69fd93f045fb9d56?w=600", 
          name:{ka:"ვიტელო ტონატო, ხბოს ფილე ცივად თინუსის სოუსით პარმეზანის ჩიფსით და ხახვის მარინა",en:"Vitello Tonnato, veal fillet cold with tuna sauce, parmesan chips and onion marinade"},
          desc:{ka:"",en:""},
          price:"34" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/6917189e2d5740aaaa5a4406?w=600", 
          name:{ka:"სულგუნის და კარტოფილის კროკეტი ტრიუფელის სოუსით",en:"Sulguni and potato croquettes with truffle sauce"},
          desc:{ka:"",en:""},
          price:"29" + " ₾",  popular:false },
      ]
    },
    

    {
      id: "salad",
      name:  { ka: "სალათები", en: "Salads" },
      emoji: "🥗",
      catImg: "https://imageproxy.wolt.com/assets/67ffce147bf5f39cca8f7413?w=600",
      items: [
        { img:"https://imageproxy.wolt.com/assets/67ffcd7f7286fc0e7752379b?w=600", 
          name:{ka:"მეგრული ნადუღის სალათი , თხილეულით და მწვანილების ბალიშით",en:"Mingrelian noodle salad with nuts and a pillow of herbs"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffcdd77286fc0e7752379f?w=600", 
          name:{ka:"ქართული კიტრი პომიდვრის სალათი ნიგვზით",en:"Georgian cucumber tomato salad with walnuts"},
          desc:{ka:"",en:""},
          price:"29" + " ₾",  popular:true },

        { img:"https://imageproxy.wolt.com/assets/67ffcd9b7286fc0e7752379e?w=600", 
          name:{ka:"გრილზე შემწვარი ქათმის მკერდის სალათი",en:"Grilled chicken breast salad"},
          desc:{ka:"",en:""},
          price:"34" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffcdf17bf5f39cca8f7411?w=600", 
          name:{ka:"სტრაჩატელას და პომიდვრის სალათი ქინოასა და პესტოს სოუსით",en:"Stracciatella and tomato salad with quinoa and pesto sauce"},
          desc:{ka:"",en:""},
          price:"33" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffce147bf5f39cca8f7413?w=600", 
          name:{ka:"შავი ზღვის ორაგულის სალათი , ციტრუსით და ფოთლოვანი ბოსტნეულით",en:"Black Sea salmon salad with citrus and leafy vegetables"},
          desc:{ka:"",en:""},
          price:"38" + " ₾",  popular:false },
      ]
    },

    {
      id: "soups",
      name:  { ka: "წვნიანი", en: "Soups" },
      emoji: "🍽️",
      catImg: "https://imageproxy.wolt.com/assets/67ffce317bf5f39cca8f7414?w=600",
      items: [
        { img:"https://imageproxy.wolt.com/assets/67ffce317bf5f39cca8f7414?w=600", 
          name:{ka:"კავკასიური სუპ-ხარჩო",en:"Caucasian soup-stew"},
          desc:{ka:"",en:""},
          price:"25" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffce5e7bf5f39cca8f7418?w=600", 
          name:{ka:"ჩიხირთმა",en:"Chikhirtma"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },

        { img:"", 
          name:{ka:"სოკოს კრემ სუპი",en:"Cream of mushroom soup"},
          desc:{ka:"",en:""},
          price:"21" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/690f34fe69fd93f045fb9d4c?w=600", 
          name:{ka:"ბუიაბესი ,ზღვის პროდუქტების წვნიანი",en:"Bouillabaisse, seafood soup"},
          desc:{ka:"",en:""},
          price:"28" + " ₾",  popular:false },
      ]
    },


    {
      id: "main dishes",
      name:  { ka: "მთავარი კერძები", en: "Main Dishes" },
      emoji: "🍽️",
      catImg: "https://imageproxy.wolt.com/assets/67ffcedb7286fc0e775237a8?w=600",
      items: [
        { img:"https://imageproxy.wolt.com/assets/67ffcedb7286fc0e775237a8?w=600", 
          name:{ka:"რაჭული შქმერული",en:"Rachuli Shkmeruli"},
          desc:{ka:"ძვალგამოცლილი თეძო ბარკლით და გამომცხვარი ნივრით",en:"Boneless thigh with barley and baked garlic"},
          price:"43" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffcfd6ad8c24afb1ee295e?w=600", 
          name:{ka:"შავი ზღვის ორაგულის სტეიკი",en:"Black Sea Salmon Steak"},
          desc:{ka:"ქინძმრის სოუსითა და ქოქოსის ბრინჯით",en:"With coriander sauce and coconut rice"},
          price:"58" + " ₾",  popular:false },

        { img:"", 
          name:{ka:"სიბასის ფილე",en:"Seabass fillet"},
          desc:{ka:"ბარდით, თეთრი ღვინისა და კარაქის სოუსით",en:"With peas, white wine and butter sauce"},
          price:"54" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffd0117bf5f39cca8f742d?w=600", 
          name:{ka:"ქართული საქონლის სუკის სტეიკი",en:"Georgian beef steak"},
          desc:{ka:"ქონდრიანი კარტოფილით და პილპილის სოუსით 250 გრ",en:""},
          price:"69" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/690f34f269fd93f045fb9d4a?w=600", 
          name:{ka:"ღორის მწვადი ოჯახურად",en:"Family-style pork barbecue"},
          desc:{ka:"ხრაშუნა კარტოფილით და ტყემლის სოუსით",en:"With crispy potatoes and tkemli sauce"},
          price:"46" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/690f34f969fd93f045fb9d4b?w=600", 
          name:{ka:"ქათმის მწვადი ოჯახურად",en:"Family-style chicken barbecue"},
          desc:{ka:"ხრაშუნა კარტოფილით, ჩიმი ჩურის სოუსით და ტყემლის სოუსით",en:"With crispy potatoes, chimi chur sauce and tkemli sauce"},
          price:"39" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/691718962d5740aaaa5a4401?w=600", 
          name:{ka:"კახური ხბოს ჩაშუშული",en:"Kakhetian veal stew"},
          desc:{ka:"წითელ ღვინოში, კარტოფილის პიურეს ბალიშზე",en:"In red wine, on a pillow of mashed potatoes"},
          price:"43" + " ₾",  popular:true },

        { img:"https://imageproxy.wolt.com/assets/6917188e2d5740aaaa5a43fd?w=600", 
          name:{ka:"კარაქში მობრაწული ყვავილოვანი კომბოსტო",en:"Cauliflower fried in butter"},
          desc:{ka:"ტრიუფელისა და ნაღების სოუსით",en:"With truffle and cream sauce"},
          price:"32" + " ₾",  popular:false },
      ]
    },


        {
      id: "baked",
      name:  { ka: "ცომეული", en: "Baked" },
      emoji: "",
      catImg: "https://imageproxy.wolt.com/assets/67ffd0767bf5f39cca8f7439?w=600",
      items: [
        { img:"https://imageproxy.wolt.com/assets/67ffd0767bf5f39cca8f7439?w=600", 
          name:{ka:"იმერული ხაჭაპური",en:"Imeretian Khachapuri"},
          desc:{ka:"",en:""},
          price:"29" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffd0937bf5f39cca8f743d?w=600", 
          name:{ka:"ფენოვანი ხაჭაპური პიტნით",en:"Layered khachapuri with mint"},
          desc:{ka:"",en:""},
          price:"29" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffd0ae7bf5f39cca8f7443?w=600", 
          name:{ka:"რაჭული ლობიანი",en:"Rachuli Lobiani"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },
      ]
    },


        {
      id: "desserts",
      name:  { ka: "დესერტები", en: "Desserts" },
      emoji: "",
      catImg: "https://imageproxy.wolt.com/assets/67ffd11e7bf5f39cca8f744a?w=600",
      items: [
        { img:"https://imageproxy.wolt.com/assets/67ffd0e87286fc0e775237c1?w=600", 
          name:{ka:"მარწყვის პანაკოტა",en:"Strawberry panna cotta"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffd1057286fc0e775237c2?w=600", 
          name:{ka:"ბასკური ჩიზქეიქი",en:"Basque cheesecake"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/67ffd11e7bf5f39cca8f744a?w=600", 
          name:{ka:"ნამცხვარი შოკოლადის მუსით და ალუბლის კონფიწურით",en:"Cake with chocolate mousse and cherry jam"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },

        { img:"https://imageproxy.wolt.com/assets/691718a897dc9b47c093dd38?w=600", 
          name:{ka:"ტირამისუ",en:"Tiramisu"},
          desc:{ka:"",en:""},
          price:"24" + " ₾",  popular:false },
      ]
    },

  ]
};
