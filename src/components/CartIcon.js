import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const CartIcon = (props) => {
  const { cartItems } = useContext(AppContext);
  return (
    <StyledIconContainer>
      <StyledSingleIconContainer>
        <StyledAmount>{3}</StyledAmount>
        <StyledHeartIcon />
      </StyledSingleIconContainer>
      <StyledSingleIconContainer>
        <Link to="/cart">
          <StyledAmount>{cartItems.length}</StyledAmount>
          <StyledCartIcon />
        </Link>
      </StyledSingleIconContainer>
      <StyledSingleIconContainer>
        <StyledUserIcon />
      </StyledSingleIconContainer>
    </StyledIconContainer>
  );
};

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`;

const StyledSingleIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledLink = styled(Link)``;

const StyledHeartIcon = styled(AiFillHeart)`
  color: white;
  width: 20px;
  height: 20px;
`;
const StyledCartIcon = styled(FaShoppingCart)`
  color: white;
  width: 20px;
  height: 20px;
`;
const StyledUserIcon = styled(FaUser)`
  color: white;
  width: 20px;
  height: 20px;
`;

const StyledAmount = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  top: -7.5px;
  right: -15px;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

export default CartIcon;
