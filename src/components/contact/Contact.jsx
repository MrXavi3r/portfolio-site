import "./contact.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageField, setMessageField] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const fetchData = async () => {
    const response = await axios.post("https://formspree.io/f/xwkrywaq", {
      name,
      email,
      messageField,
    });
    console.log(response)
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
      setValidationMessage("please check inputs and try again");
    } else if (!email.includes("@")) {
      validation.style.color = "red";
      setValidationMessage("please verify your email address");
    } else if (!email.includes(".")) {
      validation.style.color = "red";
      setValidationMessage("please verify your email address");
    } else {
      fetchData();
      validation.style.color = "green";
      setName("");
      setEmail("");
      setMessageField("");
      setValidationMessage("Thanks! I will reply ASAP");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="handshake" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="your message here..."
            name="message"
            id="message-field"
            value={messageField}
            onChange={(e) => setMessageField(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
          <span id="validation-message">{validationMessage}</span>
        </form>
      </div>
    </div>
  );
}
