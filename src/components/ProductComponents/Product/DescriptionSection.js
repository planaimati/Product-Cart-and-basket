import React from "react";
import styled from "styled-components";

const DescriptionSection = () => {
  return (
    <StyledDescriptionContainer>
      <StyledPriceContainer />
      <StyledSpecContainer />
      <StyledOrderContainer />
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
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
`;

const StyledSpecContainer = styled.div`
  grid-row: 2 / 3;
  width: 100%;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
`;

const StyledOrderContainer = styled.div`
  grid-row: 3 / 4;
  width: 100%;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
`;

export default DescriptionSection;
