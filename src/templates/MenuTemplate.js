import React from "react";
import styled from "styled-components";
import CartIcon from "../components/CartIcon";
import Catalog from "../components/Catalog";

const MenuTemplate = () => {
  return (
    <StyledNav>
      <StyledNavContainer>
        <StyledLogoContainer>
          <StyledLogo>LOGO</StyledLogo>
        </StyledLogoContainer>
        <StyledLine />
        <StyledMenuContainer>
          <StyledMenu>
            <StyledMenuItem>Categories</StyledMenuItem>
            <StyledMenuItem>Payment</StyledMenuItem>
            <StyledMenuItem>Warranty</StyledMenuItem>
            <StyledMenuItem>Credit</StyledMenuItem>
          </StyledMenu>
        </StyledMenuContainer>
        <Catalog />
        <StyledLine />
        <CartIcon />
      </StyledNavContainer>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #287194;
`;

const StyledNavContainer = styled.div`
  width: 1150px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto 0 auto;
`;

const StyledMenuContainer = styled.div`
  width: 80%;
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  width: 100%;
`;

const StyledMenuItem = styled.li`
  width: 77px;
  line-height: 19px;
  font-size: 1.6rem;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  margin: 30px;
`;

const StyledLogoContainer = styled.div`
  margin-right: 30px;
`;

const StyledLogo = styled.p`
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
`;

const StyledLine = styled.div`
  width: 1px;
  height: 40px;
  background: #ffffff;
  opacity: 0.3;
`;

export default MenuTemplate;
