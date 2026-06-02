// ══════════════════════════════════════════════════
// ამო რამე • ბანი — მონაცემები
// ══════════════════════════════════════════════════
const RESTAURANT = {
  name:  { ka: "ამო რამე • ბანი",      en: "Amo Rame • Bani"      },
  emoji: "🥟",
  cuisine:{ ka:"ქართული სამზარეულო",  en:"Georgian Cuisine"  },
  cuisineTag: "georgian",
  rating: 4.5,  
  reviewCount: 310,
  email:  "info@amorame.ge",
  phone:  "+995 595 99 94 44",
  description: {
    ka: "ამო რამე ბანი არის გამორჩეული ქართული რესტორანი თბილისში, რომელიც ცნობილია ტრადიციული სამზარეულოთი, მყუდრო გარემოთი, დიდი ფანჯრებითა და ულამაზესი ტერასით.",
    en: "Amo Rame Bani is a standout Georgian restaurant in Tbilisi, known for its traditional cuisine, cozy atmosphere, large windows, and a beautiful terrace."
  },
  founded: "2018",
  slug: "amo_rame",

  heroImg: "https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/475775960_1117622576821472_8426717756544284625_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=UDTshkh0XwoQ7kNvwGMVIY4&_nc_oc=AdoJ4r-cxm1Fn2bCjSGM4XAHQOybsF7rpiMiiKbi5a5omCryMFDiwl49jbwadB8cGNI&_nc_zt=23&_nc_ht=scontent.ftbs4-2.fna&_nc_gid=qYPApUX8a4U-h3EAKoFM4w&_nc_ss=7b2a8&oh=00_Af_3B9elHwb6m16lZJYJjfksb2-VRpaNWySW-8twzsiLSw&oe=6A247CBA",

  branches: [
    {
      id: "amo_rame",
      name:    { ka: "ამო რამე",       en: "Amo Rame"      },
      address: { ka: "68 დავით აღმაშენებლის გამზირი, თბილისი", en: "68 Davit Aghmashenebeli Avenue, Tbilisi" },
      lat: 41.70730966086753,  
      lng: 44.79877581319293,
      phone: "+995 595 99 94 44",
      hours: { ka: "ორშ–კვ: 12:00 – 00:00",
               en: "Mon–Sun: 12:00 – 00:00" },
      status: "open"
    },
  ],

  gallery: [
    { img: "", emoji: "🏛️", label: { ka: "",   en: ""   } },
    { img: "", emoji: "🥟", label: { ka: "",     en: ""   } },
    { img: "", emoji: "🍲", label: { ka: "",   en: ""} },
    { img: "", emoji: "🍷", label: { ka: "",        en: ""        } },
  ],

  features: [],

  socials: {
    facebook:  "",
    instagram: "",
    tiktok:    ""
  },

  menu: [
    {
      id: "salad",
      name: { ka: "სალათი", en: "Salad" },
      emoji: "🥗",
      catImg: "",
      items: [
        { img: "", name: { ka: "კიტრის და პომიდვრის სალათი", en: "Cucumber and tomato salad" }, desc: { ka: "", en: "" }, price: "19 ₾", popular: false },
        { img: "", name: { ka: "კიტრის და პომიდვრის სალათი ნიგვზით", en: "Cucumber and tomato salad with walnuts" }, desc: { ka: "", en: "" }, price: "21 ₾", popular: true },
        { img: "", name: { ka: "ქათმის სალათი", en: "Chicken salad" }, desc: { ka: "", en: "" }, price: "32 ₾", popular: false },
        { img: "", name: { ka: "საქონლის სუკის სალათი", en: "Salad with beef meet (Tenderloin)" }, desc: { ka: "", en: "" }, price: "37 ₾", popular: false },
        { img: "", name: { ka: "მწვანე სალათი", en: "Green salad" }, desc: { ka: "", en: "" }, price: "20 ₾", popular: false },
        { img: "", name: { ka: "ჭარხლის სალათი რუკოლას და ფისტას პესტოთი", en: "Beetroot salad with pistachio" }, desc: { ka: "", en: "" }, price: "27 ₾", popular: false },
        { img: "", name: { ka: "ორაგულის სალათი", en: "Salmon salad" }, desc: { ka: "", en: "" }, price: "37 ₾", popular: false },
        { img: "", name: { ka: "ბადრიჯნის სალათი, ჩერი პომიდვრითა და კიტრით.", en: "Eggplant, cucumber and tomato salad" }, desc: { ka: "", en: "" }, price: "21 ₾", popular: false }
      ]
    },
    {
      id: "starters",
      name: { ka: "წასახემსებელი", en: "Starters" },
      emoji: "🧆",
      catImg: "",
      items: [
        { img: "", name: { ka: "ქათმის ჩხირები", en: "Fried chicken fillet with sauce" }, desc: { ka: "", en: "" }, price: "22 ₾", popular: false },
        { img: "", name: { ka: "ჩვენი პური", en: "Our bread" }, desc: { ka: "", en: "" }, price: "6 ₾", popular: false },
        { img: "", name: { ka: "ჭვიშტარი", en: "Tchvishtari" }, desc: { ka: "", en: "" }, price: "18 ₾", popular: false },
        { img: "", name: { ka: "ქართული დაფა", en: "Georgian platter" }, desc: { ka: "", en: "" }, price: "65 ₾", popular: true },
        { img: "", name: { ka: "ფხალის დაფა", en: "Pkhali platter" }, desc: { ka: "", en: "" }, price: "30 ₾", popular: false },
        { img: "", name: { ka: "ყველის დაფა", en: "Cheese platter" }, desc: { ka: "", en: "" }, price: "35 ₾", popular: false },
        { img: "", name: { ka: "ქართული ყველის დაფა", en: "Georgian cheese platter" }, desc: { ka: "", en: "" }, price: "35 ₾", popular: false },
        { img: "", name: { ka: "ჰუმუსი", en: "Hummus" }, desc: { ka: "", en: "" }, price: "18 ₾", popular: false }
      ]
    },
    {
      id: "baked_goods",
      name: { ka: "ცომეული", en: "Baked goods" },
      emoji: "🫓",
      catImg: "",
      items: [
        { img: "", name: { ka: "ლობიანი", en: "Lobiani (with beans)" }, desc: { ka: "", en: "" }, price: "20 ₾", popular: false },
        { img: "", name: { ka: "ლაზური ხაჭაპური", en: "Khachapuri Lazuri" }, desc: { ka: "", en: "" }, price: "25 ₾", popular: false },
        { img: "", name: { ka: "ჭახრაკინა", en: "Chakhrakina" }, desc: { ka: "", en: "" }, price: "26 ₾", popular: false }
      ]
    },
    {
      id: "khinkali",
      name: { ka: "ხინკალი", en: "Khinkali" },
      emoji: "🥟",
      catImg: "",
      items: [
        { img: "", name: { ka: "ხინკალი კარტოფილის", en: "Khinkali with Potato" }, desc: { ka: "", en: "" }, price: "1.8 ₾", popular: false },
        { img: "", name: { ka: "ხინკალი ხაჭოსი", en: "Khinkali with cottage cheese" }, desc: { ka: "", en: "" }, price: "2.2 ₾", popular: false },
        { img: "", name: { ka: "ხინკალი საქონლის ხორცის", en: "Khinkali with beef meet" }, desc: { ka: "", en: "" }, price: "2.7 ₾", popular: true }
      ]
    },
    {
      id: "soup",
      name: { ka: "წვნიანი", en: "Soup" },
      emoji: "🥣",
      catImg: "",
      items: [
        { img: "", name: { ka: "ოსპის წვნიანი", en: "Lentils soup" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "მაწვნის შეჭამანდი", en: "Matsoni soup" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "ჩიხირთმა", en: "Chikhirtma (Chicken soup)" }, desc: { ka: "", en: "" }, price: "18 ₾", popular: true },
        { img: "", name: { ka: "პომიდვრის წვნიანი", en: "Tomato soup" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false }
      ]
    },
    {
      id: "pasta_spaghetti",
      name: { ka: "პასტა/სპაგეტი", en: "Pasta/Spagetti" },
      emoji: "🍝",
      catImg: "",
      items: [
        { img: "", name: { ka: "პასტა ავოკადოთი", en: "Pasta with avocados" }, desc: { ka: "", en: "" }, price: "27 ₾", popular: false },
        { img: "", name: { ka: "კარბონარა", en: "Carbonara" }, desc: { ka: "", en: "" }, price: "30 ₾", popular: false },
        { img: "", name: { ka: "პენე პომიდვრის სოუსით", en: "Penne with tomato sauce" }, desc: { ka: "", en: "" }, price: "25 ₾", popular: false }
      ]
    },
    {
      id: "main_dishes",
      name: { ka: "მთავარი კერძი", en: "Main dishes" },
      emoji: "🥘",
      catImg: "",
      items: [
        { img: "", name: { ka: "ორაგულის ფილე ქინძმარში", en: "Salmon in vinegar sauce" }, desc: { ka: "", en: "" }, price: "56 ₾", popular: false },
        { img: "", name: { ka: "ქათმის მობრაწულა ტაშმიჯაბით", en: "Chicken fillet with Tashmidjabi" }, desc: { ka: "", en: "" }, price: "32 ₾", popular: false },
        { img: "", name: { ka: "ქათამი შქმერულად", en: "Chicken dish (Shkmeruli)" }, desc: { ka: "", en: "" }, price: "24 ₾", popular: true },
        { img: "", name: { ka: '"ღორმუცელა" ბარბექიუს სოუსით და ბოსტნეულის გარნირით', en: "Pork with barbecue sauce and garnish" }, desc: { ka: "", en: "" }, price: "38 ₾", popular: false },
        { img: "", name: { ka: "ხბოს ჩაქაფული", en: "Veal Chakapuli" }, desc: { ka: "", en: "" }, price: "42 ₾", popular: false },
        { img: "", name: { ka: "ხარჩო და ელარჯი", en: "Kharcho and Elarji (veal meat)" }, desc: { ka: "", en: "" }, price: "36 ₾", popular: true },
        { img: "", name: { ka: "ხის სოკო მაწვნის სოუსით", en: "Mushroom with matsoni sauce" }, desc: { ka: "", en: "" }, price: "21 ₾", popular: false },
        { img: "", name: { ka: "ლობიო ტარხუნით", en: "Beans with taragon" }, desc: { ka: "", en: "" }, price: "18 ₾", popular: false },
        { img: "", name: { ka: "საქონლის სუკი დამბალხაჭოს სოუსითა და ხის სოკოს გარნირით", en: "Beef tenderloin with dambalkhacho sauce" }, desc: { ka: "", en: "" }, price: "60 ₾", popular: false }
      ]
    },
    {
      id: "garnish",
      name: { ka: "გარნირი", en: "Garnish" },
      emoji: "🍟",
      catImg: "",
      items: [
        { img: "", name: { ka: "ახალი კარტოფილი ტყემლით", en: "New potatoes with Tkemali" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "ბოსტნეული გრილზე", en: "Grilled vegetables" }, desc: { ka: "", en: "" }, price: "23 ₾", popular: false },
        { img: "", name: { ka: "ფრი", en: "French fries" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: "კარტოფილის მობრაწულა", en: "Fried potatoes" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "ელარჯი", en: "Elarji" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false }
      ]
    },
    {
      id: "dessert",
      name: { ka: "დესერტი", en: "Dessert" },
      emoji: "🍰",
      catImg: "",
      items: [
        { img: "", name: { ka: "თავთუხის კორკოტი, ჭარხლის მურაბითა და ვანილის ნაყინით", en: "Georgian dessert with Georgia wheat, beetroot jam and ice cream" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "შოკოლადის ლავა", en: "Chocolate lava cake with icecream" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "ხრაშუნა ვაფლი, არაჟნის კრემით და ლიმონის მურაბით", en: "Waffle with cream cheese and citrus jam" }, desc: { ka: "", en: "" }, price: "17 ₾", popular: false },
        { img: "", name: { ka: "ქადა", en: "Qada (Georgian dessert)" }, desc: { ka: "", en: "" }, price: "16 ₾", popular: false },
        { img: "", name: { ka: "ჩიზქეიქი", en: "Cheese cake" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "შოკოლადის ტარტი ალუბლით", en: "Chocolate tart with cherries" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "მურაბა", en: "Jam" }, desc: { ka: "", en: "" }, price: "9 ₾", popular: false },
        { img: "", name: { ka: "თაფლი", en: "Honey" }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: "ფელამუში", en: "Phelamushi (grape juice dessert)" }, desc: { ka: "", en: "" }, price: "12 ₾", popular: false },
        { img: "", name: { ka: "ნაყინი", en: "Icecream" }, desc: { ka: "", en: "" }, price: "11 ₾", popular: false }
      ]
    },
    {
      id: "sauce",
      name: { ka: "სოუსები", en: "Sauce" },
      emoji: "🫙",
      catImg: "",
      items: [
        { img: "", name: { ka: "ტყემალი", en: "Tkemali" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false },
        { img: "", name: { ka: "ძმარი", en: "Vinegar" }, desc: { ka: "", en: "" }, price: "3 ₾", popular: false },
        { img: "", name: { ka: "კეტჩუპი", en: "Ketchup" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false },
        { img: "", name: { ka: "ერბო", en: "Melted butter" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "", name: { ka: "არაჟანი", en: "Sour cream" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false },
        { img: "", name: { ka: "აჯიკა", en: "Adjika" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false }
      ]
    },
    {
      id: "soft_drinks",
      name: { ka: "გამაგრილებელი სასმელი", en: "Soft drinks" },
      emoji: "🥤",
      catImg: "",
      items: [
        { img: "", name: { ka: 'ლიმონათი "ამო რამე" პიტნა ჭიქა', en: 'Lemonade "Amo Rame" mint (glass)' }, desc: { ka: "", en: "" }, price: "11 ₾", popular: false },
        { img: "", name: { ka: 'ლიმონათი "ამო რამე" კენკრა ჭიქა', en: 'Lemonade "Amo Rame" berries (Glass)' }, desc: { ka: "", en: "" }, price: "11 ₾", popular: false },
        { img: "", name: { ka: 'ლიმონათი "ამო რამე" პიტნა გრაფინი', en: 'Lemonade "Amo Rame" mint (1L)' }, desc: { ka: "", en: "" }, price: "22 ₾", popular: false },
        { img: "", name: { ka: 'ლიმონათი "ამო რამე" კენკრა გრაფინი', en: 'Lemonade "Amo rame" berries 1L' }, desc: { ka: "", en: "" }, price: "22 ₾", popular: false },
        { img: "", name: { ka: "წყალი ბაკურიანი", en: "Water" }, desc: { ka: "", en: "" }, price: "4 ₾", popular: false },
        { img: "", name: { ka: "ბორჯომი", en: "Borjomi, Water with gas" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "", name: { ka: 'ლიმონათი "გრძელიძე"', en: 'Lemonade "Grdzelidze"' }, desc: { ka: "შოკოლადი, ნაღები, ტარხუნა, ლიმონი, ყურძნის წვენი", en: "chocolate, cream, tarragon, lemon, grapejuice" }, price: "6 ₾", popular: false },
        { img: "", name: { ka: 'ლიმონათი "გრძელიძე" გრაფინი', en: 'Lemonade "Grdzelidze" 1L' }, desc: { ka: "შოკოლადი, ნაღები, ტარხუნა, ლიმონი, ყურძნის წვენი", en: "chocolate, cream, tarragon, lemon, grape juice" }, price: "24 ₾", popular: false },
        { img: "", name: { ka: "ნატურალური წვენი", en: "Natural juice" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "", name: { ka: "ნაბეღლავი", en: "Nabeglavi" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "", name: { ka: "კოკა-კოლა კლასიკი", en: "Coca-cola" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "", name: { ka: "კოკა-კოლა ზერო", en: "Coca-cola Zero" }, desc: { ka: "", en: "" }, price: "5 ₾", popular: false },
        { img: "", name: { ka: "რედბული", en: "Redbull" }, desc: { ka: "", en: "" }, price: "10 ₾", popular: false },
        { img: "", name: { ka: "მილქშეიკი", en: "Milkshake with chocolate, vanilla, berries." }, desc: { ka: "", en: "" }, price: "18 ₾", popular: false },
        { img: "", name: { ka: "ტონიკი", en: "Tonic water" }, desc: { ka: "", en: "" }, price: "6 ₾", popular: false }
      ]
    },
    {
      id: "beer",
      name: { ka: "ლუდი", en: "Beer" },
      emoji: "🍺",
      catImg: "",
      items: [
        { img: "", name: { ka: '"ზაქარა" - სიდრი (ვაშლი, ალუბალი)', en: '"Zakara" - Cider' }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "პაულანერი გაუფილტრავი (weisbier) 0.5ლ", en: "Paulaner Weissbier" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "პაულანერი გაფილტრული 0.5ლ", en: "Paulaner Helles" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "ლა ტრაპე 0.75ლ", en: "La Trappe 0.75" }, desc: { ka: "", en: "" }, price: "35 ₾", popular: false },
        { img: "", name: { ka: "ლა ტრაპე 0.33ლ", en: "La Trappe 0.33" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "ვაინშტეფანი (ჩამოსასხმელი)", en: "Weihenstephan" }, desc: { ka: "", en: "" }, price: "16 ₾", popular: false },
        { img: "", name: { ka: "ალხანაიძე ლაგერი (ჩამოსასხმელი)", en: "Alkhanaidze Lager" }, desc: { ka: "", en: "" }, price: "12 ₾", popular: false },
        { img: "", name: { ka: "შავი ლომი - IPA (ჩამოსასხმელი)", en: "Black lion IPA" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: "შავი ლომი - შავი", en: "Black Lion (Black)" }, desc: { ka: "", en: "" }, price: "16 ₾", popular: false }
      ]
    },
    {
      id: "alcoholic_drinks",
      name: { ka: "სპირტიანი სასმელი", en: "Alcoholic drinks" },
      emoji: "🥃",
      catImg: "",
      items: [
        { img: "", name: { ka: "ღვინის ჭაჭა-არაყი (დისტილატი) - ტიბაანური რქაწითელი", en: "Wine Distillate vodka" }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: "მალიბუ", en: "Malibu" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: 'ჭაჭა - "რიჟრაჟი"', en: 'Chacha "Rijraji"' }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: "ჯონი უოკერი - შავი", en: "Jonnie Walker black" }, desc: { ka: "", en: "" }, price: "20 ₾", popular: false },
        { img: "", name: { ka: "კირკე (ღვინისაგან დისტილირებული არაყი)", en: "Kirke" }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: 'ქართული არაყი - "სუფთა"', en: "Georgian vodka (Sufta)" }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: "ჯონი უოკერი - წითელი", en: "Jonnie Walker Red" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "მარტინი- ბიანკო, როსო", en: "Martini Rosso/ bianco" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "აბსოლუტი", en: "Absolute" }, desc: { ka: "", en: "" }, price: "9 ₾", popular: false },
        { img: "", name: { ka: 'თელიანი ველი -ჭაჭა "გროსმაისტერი"', en: "Teliani Grossmaister" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "ჯეკ დენიელსი", en: "Jack Daniels" }, desc: { ka: "", en: "" }, price: "17 ₾", popular: false },
        { img: "", name: { ka: "ჯეიმსონი", en: "Jameson" }, desc: { ka: "", en: "" }, price: "20 ₾", popular: false },
        { img: "", name: { ka: "ტეკილა", en: "Tequila" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი -ჭაჭა თეთრი", en: "Teliani Valley Chacha" }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: "გრეი გუსი", en: "Grey Goose" }, desc: { ka: "", en: "" }, price: "24 ₾", popular: false },
        { img: "", name: { ka: "ჯინი", en: "Gin" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "იაგერმაისტერი", en: "Jagermeister" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: "ჩივას რეგალი", en: "Chivas Regal" }, desc: { ka: "", en: "" }, price: "24 ₾", popular: false },
        { img: "", name: { ka: "ბაკარდი (თეთრი, შავი)", en: "Rum (black, white)" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "ბეილისი", en: "Baileys" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი - ჭაჭა მუხის", en: "Teliani Valley Chacha Gold" }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: 'ქართული ბრენდი „ტიციანი“ 5წ', en: 'Georgian Brandy "Titsiani" 5*' }, desc: { ka: "", en: "" }, price: "9 ₾", popular: false },
        { img: "", name: { ka: "შტრო", en: "Stro" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "რემი მარტინი", en: "Remy Martin Vsop (Cognac)" }, desc: { ka: "", en: "" }, price: "35 ₾", popular: false }
      ]
    },
    {
      id: "wine_glass",
      name: { ka: "ღვინო ჭიქით", en: "Wine (Glass)" },
      emoji: "🍷",
      catImg: "",
      items: [
        { img: "", name: { ka: '"მზის თვალი - ველი" - ქისი - ჭიქა', en: '"Mzis Tvali - Veli" - Kisi' }, desc: { ka: "", en: "" }, price: "17 ₾", popular: false },
        { img: "", name: { ka: '"მზის თვალი - ველი" - ხიხვი - ჭიქა', en: '"Mzis Tvali - Veli" - Khikhvi' }, desc: { ka: "", en: "" }, price: "16 ₾", popular: false },
        { img: "", name: { ka: '"დოლიძის მარანი" - ოცხანური საფერე - ჭიქა', en: '"Dolidze Marani" - Otskhanuri Saphere' }, desc: { ka: "", en: "" }, price: "20 ₾", popular: false },
        { img: "", name: { ka: '"დოლიძის მარანი" - ჩხავერი ქვევრის - ჭიქა', en: '"Dolidze Marani" - Chkhaveri Qvevri' }, desc: { ka: "", en: "" }, price: "20 ₾", popular: false },
        { img: "", name: { ka: '"დოლიძის მარანი" - ჩხავერი-ციცქა - ჭიქა', en: '"Dolidze Marani" - Chkhaveri-Tsitska' }, desc: { ka: "", en: "" }, price: "17 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - ალექსანდროულ-მუჯურეთული ჭიქა', en: '"Anemo" - Aleksandrouli-Mujuretuli' }, desc: { ka: "", en: "" }, price: "18 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - კრახუნა - ჭიქა', en: '"Anemo" - Khrakhuna' }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - მწვანე - რქაწითელი - ჭიქა', en: '"Anemo" - Mtsvane - Rkatsiteli' }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - რქაწითელი - ჭიქა', en: '"Anemo" - Rkatsiteli' }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - ცოლიკოური - ჭიქა', en: '"Anemo" - Tsolikouri' }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი -საფერავი როზე ჭიქა", en: "Teliani Valley Rose wine (Glass)" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი-მუკუზანი ჭიქა", en: "Teliani Valley Mukuzani" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი საფერავი ჭიქა", en: "Teliani Valley Saperavi" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: '"მზის თვალი" კარდანახული საფერავი ჭიქა', en: '"Mzis Tvali" Saperavi (natural wine)' }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი - ტვიში ჭიქა", en: "Teliani Valley Tvishi" }, desc: { ka: "", en: "" }, price: "14 ₾", popular: false },
        { img: "", name: { ka: "ქინძმარაულის მარანი - ქინძმარაული ჭიქა", en: "Kindzmaraulis marani (Kindzmarauli)" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: '"მზის თვალი" კარდანახული რქაწითელი ჭიქა', en: '"Mzis Tvali" Rkatsiteli' }, desc: { ka: "", en: "" }, price: "12 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი-წინანდალი ჭიქა", en: "Teliani Valley Tsinandali" }, desc: { ka: "", en: "" }, price: "13 ₾", popular: false }
      ]
    },
    {
      id: "wine_bottle",
      name: { ka: "ღვინო", en: "Wine Bottle" },
      emoji: "🍾",
      catImg: "",
      items: [
        { img: "", name: { ka: '"დოლიძის მარანი" - ოცხანური საფერე', en: '"Dolidze Marani" - Otskhanuri Saphere' }, desc: { ka: "", en: "" }, price: "80 ₾", popular: false },
        { img: "", name: { ka: '"დოლიძის მარანი" - ჩხავერი ქვევრის', en: '"Dolidze Marani" - Chkhaveri Qvevri' }, desc: { ka: "", en: "" }, price: "80 ₾", popular: false },
        { img: "", name: { ka: '"დოლიძის მარანი" - ჩხავერი-ციცქა', en: '"Dolidze Marani" - Chkhaveri-Tsitska' }, desc: { ka: "", en: "" }, price: "68 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - რქაწითელი', en: '"Anemo" - Rkatsiteli' }, desc: { ka: "", en: "" }, price: "52 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - მწვანე - რქაწითელი', en: '"Anemo" - Mtsvane - Rkatsiteli' }, desc: { ka: "", en: "" }, price: "56 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - კრახუნა', en: '"Anemo" - Khrakhuna' }, desc: { ka: "", en: "" }, price: "56 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - ალექსანდროულ-მუჯურეთული', en: '"Anemo" - Aleksandrouli-Mujuretuli' }, desc: { ka: "", en: "" }, price: "72 ₾", popular: false },
        { img: "", name: { ka: '"Anemo" - ცოლიკოური', en: '"Anemo" - Tsolikouri' }, desc: { ka: "", en: "" }, price: "56 ₾", popular: false },
        { img: "", name: { ka: '"მზის თვალი - ველი" ხიხვი', en: '"Mzis Tvali" Khikhvi' }, desc: { ka: "", en: "" }, price: "64 ₾", popular: false },
        { img: "", name: { ka: "ქინძმარაულის მარანი - ქინძმარაული", en: "Kindzmaraulis marani" }, desc: { ka: "", en: "" }, price: "60 ₾", popular: false },
        { img: "", name: { ka: '"დიდგორის მეღვინეობა" - წულუკიძის თეთრა', en: '"Didgori Winemaking"' }, desc: { ka: "", en: "" }, price: "85 ₾", popular: false },
        { img: "", name: { ka: '"დიდგორის მეღვინეობა" პეტნატი', en: '"Didgori Winemaking" - Pet-Nat' }, desc: { ka: "", en: "" }, price: "60 ₾", popular: false },
        { img: "", name: { ka: '"მზის თვალი - ველი" მწვანე', en: '"Mzis Tvali" Mtsvane' }, desc: { ka: "", en: "" }, price: "68 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი -საფერავი როზე", en: "Teliani Valley Rose" }, desc: { ka: "", en: "" }, price: "52 ₾", popular: false },
        { img: "", name: { ka: '"დიდგორის მეღვინეობა" - საფიანო - ხვანჭკარა', en: '"Didgori Winemaking" Khvanchkara' }, desc: { ka: "", en: "" }, price: "100 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი-წინანდალი", en: "Teliani Valley Tsinandali" }, desc: { ka: "", en: "" }, price: "52 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი-მუკუზანი", en: "Teliani Valley Mukuzani" }, desc: { ka: "", en: "" }, price: "60 ₾", popular: false },
        { img: "", name: { ka: '"დიდგორის მეღვინეობა" - დალიე', en: '"Didgori Winemaking" - Dalie' }, desc: { ka: "", en: "" }, price: "85 ₾", popular: false },
        { img: "", name: { ka: 'პეტ-ნატი - "დალიე" - "დიდგორის მეღვინეობა"', en: '"Didgori Winemaking" Pet-Nat' }, desc: { ka: "", en: "" }, price: "60 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი - ცქრიალა ღვინო", en: "Teliani Valley Sparkling wine" }, desc: { ka: "", en: "" }, price: "28 ₾", popular: false },
        { img: "", name: { ka: '"მზის თვალი" კარდანახული საფერავი', en: '"Mzis Tvali" Saperavi' }, desc: { ka: "", en: "" }, price: "52 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი საფერავი", en: "Teliani Valley Saperavi" }, desc: { ka: "", en: "" }, price: "52 ₾", popular: false },
        { img: "", name: { ka: '"დიდგორის მეღვინეობა" - კაბისტონი', en: '"Didgori Winemaking" Kabistoni' }, desc: { ka: "", en: "" }, price: "100 ₾", popular: false },
        { img: "", name: { ka: '"მზის თვალი" კარდანახული რქაწითელი', en: '"Mzis Tvali" Rkatsiteli' }, desc: { ka: "", en: "" }, price: "48 ₾", popular: false },
        { img: "", name: { ka: "თელიანი ველი - ტვიში", en: "Teliani Valley Tvishi" }, desc: { ka: "", en: "" }, price: "56 ₾", popular: false },
        { img: "", name: { ka: '"დიდგორის მეღვინეობა" - ცოლიკოური', en: '"Didgori Winemaking" Tsolikouri' }, desc: { ka: "", en: "" }, price: "85 ₾", popular: false }
      ]
    },
    {
      id: "cocktail",
      name: { ka: "კოქტეილი", en: "Cocktail" },
      emoji: "🍸",
      catImg: "",
      items: [
        { img: "", name: { ka: "მოხიტო", en: "MOJITO" }, desc: { ka: "", en: "" }, price: "28 ₾", popular: false },
        { img: "", name: { ka: "ნეგრონი", en: "NEGRON" }, desc: { ka: "", en: "" }, price: "24 ₾", popular: false },
        { img: "", name: { ka: "ამო რამე", en: "AMO RAME" }, desc: { ka: "", en: "" }, price: "30 ₾", popular: false },
        { img: "", name: { ka: "ლურჯი ლაგუნა", en: "BLUE LAGUNA" }, desc: { ka: "", en: "" }, price: "22 ₾", popular: false },
        { img: "", name: { ka: "კუბა-ლიბრე", en: "CUBA-LIBRE" }, desc: { ka: "", en: "" }, price: "22 ₾", popular: false },
        { img: "", name: { ka: "მარგარიტა", en: "MARGARITTA" }, desc: { ka: "", en: "" }, price: "26 ₾", popular: false },
        { img: "", name: { ka: "დუბლინის შოკოლადის კოქტეილი", en: "DUBLIN CHOCOLATE COCKTAIL" }, desc: { ka: "", en: "" }, price: "35 ₾", popular: false },
        { img: "", name: { ka: "ლონგ აილენდის ენერჯი", en: "LONG ISLAND ENERGY" }, desc: { ka: "", en: "" }, price: "35 ₾", popular: false },
        { img: "", name: { ka: "ლონგ აილენდი", en: "LONG ISLAND" }, desc: { ka: "", en: "" }, price: "30 ₾", popular: false },
        { img: "", name: { ka: "ვისკი-საუერი", en: "WHISKEY-SOUR" }, desc: { ka: "", en: "" }, price: "30 ₾", popular: false },
        { img: "", name: { ka: "ბაკარდი-კოლა", en: "BACCARDI-COLA" }, desc: { ka: "", en: "" }, price: "22 ₾", popular: false },
        { img: "", name: { ka: "ტეკილა სანსრაიზი", en: "TEQUILLA SUNRISE" }, desc: { ka: "", en: "" }, price: "22 ₾", popular: false },
        { img: "", name: { ka: "გლინტვეინი", en: "GLINTWINE" }, desc: { ka: "", en: "" }, price: "20 ₾", popular: false }
      ]
    },
    {
      id: "tea",
      name: { ka: "ჩაი", en: "Tea" },
      emoji: "🫖",
      catImg: "",
      items: [
        { img: "", name: { ka: "ჩაი დასაყენებელი", en: "Tea in teapot" }, desc: { ka: "", en: "" }, price: "12 ₾", popular: false },
        { img: "", name: { ka: "ჩაი პაკეტის", en: "Tea T-bag" }, desc: { ka: "", en: "" }, price: "6 ₾", popular: false },
        { img: "", name: { ka: "ცივი ჩაი", en: "Ice tea" }, desc: { ka: "", en: "" }, price: "11 ₾", popular: false }
      ]
    },
    {
      id: "coffee",
      name: { ka: "ყავა", en: "Coffee" },
      emoji: "☕",
      catImg: "",
      items: [
        { img: "", name: { ka: "ცივი ყავა", en: "Ice coffee" }, desc: { ka: "", en: "" }, price: "10 ₾", popular: false },
        { img: "", name: { ka: "ცივი ყავა ნაყინით", en: "Coffee with ice cream" }, desc: { ka: "", en: "" }, price: "15 ₾", popular: false },
        { img: "", name: { ka: "ლატე", en: "Latte" }, desc: { ka: "", en: "" }, price: "10 ₾", popular: false },
        { img: "", name: { ka: "კაპუჩინო", en: "Cappuccino" }, desc: { ka: "", en: "" }, price: "10 ₾", popular: false },
        { img: "", name: { ka: "ესპრესო", en: "Espresso" }, desc: { ka: "", en: "" }, price: "7 ₾", popular: false },
        { img: "", name: { ka: "ცხელი შოკოლადი", en: "Hot chocolate" }, desc: { ka: "", en: "" }, price: "12 ₾", popular: false },
        { img: "", name: { ka: "ნალექიანი ყავა", en: "Ground coffee" }, desc: { ka: "", en: "" }, price: "6 ₾", popular: false },
        { img: "", name: { ka: "ამერიკანო", en: "Americano" }, desc: { ka: "", en: "" }, price: "8 ₾", popular: false },
        { img: "", name: { ka: "მოკაჩინო", en: "Mocha" }, desc: { ka: "", en: "" }, price: "12 ₾", popular: false }
      ]
    }
  ]
};