import { useEffect, useMemo, useState } from 'react';
import ContentSection from '../content/ContentSection';
import GridSection from '../grid/GridSection';
import '../../styles/sections.css';
import './slider.css';

export default function SliderSection(props) {
  const {
    slides = [],
    cards = {},
    title,
    subtitle,
    backgroundColor,
    variant = 'single', // 'single', 'cards', 'testimonial'
    autoplay = false,
    autoplayDelay = '3000',
    showArrows = true,
    showDots = true,
    cardsPerSlide = '5',
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const desktopCount = Math.max(1, Number(cardsPerSlide) || 5);
  const visibleCount = useMemo(() => {
    if (variant === 'cards') {
      return isMobile ? 3 : desktopCount;
    }
    if (variant === 'testimonial') {
      return isMobile ? 1 : desktopCount;
    }
    return desktopCount;
  }, [variant, isMobile, desktopCount]);
  const cardsItems = Array.isArray(cards?.items) ? cards.items : [];

  const totalSlides = useMemo(() => {
    if (variant === 'cards' || variant === 'testimonial') {
      if (cardsItems.length <= visibleCount) return cardsItems.length ? 1 : 0;
      return cardsItems.length - visibleCount + 1;
    }

    return Array.isArray(slides) ? slides.length : 0;
  }, [variant, cardsItems, visibleCount, slides]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [variant]);

  useEffect(() => {
    if (totalSlides > 0 && currentIndex >= totalSlides) {
      setCurrentIndex(totalSlides - 1);
    } else if (totalSlides === 0) {
      setCurrentIndex(0);
    }
  }, [totalSlides]);

  useEffect(() => {
    if (!autoplay || totalSlides <= 1) return;

    const delay = parseInt(autoplayDelay, 10) || 3000;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, delay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, totalSlides]);

  const nextSlide = () => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderContent = () => {
    if (variant === 'cards' || variant === 'testimonial') {
      const currentItems = cardsItems.slice(
        currentIndex,
        currentIndex + visibleCount
      );
      return (
        <GridSection {...cards} items={currentItems} columns={visibleCount} />
      );
    }
    // Single Slide Logic
    const currentSlide = slides[currentIndex];
    if (!currentSlide) return null;
    return currentSlide.type === 'grid' ? (
      <GridSection {...(currentSlide.gridProps || {})} />
    ) : (
      <ContentSection {...(currentSlide.contentProps || {})} />
    );
  };

  const isTestimonial = variant === 'testimonial';

  const cssVars = {
    '--slider-bg': backgroundColor,
  };

  return (
    <section
      className={`section slider-section variant-${variant}`}
      style={cssVars}
    >
      <div className="container slider-layout-wrapper">
        {/* right-side testimonial header */}
        <div className="slider-header-block">
          {title && <h2 className="section-title">{title}</h2>}
          {isTestimonial && subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
          {isTestimonial && totalSlides > 1 && showArrows && (
            <div className="slider-custom-controls">
              <button className="nav-btn prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="nav-btn next" onClick={nextSlide}>
                ›
              </button>
            </div>
          )}
        </div>

        <div className="slider-main-area">
          <div className="slider-horizontal-container">
            {!isTestimonial && totalSlides > 1 && showArrows && (
              <button className="slider-nav-btn prev" onClick={prevSlide}>
                ‹
              </button>
            )}

            <div className="slider-active-content">
              <div className="slider-slide-frame"> {renderContent()}</div>
            </div>

            {!isTestimonial && totalSlides > 1 && showArrows && (
              <button className="slider-nav-btn next" onClick={nextSlide}>
                ›
              </button>
            )}
          </div>

          {!isTestimonial && showDots && totalSlides > 1 && (
            <div className="slider-pagination">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
