import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Dubai Industrial City-Head office",
    image: "/projects/dichq/dic-1.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dichq",
  },
   {
    title: "Jumeirah Bay-Villa CR7",
    image: "/projects/villacr7/cr71.jpeg",
    logo: "/clients/cr7logo.jpg", 
    link: "/Projects/villa-cr7",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-10">
      <div className="max-container padding-container">
        
        <div className="text-center mb-12">
          <h1 className="bold-40">Our Projects</h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="group">
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 max-w-sm">
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Bigger Logo Inside Image */}
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-xl ring-4 ring-white">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition text-sm font-medium">
                      View
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="p-4">
                  <h3 className="text-base font-semibold">
                    {project.title}
                  </h3>
                </div>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}