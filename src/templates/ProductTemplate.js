import React from "react";
import styled from "styled-components";
import Product from "../components/ProductComponents/Product/Product";
import Accesories from "../components/Accesories/Accesories";
import Testimonials from "../components/Testimonials/Testimonials";

const ProductTemplate = () => {
  return (
    <StyledMain>
      <Product />
      <Testimonials />
      <Accesories title="accesories"></Accesories>
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
