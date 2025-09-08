import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-[6vh] flex gap-5 text-white">
      {/* Back Button */}
      <i
        onClick={() => navigate(-1)}
        className="font-medium mr-5 text-4xl hover:text-[#6556CD] ri-arrow-left-circle-line cursor-pointer"
      ></i>

      <div className="flex-1">
        {/* Title */}
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <hr className="border-zinc-500 mt-5" />

        {/* Intro */}
        <p className="mt-5 text-lg leading-relaxed text-gray-300 mb-10">
          Have feedback, suggestions, or just want to say hi? We’d love to hear
          from you! Your thoughts help make{" "}
          <span className="text-white font-semibold">MoviX</span> better every
          day.
        </p>

        {/* Contact Options */}
        <div className="flex flex-wrap gap-6 mb-12">
          <a
            href="mailto:himikkhulbe@gmail.com"
            className="flex items-center gap-2 hover:text-[#6556CD] transition"
          >
            <i className="ri-mail-line text-2xl"></i> movix.team@gmail.com
          </a>
          <a
            href="https://github.com/himikkhulbe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#6556CD] transition"
          >
            <i className="ri-github-fill text-2xl"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/himikkhulbe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#6556CD] transition"
          >
            <i className="ri-linkedin-box-fill text-2xl"></i> LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <form className="grid gap-6 max-w-2xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#6556CD] hover:bg-[#4e44b6] transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Disclaimer */}
        <p className="text-sm text-zinc-500 mt-8">
          ⚠️  MoviX is a discovery platform and does not host or stream content
          directly.
        </p>
      </div>
    </div>
  );
};

export default Contact;
