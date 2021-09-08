import React from "react";
import styled from "styled-components";

import { GooglePlus } from "@styled-icons/boxicons-logos/GooglePlus";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { FacebookF } from "@styled-icons/fa-brands/FacebookF";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Mail } from "@styled-icons/fluentui-system-filled/Mail";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";
import { Location } from "@styled-icons/fluentui-system-filled/Location";

const FooterTemplate = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledInfoContainer>
          <StyledTitle>Information</StyledTitle>
          <StyledInfoItem>
            <StyledPhone /> 1 (123) 444 33 22
          </StyledInfoItem>
          <StyledInfoItem info={1}>
            <StyledMail /> collection.@info.com
          </StyledInfoItem>
          <StyledInfoItem info={1}>
            <StyledLocation />
            ua. nicolaev st.lenina 123
          </StyledInfoItem>
          <SocialMediaContainer>
            <StyledFacebook />
            <StyledInstagram />
            <StyledTwitter />
            <StyledGoogle />
          </SocialMediaContainer>
        </StyledInfoContainer>
        <StyledInfoContainer>
          <StyledTitle>Information</StyledTitle>
          <StyledInfoItem>About us</StyledInfoItem>
          <StyledInfoItem>Our history</StyledInfoItem>
          <StyledInfoItem>Contacts</StyledInfoItem>
          <StyledInfoItem>Delivery info</StyledInfoItem>
        </StyledInfoContainer>
        <StyledInfoContainer>
          <StyledTitle>Shop</StyledTitle>
          <StyledInfoItem>Oxford</StyledInfoItem>
          <StyledInfoItem>On laces</StyledInfoItem>
          <StyledInfoItem>Without laces</StyledInfoItem>
          <StyledInfoItem>Stock</StyledInfoItem>
        </StyledInfoContainer>
        <StyledInfoContainer>
          <StyledTitle>Account</StyledTitle>
          <StyledInfoItem>My account</StyledInfoItem>
          <StyledInfoItem>Wish list</StyledInfoItem>
          <StyledInfoItem>Newsletter</StyledInfoItem>
          <StyledInfoItem>My order</StyledInfoItem>
        </StyledInfoContainer>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 381px;
  background: linear-gradient(180deg, #287194 0%, #0f435b 100%);
`;

const StyledFooterContainer = styled.div`
  width: 1150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 0 auto;
  padding: 80px;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

const StyledTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: right;
  color: #ffffff;
  text-transform: uppercase;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledFacebook = styled(FacebookF)`
  height: 20px !important;
  width: 11px !important;
  color: #ffffff;
`;
const StyledInstagram = styled(Instagram)`
  height: 20px !important;
  width: 20px !important;
  color: #ffffff;
`;
const StyledTwitter = styled(Twitter)`
  height: 22px !important;
  width: 18px !important;
  color: #ffffff;
`;
const StyledGoogle = styled(GooglePlus)`
  height: 20px !important;
  width: 19.19px !important;
  color: #ffffff;
`;

const StyledMail = styled(Mail)`
  height: 20px !important;
  width: 19.19px !important;
  color: #ffffff;
  margin-right: 10px;
`;

const StyledPhone = styled(TelephoneFill)`
  height: 20px !important;
  width: 19.19px !important;
  color: #ffffff;
  margin-right: 10px;
`;
const StyledLocation = styled(Location)`
  height: 20px !important;
  width: 19.19px !important;
  color: #ffffff;
  margin-right: 10px;
`;

const StyledInfoItem = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-transform: ${(props) => (props.info ? "lowercase" : "capitalize")};
  color: #ffffff;
  opacity: 0.85;
`;
export default FooterTemplate;
