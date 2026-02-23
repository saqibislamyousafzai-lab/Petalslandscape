import React from "react";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="w-full py-16 bg-green-50/5">
      <div className="max-container padding-container flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE */}
        <div className="flex-1 w-full">
          <h2 className="bold-32 lg:bold-48">
            Book Your Free Landscaping Consultation
          </h2>

          <p className="regular-16 text-gray-30 mt-4">
            Let our experts design and transform your outdoor space into
            something elegant, functional, and long-lasting.
          </p>

          {/* FORM */}
          <form className="mt-6 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              placeholder="Project Location"
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              placeholder="Tell us about your project"
              rows={3}
              className="border rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Request Free Quote
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 w-full">
          <Image
            src="/Hero02.jpeg"
            alt="Landscaping project design"
            width={600}
            height={450}
            className="rounded-2xl object-cover w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;