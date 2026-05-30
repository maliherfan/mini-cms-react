import '../../styles/sections.css';

export default function FooterSection({
  logo,
  description,
  socialLinks = [],
  backgroundColor,
  textColor,
}) {
  return (
    <footer
      className="footer"
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className="container">
        <div className="footer-inner">
          {logo && <img src={logo} alt="logo" />}

          <div className="footer-social">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.link}>
                {item.icon && <img src={item.icon} alt="social" />}
              </a>
            ))}
          </div>
        </div>

        <p>{description}</p>
      </div>
    </footer>
  );
}
