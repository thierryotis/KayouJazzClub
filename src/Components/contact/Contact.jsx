import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ee2a9fc9-cf90-4e51-91b1-5c14dca2cc80");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact container">
      <div className="contact-col">
        <h3>
          Contact US
        </h3>
        <p>
          We’d love to hear from you! Whether you have questions, want to get
          involved, or simply want to connect, reach out to us:
        </p>
        <ul>
          <li>
            info@kayoujazzclub.com
          </li>
          <li>
            +237 691 141 359 / +237 6 51 72 66 34
          </li>
          <li>
            Yaoundé, Zone Cacaoyère, Fougerolles
          </li>
        </ul>
      </div>
      <div className="contact-col pt">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Phone</label>
          <input
            type="email"
            name="Email"
            placeholder="Enter your phone number"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
export default Contact;
