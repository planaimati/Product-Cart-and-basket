import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const Order = () => {
  const { addItemToCart } = useContext(AppContext);
  return (
    <StyledOrderContainer>
      <StyledTitle>Product price</StyledTitle>
      <StyledFormContainer>
        <StyledPaymentContainer>
          <StyledSmallTitle>Payment method:</StyledSmallTitle>
          <StyledInputsContainer>
            <StyledInputContainer>
              <StyledInput type="checkbox" name="payment"></StyledInput>
              <StyledLabel htmlFor="payment">Cash</StyledLabel>
            </StyledInputContainer>
            <StyledLine />
            <StyledInputContainer>
              <StyledInput type="checkbox" name="payment"></StyledInput>
              <StyledLabel htmlFor="payment">Credit</StyledLabel>
            </StyledInputContainer>
            <StyledLine />
            <StyledInputContainer>
              <StyledInput type="checkbox" name="payment"></StyledInput>
              <StyledLabel htmlFor="payment">Certificate</StyledLabel>
            </StyledInputContainer>
          </StyledInputsContainer>
        </StyledPaymentContainer>
        <StyledDeliveryContainer>
          <StyledSmallTitle>Delivery service:</StyledSmallTitle>
          <StyledInputsContainer delivery={1}>
            <StyledInputContainer>
              <StyledInput type="checkbox" name="payment"></StyledInput>
              <StyledLabel htmlFor="payment">Delivery</StyledLabel>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledInput type="checkbox" name="payment"></StyledInput>
              <StyledLabel htmlFor="payment">SelfExport</StyledLabel>
            </StyledInputContainer>
          </StyledInputsContainer>
        </StyledDeliveryContainer>
      </StyledFormContainer>
      <StyledButtonsContainer>
        <StyledButton onClick={addItemToCart}>add to basket</StyledButton>
        <StyledButton dark={1}>make an order</StyledButton>
      </StyledButtonsContainer>
    </StyledOrderContainer>
  );
};

const StyledOrderContainer = styled.div`
  grid-row: 3 / 4;
  width: 100%;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTitle = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  color: #000000;
  margin-right: 15px;
`;

const StyledSmallTitle = styled(StyledTitle)`
  color: #5c5c5c;
  font-size: 16px;
  display: block;
  width: 25%;
`;

const StyledFormContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const StyledPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const StyledDeliveryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledInputsContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  position: relative;
  padding-left: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: #5c5c5c;

  opacity: 0.7;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 28px;
    height: 28px;
    top: -4.5px;
    left: 0;
    cursor: pointer;
    border: 1px solid #5c5c5c;
  }
`;

const StyledLine = styled.div`
  width: 1px;
  height: 28px;
  left: 1246px;
  top: 781px;
  background: #5c5c5c;
  opacity: 0.3;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  width: 250px;
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

export default Order;
