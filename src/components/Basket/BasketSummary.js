import React from "react";
import styled from "styled-components";

const BasketSummary = (props) => {
  const { summary, amount } = props;

  return (
    <StyledBasketSummaryContainer>
      <StyledTitle>Your order</StyledTitle>
      <StyledPaymentContainer>
        <StyledPaymentText>
          <StyledText>total amount:</StyledText>
          <StyledText>quantity of goods:</StyledText>
          <StyledText>form of payment:</StyledText>
        </StyledPaymentText>
        <StyledPaymentNumbers>
          <StyledText black={1}>{summary}</StyledText>
          <StyledText black={1}>{amount}</StyledText>
          <StyledText black={1}>Cash</StyledText>
        </StyledPaymentNumbers>
      </StyledPaymentContainer>
      <StyledLine />
      <StyledDeliveryContainer>
        <StyledText>Delivery registration</StyledText>
        <StyledButton dark={0}>fill in the form</StyledButton>
      </StyledDeliveryContainer>
      <StyledLine />
      <StyledOrderContainer>
        <StyledTitle>Amount to be paid</StyledTitle>
        <StyledButton dark={1}>make an order</StyledButton>
        <StyledText>I agree to the Privacy Policy</StyledText>
      </StyledOrderContainer>
    </StyledBasketSummaryContainer>
  );
};

const StyledBasketSummaryContainer = styled.div`
  width: 370px;
  height: 520px;
  background: #ffffff;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  margin-left: 30px;
`;

const StyledPaymentContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledPaymentText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const StyledPaymentNumbers = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const StyledDeliveryContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const StyledOrderContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const StyledTitle = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  color: #000000;
  align-self: flex-start;
`;

const StyledText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${(props) => (props.black ? "#000000" : "#5c5c5c")};
`;

const StyledLine = styled.div`
  width: 310px;
  height: 1px;
  background: #000000;
  opacity: 0.3;
`;

const StyledButton = styled.button`
  width: 310px;
  height: 40px;
  border: 2px solid #287194;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: ${(props) => (!props.dark ? "#287194" : "white")};
  background-color: ${(props) => (props.dark ? "#287194" : "white")};
  margin-right: ${(props) => (!props.dark ? "25px" : null)};
`;
export default BasketSummary;
