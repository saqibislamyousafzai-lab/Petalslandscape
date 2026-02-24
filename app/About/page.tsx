import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Petals Landscape & Gardening | Landscaping Company in Dubai UAE",
  description:
    "Petals Landscape & Gardening LLC is a leading landscaping company in Dubai, UAE offering luxury villa landscaping, garden design, irrigation systems, pergola installation, and complete outdoor maintenance services.",
  keywords: [
    "landscaping company in Dubai",
    "garden design UAE",
    "villa landscaping Dubai",
    "garden maintenance company UAE",
    "pergola installation Dubai",
    "irrigation system installation UAE",
    "outdoor landscaping services UAE",
  ],
};

export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-hero-1 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              About Petals Landscape & Gardening
            </h1>
            <p className="mt-4 max-w-2xl text-lg mx-auto">
              Professional landscaping and garden design company delivering
              luxury outdoor solutions across Dubai and the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Landscaping Experts in Dubai
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Petals Landscape & Gardening LLC is a professional landscaping
              company in Dubai specializing in luxury villa landscaping, custom
              garden design, irrigation systems, pergola installation, and
              complete outdoor space development across the UAE.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our experienced team combines creative landscape architecture with
              high-quality construction and long-term garden maintenance services
              to create elegant, sustainable, and functional outdoor environments
              tailored to each client’s vision.
            </p>
          </div>

          <div className="h-80 rounded-xl bg-hero-2 bg-cover bg-center" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div className="border border-green-700 rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-black mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To design and deliver premium landscaping solutions that enhance
              lifestyles, increase property value, and promote sustainable
              outdoor living through innovative garden design and professional
              execution.
            </p>
          </div>

          <div className="bg-green-700 rounded-2xl p-8 text-white hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="leading-relaxed text-white/90">
              To be one of the most trusted and innovative landscaping companies
              in Dubai and the UAE, recognized for quality craftsmanship,
              creativity, reliability, and long-term client partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Why Choose Our Landscaping Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Expert Craftsmanship",
              description:
                "Our skilled landscaping team delivers high-quality workmanship with attention to every detail.",
              image: "bg-hero-1",
            },
            {
              title: "Luxury Villa Specialists",
              description:
                "We design and execute premium outdoor landscaping tailored for luxury villas in Dubai.",
              image: "bg-hero-2",
            },
            {
              title: "Sustainable Landscaping",
              description:
                "Eco-friendly irrigation systems and sustainable garden solutions that ensure long-term value.",
              image: "bg-hero-3",
            },
            {
              title: "On-Time Project Delivery",
              description:
                "We carefully plan and execute landscaping projects on schedule without compromising quality.",
              image: "bg-hero-1",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl overflow-hidden border border-green-700 bg-white hover:shadow-xl transition"
            >
              <div
                className={`h-48 w-full ${card.image} bg-cover bg-center transition-transform duration-500 group-hover:scale-105`}
              />

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services SEO Section */}
      <section className="bg-gray-10 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Our Landscaping & Gardening Services in Dubai
          </h2>

          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
            We provide comprehensive landscaping and gardening services in
            Dubai and across the UAE, including landscape design, villa garden
            execution, irrigation system installation, pergola construction,
            swimming pool landscaping, outdoor lighting, softscaping,
            hardscaping, and annual garden maintenance contracts. Our goal is
            to deliver visually stunning, environmentally sustainable, and
            long-lasting outdoor spaces.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Landscape Design & Execution
              </h3>
              <p className="text-gray-600 text-sm">
                Customized landscape planning, 3D designs, softscape and
                hardscape installation tailored for villas and commercial
                properties.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Garden Maintenance Services
              </h3>
              <p className="text-gray-600 text-sm">
                Lawn care, irrigation maintenance, plant care, pruning,
                fertilization, and annual maintenance contracts across Dubai.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Pergolas & Outdoor Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Pergola installation, decking, pathways, water features, and
                complete outdoor renovation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}