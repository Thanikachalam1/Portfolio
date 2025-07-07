import React, { useState } from "react";
import "./contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openEmail = () => {
    const email = "thanikachalamgms10@gmail.com";
    const subject = "Let's Connect!";
    const body = "Hi Thanikachalam, I found your portfolio and would like to connect.";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://getform.io/f/azynwzeb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setAlert("Message sent successfully!");
        setTimeout(() => setAlert(""), 4000); 
      } else {
        setAlert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setAlert("An error occur#ffa500. Please try again later.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Let's Connect</h2>
          <p>Feel free to drop a message or reach me on these platforms.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/thanikachalam-a-7a3b32314/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Thanikachalam1" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://leetcode.com/u/Thanikachalam3/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            <a onClick={openEmail} role="button" tabIndex={0} aria-label="Send Email" style={{ cursor: "pointer" }}>
              <FaEnvelope />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
          {alert && <div className="custom-alert">{alert}</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
