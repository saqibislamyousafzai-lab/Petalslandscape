import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Petals Landscape & Gardening',
  description:
    'Learn more about Petals Landscape & Gardening – experts in luxury landscaping, garden design, and outdoor solutions in the UAE.',
}

export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-hero-1 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg mx-auto">
              Creating beautiful outdoor environments that inspire living
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Petals Landscape & Gardening LLC is a professional landscaping
              company specializing in luxury villa gardens, outdoor spaces,
              and sustainable landscape solutions across the UAE.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong focus on design, quality craftsmanship, and
              long-term maintenance, we transform outdoor areas into
              functional, elegant, and relaxing environments.
            </p>
          </div>

          <div className="h-80 rounded-xl bg-hero-2 bg-cover bg-center" />
        </div>
      </section>

      {/* Mission & Vision */}
      {/* Mission & Vision */}
<section className="bg-white py-16 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
    
    {/* Mission */}
    <div className="border border-green-700 rounded-2xl p-8 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold text-black mb-4">
        Our Mission
      </h3>
      <p className="text-gray-700 leading-relaxed">
        To design and deliver premium landscaping solutions that enhance
        lifestyles, increase property value, and promote sustainable
        outdoor living.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-green-700 rounded-2xl p-8 text-white hover:shadow-lg transition">
      <h3 className="text-2xl font-bold mb-4">
        Our Vision
      </h3>
      <p className="leading-relaxed text-white/90">
        To be one of the most trusted and innovative landscaping companies
        in the UAE, known for quality, creativity, and reliability.
      </p>
    </div>

  </div>
</section>


      {/* Why Choose Us */}
      {/* Why Choose Us */}
<section className="py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-black mb-12">
    Why Choose Us
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: 'Expert Craftsmanship',
        description:
          'Our skilled team delivers high-quality workmanship with attention to every detail.',
        image: 'bg-hero-1',
      },
      {
        title: 'Luxury Villa Specialists',
        description:
          'We design and execute premium outdoor spaces tailored for luxury villas.',
        image: 'bg-hero-2',
      },
      {
        title: 'Sustainable Landscaping',
        description:
          'Eco-friendly solutions that balance beauty, efficiency, and long-term value.',
        image: 'bg-hero-3',
      },
      {
        title: 'On-Time Delivery',
        description:
          'We plan carefully and deliver projects on schedule without compromising quality.',
        image: 'bg-hero-1',
      },
    ].map((card) => (
      <div
        key={card.title}
        className="group rounded-2xl overflow-hidden border border-green-700 bg-white hover:shadow-xl transition"
      >
        {/* Image */}
        <div
          className={`
            h-48 w-full
            ${card.image}
            bg-cover bg-center
            transition-transform duration-500
            group-hover:scale-105
          `}
        />

        {/* Content */}
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

          </main>
  )
}
