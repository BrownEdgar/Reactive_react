import { useState } from "react";
import Modal from "./Modal/Modal";

import "./Auth.scss";

export default function Auth() {
  const [data, setData] = useState([
    {
      id: 1,
      email: "test1@gmail.com",
      password: "test1",
    },
    {
      id: 2,
      email: "test2@gmail.com",
      password: "test2",
    },
    {
      id: 3,
      email: "test3@gmail.com",
      password: "test3",
    },
  ]);

  const [eyeOpen, setEyeOPen] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [logined, setLogined] = useState(false);

  const handleEyeClick = () => {
    setEyeOPen(!eyeOpen);
  };

  const handleCloseModal = (logined) => {
    setModalIsOpen(!modalIsOpen);

    if (logined) {
      setLogined(true);
    } else {
      setLogined(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    const isUser = data.some((user) => {
      return user.email === email.value && user.password === password.value;
    });

    if (isUser) {
      handleCloseModal(true);
      e.target.reset();
      return;
    }

    if (email.value && password.value) {
      handleCloseModal(false);
      e.target.reset();
    }
  };

  return (
    <>
      {modalIsOpen ? (
        <Modal
          handleCloseModal={handleCloseModal}
          title={
            logined ? "You are succesfully logined!" : "There is no such user! Please try again!"
          }
          logined={logined ? true : false}
        />
      ) : null}
      <div className="auth">
        <form className="auth__form form-auth" onSubmit={handleSubmit}>
          <div className="form-auth__group form-auth__email">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              className="form-auth__email"
              placeholder="Email *"
              autoComplete="off"
            />
          </div>

          <div className="form-auth__group form-auth__password">
            <label htmlFor="password"></label>
            <input
              type={`${eyeOpen ? "password" : "text"}`}
              id="password"
              className="form-auth__password-input"
              placeholder="Password *"
              autoComplete="off"
            />

            <img
              src={`./public/icons/${eyeOpen ? "eye" : "eye-slash"}.svg`}
              alt="eye"
              onClick={handleEyeClick}
            />
          </div>

          <div className="form-auth__helper">
            <a href="!#">Forgot Password?</a>
          </div>

          <input
            type="submit"
            className="form-auth__login-btn"
            value="Log in"
          />

          <div className="form-auth__other other-form-auth">
            <div className="other-form-auth__facebook">
              <img src="./public/icons/facebook.svg" alt="facebook" />
              <a href="!#">Log in with Facebook</a>
            </div>
            <div className="other-form-auth__google">
              <img src="./public/icons/google.svg" alt="google" />
              <a href="!#">Log in with Google</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
