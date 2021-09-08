import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import Spec from "./Spec";
import Order from "./Order";

const DescriptionSection = () => {
  return (
    <StyledDescriptionContainer>
      <StyledPriceContainer>
        <StyledText>Pear chair 599.00</StyledText>
        <StyledAddDateContainer>
          <StyledAddDate>
            <StyledSpan>Added:</StyledSpan>05.08.2021
          </StyledAddDate>
          <StyledIcon />
        </StyledAddDateContainer>
      </StyledPriceContainer>
      <Spec />
      <Order />
    </StyledDescriptionContainer>
  );
};

const StyledDescriptionContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 2 / 3;
  display: grid;
  gap: 5%;
  grid-template-rows: 70px 1fr 1fr;
`;
const StyledPriceContainer = styled.div`
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
  padding: 5%;
`;

const StyledText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  transform: capitalize;
  color: #000000;
`;

const StyledAddDateContainer = styled.div`
  display: flex;
`;

const StyledAddDate = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #5c5c5c;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  transform: capitalize;
`;

const StyledSpan = styled.p`
  opacity: 0.4;
  display: inline-block;
  margin-right: 5px;
  font-size: 16px;
  line-height: 19px;
  color: #5c5c5c;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  transform: capitalize;
`;

const StyledIcon = styled(AiFillHeart)`
  color: #328863;
  height: 17px;
  width: 20px;
  margin-left: 10px;
`;

export default DescriptionSection;
