import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import styled from "styled-components";

const Catalog = () => {
  return (
    <StyledCatalogContainer>
      <StyledCatalog>Catalog</StyledCatalog>
      <StyledArrow></StyledArrow>
    </StyledCatalogContainer>
  );
};

const StyledCatalogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px; ;
`;

const StyledCatalog = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-transform: capitalize;

  color: #ffffff;
`;

const StyledArrow = styled(RiArrowDownSLine)`
  color: white;
  height: 20px;
  width: 16.43px;
`;

export default Catalog;
