import React, { useState } from "react";
import "./Contact.css";
import ContactLeftVector from "../assets/vector/ContactLeftVector.svg";
import ContactRightVector from "../assets/vector/ContactRightVector.svg";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact({
  leftOrnamentSrc, // optional bottom-left mandala PNG/SVG
  rightOrnamentSrc, // optional top-right mandala PNG/SVG
  email = "vernita@varnanfilms.co.in",
  phone = "+91 98736 84567",
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    setSent(false);

    if (!name || !email || !message) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!validateEmail(email)) {
      toast.warn("Please enter a valid email");
      return;
    }

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        form
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Form Submitted");
        setSent(true);
        setForm({ name: "", email: "", phone: "", message: "" });

        // Optionally reset status after 5s
        setTimeout(() => {
          setSent(false);
        }, 5000);
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
  };

  return (
    <>
      <section className="cv-page" aria-label="Contact">
        {/* main two-column layout */}
        <div className="cv-shell">
          {/* Left copy */}
          <section className="cv-copy" aria-label="Intro">
            <p>
              Whether you have an idea, a question, or simply want to explore
              how V can work together, V’s just a message away.
            </p>
            <p>Let’s catch up over coffee.</p>
            <p>Great stories always begin with a good conversation.</p>
          </section>

          {/* Right form */}
          <section className="cv-formWrap" aria-labelledby="cv-title">
            <h2 id="cv-title" className="cv-title">
              Join the Story
            </h2>
            <p className="cv-sub">
              Ready to bring your vision to life? Let’s talk.
            </p>

            <form className="cv-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="cv-name">
                Your name
              </label>
              <input
                id="cv-name"
                name="name"
                type="text"
                placeholder="Your name*"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label className="sr-only" htmlFor="cv-email">
                Your email
              </label>
              <input
                id="cv-email"
                name="email"
                type="email"
                placeholder="Your email*"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label className="sr-only" htmlFor="cv-phone">
                Phone
              </label>
              <input
                id="cv-phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />

              <label className="sr-only" htmlFor="cv-message">
                Your message
              </label>
              <textarea
                id="cv-message"
                name="message"
                placeholder="Your message*"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="cv-btn" disabled={sent}>
                {sent ? "Sent ✓" : "Submit"}
              </button>
            </form>

            <div className="cv-contacts" aria-label="Contact details">
              <a href={`mailto:${email}`} className="cv-link">
                {email}
              </a>
              <span className="cv-sep"> - </span>
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="cv-link">
                {phone}
              </a>
            </div>
          </section>
          {/* <img src={ContactLeftVector} alt="" className="w-50 h-50 " /> */}
        </div>
      </section>

      {/* <div className="cv-ornament cv-ornament-right" aria-hidden="true">
        <img src={rightOrnamentSrc || ContactRightVector} alt="" />
      </div>
      <div className="cv-ornament cv-ornament-left" aria-hidden="true">
        <img src={leftOrnamentSrc || ContactLeftVector} alt="" />
      </div> */}
    </>
  );
}
