import React from 'react';
import contactSVG from "./contact.svg";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="img">
        <img className="svg" src={contactSVG} height="450px" width="450px" />
      </div>
      <div className="wrapper">
        <div className="contact__container">
          <div className="form-container">
            <div className="contact__title">
              <h2>Contact us<hr /></h2>
            </div>
            <form className="contact__form">
              <p>Name</p>
              <input className="contact__form-input" type="text" />

              <p>Email</p>
              <input className="contact__form-input" type="text" />

              <p>Message</p>
              <textarea className="contact__form-textarea" type="text"></textarea>

              <input type="submit" value="Send message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
