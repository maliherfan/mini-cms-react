import '../../styles/sections.css';
import './grid.css';

export default function GridSection(props) {
  const {
    mainIcon,
    secondaryIcon,
    title,
    subtitle,
    items = [],
    columns = 3,
    mobileColumns = 1,
    ctaText,
    ctaLink,
    ctaColor,
    backgroundColor,
    backgroundImage,
    cardsLayout = 'simple',
    cardsStyled = false,
    iconSize = 'medium',
    bordering = false,
  } = props;

  const cssVars = {
    '--grid-bg': backgroundColor || 'transparent',
    '--grid-bg-image': backgroundImage ? `url(${backgroundImage})` : 'none',
    '--grid-cols': columns || 3,
    '--grid-mobile-cols': mobileColumns || 1,
    '--grid-cta-bg': ctaColor || '#f28c18',
  };
  return (
    <section className="section grid-section" style={cssVars}>
      <div className={`container ${bordering ? 'bordered-grid' : ''}`}>
        {mainIcon ? (
          <div className="grid-header-styled">
            <div className="header-title-row">
              <div className="header-title-row-primary">
                <img src={mainIcon} className="main-section-icon" alt="" />
                {title && <h2 className="section-title">{title}</h2>}
              </div>
              {secondaryIcon && (
                <img
                  className="main-section-secondary-icon"
                  src={secondaryIcon}
                  alt=""
                />
              )}
            </div>
            {subtitle && (
              <p className="section-subtitle section-description">{subtitle}</p>
            )}
          </div>
        ) : (
          <div className="grid-header-simple">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="grid-wrapper">
          {items.map((item, i) => {
            const cardVars = {
              '--card-bg': item.backgroundColor,
              '--card-bg-image': item.backgroundImage
                ? `url(${item.backgroundImage})`
                : 'none',
            };
            return (
              <div
                key={i}
                className={`grid-card layout-${cardsLayout}  ${cardsStyled ? 'card-styled' : ''} ${!!item.backgroundImage ? 'has-card-bg' : ''}`}
                style={cardVars}
              >
                {cardsLayout === 'mixed' ? (
                  <div className="grid-card-header">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.title || 'card-icon'}
                        className={`size-${iconSize}`}
                      />
                    )}
                    <h3>{item.title}</h3>
                  </div>
                ) : (
                  item.icon && (
                    <img
                      src={item.icon}
                      alt={item.title || 'card-icon'}
                      className={`size-${iconSize}`}
                    />
                  )
                )}
                <div className="grid-card-content">
                  {cardsLayout !== 'mixed' && <h3>{item.title}</h3>}
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {ctaText && ctaLink && (
          <a className="grid-cta" href={ctaLink || '#'}>
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
