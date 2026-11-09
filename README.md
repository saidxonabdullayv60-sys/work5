# ShopHub — mini loyiha (1-qadam: Login sahifasi)

## Fayl tuzilishi va vazifasi

```
shophub-app/
├── index.html          <- Faqat bitta bo'sh <div id="root">. Brauzer shu faylni ochadi.
├── package.json        <- Loyihada qaysi kutubxonalar kerakligi ro'yxati.
├── vite.config.js       <- Build tool sozlamasi (o'zgartirish shart emas).
├── public/
│   └── phone.lottie     <- Sizning animatsiyangiz (avtomatik joylashtirdim).
└── src/
    ├── main.jsx          <- App.jsx ni index.html ichiga "chizib" beradi.
    ├── App.jsx            <- Asosiy komponent — hozircha Login ekrani shu yerda.
    └── style.css          <- Barcha dizayn (rang, joylashuv).
```

## Ishga tushirish (birinchi marta)

1. Terminalni oching, shu papkaga o'ting:
   ```
   cd shophub-app
   ```
2. Kerakli kutubxonalarni o'rnating (faqat birinchi safar kerak):
   ```
   npm install
   ```
3. Serverni ishga tushiring:
   ```
   npm run dev
   ```
4. Terminalda chiqqan linkni (odatda `http://localhost:5173`) brauzerda oching.

Shundan keyin har safar ishlash uchun faqat 3-qadam (`npm run dev`) kifoya —
1 va 2-qadam bir marta bajariladi.

## Nima sodir bo'ladi (import qanday ishlaydi)

- Brauzer `index.html` ni ochadi
- U ichidagi `<script type="module" src="/src/main.jsx">` qatori ishga tushadi
- `main.jsx` esa `App.jsx` ni import qilib, uni `#root` div ichiga chizadi
- Vite orqasida barcha `import`larni brauzer tushunadigan formatga
  avtomatik "tarjima" qilib turadi — shuning uchun oddiy HTML faylda
  ishlamagan `import` shu yerda muammosiz ishlaydi

## Keyingi qadam

Hozircha faqat Login ekrani tayyor. Sinab ko'rib, natija yoqsa —
navbatdagi ekranni (Marketplace) qo'shamiz.
