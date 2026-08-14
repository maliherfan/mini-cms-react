export const createDefaultContentProps = () => ({
  title: 'عنوان سکشن',
  subtitle: 'توضیحات مربوط به سکشن در اینجا قرار می‌گیرد.',
  textAlign: 'right',
  textColor: '#1f2937',
  ctaText: '',
  ctaLink: '',
  ctaColor: '#f59e0b',
  customItems: [],
  contentType: 'none',
  image: '',
  layout: 'image-right',
  imageProportion: 'ratio-7-3',
  faqItems: [],
  backgroundImage: '',
  backgroundOverlay: 'rgba(0, 0, 0, 0.4)',
  backgroundColor: '#ffffff',
  minHeight: '320px',
});

export const createDefaultGridProps = () => ({
  title: 'نمونه کارها',
  mainIcon: '',
  secondaryIcon: '',
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
  cardsLayout: 'simple',
  cardsStyled: false,
  iconSize: 'medium',
  columns: '3',
  mobileColumns: 1,
  ctaText: 'شروع همکاری',
  ctaLink: '/contact',
  ctaColor: '#f59e0b',
  backgroundColor: '#ffffff',
  backgroundImage: '',
  bordering: false,
});

export const createDefaultHeaderProps = () => ({
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
});

export const createDefaultFaqProps = () => ({
  title: 'سوالات متداول',
  items: [
    {
      question: 'فرایند همکاری چگونه است؟',
      answer: 'ابتدا نیازسنجی انجام می‌شود و سپس به مرحله اجرا می‌رسیم.',
    },
  ],
  backgroundColor: '#ffffff',
});

export const createDefaultFooterProps = () => ({
  logo: '',
  description: 'تمامی حقوق این سایت متعلق به کاریار استودیو است.',
  socialLinks: [
    { icon: '', link: '#' },
    { icon: '', link: '#' },
  ],
  backgroundColor: '#ffffff',
  textColor: '#000000',
});

export const createDefaultSliderProps = () => ({
  title: 'اسلایدر هوشمند',
  subtitle: 'توضیحات',
  backgroundColor: '#f8fafc',
  variant: 'single',
  autoplay: false,
  autoplayDelay: '3000',
  showArrows: true,
  showDots: true,
  slides: [
    {
      type: 'content',
      contentProps: {
        ...createDefaultContentProps(),
        title: 'عنوان اسلاید محتوایی',
        subtitle: 'توضیحات اسلاید محتوایی',
      },
      gridProps: createDefaultGridProps(),
    },
  ],
  cardsPerSlide: '5',
  cards: {
    ...createDefaultGridProps(),
    title: 'کارت‌ها',
    subtitle: 'این بخش به صورت sliding window بین آیتم‌ها حرکت می‌کند.',
    columns: '5',
  },
});

export const sectionDefaults = {
  header: createDefaultHeaderProps,
  content: createDefaultContentProps,
  grid: createDefaultGridProps,
  faq: createDefaultFaqProps,
  footer: createDefaultFooterProps,
  slider: createDefaultSliderProps,
};

export const getDefaultSectionProps = (type) => {
  const createProps = sectionDefaults[type];

  if (!createProps) {
    console.warn(`Unknown section type: ${type}`);
    return {};
  }

  return createProps();
};
