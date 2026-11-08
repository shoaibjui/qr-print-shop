QR PRINT SHOP — اردو ہدایات

اس ZIP میں:
- index.html: گاہکوں کی آرڈر ویب سائٹ
- admin.html: دکان کے مالک کا آرڈر پینل
- config.js: Supabase کنکشن کی جگہ
- setup.sql: Database اور سیکیورٹی کی پالیسیوں کا SQL

اہم حدود:
1) یہ مکمل قابلِ آزمائش ابتدائی ویب سسٹم ہے، مگر Supabase credentials اور مالک کا لاگ اِن بنانے کے بعد ہی کام کرے گا۔
2) Supabase Project URL اور anon/publishable key ہی config.js میں لگائیں۔ service_role key، database password، OTP یا wallet PIN کبھی نہ لگائیں۔
3) Supabase Auth میں public sign-ups بند کریں اور صرف مالک کا اکاؤنٹ بنائیں۔ authenticated policies صرف اس صورت میں مناسب ہیں جب صرف مالک کا اکاؤنٹ موجود ہو۔
4) JazzCash/Easypaisa/بینک ادائیگی خودکار تصدیق نہیں ہوتی؛ مالک اپنے اکاؤنٹ میں رقم چیک کرکے منظور کرے۔
5) ویب براؤزر Android پر خاموشی سے پرنٹ نہیں بھیج سکتا۔ Admin پینل سے فائل ڈاؤن لوڈ کرکے A34 پر Epson iPrint میں کھول کر پرنٹ کریں۔ مکمل خودکار پرنٹنگ کے لیے الگ Android print-bridge ایپ درکار ہوگی۔
6) قیمتیں ابھی B&W 20 روپے اور رنگین 40 روپے فی صفحہ ہیں؛ پہلے سے صارف کی بتائی ہوئی قیمتوں کے مطابق۔

تنصیب:
A. Supabase
- SQL Editor میں setup.sql چلائیں۔ اگر پہلے کی پالیسیوں سے فرق ہو تو یہی فائل پرانی پالیسیوں کو drop کرکے دوبارہ بناتی ہے۔
- Storage میں print-files bucket Private رکھیں۔
- Authentication > Settings میں public sign-ups بند کریں۔
- Authentication > Users میں مالک کا اکاؤنٹ بنائیں۔
- Project Settings > API سے Project URL اور anon/publishable key کاپی کریں۔

B. config.js
- YOUR_SUPABASE_PROJECT_URL کو Project URL سے بدلیں۔
- YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY کو anon/public/publishable key سے بدلیں۔
- کبھی service_role/secret key استعمال نہ کریں۔

C. GitHub
- اپنی repository qr-print-shop کھولیں۔
- Add file > Upload files منتخب کریں۔
- ZIP کو پہلے اپنے موبائل/کمپیوٹر میں Extract کریں۔
- index.html، admin.html، config.js اور setup.sql اپ لوڈ کریں (ZIP خود اپ لوڈ نہ کریں)۔
- Commit changes دبائیں۔
- Settings > Pages میں Deploy from branch، main، /(root) منتخب کریں۔
- چند منٹ بعد customer page: https://shoaibjui.github.io/qr-print-shop/
- Admin page: https://shoaibjui.github.io/qr-print-shop/admin.html

D. ٹیسٹ
- پہلے خود ایک چھوٹا PDF آرڈر جمع کریں۔
- admin.html کھول کر مالک کے ای میل/پاس ورڈ سے لاگ اِن کریں۔
- ادائیگی کی اصل رقم چیک کیے بغیر منظور نہ کریں۔
- فائل بٹن سے فائل کھولیں، A34 پر Epson iPrint کے ذریعے پرنٹ کریں۔
- درست کام کرنے کے بعد ہی دکان کا QR کوڈ دوبارہ بنائیں تاکہ یہی ویب سائٹ کھلے۔

نوٹ: setup.sql کو صرف ایک بار چلائیں۔ اگر پہلے ہی تمام چیزیں بن چکی ہیں تو بھی یہ policies کو دوبارہ درست ترتیب سے بناتا ہے۔
