# USMANI PRINT — Free PWA installation pack

یہ فائلیں آپ کی موجودہ GitHub Pages ویب سائٹ میں PWA انسٹالیشن شامل کرنے کے لیے ہیں۔

## 1) یہ فائلیں GitHub میں اپ لوڈ کریں
اپنے repository کے بالکل مرکزی فولڈر (root) میں یہ فائلیں/فولڈر اپ لوڈ کریں:
- manifest.json
- sw.js
- apple-touch-icon.png
- icons/ (اس کے اندر icon-192.png اور icon-512.png)

آپ کی موجودہ `usmani-print-logo-2.png` بھی اسی root میں موجود رہنی چاہیے۔

## 2) index.html میں تبدیلی
`index-html-additions.txt` کھولیں:
- اس کے پہلے حصے کو `index.html` کے `<head>` کے اندر، `</head>` سے پہلے شامل کریں۔
- Install button والا حصہ `</header>` کے فوراً بعد شامل کریں۔
- آخری script کو `</body>` سے پہلے شامل کریں۔

موجودہ آرڈر، قیمت، Supabase، چیٹ یا وائس میسج کا کوڈ حذف یا تبدیل نہ کریں۔

## 3) Commit
GitHub میں تمام فائلیں اپ لوڈ/تبدیل کرنے کے بعد **Commit changes** دبائیں۔ تبدیلیاں GitHub Pages پر آنے میں کچھ منٹ لگ سکتے ہیں۔

## 4) انسٹالیشن ٹیسٹ
Android Chrome میں https://shoaibjui.github.io/ کھولیں۔ اگر Chrome انسٹالیشن کی پیشکش دکھائے یا صفحے پر Install App بٹن ظاہر ہو تو اسے دبائیں۔

## اہم
- یہ PWA پیکج مفت ہے؛ Play Store پر شائع نہیں کرتا۔
- آرڈر جمع کرانے، فائل اپ لوڈ، ادائیگی اور چیٹ کے لیے انٹرنیٹ درکار رہے گا۔
- Service worker صرف ویب سائٹ کی بنیادی فائلیں محفوظ کرتا ہے۔ Supabase/API، فائل اپ لوڈ اور چیٹ کے ڈیٹا کو offline cache نہیں کرتا۔
- ایپ آئیکن کے لیے سادہ UP/پرنٹر نشان تیار کیا گیا ہے؛ اسے بعد میں اصل لوگو کے مطابق بدلا جا سکتا ہے۔
