import React from "react";
import "./thanks.css";
import thank from "@/assets/images/images.jpeg";

const Thank = () => {
  return (
    <>
      <section className="login-main-wrapper">
        <div className="main-container">
          <div className="login-process">
            <div className="login-main-container">
              <div className="thankyou-wrapper">
                <h1>
                  <img
                    className="mix-blend-multiply m-auto"
                    src={thank.src}
                    alt="thanks"
                  />
                </h1>
                <p>for contacting us, we will get in touch with you soon... </p>
                <a href="/">Back to home</a>
                <div className="clr"></div>
              </div>
              <div className="clr"></div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
      </section>
    </>
  );
};

export default Thank;
