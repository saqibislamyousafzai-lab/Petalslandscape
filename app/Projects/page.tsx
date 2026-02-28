import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Dubai Industrial City Head office - Jogging track ",
    image: "/projects/dichq/dic-2.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dichq",
  },
  {
    title: "Dubai Industrial City Head office -Pergola Design",
    image: "/projects/dicpergola/dicp-1.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dicpergola",
  },
   {
    title: "Dubai Industrial City Head office -Main Entrance Design",
    image: "/projects/dicentrance/dice-2.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dicentrance",
  },
   {
    title: "Dubai Industrial City Head office -New Planters Design",
    image: "/projects/dicplanters/dicp-3.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dicplanters",
  },
   {
    title: "Jumeirah Bay-Villa CR7",
    image: "/projects/villacr7/cr71.jpeg",
    logo: "/clients/cr7logo.jpg", 
    link: "/Projects/villa-cr7",
  },
   {
    title: "Meydan Villa - Back Garden Design and Swimming Pool",
    image: "/projects/meydanvilla/med3.jpeg",
    logo: "/clients/meydan.png", 
    link: "/Projects/meydanvilla",
  },
   {
    title: "Dubai International Academic city -  Water Feature Construction",
    image: "/projects/diacwf/diacwf9.jpeg",
     logo: "/clients/diaclogo.jpg",  
    link: "/Projects/diacwf",
  },
  {
    title: "Dubai International Academic city -  Seating Area Construction",
    image: "/projects/diacs/diacs1.jpeg",
    logo: "/clients/diaclogo.jpg", 
    link: "/Projects/diacs",
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
              {/* Title */}
<div className="p-4 space-y-2">

  {/* Client Name */}
  <h3 className="text-base font-semibold text-gray-900 leading-snug">
    {project.title.split("-")[0]}
  </h3>

  {/* Project Name Badge */}
  <span className="inline-block text-xs font-semibold bg-black text-white px-3 py-1 rounded-full tracking-wide">
    {project.title.split("-")[1]}
  </span>

</div>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}