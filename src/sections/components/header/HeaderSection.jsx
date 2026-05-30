import '../../styles/sections.css';
import { NavLink } from 'react-router-dom';

export default function HeaderSection({
  logo,
  menuItems = [],
  backgroundColor,
  textColor,
  sticky = true,
}) {
  return (
    <header
      className={`header ${sticky ? 'header-sticky' : ''}`}
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className="header-inner">
        {logo && <img src={logo} alt="logo" />}

        <nav className="header-nav">
          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
