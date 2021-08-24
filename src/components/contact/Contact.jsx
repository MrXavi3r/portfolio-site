import "./contact.scss";
import { useState } from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xwkrywaq");

  //NEEDS ATTENTION
  const formValidator = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const messageField = document.getElementById("message-field").value;

    console.log(name, email, messageField, message);

    if(name !== "" && messageField !== '' && email !== ""){
      setMessage('thanks I will reply ASAP!')
      handleSubmit()
    } else {
      setMessage("please check input fields and try again")
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="handshake" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={formValidator}>
          <input type="text" placeholder="Name" name="name" id="name" />
          <input type="email" placeholder="Email" name="email" id="email" />
          <textarea
            placeholder="message"
            name="message"
            id="message-field"
          ></textarea>
          <button type="submit" disabled={state.submitting}>Send</button>
          <span>{message}</span>
        </form>
      </div>
    </div>
  );
}
