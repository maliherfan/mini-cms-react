🚀 Website Builder Engine
این پروژه یک موتور ویرایشگر صفحات وب (Website Builder) است که با هدف پیاده‌سازی یک راهکار منعطف برای مدیریت و نمایش داینامیک سکشن‌های مختلف طراحی شده است. تمرکز اصلی پروژه بر معماری ماژولار (Scalable Architecture) و قابلیت اضافه کردن کامپوننت‌های جدید بدون تغییر در هسته مرکزی سیستم است.

🛠 تکنولوژی‌های مورد استفاده
Core: React.js
Styling: Plain CSS organized in separate component-level stylesheet files for maintainability and scalability.
State Management: Editor/UI state is managed with Zustand via useEditorStore, Server state (pages CRUD, async state) is handled using a dedicated React hook usePages.
Persistence: JSON-Server
Deployment: [نام پلتفرم مثلا Vercel یا Netlify]
✨ ویژگی‌های کلیدی (Key Features)
۱. پنل مدیریت (Admin Dashboard)
مدیریت صفحات (CRUD): قابلیت ایجاد، ویرایش و حذف صفحات با slug اختصاصی.
Visual Builder: امکان انتخاب و چیدمان سکشن‌های مختلف (Hero, Grid, Slider, Content, Footer).
Reordering: قابلیت جابه‌جایی ترتیب سکشن‌ها با استفاده از دکمه‌های کنترلی (Up/Down).
Live Edit: با کلیک روی هر سکشن، فرم تنظیمات باز شده و تغییرات (متن، رنگ، عکس) به صورت آنی مدیریت می‌شوند.
۲. نمای عمومی (Public View)
رندر هوشمند صفحات بر اساس داده‌های دریافت شده از سرور.
استفاده از ساختار PageRenderer واحد برای جلوگیری از تکرار کد (DRY Principle).
طراحی کاملاً Responsive و بهینه شده برای تمام نمایشگرها.
🏗 معماری و اصول توسعه (Architecture)
این پروژه بر اساس اصول SOLID و الگوی Open-Closed طراحی شده است:

Extensibility: برای اضافه کردن یک سکشن جدید (مثلاً FAQ)، تنها کافیست کامپوننت آن تعریف شده و به مپینگ سیستم اضافه شود؛ بدون اینکه نیاز به دستکاری در منطق هسته Builder باشد.
Clean Code: جداسازی کامل لایه Logic از لایه UI.
Component-Based: تمام اجزا (Grid, Slider, SectionHeader) به صورت کامپوننت‌های مستقل و Reuseable طراحی شده‌اند.
🚀 راه اندازی پروژه
۱. نصب وابستگی‌ها:

bash
npm install
۲. اجرای سرور مجازی (JSON-Server):

bash

# در یک ترمینال مجزا

npm run server
۳. اجرای پروژه در حالت توسعه:

bash
npm run dev
🔗 لینک‌های پروژه
نسخه لایو: [لینک دمو را اینجا قرار دهید]
مخزن گیت‌هاب: [لینک مخزن را اینجا قرار دهید]
توسعه داده شده توسط: [ملیحه عرفان منش]

ارائه شده به: تیم فنی کاریار استودیو
