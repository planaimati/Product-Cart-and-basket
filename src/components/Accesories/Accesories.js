import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import accesoriesImg from "../../assets/accesories.png";

const Accesories = (props) => {
  const { title } = props;
  return (
    <StyledAccesoriesContainer>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledArrowContainer>
          <StyledArrow>
            <StyledArrowR />
          </StyledArrow>
          <StyledArrow>
            <StyledArrowL />
          </StyledArrow>
        </StyledArrowContainer>
      </StyledTitleContainer>
      <StyledItemsContainer>
        <StyledContainer>
          <StyledDiscound>20%</StyledDiscound>
          <StyledImage src={accesoriesImg} />
          <StyledDescContainer>
            <StyledName left={1}>
              <StyledFatText>Watch</StyledFatText>
              <StyledNormalText>Mi</StyledNormalText>
            </StyledName>
            <StyledName>
              <StyledFatText>199.99</StyledFatText>
              <StyledNormalText cross={1}>269.00</StyledNormalText>
            </StyledName>
          </StyledDescContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledDiscound>20%</StyledDiscound>
          <StyledImage src={accesoriesImg} />
          <StyledDescContainer>
            <StyledName left={1}>
              <StyledFatText>Watch</StyledFatText>
              <StyledNormalText>Mi</StyledNormalText>
            </StyledName>
            <StyledName>
              <StyledFatText>199.99</StyledFatText>
              <StyledNormalText cross={1}>269.00</StyledNormalText>
            </StyledName>
          </StyledDescContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledDiscound>20%</StyledDiscound>
          <StyledImage src={accesoriesImg} />
          <StyledDescContainer>
            <StyledName left={1}>
              <StyledFatText>Watch</StyledFatText>
              <StyledNormalText>Mi</StyledNormalText>
            </StyledName>
            <StyledName>
              <StyledFatText>199.99</StyledFatText>
              <StyledNormalText cross={1}>269.00</StyledNormalText>
            </StyledName>
          </StyledDescContainer>
        </StyledContainer>
        <StyledContainer>
          <StyledDiscound>20%</StyledDiscound>
          <StyledImage src={accesoriesImg} />
          <StyledDescContainer>
            <StyledName left={1}>
              <StyledFatText>Watch</StyledFatText>
              <StyledNormalText>Mi</StyledNormalText>
            </StyledName>
            <StyledName>
              <StyledFatText>199.99</StyledFatText>
              <StyledNormalText cross={1}>269.00</StyledNormalText>
            </StyledName>
          </StyledDescContainer>
        </StyledContainer>
      </StyledItemsContainer>
    </StyledAccesoriesContainer>
  );
};

const StyledAccesoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  justify-content: center;
`;

const StyledTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
`;

const StyledTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-transform: capitalize;
  color: #000000;
`;

const StyledArrowContainer = styled.div`
  height: 40px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledArrow = styled.div`
  height: 40px;
  width: 40px;
  background: #287194;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledArrowR = styled(IoIosArrowBack)`
  height: 20px;
  width: 13px;
  color: #ffffff;
`;

const StyledArrowL = styled(IoIosArrowForward)`
  height: 20px;
  width: 13px;
  color: #ffffff;
`;

const StyledItemsContainer = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  width: 270px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledImage = styled.img`
  height: 116px;
  width: 108;
`;

const StyledDiscound = styled.div`
  width: 70px;
  height: 39px;
  background-color: #328863;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  font-family: Roboto;
  font-style: Medium;
  font-size: 16px;
  color: #ffffff;
  margin-top: 10px;
`;

const StyledDescContainer = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.left ? "flex-start" : "flex-end")};
  justify-content: space-around;
`;

const StyledFatText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;

const StyledNormalText = styled(StyledFatText)`
  font-weight: 500;
  font-size: 16px;
  text-decoration: ${(props) => (props.cross ? "line-through" : "none")};
`;

export default Accesories;
