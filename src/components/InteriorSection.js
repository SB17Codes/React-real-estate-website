import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const media = {
  responsive: " @media (max-width :768px) ",
};

const Section = styled.section`
  width: 100%;
  height: 120vh;
  background-color: #000d1a;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.responsive} {
    height: 160vh;
  }
`;

const ContentWrapper = styled.div`
width: 100%;
height: 60vh;
display:flex;
flex-direction: row wrap;
background-color: #fff;

${media.responsive}{
  height:auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}
}
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 3rem 4rem 3rem 6rem;

  ${media.responsive} {
    width: 80%;
    margin: 0px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 2rem;
    ${media.responsive} {
      font-size: 28px;
      margin-bottom: 2rem;
    }
  }

  p {
    font-size: 18px;
    margin: 0.7rem 0rem;
  }
`;

const Image = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  align-self: center;
  justify-content: center;

  ${media.responsive} {
    width: 25%;
    height: 40vh;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;
    bottom: 50px;
  }

  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    border-radius: 10px;

    transition: all 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
     transform: scale(1.01);
   }

    ${media.responsive} {
    }
  }
`;

const Button1 = styled(Button)`
  margin-top: 1rem;

  ${media.responsive} {
    margin-bottom: 4rem;
  }
  &:hover {
    background-color: #cd853f;
  }
`;

function InteriorSection({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
}) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Section>
      <ContentWrapper>
        <Content
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>

          <Button1 to="/homes">{buttonLabel}</Button1>
        </Content>
        <Image
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <img src={image} alt="homes" />
        </Image>
      </ContentWrapper>
    </Section>
  );
}

export default InteriorSection;
