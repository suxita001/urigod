// ══════════════════════════════════════════════════════════
// URIGOD.GE — Restaurant Registry & Categories
// ══════════════════════════════════════════════════════════

const HERO_SLIDES = [
  { 
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1920&auto=format&fit=crop", 
    label: { ka: "ქართული სამზარეულო", en: "Georgian Cuisine" } 
  },
  { 
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop", 
    label: { ka: "აზიური არომატები",   en: "Asian Flavours"  } 
  },
  { 
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop", 
    label: { ka: "თბილისი ღამით",       en: "Tbilisi by Night"} 
  },
];

let currentSlideIndex = 0;

function changeSlide() {
  const heroElement = document.getElementById('heroSection') || document.querySelector('.hero');
  const labelElement = document.getElementById('heroLabel');
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ka';

  if (!heroElement) return;
  const nextSlide = HERO_SLIDES[currentSlideIndex];

  // 1. Gently fade out the old text
  if (labelElement) labelElement.style.opacity = '0';

  setTimeout(() => {
    // 2. Change the background image (the CSS handles the 0.8s smooth fade)
    heroElement.style.backgroundImage = `url('${nextSlide.img}')`;

    // 3. Change text content and fade it back in smoothly
    if (labelElement) {
      labelElement.textContent = nextSlide.label[lang];
      labelElement.style.opacity = '1';
    }

    currentSlideIndex = (currentSlideIndex + 1) % HERO_SLIDES.length;
  }, 300); // Small delay to let text fade out elegantly first
}

