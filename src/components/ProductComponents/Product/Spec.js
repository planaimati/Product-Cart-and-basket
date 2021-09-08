import React from "react";
import styled from "styled-components";

const Spec = () => {
  return (
    <StyledSpecContainer>
      <StyledSpec>
        <StyledTitle>specifications:</StyledTitle>
        <StyledText>
          The pear chair is a kind of frameless furniture. This is a pear-shaped
          bag chair, which can be for children and adults. The product consists
          of two covers (internal and external), as well as a filler. Among
          professionals, it is called bin bag.
        </StyledText>
      </StyledSpec>
      <StyledColors>
        <StyledTitle>colors:</StyledTitle>
        <StyledColorsRectangles>
          <StyledSingleColor color="#76B0CC" />
          <StyledSingleColor color="#328863" />
          <StyledSingleColor color="#324688" />
          <StyledSingleColor color="#883271" />
        </StyledColorsRectangles>
      </StyledColors>
    </StyledSpecContainer>
  );
};

const StyledSpecContainer = styled.div`
  grid-row: 2 / 3;
  width: 100%;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
  padding: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledSpec = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  width: 100%;
  justify-content: space-between;
`;

const StyledColors = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledColorsRectangles = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: flex-start;
`;

const StyledSingleColor = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${(props) => props.color};
  margin-right: 20px;
`;

const StyledTitle = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: #000000;
`;

const StyledText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #5c5c5c;
`;

export default Spec;
