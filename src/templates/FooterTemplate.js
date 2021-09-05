import React from "react";
import styled from "styled-components";
const FooterTemplate = () => {
  return <StyledFooter>hello from footer</StyledFooter>;
};

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: -150px;
  left: 0;
  height: 150px;
  background-color: #287194;
`;
export default FooterTemplate;
