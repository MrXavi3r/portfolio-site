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
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="handshake" />
      </div>
      <div className="right">
        <h2>Message Me</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Clark Kent"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            placeholder="timcook@apple.com"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">Message:</label>
          <textarea
            placeholder="what's on your mind?"
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
