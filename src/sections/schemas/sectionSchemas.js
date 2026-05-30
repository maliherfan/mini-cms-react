export const contentFields = [
  { name: 'title', label: 'عنوان', type: 'text' },
  { name: 'subtitle', label: 'متن', type: 'textarea' },

  {
    name: 'textAlign',
    label: 'تراز متن',
    type: 'select',
    options: ['right', 'center', 'left'],
  },
  { name: 'textColor', label: 'رنگ متن', type: 'color' },

  {
    name: 'customItems',
    label: 'آیتم‌های لیست',
    type: 'array',
    itemfields: [
      { name: 'icon', label: 'آیکن (url)', type: 'image' },
      { name: 'title', label: 'عنوان', type: 'text' },
      { name: 'text', label: 'توضیحات (اختیاری)', type: 'textarea' },
    ],
  },
  { name: 'ctaText', label: 'متن دکمه', type: 'text' },
  { name: 'ctaLink', label: 'لینک دکمه', type: 'text' },
  { name: 'ctaColor', label: 'رنگ دکمه', type: 'color' },

  {
    name: 'contentType',
    label: 'نوع محتوا',
    type: 'select',
    options: ['image', 'faq'],
  },

  { name: 'image', label: 'تصویر', type: 'image' },
  {
    name: 'layout',
    label: 'چیدمان (عکس)',
    type: 'select',
    options: ['image-right', 'image-left', 'image-top'],
  },

  {
    name: 'imageProportion',
    type: 'select',
    label: 'نسبت متن به عکس',
    options: ['ratio-8-2', 'ratio-7-3', 'ratio-6-4', 'ratio-5-5', 'ratio-4-6'],
  },

  {
    name: 'faqItems',
    label: 'سوالات متداول (در صورت انتخاب نوع FAQ)',
    type: 'array',
    itemfields: [
      { name: 'question', label: 'سوال', type: 'text' },
      { name: 'answer', label: 'پاسخ', type: 'textarea' },
    ],
  },
  { name: 'backgroundImage', type: 'image', label: 'تصویر پس‌زمینه' },
  { name: 'backgroundOverlay', type: 'color', label: 'رنگ لایه پس‌زمینه' },
  { name: 'backgroundColor', label: 'رنگ پس‌زمینه', type: 'color' },
  { name: 'minHeight', type: 'text', label: 'حداقل ارتفاع' },
];

export const gridFields = [
  { name: 'title', label: 'عنوان بخش', type: 'text' },
  { name: 'mainIcon', label: 'آیکن کنار عنوان', type: 'image' },
  { name: 'secondaryIcon', label: 'آیکن ثانویه ', type: 'image' },
  { name: 'subtitle', label: 'متن', type: 'textarea' },
  {
    name: 'layout',
    label: 'نوع چیدمان کارت‌ها',
    type: 'select',
    options: ['simple', 'horizontal', 'vertical-center', 'styled'],
  },
  {
    name: 'items',
    label: 'آیتم‌ها',
    type: 'array',
    itemfields: [
      { name: 'icon', label: 'آیکن', type: 'image' },
      { name: 'title', label: 'عنوان', type: 'text' },
      { name: 'text', label: 'توضیح', type: 'textarea' },
      { name: 'backgroundImage', label: 'تصویر پس‌زمینه', type: 'image' },
      { name: 'backgroundColor', label: 'رنگ پس‌زمینه', type: 'color' },
    ],
  },
  {
    name: 'iconSize',
    label: 'سایز آیکون‌ها',
    type: 'select',
    options: ['very-small', 'small', 'medium', 'large', 'very-large'],
  },
  {
    name: 'columns',
    label: 'تعداد ستون',
    type: 'select',
    options: ['2', '3', '4', '5', '6', '7'],
  },

  { name: 'ctaText', label: 'متن دکمه (اختیاری)', type: 'text' },
  { name: 'ctaLink', label: 'لینک دکمه', type: 'text' },
  { name: 'ctaColor', label: 'رنگ دکمه', type: 'color' },

  { name: 'backgroundColor', label: 'رنگ پس‌زمینه', type: 'color' },
  { name: 'backgroundImage', label: 'تصویر پس‌زمینه', type: 'image' },
  { name: 'bordering', label: 'کادربندی', type: 'switch' },
];

