// სუში ზოკი — მონაცემები
// სურათების ჩასმა: null → 'img/filename.jpg'
const RESTAURANT = {
  name:    { ka: "სუში ზონა", en: "Sushi Zone" },
  Image:   "https://hotsale.ge/files/offers/aqciebi/kveba/oishi/43.jpg",
  cuisine: { ka: "აზიური სამზარეულო", en: "Asian Cuisine" },
  cuisineTag: "asian",
  rating: 4.7, reviewCount: 528,
  email:  "sushizone@restaurant.ge",
  phone:  "032 205 11 11",
  description: {
    ka: "სუში ზონა = თბილისის საუკეთესო აზიური რესტორანი. ყველა კერძი ასახავს ავთენტურ იაპონურ ტრადიციას.",
    en: "Sushi Zone is Tbilisi's finest Asian restaurant. Every dish reflects authentic Japanese tradition."
  },
  founded: "2020", slug: "sushi-zone", badge: null,
  heroImg: "https://hotsale.ge/files/offers/aqciebi/kveba/oishi/43.jpg",
  branches: [
    { id:"sushi-main",
      name:    { ka:"სუში ზონა — მთავარი", en:"Sushi Zone — Main"  },
      address: { ka:" კეთევან წამებულის გამზირი. 65", en:"K. Tsamebuli Ave. 65" },
      lat:41.6938, lng:44.8015, phone:"032 205 11 11",
      hours:{ ka:"ყოველფდღე: 06:00–24:00", en:"Daily: 06:00–24:00" }, status:"open" },
    { id:"sushi-vake",
      name:    { ka:"სუში ზონა — ვაკე", en:"Sushi Zone — Vake" },
      address: { ka:"ჭავჭავაძის გამზირი. 22", en:"Chavchavadze Ave. 22" },
      lat:41.7210, lng:44.7520, phone:"032 205 12 12",
      hours:{ ka:"ყოველფდღე: 11:00–23:30", en:"Daily: 11:00–23:30" }, status:"open" }
  ],
  gallery: [
    {img:"https://hotsale.ge/files/offers/aqciebi/kveba/oishi/43.jpg",emoji:"🍱",label:{ka:"სუში სეთი",en:"Sushi Set"}},
    {img:null,emoji:"🍣",label:{ka:"ნიგირი",en:"Nigiri"}},
    {img:null,emoji:"🍜",label:{ka:"რამენი",en:"Ramen"}},
    {img:null,emoji:"🫛",label:{ka:"ედამამე",en:"Edamame"}},
    {img:null,emoji:"🏮",label:{ka:"ინტერიერი",en:"Interior"}},
    {img:null,emoji:"🍶",label:{ka:"საკე ბარი",en:"Sake Bar"}}
  ],
  features: [
    {icon:"🚀",ka:"კურიერი",en:"Delivery"},
    {icon:"🐟",ka:"ახალი თევზი",en:"Fresh Fish Daily"},
    {icon:"🍶",ka:"საკე ბარი",en:"Sake Bar"},
    {icon:"🌿",ka:"ვეგანი ვარიანტები",en:"Vegan Options"},
    {icon:"🅿️",ka:"პარკინგი",en:"Parking"},
    {icon:"🎎",ka:"იაპონური სტილი",en:"Japanese Style"}
  ],
  socials: { facebook:"https://facebook.com/sushizone", instagram:"https://instagram.com/sushizone.ge", tiktok:"" },

  menu: [
    {
      id: "rolls",
      name:  { ka: "სუში & როლები", en: "Sushi & Rolls" },
      emoji: "🍣",
      catImg: "/assets/sushi.png",
      items: [
        { img:"/assets/philadelphia.png", name:{ka:"ფილადელფია",en:"Philadelphia"},
          desc:{ka:"ორაგული, კრემის ყველი, კიტრი",en:"Salmon, cream cheese, cucumber"},
          price:"24",  popular:true, type:"main" },
        
        { img:"/assets/dragon.png", name:{ka:"დრაგონ ფლაი",en:"Dragon Fly"},
          desc:{ka:"ცხარე ტუნა, ტობიკო, ავოკადო",en:"Spicy tuna, tobiko, avocado"},
          price:"32",  popular:true, type:"main" },

        { img:"/assets/california.png", name:{ka:"კალიფორნია",en:"California"},
          desc:{ka:"კიბორჩალა, ავოკადო, კიტრი",en:"Crab, avocado, cucumber"},
          price:"20",  popular:false, type:"main" },

        { img:"/assets/mango.png", name:{ka:"ცხარე მანგო",en:"Spicy Mango"},
          desc:{ka:"მანგო, ცხარე მაიო, კრევეტი",en:"Mango, spicy mayo, shrimp"},
          price:"28",  popular:true, type:"main" },

        { img:"/assets/tempura_roll.png", name:{ka:"ტემპურა შრიმპ როლი",en:"Tempura Shrimp Roll"},
          desc:{ka:"შემწვარი კრევეტი ტემპურაში, ტერიაკი სოუსი",en:"Fried shrimp in tempura, teriyaki sauce"},
          price:"29",  popular:true, type:"main" },

        { img:"/assets/alaska.png", name:{ka:"ალასკა როლი",en:"Alaska Roll"},
          desc:{ka:"შებოლილი ორაგული, ასპარაგუსი, ყველი",en:"Smoked salmon, asparagus, cheese"},
          price:"26",  popular:false, type:"main" },

        { img:"/assets/veggie.png", name:{ka:"ვეგანური როლი",en:"Vegan Roll"},
          desc:{ka:"კიტრი, სტაფილო, ბულგარული წიწაკა",en:"Cucumber, carrot, bell pepper"},
          price:"16",  popular:false, type:"main" },

        { img:"/assets/spider.png", name:{ka:"სპაიდერ როლი",en:"Spider Roll"},
          desc:{ka:"რბილი კიბორჩალა, მასაგო, კიტრის სოუსი",en:"Soft shell crab, masago, cucumber sauce"},
          price:"34",  popular:true, type:"main" }
      ]
    },
    {
      id: "sashimi",
      name:  { ka: "საშიმი და ნიგირი", en: "Sashimi & Nigiri" },
      emoji: "🐟",
      catImg: "/assets/sashimi.png",
      items: [
        { img:"/assets/tuna_sashimi.png", name:{ka:"ტუნას სეტი",en:"Tuna Set"},
          desc:{ka:"5ც, პრემიუმ ბლუფინი",en:"5 pcs, premium bluefin"},
          price:"35",  popular:true, type:"side" },

        { img:"/assets/salmon_sashimi.png", name:{ka:"ორაგულის სეტი",en:"Salmon Set"},
          desc:{ka:"5ც, ატლანტიკური ორაგული",en:"5 pcs, atlantic salmon"},
          price:"30",  popular:false, type:"side" },

        { img:"/assets/mix_sashimi.png", name:{ka:"მიქსი სეტი",en:"Mix Set"},
          desc:{ka:"10ც, შეფის არჩევანი",en:"10 pcs, chef selection"},
          price:"55",  popular:false, type:"side" },

        { img:"/assets/eel_nigiri.png", name:{ka:"გველთევზას ნიგირი",en:"Eel Nigiri"},
          desc:{ka:"2ც, ტკბილი უნაგი სოუსით",en:"2 pcs, with sweet unagi sauce"},
          price:"18",  popular:true, type:"side" },

        { img:"/assets/scallop.png", name:{ka:"სკალოპის საშიმი",en:"Scallop Sashimi"},
          desc:{ka:"3ც, ახალი ზღვის სკალოპი",en:"3 pcs, fresh scallop"},
          price:"25",  popular:false, type:"side" }
      ]
    },
    {
      id: "ramen_noodles",
      name:  { ka: "ნუდლსი და რამენი", en: "Noodles & Ramen" },
      emoji: "🍜",
      catImg: "/assets/ramen.png",
      items: [
        { img:"/assets/tonkotsu.png", name:{ka:"ტონკოცუ რამენი",en:"Tonkotsu Ramen"},
          desc:{ka:"ღორის მდიდარი ბულიონი, კვერცხი, ნორი",en:"Rich pork broth, soft egg, nori"},
          price:"26",  popular:true, type:"main" },
          
        { img:"/assets/miso.png", name:{ka:"მისო რამენი",en:"Miso Ramen"},
          desc:{ka:"მსუბუქი ბულიონი, ტოფუ, ბამბუკი",en:"Light broth, tofu, bamboo shoots"},
          price:"22",  popular:false, type:"main" },

        { img:"/assets/shoyu.png", name:{ka:"შოიუ რამენი",en:"Shoyu Ramen"},
          desc:{ka:"სოიოს სოუსის ბაზა, ქათამი, მწვანე ხახვი",en:"Soy sauce base, chicken, green onion"},
          price:"24",  popular:true, type:"main" },

        { img:"/assets/udon.png", name:{ka:"ზღვის პროდუქტების უდონი",en:"Seafood Udon"},
          desc:{ka:"სქელი ნუდლსი, კრევეტები, მიდიები, კალმარი",en:"Thick noodles, shrimps, mussels, squid"},
          price:"32",  popular:true, type:"main" },

        { img:"/assets/yakisoba.png", name:{ka:"იაკისობა ქათმით",en:"Chicken Yakisoba"},
          desc:{ka:"ტაფაზე შემწვარი ნუდლსი, ბოსტნეული",en:"Stir-fried noodles, vegetables"},
          price:"21",  popular:false, type:"main" }
      ]
    },
    {
      id: "starters",
      name:  { ka: "სტარტერები", en: "Starters" },
      emoji: "🥟",
      catImg: "/assets/starters.png",
      items: [
        { img:"/assets/edamame.png", name:{ka:"ედამამე",en:"Edamame"},
          desc:{ka:"მოხარშული სოიოს მარცვლები ზღვის მარილით",en:"Boiled soy beans with sea salt"},
          price:"8",  popular:false, type:"side" },
          
        { img:"/assets/spring_rolls.png", name:{ka:"სპრინგ როლები",en:"Spring Rolls"},
          desc:{ka:"ბოსტნეულით და ტკბილი ჩილი სოუსით",en:"Vegetables with sweet chili sauce"},
          price:"10",  popular:true, type:"side" },

        { img:"/assets/gyoza.png", name:{ka:"ღორის გიოზა",en:"Pork Gyoza"},
          desc:{ka:"ტაფაზე შემწვარი იაპონური პელმენი 5ც",en:"Pan-fried japanese dumplings 5pcs"},
          price:"14",  popular:true, type:"side" },

        { img:"/assets/wakame.png", name:{ka:"ვაკამეს სალათი",en:"Wakame Salad"},
          desc:{ka:"ზღვის მცენარეების სალათი სეზამის მარცვლებით",en:"Seaweed salad with sesame"},
          price:"12",  popular:false, type:"side" },

        { img:"/assets/karaage.png", name:{ka:"კარააგე",en:"Karaage"},
          desc:{ka:"იაპონური სტილით ხრაშუნად შემწვარი ქათამი",en:"Japanese style crispy fried chicken"},
          price:"16",  popular:true, type:"side" },

        { img:"/assets/misosoup.png", name:{ka:"მისოს წვნიანი",en:"Miso Soup"},
          desc:{ka:"კლასიკური წვნიანი ტოფუთი და ზღვის მცენარეებით",en:"Classic soup with tofu and seaweed"},
          price:"7",  popular:false, type:"side" }
      ]
    },
    {
      id: "drinks",
      name:  { ka: "სასმელები", en: "Drinks" },
      emoji: "🍶",
      catImg: "/assets/drinks.png",
      items: [
        { img:"/assets/sake.png", name:{ka:"საკე ცხელი",en:"Hot Sake"},
          desc:{ka:"ბრინჯის ღვინო, 150მლ",en:"Rice wine, 150ml"},
          price:"14",  popular:false, type:"drink" },
          
        { img:"/assets/matcha.png", name:{ka:"მატჩა ლატე",en:"Matcha Latte"},
          desc:{ka:"ცერემონიალ ხარისხის მატჩა",en:"Ceremonial grade matcha"},
          price:"10",  popular:true, type:"drink" },
          
        { img:"/assets/lemonade.png", name:{ka:"იუზუ ლიმონათი",en:"Yuzu Lemonade"},
          desc:{ka:"ახალი ციტრუსი, გაზიანი",en:"Fresh citrus, sparkling"},
          price:"8",  popular:false, type:"drink" },

        { img:"/assets/umeshu.png", name:{ka:"უმეშუ",en:"Umeshu"},
          desc:{ka:"იაპონური ტკბილი ქლიავის ღვინო",en:"Japanese sweet plum wine"},
          price:"16",  popular:true, type:"drink" },

        { img:"/assets/asahi.png", name:{ka:"ასაჰი (ლუდი)",en:"Asahi Beer"},
          desc:{ka:"იაპონური პრემიუმ ლუდი 0.33ლ",en:"Japanese premium beer 0.33L"},
          price:"9",  popular:true, type:"drink" },

        { img:"/assets/coke.png", name:{ka:"კოკა-კოლა",en:"Coca-Cola"},
          desc:{ka:"0.33ლ ქილა",en:"0.33L can"},
          price:"4",  popular:false, type:"drink" }
      ]
    },
    {
      id: "desserts",
      name:  { ka: "დესერტი", en: "Desserts" },
      emoji: "🍡",
      catImg: "/assets/desserts.png",
      items: [
        { img:"/assets/mochi.png", name:{ka:"მოჩი ნაყინით",en:"Mochi Ice Cream"},
          desc:{ka:"3ც (ვანილი, შოკოლადი, მატჩა)",en:"3pcs (vanilla, chocolate, matcha)"},
          price:"12",  popular:true, type:"side" },

        { img:"/assets/matcha_cake.png", name:{ka:"მატჩას ჩიზქეიქი",en:"Matcha Cheesecake"},
          desc:{ka:"ნაღების ყველი მწვანე ჩაით",en:"Cream cheese with green tea"},
          price:"15",  popular:false, type:"side" },

        { img:"/assets/taiyaki.png", name:{ka:"ტაიაკი",en:"Taiyaki"},
          desc:{ka:"თევზის ფორმის ნამცხვარი წითელი ლობიოს შიგთავსით",en:"Fish-shaped cake with red bean paste"},
          price:"11",  popular:true, type:"side" }
      ]
    }
  ]
};