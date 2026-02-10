import React, { useState } from "react";
import "./contactus.css";

const Contactus = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    msg: "",
  })
  console.log(formData, "Test")
  const handlechange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
      <section className="contact">
        <div className="contact-container">
          {/* Left Info */}
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              Have a question, suggestion, or travel story to share? We’d love
              to hear from you.
            </p>

            <div className="info-box">
              <p>
                <strong>Email:</strong> himdiaries08@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8894066633
              </p>
              <p>
                <strong>Location:</strong> Himachal Pradesh, India
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form className="contact-form">
            <h3>Send a Message</h3>

            <input type="text" name="username" placeholder="Your Name"
              onChange={handlechange} value={formData.username} required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handlechange} value={formData.email}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              onChange={handlechange} value={formData.message}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contactus;
