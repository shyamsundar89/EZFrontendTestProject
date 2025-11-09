import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    if (!name || !email || !phone || !message) {
      setStatus("❌ Please fill all fields");
      return;
    }
    if (!validateEmail(email)) {
      setStatus("⚠️ Please enter a valid email");
      return;
    }

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        form
      );
      if (res.status === 200 || res.status === 201) {
        setStatus("✅ Form Submitted");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatus("❌ Error submitting form");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fbf2ea] px-4 sm:px-6 md:px-8 py-10">
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center text-[#1f2f44]">
          Contact Us
        </h2>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-[#e86a35] focus:outline-none transition"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-[#e86a35] focus:outline-none transition"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-[#e86a35] focus:outline-none transition"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full border border-gray-300 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-[#e86a35] focus:outline-none transition"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-[#e86a35] hover:bg-[#ff7a50] text-white p-3 sm:p-4 rounded-lg font-medium shadow-md transition-colors duration-300"
          >
            Submit
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-sm sm:text-base md:text-lg text-gray-700">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
