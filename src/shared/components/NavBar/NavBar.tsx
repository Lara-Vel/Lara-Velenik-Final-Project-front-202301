import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { SidebarData } from './NavBarData';
import {
  NavMenu,
  NavMenuLogo,
  NavMenuItems,
  NavMenuClose,
  NavMenuToggle,
  NavMenuIcons,
  NavContainer,
} from './NavBarStyled';

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <NavContainer>
        <NavMenu className="nav-menu">
          <NavMenuLogo
            className={sidebar ? 'nav-menu__logo active' : 'nav-menu__logo'}
          >
            <img src="../assets/images/logo-home.webp" alt="Hypocat logo" />
          </NavMenuLogo>
          <NavMenuItems
            className={sidebar ? 'nav-menu__items active' : 'nav-menu__items'}
          >
            {SidebarData.map(item => {
              return (
                <li key={item.title} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </NavMenuItems>
          <NavMenuIcons
            data-testid="burger"
            className="nav-menu__icons"
            onClick={showSidebar}
          >
            <NavMenuToggle
              className={
                sidebar ? 'nav-menu__toggle active' : 'nav-menu__toggle'
              }
            >
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars
                  style={{
                    color: 'black',
                  }}
                />
              </Link>
            </NavMenuToggle>
            <NavMenuClose
              className={sidebar ? 'nav-menu__close' : 'nav-menu__close active'}
            >
              <Link to="#" className="menu-close">
                <AiIcons.AiOutlineClose
                  style={{
                    color: 'black',
                  }}
                />
              </Link>
            </NavMenuClose>
          </NavMenuIcons>
        </NavMenu>
      </NavContainer>
    </>
  );
};

export default NavBar;
