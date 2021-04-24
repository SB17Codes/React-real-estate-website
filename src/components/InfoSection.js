import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({setOrder}) => (setOrder ? 2 : 1)};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, , 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({setOrder}) => (setOrder ? 1 : 2)};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {

    order: ${({setOrder}) => (setOrder ? 1 : 2)};


  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;

    transition: all 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
     transform: scale(1.02);
   }

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

function InfoSection({
  heading,
  paragraphOne,
  paragraphTwo,
  setOrder,
  image,
  buttonLabel,
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <Container>
        <ColumnLeft setOrder={setOrder}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight
          setOrder={setOrder}
          data-aos="zoom-out"
          data-aos-delay="400"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"
        >
          <img src={image} alt="home"></img>
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default InfoSection;
