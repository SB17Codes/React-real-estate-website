import React, { useEffect } from "react";
import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


const media = {
  responsive:
   ' @media (max-width :768px) ' 
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;


  ${media.responsive}{
    display: flex;
    flex-flow: column nowrap;
    justify-content:center;
    align-items: center;
  }
`;

const ColumnLeft = styled.div`
  width: 50%;
  margin-left: 4rem;
  margin-right: 1rem;

  ${media.responsive}{
    width:90%;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  img {
    width: 100%;
    height: 400px;
    margin-bottom: 18px;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
   }


    ${media.responsive}{
      height:auto;
      object-fit: contain;
  }
  }

  p {
    font-size: 22px;
    font-weight: 400;
  }
`;
const ColumnRight = styled.div`
  width: 50%;
  margin-left: 1rem;
  margin-right: 4rem;
  margin-top: 100px;

  ${media.responsive}{
    width: 90%;
    margin-top: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  img {
    width: 100%;
    height: 400px;
    margin-bottom: 18px;
    object-fit: cover;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;


   &:hover {
    cursor: pointer;
     transform: scale(1.02);
   }

    ${media.responsive}{
    height:auto;
    object-fit: contain;
  }
  }

  p {
    font-size: 22px;
    font-weight: 400;
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  position: relative;
  margin-left: 8px;
  top: 1px;
`;
const Header = styled.div`
  margin-bottom: 100px;
  margin-left: 4rem;

  ${media.responsive}{
    margin-right: 2rem;
    margin-left: 2rem;

  }

  h1{
    ${media.responsive}{
      margin-right: 2rem;
      font-size: 26px;
    }
  }
`;

const Button1 = styled(Link)`
  background: transparent;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  border-radius: 3px;
  padding: 10px 0px;
  color: #000000;
  font-size: ;

  &:hover {
    transform: translateY(-2px);
    color: #161a1d;
  }
`;

function ListingsSection({
  heading,
  image1,
  image2,
  heading2,
  heading3,
  buttonLabel,
  delay,
}) {
  useEffect(() => {
    Aos.init();
  }, [delay]);
  return (
    <Section>
      <Header>
        <h1
          data-aos="slide-right"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-once="true"
        >
          {heading}
        </h1>
      </Header>

      <Container>
        <ColumnLeft
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={image1} alt="home" />

          <p>{heading2}</p>

          <Button1 to="/homes" primary="true">
            {buttonLabel}

            <Arrow />
          </Button1>
        </ColumnLeft>
        <ColumnRight
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img src={image2} alt="home" />

          <p>{heading3}</p>

          <Button1 primary="true" to="/homes">
            {buttonLabel}

            <Arrow />
          </Button1>
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default ListingsSection;
