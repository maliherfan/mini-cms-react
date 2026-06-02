import { useState } from 'react';
import ContentSection from '../content/ContentSection';
import GridSection from '../grid/GridSection';
import '../../styles/sections.css';
import './slider.css';

export default function SliderSection(props) {
  const { slides = [], title, backgroundColor } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide = slides[currentIndex];

  const renderSlide = () => {
    if (!currentSlide) return null;

    if (currentSlide.type === 'grid') {
      return <GridSection {...(currentSlide.gridProps || {})} />;
    }

    if (currentSlide.type === 'content') {
      return <ContentSection {...(currentSlide.contentProps || {})} />;
    }

    return null;
  };

  const cssVars = {
    '--slider-bg': backgroundColor,
  };

  return (
    <section className="section slider-section" style={cssVars}>
      <div className="container">
        {title && <h2 className="slider-main-title">{title}</h2>}

        <div className="slider-horizontal-container">
          <button
            type="button"
            className="slider-nav-btn prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div className="slider-active-content">
            <div className="slider-slide-frame">{renderSlide()}</div>
          </div>

          <button
            type="button"
            className="slider-nav-btn next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className="slider-pagination">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
