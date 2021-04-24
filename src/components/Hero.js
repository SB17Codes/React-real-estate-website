import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &&:before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

const SliderButtons = styled.div`
  position: absolute;
  display: flex;
  bottom: 50px;
  right: 50px;
`;

const arrowBtns = css`
  color: #fff;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50px;
  background: #000d1a;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  position: relative;
  z-index: 10;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowBtns}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowBtns}
`;

function Hero({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeouts = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 400 });

    //  const NextSlide = () =>{
    //    setCurrent(current === length - 1 ? 0 : current + 1);
    //     }
    //     timeouts.current = setTimeout(NextSlide, 5000);

    //     return function (){
    //         if(timeouts.current){
    //         clearTimeout(timeouts.current)
    //         }
    //     }
  }, []);

  const NextSlide = () => {
    if (timeouts.current) {
      clearTimeout(timeouts.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const PrevSlide = () => {
    if (timeouts.current) {
      clearTimeout(timeouts.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider

                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center"
                >
                  <HeroImage src={slide.image} alt={slide.alt} />

                  <HeroContent>
                    <h1 data-aos="fade-down" 
                        data-aos-delay="200"
                        data-aos-duration="800">{slide.title}</h1>
                    <p  data-aos="fade-down" 
                        data-aos-delay="400"
                        data-aos-duration="700"> {slide.price} </p>

                    <Button data-aos="zoom-out" 
                        data-aos-delay="150"
                       data-aos-duration="900"
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}

        <SliderButtons>
          <PrevArrow onClick={PrevSlide} />
          <NextArrow onClick={NextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
