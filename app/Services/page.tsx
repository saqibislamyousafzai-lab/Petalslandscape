import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Petals Landscape & Gardening',
  description:
    'Explore our professional landscaping services including garden design, installation, maintenance, irrigation, and outdoor solutions in the UAE.',
}

export default function ServicesPage(): JSX.Element {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-hero-2 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg mx-auto">
              Complete landscaping solutions designed for beauty and durability
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {/* Services Grid – Image Cards */}
<section className="py-20 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-14">
    Our Services
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: 'Landscape Design',
        description: 'Creative outdoor designs tailored for luxury living.',
        image: '/images/landscape-design.jpg',
      },
      {
        title: 'Garden Installation',
        description: 'Seamless execution with premium materials and finishes.',
        image: '/images/garden-installation.jpg',
      },
      {
        title: 'Irrigation Systems',
        description: 'Smart and sustainable watering solutions.',
        image: '/images/irrigation.jpg',
      },
      {
        title: 'Outdoor Lighting',
        description: 'Elegant lighting that transforms spaces at night.',
        image: '/images/outdoor-lighting.jpg',
      },
      {
        title: 'Landscape Maintenance',
        description: 'Year-round care to keep your garden pristine.',
        image: '/images/maintenance.jpg',
      },
      {
        title: 'Hardscape & Features',
        description: 'Pergolas, pathways, and bespoke outdoor elements.',
        image: '/images/hardscape.jpg',
      },
    ].map((service) => (
      <div
        key={service.title}
        className="group relative h-[380px] rounded-3xl overflow-hidden border border-green-700"
      >
        {/* Image */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Text Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-white/85 mb-4 max-w-xs">
            {service.description}
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-green-400 font-semibold group-hover:gap-3 transition-all"
          >
            Learn More →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Talk to our experts and get a customized landscaping solution.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get a Free Consultation
        </a>
      </section>
    </main>
  )
}
