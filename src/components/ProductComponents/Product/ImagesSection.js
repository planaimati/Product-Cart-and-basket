import React from "react";
import styled from "styled-components";
import mainImage from "../../../assets/productImage.png";

const ImagesSection = () => {
  return (
    <StyledImagesContainer>
      <MainImageContainer>
        <StyledMainImage src={mainImage} />
      </MainImageContainer>
      <StyledSmallImagesContainer>
        <SmallImageContainer>
          <SmallImage src={mainImage} />
        </SmallImageContainer>
        <SmallImageContainer>
          <SmallImage src={mainImage} mirror={1} />
        </SmallImageContainer>
        <SmallImageContainer>
          <SmallImage src={mainImage} />
        </SmallImageContainer>
      </StyledSmallImagesContainer>
    </StyledImagesContainer>
  );
};

const StyledImagesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  grid-column: 1 / 2;
`;

const MainImageContainer = styled.div`
  width: 100%;
  height: 474px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
`;

const StyledMainImage = styled.img`
  height: 380px;
  width: 380px;
`;

const StyledSmallImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SmallImageContainer = styled.div`
  width: 170px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
`;

const SmallImage = styled.img`
  width: 80px;
  height: 80px;
  transform: ${(props) => (props.mirror ? "scaleX(-1)" : null)};
`;

export default ImagesSection;
