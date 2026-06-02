import { NavLink } from 'react-router-dom';
import '../../styles/sections.css';
import './header.css';

export default function HeaderSection(props) {
  const {
    logo,
    menuItems = [],
    backgroundColor,
    textColor,
    sticky = true,
  } = props;
  const cssVars = {
    '--header-bg': backgroundColor,
    '--header-color': textColor,
  };
  return (
    <header
      className={`header-section ${sticky ? 'header-sticky' : ''}`}
      style={cssVars}
    >
      <div className="container header-inner">
        {logo && <img className="header-logo" src={logo} alt="logo" />}

        <nav className="header-nav">
          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) =>
                `header-link ${isActive ? 'is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
