import { useState } from 'react';
import ContentSection from '../content/ContentSection';
import GridSection from '../grid/GridSection';
import '../../styles/sections.css';

export default function SliderSection({ slides = [], title, sectionBg }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide = slides[currentIndex];
  const slideProps = currentSlide.props || {};

  const renderSlide = () => {
    if (currentSlide.type === 'grid') {
      return <GridSection {...slideProps} />;
    }
    // default
    return <ContentSection {...slideProps} />;
  };

  return (
    <section
      className="section slider-parent"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="container">
        {title && <h2 className="slider-main-title">{title}</h2>}

        <div className="slider-horizontal-container">
          <button
            type="button"
            className="slider-nav-btn prev"
            onClick={prevSlide}
          >
            ‹
          </button>

          <div className="slider-active-content">{renderSlide()}</div>

          <button
            type="button"
            className="slider-nav-btn next"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>

        <div className="slider-pagination">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
