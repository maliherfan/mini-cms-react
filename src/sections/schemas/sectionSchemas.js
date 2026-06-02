export const contentFields = [
  { name: 'title', label: 'عنوان', type: 'text' },
  { name: 'subtitle', label: 'متن', type: 'textarea' },

  {
    name: 'textAlign',
    label: 'تراز متن',
    type: 'select',
    options: ['none', 'right', 'center', 'left'],
  },
  { name: 'textColor', label: 'رنگ متن', type: 'color' },

  { name: 'ctaText', label: 'متن دکمه', type: 'text' },
  { name: 'ctaLink', label: 'لینک دکمه', type: 'text' },
  { name: 'ctaColor', label: 'رنگ دکمه', type: 'color' },
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

  {
    name: 'contentType',
    label: 'نوع محتوا',
    type: 'select',
    options: ['none', 'image', 'faq'],
  },

  {
    name: 'image',
    label: 'تصویر',
    type: 'image',
    showWhen: { field: 'contentType', equals: 'image' },
  },
  {
    name: 'layout',
    label: 'چیدمان (عکس)',
    type: 'select',
    options: ['none', 'image-right', 'image-left', 'image-top'],
    showWhen: { field: 'contentType', equals: 'image' },
  },

  {
    name: 'imageProportion',
    type: 'select',
    label: 'نسبت متن به عکس',
    options: [
      'none',
      'ratio-8-2',
      'ratio-7-3',
      'ratio-6-4',
      'ratio-5-5',
      'ratio-4-6',
    ],
    showWhen: { field: 'contentType', equals: 'image' },
  },

  {
    name: 'faqItems',
    label: 'سوالات متداول (در صورت انتخاب نوع FAQ)',
    type: 'array',
    itemfields: [
      { name: 'question', label: 'سوال', type: 'text' },
      { name: 'answer', label: 'پاسخ', type: 'textarea' },
    ],
    showWhen: { field: 'contentType', equals: 'faq' },
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
    name: 'cardsLayout',
    label: 'نوع چیدمان کارت‌ها',
    type: 'select',
    options: ['simple', 'horizontal', 'vertical-center', 'mixed'],
  },
  { name: 'cardsStyled', label: 'استایل دهی کارت ها', type: 'switch' },
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

const headerFields = [
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
];

const faqFields = [
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
];

const footerFields = [
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
];

export const sectionSchemas = {
  header: headerFields,
  content: contentFields,
  grid: gridFields,
  faq: faqFields,
  footer: footerFields,

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
          options: ['none', 'content', 'grid'],
        },
        {
          name: 'contentProps',
          label: 'تنظیمات اسلاید محتوایی',
          type: 'object',
          fields: contentFields,
          showWhen: {
            field: 'type',
            equals: 'content',
          },
        },
        {
          name: 'gridProps',
          label: 'تنظیمات اسلاید گریدی',
          type: 'object',
          fields: gridFields,
          showWhen: {
            field: 'type',
            equals: 'grid',
          },
        },
      ],
    },
  ],
};
