# 🚀 Website Builder Engine

<div align="right">

این پروژه یک موتور ویرایشگر صفحات وب (Website Builder) است که با هدف پیاده‌سازی یک راهکار منعطف برای مدیریت و نمایش داینامیک سکشن‌های مختلف طراحی شده است. تمرکز اصلی پروژه بر معماری ماژولار (Scalable Architecture) و قابلیت اضافه کردن کامپوننت‌های جدید بدون تغییر در هسته مرکزی سیستم است.

---

## 🛠 تکنولوژی‌های مورد استفاده

- **Core:** React.js
- **Styling:** Component-leve Plain CSS
- **State Management:** Zustand (useEditorStore)
- **Data Handling:** usePages (React Hooks)
- **Persistence:** JSON-Server

---

## ✨ ویژگی‌های کلیدی (Key Features)

### ۱. پنل مدیریت (Admin Dashboard)

- **مدیریت صفحات (CRUD):** ایجاد، ویرایش و حذف صفحات با slug اختصاصی.
- **Visual Builder:** چیدمان سکشن‌های مختلف (Hero, Grid, Slider, Content, Footer).
- **Reordering:** جابه‌جایی ترتیب سکشن‌ها با استفاده از دکمه‌های کنترلی.
- **Live Edit:** ویرایش آنی تغییرات (متن، رنگ، عکس) با کلیک روی هر سکشن.

### ۲. نمای عمومی (Public View)

- **رندر هوشمند:** نمایش صفحات بر اساس داده‌های دریافت شده از سرور.
- **ساختار DRY:** استفاده از `PageRenderer` واحد برای جلوگیری از تکرار کد.
- **Responsive:** طراحی کاملاً بهینه برای تمامی دستگاه‌ها.

---

## 🏗 معماری و اصول توسعه (Architecture)

این پروژه بر اساس اصول **SOLID** و الگوی **Open-Closed** طراحی شده است:

- **Extensibility:** قابلیت افزودن آسان سکشن‌های جدید (مانند FAQ) بدون تغییر در منطق هسته.
- **Clean Code:** جداسازی کامل لایه Logic از لایه UI.
- **Component-Based:** طراحی کامپوننت‌های مستقل و Reuseable.

---

## 🚀 راه‌اندازی پروژه

**۱. نصب وابستگی‌ها:**
npm install
**2. اجرای سرور مجازی (JSON-Server)**
npm run server
**3. اجرای پروژه در حالت توسعه:**
npm run dev

</div>
