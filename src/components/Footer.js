import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";

const media = {
  responsive: "@media (max-width :768px)",
};

const media1 = {
  responsive: "@media (max-width : 361px)",
};

const FooterWrapper = styled.section`
  background-color: #000d1a;
  width: 100%;
  height: 80vh;

${media.responsive} {
  padding: 3rem 0;
  height: auto;

}
`;


const FooterInfo = styled.div`
  height: 70%;
  margin: 0rem 3rem 0rem 3rem ;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

${media.responsive}{
  flex-direction:column;
}
`;


const FooterSlogan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 52px;
  overflow: hidden;

${media.responsive} {
  margin: 0 auto;
  justify-content: center;
  font-size: 32px;
}

${media1.responsive} {
  margin: 0 auto;
  justify-content: center;
  font-size: 22px;
}
`;


const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.responsive} {
    margin: 0 auto;
    margin-bottom: 2rem;
  }

`;


const LinksLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinksRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterSocial = styled.div`
margin: 0rem 3rem 0rem 3rem ;
display: flex;
align-items: center;
justify-content: space-around;

${media.responsive} {
 margin: 0 auto;
 align-items: center;
 justify-content: center;

}

`;


const SocialLogos = styled.div`
position: relative;
right:170px;
align-items: center;
justify-content: flex-start;

i{
  font-size: 34px;
  color: #cd853f;
  margin-right: 20px;

  &:hover {
    transform: translateY(-2px)

  }


  ${media1.responsive}{
    font-size: 20px;
    margin-right: 10px;
  }
}

${media.responsive} {
  right: 0;
}
 `

;


const ChatBtn = styled.div`
position: relative;
left:170px;
align-items: center;
justify-content: flex-start;

${media.responsive} {
  left: 0;
}
`;


const A = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-top: 1.3rem;
  margin-right: 1rem;

  ${media1.responsive} {
    font-size: 13px;
  }
  h1 {
    color: grey;
    margin-bottom: 16px;
  }
`;

const Button1 = styled(Button)`
  &:hover {
    background-color: #cd853f;
  }
  
  ${media1.responsive} {
    padding: 5px 10px;
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterInfo>
        <FooterSlogan>
          <h1>
            Let's Find <br /> Your Dream Home :D
          </h1>
        </FooterSlogan>
        <FooterLinks>
          <LinksLeft>
            <A to="/">
              <h1>CONTACT US</h1>
            </A>
            <A to="/">FAQ</A>
            <A to="/">SUPPORT</A>
            <A to="/">QUESTIONS</A>
          </LinksLeft>
          <LinksRight>
            <A to="/">
              <h1>OFFICES</h1>
            </A>
            <A to="/">UNITED STATES</A>
            <A to="/">CANADA</A>
            <A to="/">EUROPE</A>
          </LinksRight>
        </FooterLinks>
      </FooterInfo>
      <FooterSocial>
        <SocialLogos>
          <Link

            to="/"
            target="_blank"
            aria-label="facebook "
            className="social-icon-link facebook"

            
          >
            <i className="fab fa-facebook-f"> </i>
          
            
          </Link>

          <Link
            to="//www.instagram.com/yazid68bzz/"
            target="_blank"
            aria-label="instagram "
            className="social-icon-link instagram"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            to="/"
            target="_blank"
            aria-label="Youtube "
            className="social-icon-link youtube"
          >
            <i className="fab fa-youtube"></i>
          </Link>

          <Link
            to="/"
            target="_blank"
            aria-label="twitter "
            className="social-icon-link twitter"
          >
            <i className="fab fa-twitter"></i>
          </Link>
        </SocialLogos>
        <ChatBtn>
          <Button1 to="/contact">
            Let's Chat
            <Arrow />
          </Button1>
        </ChatBtn>
      </FooterSocial>
    </FooterWrapper>
  );
}

export default Footer;
