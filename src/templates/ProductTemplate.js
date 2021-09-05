import React from "react";
import styled from "styled-components";
import Product from "../components/ProductComponents/Product/Product";

const ProductTemplate = () => {
  return (
    <StyledMain>
      <Product />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default ProductTemplate;
