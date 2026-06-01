import '../../styles/sections.css';

export default function GridSection({
  mainIcon,
  secondaryIcon,
  title,
  subtitle,
  items = [],
  columns = 3,
  ctaText,
  ctaLink,
  ctaColor,
  backgroundColor,
  backgroundImage,
  cardsLayout = 'simple',
  iconSize = 'medium',
  bordering = false,
}) {
  return (
    <section
      className="section"
      style={{
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={`container ${bordering ? 'bordered-grid' : ''}`}>
        {mainIcon ? (
          <div className="grid-header-styled">
            <div className="header-title-row">
              <div className="header-title-row-primary">
                <img src={mainIcon} className="main-section-icon" alt="" />
                {title && <h2>{title}</h2>}
              </div>
              {secondaryIcon && <img src={secondaryIcon} alt="" />}
            </div>
            {subtitle && (
              <p className="content-subtitle section-description">{subtitle}</p>
            )}
          </div>
        ) : (
          <div className="grid-header-simple">
            {title && <h2 className="content-title">{title}</h2>}
            {subtitle && <p className="content-subtitle">{subtitle}</p>}
          </div>
        )}
        <div
          className="grid-wrapper"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`grid-card layout-${cardsLayout} ${!!item.backgroundImage ? 'has-card-bg' : ''}`}
              style={{
                backgroundColor: item.backgroundColor,
                backgroundImage: item.backgroundImage
                  ? `url(${item.backgroundImage})`
                  : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.title || 'card-icon'}
                  className={`size-${iconSize}`}
                />
              )}
              <div className="grid-card-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {ctaText && ctaLink && (
          <a
            className="grid-cta"
            href={ctaLink || '#'}
            style={{ background: ctaColor }}
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
