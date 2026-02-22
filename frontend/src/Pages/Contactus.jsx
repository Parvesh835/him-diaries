import React, { useState } from "react";
import "./Contactus.css";
import useMutation from "../hooks/useMutation";
import { submitContact } from "../service/contactApi";
import toast from "react-hot-toast";

const Contactus = () => {
  const { mutate, isLoading } = useMutation(submitContact);

  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutate(formData);
      toast.success("Message sent successfully!");
      setformData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.message || "Failed to send message");
    }
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handlechange}
              value={formData.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handlechange}
              value={formData.email}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              onChange={handlechange}
              value={formData.message}
              required
            ></textarea>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};


export default Contactus;