// Automatically switch slides every 5 seconds
setInterval(changeSlide, 5000);
document.addEventListener('DOMContentLoaded', changeSlide);

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
    id:"see360", slug:"see360",
    name:{ ka:"see360", en:"see360" },
    emoji:"🍽️",
    cuisine:{ ka:"ქართული სამზარეულო", en:"Georgian Cuisine" },
    cuisineTag:"georgian",
    // დამატებული tags ველი ფილტრისთვის
    tags: ["georgian", "fastfood", "european"], 
    rating:4.8, status:"open", hours:"13:00 – 01:00",
    phone:"+995 596 46 04 04", email:"info@tbilisee.ge",
    serviceCharge: 10,   // ← ეს დაამატე
    featured:true,
    cover:  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/c3/b2/75/restaurant-see360.jpg?w=900&h=500&s=1",
    heroImg:null,
    branches:[
      { id:"see360", name:{ ka:"see360", en:"see360" }, address:{ ka:"24 ბეთლემის ქუჩა, თბილისი", en:"24 Bethlemi St, Tbilisi" }, lat:41.6894204997103,  lng:44.80667352185095, phone:"+995 596 46 04 04", hours:"13:00 – 01:00", status:"open" },
    ]
  },


  {
    id:"Just Burgers", slug:"just_burgers",
    name:{ ka:"Just Burgers", en:"Just Burgers" },
    emoji:"🍔",
    cuisine:{ ka:"სწრაფი კვება", en:"fast food" },
    cuisineTag:"fastfood",
    // დამატებული tags ველი ფილტრისთვის
    tags: ["fastfood", "european"], 
    rating:4.7, status:"open", hours:"12:00 – 23:00",
    phone:"+995 596 46 04 04", email:"info@tbilisee.ge",
    
    featured:true,
    cover:  "https://imageproxy.wolt.com/assets/6897c554d55eea19ac949123",
    heroImg:null,
    branches:[
      { id:"just_burgers", name:{ ka:"just burgers", en:"just burgers" }, address:{ ka:"რომან მიმინოშვილის 2, თბილისი", en:"2 Roman Miminoshvili Street, Tbilisi" }, lat: 41.70636818807825,  lng: 44.78834745369621, phone:"+995 596 46 04 04", hours:"12:00 – 23:00", status:"open" },
    ]
  },


  {
    id:"Lumier's_Chimney_Cake", slug:"Lumiers_Chimney_Cake",
    name:{ ka:"Lumier's Chimney Cake • ლუმიერს", en:"Lumier's Chimney Cake" },
    emoji:"🍰",
    cuisine:{ ka:"დესერტი", en:"dessert" },
    cuisineTag:"dessert",
    // დამატებული tags ველი ფილტრისთვის
    tags: ["fastfood", "european"], 
    rating:4.7, status:"open", hours:"11:00 – 00:00",
    phone:"+995599075258", email:"info@tbilisee.ge",
    
    featured:true,
    cover:  "https://imageproxy.wolt.com/assets/699463cec7fede311b1a97d1",
    heroImg:null,
    branches:[
      { id:"Lumiers_Chimney_Cake", name:{ ka:"lumier's chimney cake", en:"lumier's chimney cake" }, address:{ ka:"25 ალექსანდრე პუშკინის ქუჩა, თბილისი", en:"25 Pushkin Street, Tbilisi" }, lat: 41.69559382086089,   lng: 44.802642246640715, phone:"032 2 11 22 33", hours:"11:00 – 00:00", status:"open" },
      { id:"Lumiers_Chimney_Cake", name:{ ka:"lumier's chimney cake", en:"lumier's chimney cake" }, address:{ ka:"34 კოტე აფხაზის ქუჩა, თბილისი", en:"34 Kote Afkhazis St, Tbilisi" }, lat: 41.69204925858539,    lng: 44.8065718026682, phone:"032 2 11 22 33", hours:"11:00 – 00:00", status:"open" },
      { id:"Lumiers_Chimney_Cake", name:{ ka:"lumier's chimney cake", en:"lumier's chimney cake" }, address:{ ka:"ისთ ფოინთი, თბილისი", en:"east point, Tbilisi" }, lat: 41.68947507618618,     lng: 44.900297118922104, phone:"032 2 11 22 33", hours:"11:00 – 00:00", status:"open" },
      { id:"Lumiers_Chimney_Cake", name:{ ka:"lumier's chimney cake", en:"lumier's chimney cake" }, address:{ ka:"ლისის ტბა, თბილისი", en:"Lisi Lake, Tbilisi" }, lat: 41.74159375259671,      lng: 44.73901033627064, phone:"032 2 11 22 33", hours:"11:00 – 00:00", status:"open" },
      { id:"Lumiers_Chimney_Cake", name:{ ka:"lumier's chimney cake", en:"lumier's chimney cake" }, address:{ ka:"კუს ტბა, თბილისი", en:"Turtle Lake, Tbilisi" }, lat: 41.701240795729376,       lng: 44.75403803625809, phone:"032 2 11 22 33", hours:"11:00 – 00:00", status:"open" },

    ]
  },


    {
    id:"amo_rame", slug:"amo_rame",
    name:{ ka:"ამო რამე • ბანი", en:"Amo Rame • Bani" },
    emoji:"🥟",
    cuisine:{ ka:"ქართული", en:"georgian" },
    cuisineTag:"georgian",
    // დამატებული tags ველი ფილტრისთვის
    tags: ["georgian", "european"], 
    rating:4.5, status:"open", hours:"12:00 – 00:00",
    phone:"+995 595 99 94 44", email:"info@tbilisee.ge",
    
    featured:true,
    cover:  "https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/475775960_1117622576821472_8426717756544284625_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=UDTshkh0XwoQ7kNvwGMVIY4&_nc_oc=AdoJ4r-cxm1Fn2bCjSGM4XAHQOybsF7rpiMiiKbi5a5omCryMFDiwl49jbwadB8cGNI&_nc_zt=23&_nc_ht=scontent.ftbs4-2.fna&_nc_gid=qYPApUX8a4U-h3EAKoFM4w&_nc_ss=7b2a8&oh=00_Af_3B9elHwb6m16lZJYJjfksb2-VRpaNWySW-8twzsiLSw&oe=6A247CBA",
    heroImg:null,
    branches:[
      { id:"amo_rame", name:{ ka:"ამო რამე", en:"Amo Rame" }, address:{ ka:"68 დავით აღმაშენებელის გამზირი, თბილისი", en:"68 Davit Aghmashenebeli Avenue, Tbilisi" }, lat: 41.70730966086753,    lng: 44.79877581319293, phone:"+995 595 99 94 44", hours:"12:00 – 00:00", status:"open" },
    ]
  },




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