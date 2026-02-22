import ProjectCard from '@/components/ProjectCard'
import ClientLogo from '@/components/ClientLogo'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Luxury Villa Garden',
      description: 'Complete design and installation for a villa garden.',
      images: [
        '/images/projects/villa1-1.jpg',
        '/images/projects/villa1-2.jpg',
        '/images/projects/villa1-3.jpg',
      ],
    },
    {
      title: 'Modern Landscape Design',
      description: 'Stylish backyard transformation with sustainable plants.',
      images: [
        '/images/projects/modern1-1.jpg',
        '/images/projects/modern1-2.jpg',
      ],
    },
    {
      title: 'Commercial Landscaping',
      description: 'Outdoor space designed for a commercial building.',
      images: ['/images/projects/commercial1-1.jpg'],
    },
  ]

  const clients = [
    { name: 'Client 1', logo: '/images/clients/client1.png' },
    { name: 'Client 2', logo: '/images/clients/client2.png' },
    { name: 'Client 3', logo: '/images/clients/client3.png' },
    { name: 'Client 4', logo: '/images/clients/client4.png' },
  ]

  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative h-[60vh] bg-hero-3 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">Our Projects</h1>
            <p className="mt-4 max-w-2xl text-lg mx-auto">
              Showcasing our premium landscaping projects and designs
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6 bg-green-50">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Our Clients
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <ClientLogo key={client.name} {...client} />
          ))}
        </div>
      </section>
    </main>
  )
}
