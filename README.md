# URIGOD.GE — ფოტოების ჩასმის გზამკვლევი

## 📁 ფოლდერების სტრუქტურა

```
urigod/
├── img/                          ← გლობალური ფოტოები
│   ├── hero-1.jpg                ← hero სლაიდი 1 (1920×1080 min)
│   ├── hero-2.jpg                ← hero სლაიდი 2
│   ├── hero-3.jpg                ← hero სლაიდი 3
│   └── hero-4.jpg                ← hero სლაიდი 4
│
├── restaurants/
│   └── zodiako/
│       ├── img/                  ← ზოდიაქოს ფოტოები
│       │   ├── hero.jpg          ← hero ფოტო (1920×900 min)
│       │   ├── cover.jpg         ← ბარათის ფოტო (800×450 min)
│       │   ├── gallery-1.jpg     ← გალერეა
│       │   ├── gallery-2.jpg
│       │   ├── gallery-3.jpg
│       │   ├── gallery-4.jpg
│       │   ├── gallery-5.jpg
│       │   ├── gallery-6.jpg
│       │   ├── menu-khinkali.jpg ← მენიუ კატეგორიის ფოტო
│       │   ├── menu-main.jpg
│       │   ├── menu-salads.jpg
│       │   ├── menu-drinks.jpg
│       │   ├── menu-desserts.jpg
│       │   ├── item-khinkali-qarthuli.jpg ← კერძის ფოტო
│       │   └── item-chakhokhbili.jpg
│       ├── data.js
│       ├── index.html
│       └── menu.html
```

## ✏️ Hero სლაიდერი — js/restaurants.js

```js
const HERO_SLIDES = [
  { img: 'img/hero-1.jpg', label: { ka: "ქართული სამზარეულო", en: "Georgian Cuisine" } },
  { img: 'img/hero-2.jpg', label: { ka: "აზიური არომატები",   en: "Asian Flavours"  } },
  { img: 'img/hero-3.jpg', label: { ka: "თბილისი ღამით",       en: "Tbilisi by Night"} },
  { img: 'img/hero-4.jpg', label: { ka: "სწრაფი სადილი",       en: "Quick Lunch"     } },
];
```

## ✏️ რესტორნის ბარათი + hero — js/restaurants.js

```js
{
  id: "zodiako",
  cover:   'restaurants/zodiako/img/cover.jpg',   // ბარათის ფოტო
  heroImg: 'restaurants/zodiako/img/hero.jpg',    // (ეს js/restaurants.js-ში არ არის, data.js-ში!)
  ...
}
```

## ✏️ restaurants/zodiako/data.js — ყველა ფოტო

```js
// Hero
heroImg: 'img/hero.jpg',

// Gallery
gallery: [
  { img: 'img/gallery-1.jpg', emoji: "🏛️", label: { ka: "ინტერიერი", en: "Interior" } },
  { img: 'img/gallery-2.jpg', emoji: "🥟", label: { ka: "ხინკალი",   en: "Khinkali" } },
  ...
],

// Menu categories
menu: [
  {
    id: "khinkali",
    catImg: 'img/menu-khinkali.jpg',  // კატეგორიის ბარათის ფოტო
    items: [
      { img: 'img/item-khinkali-qarthuli.jpg', name: {...}, ... },
      ...
    ]
  }
]
```

## 📐 რეკომენდირებული ზომები

| გამოყენება          | ზომა         | Format |
|--------------------|--------------|--------|
| Hero სლაიდი        | 1920 × 1080  | JPG    |
| რესტ. Hero          | 1920 × 900   | JPG    |
| ბარათის Cover       | 800 × 450    | JPG    |
| გალერეა             | 600 × 600    | JPG    |
| მენიუ კატეგ.        | 600 × 450    | JPG    |
| კერძის ფოტო         | 400 × 270    | JPG    |

## 🔄 ახალი რესტორნის დამატება

1. `restaurants/new-rest/` ფოლდერი
2. `data.js` — ზოდიაქოდან დაკოპირება და შევსება
3. `index.html` + `menu.html` — ზოდიაქოდან დაკოპირება
4. `img/` ქვეფოლდერი ფოტოებისთვის
5. `js/restaurants.js`-ში RESTAURANTS array-ში დამატება

## 📧 EmailJS კონფიგურაცია

```js
// index.html <head>-ში დაამატეთ:
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init('YOUR_PUBLIC_KEY');
  window.EMAILJS_SID = 'YOUR_SERVICE_ID';
  window.EMAILJS_TID = 'YOUR_TEMPLATE_ID';
</script>
```

EmailJS გარეშე → ჯავshნი გახსნის mailto: ბმულს (ასევე მუshaobs!)
