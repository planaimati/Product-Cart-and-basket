import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

const Testimonials = () => {
  return (
    <StyledTestimonialsContainer>
      <StyledTitleContainer>
        <StyledTitle>testimonials</StyledTitle>
      </StyledTitleContainer>
      <StyledTestimonials>
        <StyledArrow>
          <StyledArrowR />
        </StyledArrow>
        <StyledSingleTestimonial>
          <StyledTestimonialTitleContainer>
            <StyledTestimonialTitle>Martha Schmidt</StyledTestimonialTitle>
            <StyledRatingContainer>
              <StyledTestimonialDate>05.08.2021</StyledTestimonialDate>
              <StyledStarFilled />
              <StyledStarFilled />
              <StyledStarFilled />
              <StyledStarFilled />
              <StyledStarEmpty />
            </StyledRatingContainer>
          </StyledTestimonialTitleContainer>

          <StyledTestimonialTextContainer>
            <StyledText>
              The pear chair is a kind of frameless furniture. This is a
              pear-shaped bag chair, which can be for children and adults. The
              product consists of two covers (internal and external), as well as
              a filler. Among professionals, it is called bin bag.
            </StyledText>
          </StyledTestimonialTextContainer>
        </StyledSingleTestimonial>
        <StyledSingleTestimonial>
          <StyledTestimonialTitleContainer>
            <StyledTestimonialTitle>Martha Schmidt</StyledTestimonialTitle>
            <StyledRatingContainer>
              <StyledTestimonialDate>05.08.2021</StyledTestimonialDate>
              <StyledStarFilled />
              <StyledStarFilled />
              <StyledStarFilled />
              <StyledStarFilled />
              <StyledStarEmpty />
            </StyledRatingContainer>
          </StyledTestimonialTitleContainer>

          <StyledTestimonialTextContainer>
            <StyledText>
              The pear chair is a kind of frameless furniture. This is a
              pear-shaped bag chair, which can be for children and adults. The
              product consists of two covers (internal and external), as well as
              a filler. Among professionals, it is called bin bag.
            </StyledText>
          </StyledTestimonialTextContainer>
        </StyledSingleTestimonial>
        <StyledArrow>
          <StyledArrowL />
        </StyledArrow>
      </StyledTestimonials>
      <StyledCommentText>
        <StyledText>
          The pear chair is a kind of frameless furniture. This is a pear shaped
          bag chair, which can be for children and adults. The product consists
          of two covers.
        </StyledText>
      </StyledCommentText>
      <StyledButton>leave a testimonial</StyledButton>
    </StyledTestimonialsContainer>
  );
};

const StyledTestimonialsContainer = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
const StyledTestimonials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSingleTestimonial = styled.div`
  width: 500px;
  height: 226px;
  background: #ffffff;
  box-shadow: 0px 2px 7px 2px rgba(19, 53, 60, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

const StyledText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #5c5c5c;
  opacity: 0.7;
`;

const StyledTestimonialTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledRatingContainer = styled.div`
  display: flex;
  height: 20px;
  align-items: flex-end;
  justify-content: flex-end;
`;

const StyledStarEmpty = styled(Star)`
  color: #328863;
  height: 14px !important;
  width: 14px !important;
`;
const StyledStarFilled = styled(StarFill)`
  color: #328863;
  height: 14px !important;
  width: 14px !important;
`;

const StyledTestimonialTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: #000000;
`;

const StyledTestimonialDate = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 10px;
  text-transform: capitalize;
  color: #5c5c5c;
  opacity: 0.4;
  margin-right: 10px;
`;

const StyledTestimonialTextContainer = styled.div`
  width: 100%;
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

const StyledCommentText = styled.div`
  width: 429px;
  height: 66px;
  margin: 30px 0 30px 60px;
`;

const StyledButton = styled.button`
  width: 269px;
  height: 40px;
  border: 2px solid #287194;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  background: #287194;
  color: #ffffff;
  margin-left: 60px;
`;

export default Testimonials;
