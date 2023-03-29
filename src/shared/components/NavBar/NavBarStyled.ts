import styled from 'styled-components';

export const NavContainer = styled.div`
  height: 140px;
  z-index: 100;
  position: sticky;
  padding-top: 33px;
`;

export const NavMenu = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 15%;
  padding: 2% 5%;
  font-family: var(--main-font-regular);
  font-size: 1.3rem;
  position: fixed;
  background-image: url('/assets/images/Visiwig-Grid.svg');
  top: 0;
  @media screen and (max-width: 426px) {
    width: 100%;
    height: 22%;
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    gap: 6rem;

    &.active {
      right: 0;
      transition: 350ms;
    }
  }
`;

export const NavMenuLogo = styled.div`
  width: 125px;
  justify-content: flex-start;
  display: flex;
  border-radius: 88px;
  background-color: #fff7eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 426px) {
    width: 37%;

    &.active {
      width: 64%;
      display: flex;
      z-index: 0;
      visibility: hidden;
    }
  }
`;

export const NavMenuItems = styled.ul`
  display: flex;
  gap: 6rem;
  color: #232323;

  li {
    margin-bottom: 1rem;
    text-align: center;
  }

  li {
    &.active {
      display: none;
    }

    a {
      color: black;
      text-decoration: none;

      &:active {
        color: #ff642f;
      }

      &:hover {
        background: linear-gradient(to right, #ff6e7f, #bfe9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }

  @media screen and (max-width: 426px) {
    position: fixed;
    display: flow-root;
    top: 0;
    left: -200%;
    transition: 550ms;

    &.active {
      width: 25%;
      height: 19%;
      position: absolute;
      left: 38%;
      display: flow-root;
      font-size: 1.5rem;
      top: 26%;
    }
  }
`;

export const NavMenuToggle = styled.li`
  display: none;

  a {
    .menu-bars {
      font-size: 2rem;
    }
  }

  &.active {
    display: none;
  }

  @media screen and (max-width: 426px) {
    display: block;

    &.active {
      display: none;
    }
  }
`;

export const NavMenuClose = styled.li`
  display: none;

  a {
    .menu-close {
      font-size: 2rem;
    }
  }

  &.active {
    display: none;
  }

  @media screen and (max-width: 426px) {
    display: block;
  }
`;

export const NavMenuIcons = styled.ul`
  display: none;

  @media screen and (max-width: 426px) {
    display: block;
  }
`;
