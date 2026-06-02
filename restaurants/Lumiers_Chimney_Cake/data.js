// ══════════════════════════════════════════════════
// ზოდიაქო — მონაცემები
// სურათების ჩასმა: null-ის ნაცვლად დაწერეთ
//   'img/zodiako-cover.jpg'  ← ფოლდერი restaurants/zodiako/img/
//   ან სრული URL
// ══════════════════════════════════════════════════
const RESTAURANT = {
  name:  { ka: "lumier's chimney cake",              en: "lumier's chimney cake"          },
  emoji: "🍰",
  cuisine:{ ka:"დესერტი",  en:"dessert"  },
  cuisineTag: "dessert",
  rating: 4.7,  reviewCount: 312,
  email:  "info@tbilisee.ge",
  phone:  "032 2 11 22 33",
  description: {
    ka: "რესტორანი სახურავზე ძველი თბილისის ულამაზესი ხედებით და ცოცხალი მუსიკით ყოველ შაბათ-კვირას, გემრიელი კერძები ტრადიციული ქართული და თანამედროვე ევროპული სამზარეულოს შერწყმით. უფასო პარკინგი ძველი თბილისის გულში.",
    en: "Rooftop restaurant with Beautiful views of Old Tbilisi and live music every weekend, Delicious Dishes connection of Traditional Georgian With modern European Kitchen. Free parking in the heart of old Tbilisi"
  },
  founded: "2018",
  slug: "Lumiers_Chimney_Cake",

  // ── HERO PHOTO ─────────────────────────────────
  // ✏️  ჩასვით: heroImg: 'img/hero.jpg'
  heroImg: "https://imageproxy.wolt.com/assets/699463cec7fede311b1a97d1",

  // ── BRANCHES ───────────────────────────────────
  branches: [
    {
      id: "Lumiers_Chimney_Cake",
      name:    { ka: "lumier's chimney cake",       en: "lumier's chimney cake"      },
      address: { ka: "25 ალექსანდრე პუშკინის ქუჩა, თბილისი", en: "25 Pushkin Street, Tbilisi" },
      lat: 41.69559382086089,   lng: 44.802642246640715,
      phone: "032 2 11 22 33",
      hours: { ka: "ორ–პარ: 11:00–00:00  |  შ–კვ: 11:00–00:00",
               en: "Mon–Fri: 12:00–00:00  |  Sat–Sun: 11:00–00:00" },
      status: "open"
    },


    {
      id: "Lumiers_Chimney_Cake",
      name:    { ka: "lumier's chimney cake",       en: "lumier's chimney cake"      },
      address: { ka: "34 კოტე აფხაზის ქუჩა, თბილისი", en: "34 Kote Afkhazis St, Tbilisi" },
      lat: 41.69204925858539,    lng: 44.8065718026682,
      phone: "032 2 11 22 33",
      hours: { ka: "ორ–პარ: 11:00–00:00  |  შ–კვ: 11:00–00:00",
               en: "Mon–Fri: 12:00–00:00  |  Sat–Sun: 11:00–00:00" },
      status: "open"
    },


    {
      id: "Lumiers_Chimney_Cake",
      name:    { ka: "lumier's chimney cake",       en: "lumier's chimney cake"      },
      address: { ka: "ისთ ფოინთი, თბილისი", en: "east point, Tbilisi" },
      lat: 41.68947507618618,     lng: 44.900297118922104,
      phone: "032 2 11 22 33",
      hours: { ka: "ორ–პარ: 11:00–00:00  |  შ–კვ: 11:00–00:00",
               en: "Mon–Fri: 12:00–00:00  |  Sat–Sun: 11:00–00:00" },
      status: "open"
    },


    {
      id: "Lumiers_Chimney_Cake",
      name:    { ka: "lumier's chimney cake",       en: "lumier's chimney cake"      },
      address: { ka: "ლისის ტბა, თბილისი", en: "Lisi Lake, Tbilisi" },
      lat: 41.74159375259671,      lng: 44.73901033627064,
      phone: "032 2 11 22 33",
      hours: { ka: "ორ–პარ: 11:00–00:00  |  შ–კვ: 11:00–00:00",
               en: "Mon–Fri: 12:00–00:00  |  Sat–Sun: 11:00–00:00" },
      status: "open"
    },


    {
      id: "Lumiers_Chimney_Cake",
      name:    { ka: "lumier's chimney cake",       en: "lumier's chimney cake"      },
      address: { ka: "კუს ტბა, თბილისი", en: "Turtle Lake, Tbilisi" },
      lat: 41.701240795729376,       lng: 44.75403803625809,
      phone: "032 2 11 22 33",
      hours: { ka: "ორ–პარ: 11:00–00:00  |  შ–კვ: 11:00–00:00",
               en: "Mon–Fri: 12:00–00:00  |  Sat–Sun: 11:00–00:00" },
      status: "open"
    },
  ],

  // ── GALLERY ────────────────────────────────────
  // ✏️  ჩასვით: img: 'img/gallery-1.jpg'
  gallery: [
    { img: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t51.82787-15/657169888_18334617328222113_8238688859309616601_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZgXOQa5kgL0Q7kNvwGu_rVX&_nc_oc=Ado-OWE0bSQ4vWGD1v0GMWvPShNKUA7CkAUl7a0dzNy6y__x0-w4tz94TjotABSxd_k&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=l6OrCOlLmlTkdICa8oL8ZQ&_nc_ss=7b2a8&oh=00_Af733rD3i5Jgw-R-cJjRxfGLUfembTQnDQ-gK8x3Xvr_DA&oe=6A0C83DE", emoji: "🏛️", label: { ka: "",   en: ""   } },
    { img: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t51.82787-15/641850340_18330862057222113_3232496031216838689_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BPB0FeV7TRcQ7kNvwGgMig6&_nc_oc=AdoW7ii3FHqYQLeG1mzgq-1bpTefLSFjgjMatQc19g-bWE9HxY1W4-Mr4MlH7Vrw-6I&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=NpbiqHy_TnscoMFViT-vNA&_nc_ss=7b2a8&oh=00_Af74wIPGwHzMB7yjSEFkoZ5pe7dbwZMTllP9f2coOtm5og&oe=6A0C9697", emoji: "🥟", label: { ka: "",     en: ""   } },
    { img: "https://scontent.ftbs1-2.fna.fbcdn.net/v/t51.82787-15/658170655_18334025902222113_6571893400604708305_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BtA7opp3VkgQ7kNvwE3uqrS&_nc_oc=Ado7_uythkwtGMZDoXP6dzmAYsfWtDGWwpawlm2rkq_eDoOVPvkWq5dn51foWU5_SAQ&_nc_zt=23&_nc_ht=scontent.ftbs1-2.fna&_nc_gid=d0F9yKv51HO2JtWP-oqVGA&_nc_ss=7b2a8&oh=00_Af5jIqNHsPYWSmca79bp-xd1Xhngu1xBI4wyC_ghYpZNvQ&oe=6A0C9FBE", emoji: "🍲", label: { ka: "",   en: ""} },
    { img: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t39.30808-6/617602558_1307702044728219_9211324644015105973_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N_FBc1h3424Q7kNvwHyeUgA&_nc_oc=Adp5LnBAC_xpaXQVTAemDWSJVZQzLG80c1Ii6_V-w1iF0gi6tk51QGReGwdbyPfbV8c&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=t30raitKrAyW-J97ktPsCg&_nc_ss=7b2a8&oh=00_Af67pUjuwpnsCCxDkXX_hhfm0trNWPYReoO294xYt0MV4Q&oe=6A0C9644", emoji: "🍷", label: { ka: "",        en: ""        } },
    { img: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t39.30808-6/469459754_18280032439222113_1762942725269868868_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=84TWIek5ro8Q7kNvwGaf6rh&_nc_oc=Adq9lBPRNZl6ByPBIbdPg8d9LGqW65n29u878o9Ix9uWJR00IhOezwy6_CNsBtV3flI&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=JXIa2EL754fQ_x-6fk7z-w&_nc_ss=7b2a8&oh=00_Af56Zwx3itXRAWqBkPwCV-65ssItka0N49AHe8N58pmyng&oe=6A0C8C30", emoji: "🌿", label: { ka: "",       en: ""     } },
    { img: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t39.30808-6/467111711_18277401496222113_3761281199736821098_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PWa-w2KL3dcQ7kNvwEFRv1m&_nc_oc=Adqnj8VKX5CjlVXL6cLqzgiMPRV_FVcF_Dgd1DVZ8PC6J3YPHfTeqBvehbFpUPNEV-o&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=QMyONAbIX0YokbdIvxCrdg&_nc_ss=7b2a8&oh=00_Af630nm7Uz34ua0t035xx35UGxg1ItYPxYVdJRL1hrhuIw&oe=6A0CADFE", emoji: "🍮", label: { ka: "",      en: ""     } },
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
    facebook:  "https://www.facebook.com/lumiersgeorgia/",
    instagram: "https://www.instagram.com/lumierschimneycake?fbclid=IwY2xjawRzp7FleHRuA2FlbQIxMABicmlkETF0NkZZWnFCUUlKdVFOenN5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpFqOp9keSp91OcHTeeYpeXN6h_GwR9PNabP40bAvAX2CYDANwAQnv-Swa3i_aem_lB2QTIE4735x2xJQDQXhng",
    tiktok:    ""
  },

  // ── MENU ───────────────────────────────────────
  menu: [
    // --- BOWLS ---
    {
      id: "bowls",
      name: { ka: "ტრდელნიკი", en: "chimney cake" },
      emoji: "",
      catImg: "https://imageproxy.wolt.com/assets/690c92dc92a5029f7c937f79?w=600",
      items: [
        {
          img: "https://imageproxy.wolt.com/assets/690c92dc92a5029f7c937f79?w=600",
          name: { ka: "ტრდელნიკი", en: "chimney cake" },
          desc: { ka: "", en: "" },
          price: "9 ₾",
          popular: false,
          variants: [
            {
              groupLabel: { ka: "ზომა", en: "Size" },
              groupType: "size",
              options: [
                { label:{ka:"სტანდარტული",en:"Standard"}, price:"9 ₾",  default:true  }
              ]
            }
          ],
          addons: [
            {
              groupLabel: { ka: "დამატებები", en: "Add-ons" },
              items: [
                { name:{ka:"შოკოლადი",         en:"Chocolate"      }, price:"1.5 ₾",  default:false },
                { name:{ka:"კრემი",     en:"Vanilla Cream"}, price:"1.5",default:false },
                { name:{ka:"ლოტუსის კრემი", en:"Lotus Cream" }, price:"3 ₾",  default:false },
                { name:{ka:"ფისტას კრემი",   en:"Pistachio Cream"}, price:"3 ₾",default:false },
                { name:{ka:"ტოპინგი",   en:"Topping"}, price:"1 ₾",default:false },
                { name:{ka:"ალუბლის/ ვაშლის ჯემი",   en:"Cherry Jam/ Apple Strudel"}, price:"3 ₾",default:false },
                { name:{ka:"ნაყინი",   en:"Ice Cream"}, price:"2.5 ₾",default:false },
                { name:{ka:"ხილი",   en:" Fruits"}, price:"2 ₾",default:false },
              ]
            },
            
          ]
        },
        
      ]
      }
  ]
};