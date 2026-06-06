import '../../styles/sections.css';
import './footer.css';

export default function FooterSection(props) {
  const {
    logo,
    description,
    socialLinks = [],
    backgroundColor,
    textColor,
  } = props;
  const cssVars = {
    '--footer-bg': backgroundColor,
    '--footer-color': textColor,
  };
  return (
    <footer className="footer-section" style={cssVars}>
      <div className="container">
        <div className="footer-inner">
          {logo && <img className="footer-logo" src={logo} alt="logo" />}

          <div className="footer-social">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.link}>
                {item.icon && (
                  <img
                    className="footer-social-logo"
                    src={item.icon}
                    alt="social"
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {description && <p>{description}</p>}
      </div>
    </footer>
  );
}
