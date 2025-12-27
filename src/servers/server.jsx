import axios from 'axios';
import React, { useState } from 'react'


const server = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://eopizhp043cnzp1.m.pipedream.net", // 🔴 YOUR WEBHOOK URL
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default server
