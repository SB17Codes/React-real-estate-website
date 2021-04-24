import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { RiMenu4Fill } from "react-icons/ri";


const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  font-style: italic;
  position: fixed;
  width: 100%;
  transition: all 0.5s ease-in-out;

  ${(props) => {
    switch (props.bgColor) {
      case "transparent":
     return "background-color: transparent;";
      case "gold":
      return   "background-color: #cd853f";
}
    return "background-color: #00000";

}}
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const MenuBars = styled(RiMenu4Fill)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle, navColor }) => {
  const [bgColor, setbgColor] = useState("");
  
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setbgColor("gold");
    } else {
      setbgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, [bgColor]);

  return (
    <Nav bgColor={bgColor} css={navColor}>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
