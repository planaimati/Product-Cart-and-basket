import React from "react";
import styled from "styled-components";
import productImage from "../../assets/productImage.png";
import { Plus } from "@styled-icons/bootstrap/Plus";
import { Minus } from "@styled-icons/boxicons-regular/Minus";
import { Cross } from "@styled-icons/entypo/Cross";

const BasketItem = (props) => {
  const { id, onDelete } = props;

  console.log(id);
  return (
    <StyledBasketItemContainer>
      <StyledImageContainer>
        <StyledImage src={productImage} />
      </StyledImageContainer>
      <StyledPriceContainer>
        <StyledHeader>Pear chair</StyledHeader>
        <StyledHeader>599.00</StyledHeader>
      </StyledPriceContainer>
      <StyledAddedContainer>
        <StyledAddedText>Added</StyledAddedText>
        <StyledDateText>05.08.2021</StyledDateText>
      </StyledAddedContainer>
      <StyledAmountContainer>
        <StyledIncreaseAmountContainer>
          <StyledMinus />
        </StyledIncreaseAmountContainer>
        <StyledAddedText>01</StyledAddedText>
        <StyledIncreaseAmountContainer>
          <StyledPlus />
        </StyledIncreaseAmountContainer>
      </StyledAmountContainer>
      <StyledTotalContainer>
        <StyledHeader>Total amount</StyledHeader>
        <StyledHeader>599.00</StyledHeader>
      </StyledTotalContainer>
      <StyledLine />
      <StyledIncreaseAmountContainer delete={1} onClick={() => onDelete(id)}>
        <StyledDelete />
      </StyledIncreaseAmountContainer>
    </StyledBasketItemContainer>
  );
};

const StyledBasketItemContainer = styled.div`
  width: 770px;
  height: 110px;
  background: #ffffff;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledImageContainer = styled.div`
  width: 60px;
  height: 60px;
`;
const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
const StyledAddedContainer = styled(StyledPriceContainer)``;
const StyledAmountContainer = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTotalContainer = styled(StyledPriceContainer)``;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
  color: #000000;
`;

const StyledAddedText = styled(StyledHeader)`
  font-size: 16px;
  color: #5c5c5c;
  opacity: 0.4;
`;

const StyledDateText = styled(StyledHeader)`
  color: #5c5c5c;
  font-weight: normal;
  font-size: 16px;
`;

const StyledLine = styled.div`
  width: 1px;
  height: 60px;
  background: #000000;
  opacity: 0.3;
`;

const StyledIncreaseAmountContainer = styled.div`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.delete ? "#08415C" : "#287194")};
  cursor: pointer;
`;

const StyledPlus = styled(Plus)`
  height: 12 !important;
  width: 12 !important;
  color: #ffffff;
`;
const StyledMinus = styled(Minus)`
  height: 2 !important;
  width: 12 !important;
  color: #ffffff;
`;
const StyledDelete = styled(Cross)`
  height: 12 !important;
  width: 12 !important;
  color: #ffffff;
`;

export default BasketItem;
