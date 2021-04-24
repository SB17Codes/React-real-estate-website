import React from "react";
import styled from "styled-components";
import ImageOne from "../images/img-19.jpg";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { useForm } from "react-hook-form";

const media = {
  responsiveL: "@media (max-width : 1258px)",
  reponseM: "@media (max-width : 768px)",
  responsiveS: "@media (max-width: 475px)",
  responsiveInfo: "@media (max-width: 300px)",
};

const Phone = styled(FiSmartphone)`
  color: #cd853f;
  font-size: 20px;
  position: relative;
  top: 4px;
`;

const Mail = styled(HiOutlineMail)`
  color: #cd853f;
  position: relative;
  top: 4px;
  font-size: 20px;
`;

const Globe = styled(AiOutlineGlobal)`
  color: #cd853f;
  position: relative;
  top: 4px;
  font-size: 20px;
`;

const MessageIcon = styled(BiMessageSquareDetail)`
  margin-left: 1rem;
  position: relative;
  top: 4px;
`;

const ContactIcon = styled(IoMdContact)`
  margin-left: 1rem;
  position: relative;
  top: 4px;
  color: #fff;
`;

const CfWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${ImageOne});
`;

const CfTitle = styled.div`
  margin-top: 100px;
  width: 300px;
  height: 50px;
  background-color: #000d1a;
  color: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.responsiveL} {
    width: 300px;
  }

  ${media.responsives} {
    width: 200px;
    font-size: 16px;
  }
`;

const CfContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 0 0 50px 0;

  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.4);

  ${media.responsiveL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${media.responsiveS} {
    width: 100%;
  }
`;

const CfInput = styled.div`
  width: 70%;
  height: 750px;
  background-color: #cd853f;
  border-radius: 50px 0 0 0;

  ${media.responsiveL} {
    width: 100%;
    height: 100%;
    border-radius: 0;
    order: 2;
  }

  p {
    margin-top: 5px;
    color: #c1121f;
  }

  h1 {
    color: #fff;
    margin: 30px 30px 0 30px;
  }

  form {
    display: grid;
    padding: 30px;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    input {
      font-weight: bold;
      padding-left: 1rem;
      font-size: 16px;

      &::placeholder {
        font-weight: bold;
        color: #b7b7a4;
        margin-left: 20px;
      }
    }

    .form-input-btn {
      font-weight: bold;
      background: #000d1a;
      white-space: nowrap;
      outline: none;
      border: none;
      width: 170px;
      cursor: pointer;
      text-decoration: none;
      transition: 0.3s;
      height: 50px;
      border-radius: 0 20px 0 20px;
      color: #fff;
      margin-top: 10px;

      &:hover {
        transform: translateY(-2px);
        background: #161a1d;
      }
    }
    ${media.responsiveS} {
      padding: 20px 15px;
    }

    .form-label {
      color: #fff;
      font-weight: bold;
      padding-bottom: 10px;
    }
    .form-inputs {
      display: flex;
      flex-direction: column;
    }

    .form-input {
      display: inline-block;
      border: none;
      outline: none;
      border-radius: 7px;
      height: 60px;
    }

    #fname {
      grid-column: span 2;
      ${media.responsiveL} {
        grid-column: 1 / -1;
      }
    }
    #lname {
      grid-column: span 2;
      ${media.responsiveL} {
        grid-column: 1 / -1;
      }
    }
    #email {
      grid-column: 1 / -1;
    }
    #number {
      grid-column: 1 / -1;
    }
    #message {
      grid-column: 1 / -1;
    }
    #textarea {
      font-size: 16px;
      font-weight: bold;
      padding-top: 1rem;
      padding-left: 1rem;
      height: 120px;
      &::placeholder {
        font-weight: bold;
        color: #b7b7a4;
      }
    }
    #button {
      grid-column: 1 / -1;
    }
  }
`;

const CfInfo = styled.div`
  width: 30%;
  height: 750px;
  background-color: #000d1a;
  border-radius: 0 0 50px 0;

  ${media.responsiveL} {
    width: 100%;
    height: 250px;
    border-radius: 0;
    order: 1;
  }
`;

const ContInfo = styled.div`
  height: 60%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.responsiveL} {
    height: 100%;
  }

  ${media.responsiveInfo} {
    font-size: 12px;
  }

  h1 {
    color: #cd853f;
  }
`;

const Info = styled.div`
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Social = styled.div`
  i {
    font-size: 34px;
    color: #cd853f;
    margin-right: 20px;
    ${media.responsiveInfo} {
      font-size: 26px;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <CfWrapper>
      <CfTitle>
        <h2> Contact Form </h2>
      </CfTitle>
      <CfContainer>
        <CfInput>
          <h1>
            {" "}
            Send a message <MessageIcon />{" "}
          </h1>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data)
            })}
          >
            <div id="fname" className="form-inputs">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="text"
                {...register("fname", { required: true })}
                placeholder="Enter your First Name"
              />
              {errors.fname && <p>Firstname is required *</p>}
            </div>
            <div id="lname" className="form-inputs">
              <label className="form-label">Last Name</label>
              <input
                className="form-input"
                type="text"
                {...register("lname", { required: true })}
                placeholder="Enter your Last Name"
              />
              {errors.lname && <p>Lastname is required *</p>}
            </div>
            <div id="email" className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
              />
              {errors.email && <p>Email is required *</p>}
            </div>
            <div id="number" className="form-inputs">
              <label className="form-label">Phone Number</label>
              <input
                className="form-input"
                type="tel"
                {...register(
                  "number",
                  { required: true },
                  { ValueAsNumber: true }
                )}
                placeholder="Enter your Number"
              />
              {errors.number && <p>Phone number is required *</p>}
            </div>
            <div id="message" className="form-inputs">
              <label className="form-label">Message</label>
              <textarea
                id="textarea"
                className="form-input"
                {...register("message", { required: true })}
                placeholder="Confirm your password"
              />
              {errors.message && <p>Message is required *</p>}
            </div>
            <button id="button" className="form-input-btn" type="submit">
              SEND
            </button>
          </form>
        </CfInput>

        <CfInfo>
          <ContInfo>
            <h1>
              {" "}
              Contact Info <ContactIcon />{" "}
            </h1>

            <Info>
              <p>
                {" "}
                <Phone /> 0752533790{" "}
              </p>
              <p>
                {" "}
                <Mail /> Seifboukherouf@gmail.com{" "}
              </p>
              <a href="/">
                {" "}
                <Globe /> www.Elixr.com
              </a>
            </Info>

            <Social>
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
            </Social>
          </ContInfo>
        </CfInfo>
      </CfContainer>
    </CfWrapper>
  );
}

export default ContactForm;
