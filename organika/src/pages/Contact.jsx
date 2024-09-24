import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleContact(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(text, name);

    const copy = { ...contact };
    copy[name] = text;
    setContact(copy);
  }
  function sendMessage() {
    console.log(contact);
  }

  return (
    <div className="contact page">
      <h1>Want to Get in Touch?</h1>
      <h5>We love growing with feedback, water us with your thoughts!</h5>
      <div className="form">
        <div>
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onBlur={handleContact}
            name="name"
          ></input>
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            onBlur={handleContact}
            name="email"
          ></input>
        </div>
        <div>
          <label className="form-label">Message</label>
          <textarea
            class="form-control"
            rows="3"
            onBlur={handleContact}
            name="message"
          ></textarea>
        </div>
        <div className="controls">
          <button className="btn btn-outline-primary" onClick={sendMessage}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
