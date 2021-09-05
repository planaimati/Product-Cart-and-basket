import React from "react";
import styled from "styled-components";
import ImagesSection from "./ImagesSection";
import DescriptionSection from "./DescriptionSection";

const Product = () => {
  return (
    <StyledProductContainer>
      <StyledHeaderContainer>
        <StyledHeader>Product</StyledHeader>
      </StyledHeaderContainer>
      <StyledDetailsContainer>
        <ImagesSection />
        <DescriptionSection />
      </StyledDetailsContainer>
    </StyledProductContainer>
  );
};

const StyledProductContainer = styled.div`
  width: 100%;
  height: 692px;
  display: flex;
  flex-direction: column;
`;

const StyledHeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledHeader = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-transform: capitalize;
  color: #000000;
`;

const StyledDetailsContainer = styled.div`
  height: 90%;
  width: 100%;
  display: grid;
  gap: 3%;
  grid-template-columns: 1fr 1fr;
`;

export default Product;
