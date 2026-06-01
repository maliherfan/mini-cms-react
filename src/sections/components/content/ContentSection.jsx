import '../../styles/sections.css';
import FAQSection from '../faq/FAQSection';

export default function ContentSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  ctaColor,
  textAlign = 'right',
  textColor,
  layout = 'image-right',
  image,
  imageProportion = 'ratio-7-3',
  backgroundImage,
  backgroundOverlay = 'rgba(0, 0, 0, 0.4)',
  minHeight = '320px',
  backgroundColor,
  contentType = 'none',
  faqItems = [],
  customItems = [],
}) {
  const renderList = () => (
    <div className="simple-list">
      {customItems.map((it, idx) => (
        <div className="list-item" key={idx}>
          {it.icon && <img src={it.icon} className="list-icon" alt="" />}
          <div className="list-content">
            <div className="list-title">{it.title}</div>
            {it.text && <div className="list-text">{it.text}</div>}
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <section
      style={{
        backgroundColor,
        minHeight,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      }}
      className={`section content-section content-${layout} ${backgroundImage ? 'has-bg' : ''} ${imageProportion}`}
    >
      {backgroundImage && (
        <div
          className="content-overlay"
          style={{ backgroundColor: backgroundOverlay }}
        />
      )}
      <div className="container content-inner">
        <div
          className="content-text-side"
          style={{ textAlign, color: textColor }}
        >
          <h2 className="content-title">{title}</h2>
          <p className="content-subtitle">{subtitle}</p>
          {customItems.length > 0 && renderList()}
          {ctaText && ctaLink && (
            <a
              className="content-cta"
              href={ctaLink || '#'}
              style={{ background: ctaColor }}
            >
              {ctaText}
            </a>
          )}
        </div>

        {contentType === 'faq' ? (
          <div className="content-image-wrapper">
            <FAQSection items={faqItems} />
          </div>
        ) : (
          image &&
          !backgroundImage && (
            <div className={`content-image-wrapper`}>
              <img
                src={image}
                alt={title || 'content image'}
                className="content-image"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}
