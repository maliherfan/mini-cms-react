export const sectionDefaults = {
  header: {
    logo: '',
    menuItems: [
      { label: 'خانه', link: '/' },
      { label: 'خدمات', link: '/services' },
      { label: 'درباره ما', link: '/about' },
      { label: 'تماس با ما', link: '/contact' },
    ],
    backgroundColor: '#ffffff',
    textColor: '#111111',
    sticky: true,
  },

  content: {
    title: 'عنوان سکشن',
    subtitle: 'توضیحات مربوط به سکشن در اینجا قرار می‌گیرد.',
    ctaText: '',
    ctaLink: '',
    ctaColor: '#f59e0b',
    textAlign: 'right',
    textColor: '#1f2937',
    layout: 'image-right',
    image: '',
    imageProportion: 'ratio-7-3',
    contentType: 'image',
    faqItems: [],
    customItems: [],
    backgroundImage: '',
    backgroundOverlay: 'rgba(0, 0, 0, 0.4)',
    minHeight: '320px',
    backgroundColor: '#ffffff',
  },

  grid: {
    title: 'نمونه کارها',
    subtitle: 'توضیحات مربوط به سکشن در اینجا قرار می‌گیرد.',
    items: [
      {
        icon: '',
        title: 'پروژه شماره یک',
        text: 'توضیح کوتاه درباره این پروژه.',
        backgroundImage: '',
        backgroundColor: '',
      },
    ],
    iconSize: 'medium',
    columns: '3',
    ctaText: 'شروع همکاری',
    ctaLink: '/contact',
    // backgroundColor: '#ffffff',
  },

  faq: {
    title: 'سوالات متداول',
    items: [
      {
        question: 'فرایند همکاری چگونه است؟',
        answer: 'ابتدا نیازسنجی انجام می‌شود و سپس به مرحله اجرا می‌رسیم.',
      },
    ],
    backgroundColor: '#ffffff',
  },

  footer: {
    logo: '',
    description: 'تمامی حقوق این سایت متعلق به کاریار استودیو است.',
    socialLinks: [
      { icon: 'linkedin', link: '#' },
      { icon: 'instagram', link: '#' },
    ],
    backgroundColor: '#ffffff',
    textColor: '#000000',
  },

  slider: {
    title: 'اسلایدر هوشمند',
    sectionBg: '#f8fafc',
    slides: [
      {
        type: 'content',
        props: {
          title: 'اسلاید محتوایی',
          subtitle: 'توضیحات پیش‌فرض اسلاید محتوایی',
          image: '',
          layout: 'image-right',
          backgroundColor: '#ffffff',
        },
      },
      {
        type: 'grid',
        props: {
          title: 'اسلاید گرید',
          subtitle: 'توضیحات گرید',
          columns: '3',
          items: [],
          backgroundColor: '#f1f5f9',
        },
      },
    ],
  },
};

export const getDefaultSectionProps = (type) => {
  return sectionDefaults[type] || {};
};
