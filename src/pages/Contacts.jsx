import React, { useState } from "react";

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!BOT_TOKEN || !CHAT_ID) {
      alert("❌ Telegram config missing (.env)");
      return;
    }

    setLoading(true);

    const text = `
📩 New Contact Message
━━━━━━━━━━━━━━
👤 Name: ${form.name}
📧 Email: ${form.email}

💬 Message:
${form.message}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      const data = await res.json();

      if (!data.ok) {
        alert("❌ Telegram error: " + data.description);
        setLoading(false);
        return;
      }

      alert("✅ Message sent to Telegram!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("❌ Network error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#061826] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to work together?
            Feel free to reach out — I’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I’m currently open to freelance work, full-time opportunities,
                and collaborations. Let’s build something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  📧
                </div>
                <span>khengphet@email.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  📞
                </div>
                <span>+855 888605876</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  📍
                </div>
                <span>Cambodia</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-white/20 focus:border-cyan-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-white/20 focus:border-cyan-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-white/20 focus:border-cyan-400 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contacts;
