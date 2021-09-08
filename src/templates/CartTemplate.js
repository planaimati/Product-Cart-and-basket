import React, { useContext } from "react";
import styled from "styled-components";
import Accesories from "../components/Accesories/Accesories";
import BasketSummary from "../components/Basket/BasketSummary";
import BasketItem from "../components/Basket/BasketItem";
import { AppContext } from "../context/AppContext";

const CartTemplate = () => {
  const { cartItems, deleteItemFromCart, totalValue } = useContext(AppContext);
  return (
    <StyledCartContainer>
      <StyledTitleContainer>
        <StyledTitle>Basket</StyledTitle>
      </StyledTitleContainer>
      <StyledBasketContainer>
        <StyledBasketItems>
          {cartItems.map((item) => {
            return (
              <BasketItem
                amount={item.amount}
                key={item.id}
                id={item.id}
                added={item.added}
                price={item.price}
                onDelete={deleteItemFromCart}
              />
            );
          })}
        </StyledBasketItems>
        <BasketSummary
          summary={totalValue}
          amount={cartItems.length}
        ></BasketSummary>
      </StyledBasketContainer>
      <Accesories title="Recommended products"></Accesories>
    </StyledCartContainer>
  );
};

const StyledCartContainer = styled.div`
  min-height: 150vh;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledBasketContainer = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
`;

const StyledTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-transform: capitalize;
  color: #000000;
`;

const StyledBasketItems = styled.div`
  width: 770px;
`;

export default CartTemplate;
