import FAQSection from '../faq/FAQSection';
import '../../styles/sections.css';
import './content.css';

export default function ContentSection(props) {
  const {
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
  } = props;

  const cssVars = {
    '--content-bg': backgroundColor,
    '--content-min-height': minHeight,
    '--content-bg-image': backgroundImage ? `url(${backgroundImage})` : 'none',
    '--overlay-bg': backgroundOverlay,
    '--text-align': textAlign,
    '--text-color': textColor,
    '--cta-bg': ctaColor,
  };
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
      style={cssVars}
      className={`section content-section content-${layout} ${backgroundImage ? 'has-bg' : ''} ${imageProportion} ${contentType === 'faq' ? 'is-faq' : ''}`}
    >
      {backgroundImage && <div className="content-overlay" />}
      <div className="container content-inner">
        <div className="content-text-side">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          {customItems.length > 0 && renderList()}
          {ctaText && ctaLink && (
            <a className="content-cta" href={ctaLink || '#'}>
              {ctaText}
            </a>
          )}
        </div>

        {contentType === 'faq' ? (
          <div className="content-image-wrapper">
            <FAQSection items={faqItems} />
          </div>
        ) : (
          image && (
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
