"use client";

import React, { useState } from "react";
import Image from "next/image";

const GetApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "971XXXXXXXXX"; // ← Replace with your WhatsApp number (without +)

    const text = `
New Landscaping Inquiry 🌿

Name: ${formData.name}
Email: ${formData.email}
Location: ${formData.location}

Project Details:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full py-16 bg-green-50/5">
      <div className="max-container padding-container flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE */}
        <div className="flex-1 w-full">
          <h2 className="bold-32 lg:bold-48">
            Book Your Free Landscaping Consultation
          </h2>

          <p className="regular-16 text-gray-30 mt-4">
            Share your project details and our landscaping specialists will
            connect with you via WhatsApp for a quick consultation and quote.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              name="location"
              placeholder="Project Location"
              required
              onChange={handleChange}
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={3}
              required
              onChange={handleChange}
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Request Free Quote via WhatsApp
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 w-full">
          <Image
            src="/Hero02.jpeg"
            alt="Professional landscaping design consultation in Dubai"
            width={600}
            height={450}
            className="rounded-2xl object-cover w-full h-[350px] sm:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;