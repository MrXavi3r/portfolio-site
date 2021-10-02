import "./contact.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageField, setMessageField] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const postData = async () => {
    const response = await axios.post("https://formspree.io/f/xwkrywaq", {
      name,
      email,
      messageField,
    });
    console.log(response);
  };

  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setValidationMessage("");
    }, 5000);
    return () => clearTimeout(messageTimeout);
  }, [validationMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = document.getElementById("validation-message");

    if (name === "" || messageField === "" || email === "") {
      validation.style.color = "red";
      setValidationMessage("Oops! looks like you missed some input fields");
    } else if (!email.includes("@") || !email.includes(".")) {
      validation.style.color = "red";
      setValidationMessage("your email seems a bit... sketchy");
    } else {
      postData();
      validation.style.color = "green";
      setName("");
      setEmail("");
      setMessageField("");
      setValidationMessage("Thanks! I will reply ASAP");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="left">
          <form noValidate onSubmit={handleSubmit}>
            <h3>Let's talk</h3>
            <p>
              Want to grab some coffee and ponder the meaning of life with me?
              Fill out this form for me and i'll get back to you.
            </p>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              placeholder="Clark Kent"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Your Email:</label>
            <input
              type="email"
              placeholder="Kal-El@dailyplanet.net"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="name">Your Message:</label>
            <textarea
              placeholder="hey Bruce, this may seem strange, but I need to borrow the jet..."
              name="message"
              id="message-field"
              value={messageField}
              onChange={(e) => setMessageField(e.target.value)}
            ></textarea>
            <button type="submit">Send Message</button>
            <span id="validation-message">{validationMessage}</span>
          </form>
        </div>
        <div className="right">
          <img src="assets/10720.jpg" alt="contact" />
          <div className="meta-container">
            <span className="meta">
              <i class="fas fa-map-marker-alt"></i> Miami, Fl, USA
              <br />
            </span>
            <br />
            <span className="meta">
              <i class="fas fa-envelope"></i> xritch89@hotmail.com
            </span>
          </div>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/xavier-ritch-254238145/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon linkedin">
                <i className="fab fa-linkedin"></i>
              </div>
            </a>
            <a
              href="https://github.com/MrXavi3r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon github">
                <i class="fab fa-github"></i>
              </div>
            </a>
            <a
              href="https://stackoverflow.com/users/12309575/xavi3r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon stack-o">
                <i class="fab fa-stack-overflow"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
