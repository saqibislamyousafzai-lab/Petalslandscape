import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Petals Landscape & Gardening',
  description:
    'Get in touch with Petals Landscape & Gardening. Find our address, phone numbers, email, social links, and location map.',
}

export default function ContactPage(): JSX.Element {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative h-[50vh] bg-hero-1 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              We would love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black mb-6">Our Company</h2>

          <div>
            <h3 className="font-semibold text-lg text-green-700">Address</h3>
            <p>123 Petals Landscape Street, Dubai, UAE</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-green-700">Phone</h3>
            <p>+971 50 123 4567</p>
            <p>+971 4 987 6543</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-green-700">Email</h3>
            <p>info@petalslandscape.ae</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-green-700">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 transition"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 transition"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
          <form
            className="space-y-4"
            action="#"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Our Location
        </h2>
        <div className="w-full h-96 rounded-2xl overflow-hidden border border-green-700 shadow-lg">
         <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5604681951418!2d55.23137307402167!3d25.116735734957594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f614dc66b2715%3A0x2e4fa52c9526cf98!2sPetals%20Landscape%20Gardening%20LLC%20Dubai!5e0!3m2!1sen!2sae!4v1770082454188!5m2!1sen!2sae"
      width={"100%"}
      height={"100%"}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
      </section>
    </main>
  )
}