export const sectionSchemas = {
  header: [
    { name: 'logo', label: 'لوگو', type: 'image' },

    {
      name: 'menuItems',
      label: 'آیتم‌های منو',
      type: 'array',
      itemfields: [
        { name: 'label', label: 'عنوان', type: 'text' },
        { name: 'link', label: 'لینک', type: 'text' },
      ],
    },

    { name: 'backgroundColor', label: 'رنگ پس‌زمینه', type: 'color' },
    { name: 'textColor', label: 'رنگ متن', type: 'color' },
    { name: 'sticky', label: 'هدر چسبان', type: 'switch' },
  ],

  content: contentFields,

  grid: gridFields,

  faq: [
    { name: 'title', label: 'عنوان بخش', type: 'text' },

    {
      name: 'items',
      label: 'سوالات',
      type: 'array',
      itemfields: [
        { name: 'question', label: 'سوال', type: 'text' },
        { name: 'answer', label: 'پاسخ', type: 'textarea' },
      ],
    },

    { name: 'backgroundColor', label: 'رنگ پس‌زمینه', type: 'color' },
  ],

  footer: [
    { name: 'logo', label: 'لوگو', type: 'image' },
    { name: 'description', label: 'توضیح کوتاه', type: 'textarea' },

    {
      name: 'socialLinks',
      label: 'شبکه‌های اجتماعی',
      type: 'array',
      itemfields: [
        {
          name: 'icon',
          label: 'آیکن',
          type: 'image',
        },
        { name: 'link', label: 'لینک', type: 'text' },
      ],
    },

    { name: 'backgroundColor', label: 'رنگ پس‌زمینه', type: 'color' },
    { name: 'textColor', label: 'رنگ متن', type: 'color' },
  ],

  slider: [
    { name: 'title', label: 'عنوان کل اسلایدر', type: 'text' },
    { name: 'sectionBg', label: 'رنگ پس‌زمینه بخش اسلایدر', type: 'color' },
    {
      name: 'slides',
      label: 'اسلایدها',
      type: 'array',
      itemfields: [
        {
          name: 'type',
          label: 'نوع اسلاید',
          type: 'select',
          options: ['content', 'grid'],
        },
        {
          name: 'props',
          label: 'تنظیمات محتوای اسلاید',
          type: 'object',
          fields: [...contentFields, ...gridFields],
          //   fields: [
          //   // فیلدهای مشترک
          //   { name: 'title', label: 'عنوان اسلاید', type: 'text' },
          //   { name: 'subtitle', label: 'توضیحات', type: 'textarea' },
          //   { name: 'backgroundColor', label: 'رنگ پس‌زمینه اسلاید', type: 'color' },
          //   // فیلدهای مختص Content
          //   { name: 'image', label: 'تصویر (برای نوع محتوا)', type: 'image' },
          //   { name: 'layout', label: 'چیدمان تصویر', type: 'select', options: ['image-right', 'image-left', 'image-top'] },
          //   // فیلدهای مختص Grid
          //   { name: 'columns', label: 'تعداد ستون (برای نوع گرید)', type: 'select', options: ['2', '3', '4', '5'] },
          //   {
          //     name: 'items',
          //     label: 'آیتم‌های گرید',
          //     type: 'array',
          //     itemfields: [
          //       { name: 'title', label: 'عنوان', type: 'text' },
          //       { name: 'text', label: 'توضیح', type: 'textarea' },
          //       { name: 'icon', label: 'آیکن', type: 'image' },
          //     ],
          //   },
          // ],
        },
      ],
    },
  ],
};
