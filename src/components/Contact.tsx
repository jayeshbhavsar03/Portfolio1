import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:jayesh.bhavsar0401@gmail.com" data-cursor="disable">
                jayesh.bhavsar0401@gmail.com
              </a>
            </p>
            <h4>Contact Number</h4>
            <p>+91 9370821861</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Jayesh Bhavsar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
