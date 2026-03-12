import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Dubai Industrial City Head office - Jogging Track Design and Construction Works ",
    image: "/projects/dichq/dic-2.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dichq",
  },
  {
    title: "Dubai Industrial City Head office -Outdoor Pergola Design and Installation",
    image: "/projects/dicpergola/dicp-1.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dicpergola",
  },
   {
    title: "Dubai Industrial City Head office -Main Entrance Design and Installation",
    image: "/projects/dicentrance/dice-2.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dicentrance",
  },
   {
    title: "Dubai Industrial City Head office -Custom Outdoor Planters Design and Construction",
    image: "/projects/dicplanters/dicp-3.jpeg",
    logo: "/clients/client DIC.png",
    link: "/Projects/dicplanters",
  },
   {
    title: "Cristiano Ronaldo Residential Villa Jumeirah Bay-Garden and Landscape Enhancement",
    image: "/projects/villacr7/cr71.jpeg",
    logo: "/clients/cr7logo.jpg", 
    link: "/Projects/villa-cr7",
  },
   {
    title: "Meydan Villa - Back Garden Renovation and Swimming Pool Construction",
    image: "/projects/meydanvilla/med3.jpeg",
    logo: "/clients/meydan.png", 
    link: "/Projects/meydanvilla",
  },
   {
    title: "Dubai International Academic city -  Decorative Water Feature Design and Construction",
    image: "/projects/diacwf/diacwf9.jpeg",
     logo: "/clients/diaclogo.jpg",  
    link: "/Projects/diacwf",
  },
  {
    title: "Dubai International Academic city -  Pocket Park Design, Development, and Installation",
    image: "/projects/diacs/diacs1.jpeg",
    logo: "/clients/diaclogo.jpg", 
    link: "/Projects/diacs",
  },
  {
    title: "Al Barsha Dubai -  Luxury Villa Swimming Pool Design and Construction",
    image: "/projects/barshavilla/br6.jpg",
    logo: "/clients/ab.png", 
    link: "/Projects/barshaSw",
  },
   {
    title: "Boutique Villa # 4 Dubai - Landscape and Hardscape Design & Enhancement",
    image: "/projects/Bvilla/btvilla2.jpg",
    logo: "/clients/bv.jpg", 
    link: "/Projects/bvilla",
  },
  {
    title: "Damac Hills -  Landscape Development and Swimming Pool Construction",
    image: "/projects/DamacHills/dh (4).jpg",
    logo: "/clients/dh.png", 
    link: "/Projects/damachills",
  },
  {
    title: "Etisalat Head office Dubai -  Garden and Landscape Maintenance Works, AMC",
    image: "/projects/Etisalatho/etislat (2).jpg",
    logo: "/clients/etisalat.jpg", 
    link: "/Projects/etisalat",
  },
   {
    title: "International City Dubai -  Garden Maintenance and Decorative Water Feature Construction",
    image: "/projects/IC2/ic5.jpg",
    logo: "/clients/ic.jpeg", 
    link: "/Projects/ic2",
  },
  {
    title: "Dubai Industrial City-  Garden and Landscape Maintenance Works, AMC",
    image: "/projects/diroad/diroad (2).jpg",
    logo: "/clients/client DIC.png", 
    link: "/Projects/diroad",
  },
   {
    title: "Palm Golden Miles- Garden and Landscape Maintenance Works, AMC",
    image: "/projects/Palmgolden/palmmile3.jpg",
    logo: "/clients/PJ.png", 
    link: "/Projects/palmgolden",
  },
  {
    title: "Living Legends Dubai -  Garden and Landscape Construction with Custom Planters and Seating",
    image: "/projects/livleg/livleg (1).jpg",
    logo: "/clients/ll.png", 
    link: "/Projects/livleg",
  },

  {
    title: "Muhammad Bin Rashid City -  Landscape Design & Construction",
    image: "/projects/MBR/mbr (8).jpg",
    logo: "/clients/mrb.jpg", 
    link: "/Projects/mbr",
  },
  
  {
    title: "Dubai Hills Estate -  Landscape and Swimming Pool Design & Construction",
    image: "/projects/dhe/dhe (1).jpg",
    logo: "/clients/emar.jpg", 
    link: "/Projects/dhe",
  },
  {
    title: "Palm club Vista - Garden and Landscape Maintenance Works, AMC",
    image: "/projects/pcv/pcv (4).jpg",
    logo: "/clients/PJ.png", 
    link: "/Projects/pcv",
  },
   {
    title: "Falcon city - Residential Swimming Pool Design and Construction",
    image: "/projects/FalconCity/fc (7).jpg",
    logo: "/clients/fc.jpg", 
    link: "/Projects/falconcity",
  },
  {
    title: "St Regis Hotel Palm Jumeirah - Complete Garden and Landscape Installation Works",
    image: "/projects/Regisdubai/regdubai (6).jpg",
    logo: "/clients/pj.png", 
    link: "/Projects/regdubai",
  },
  {
    title: "Dubai Studio City - Complete Garden and Landscape Installation Works",
    image: "/projects/DSC/dsc (2).jpg",
    logo: "/clients/dsc.png", 
    link: "/Projects/DSC",
  }, 

  {
    title: "Dubai Industrial City Labour Village 2 - Landscape and Hardscape Development Including Pergola and Seating Installation",
    image: "/projects/DI_LV2/lv2 (2).jpg",
    logo: "/clients/client DIC.png", 
    link: "/Projects/lv2",
  },
  {
    title: "Souk Al Marfa - Garden and Landscape Maintenance Works, AMC",
    image: "/projects/marfa/marfa (2).jpg",
    logo: "/clients/sm.png", 
    link: "/Projects/marfa",
  },

  {
    title: "Souk Al Marfa 3 - Interior Plant Maintenance and Management , AMC",
    image: "/projects/Marfa3/marfa3 (2).jpg",
    logo: "/clients/sm.png", 
    link: "/Projects/marfa3",
  },
  // {
  //   title: "Dubai Outlet Village - Garden and Landscape Maintenance Works, AMC",
  //   image: "/projects/dov/dov1.jpg",
  //   logo: "/clients/DOV.svg", 
  //   link: "/Projects/DOV",
  // },
  //  {
  //   title: "Dubai internet City Injaaz Building  - Professional Hardscape Design, Fabrication, and Installation",
  //   image: "/projects/injaz/injaz1.jpg",
  //   logo: "/clients/DIC.png", 
  //   link: "/Projects/injaaz",
  // },
  // {
  //   title: "Ibn e Batuta Mall Dubai - Garden and Landscape Maintenance Works, AMC",
  //   image: "/projects/IBM/IBM3.jpg",
  //   logo: "/clients/ibm.svg", 
  //   link: "/Projects/IBM",
  // },
  //  {
  //   title: "District IN5 - Garden and Landscape Maintenance Works, AMC",
  //   image: "/projects/dinf/DINF8.jpg",
  //   logo: "/clients/d3.png", 
  //   link: "/Projects/dinf",
  // },
  //  {
  //   title: "District D3 - Garden and Landscape Maintenance Works, AMC",
  //   image: "/projects/DD3/DD31.jpg",
  //   logo: "/clients/d3.png", 
  //   link: "/Projects/DD3",
  // },  {
  //   title: "Palm Jumeirah 2 - Garden and Landscape Maintenance Works, AMC",
  //   image: "/projects/palm2/pj21.jpg",
  //   logo: "/clients/pj.png", 
  //   link: "/Projects/palm2",
  // },

  // {
  //   title: "Dubai Industrial City labour village 1 - Garden and Landscape Maintenance Works, AMC",
  //   image: "/projects/JALV1/lv13.jpg",
  //   logo: "/clients/client DIC.png", 
  //   link: "/Projects/lv1",
  // },
  // {
  //   title: "International City Dubai - Outdoor Play Area Upgrades and Shade Structure Installation",
  //   image: "/projects/IC_shades/ics3.jpeg",
  //   logo: "/clients/ic.jpeg", 
  //   link: "/Projects/ics",
  // },
  // {
  //   title: "Warsan Village International City Dubai - Outdoor Gazebos and Seating Area Design & Construction",
  //   image: "/projects/warsan/gabezo3.jpeg",
  //   logo: "/clients/ic.jpeg", 
  //   link: "/Projects/icg",
  // },
  //  {
  //   title: "Warsan Village International City Dubai - Children’s Play Area Enhancement and New Design Shade Installation",
  //   image: "/projects/warsan01/warsan02.jpeg",
  //   logo: "/clients/ic.jpeg", 
  //   link: "/Projects/icw",
  // },
  // {
  //   title: "Warsan Village International City Dubai - Outdoor Exercise Machines Improvement and Shade Structure Installation",
  //   image: "/projects/warsan02/icw03.jpeg",
  //   logo: "/clients/ic.jpeg", 
  //   link: "/Projects/icw01",
  // },

  // {
  //   title: "Google Head Office Dubai - Seating Area Design, Water Feature Installation and Decorative Ceiling Works",
  //   image: "/projects/gho/gho2.jpeg",
  //   logo: "/clients/google.Webp", 
  //   link: "/Projects/gho",
  // },

  //  {
  //   title: "Dubai Knowledge Park - Building Enhancement and Improvement Works",
  //   image: "/projects/dkp01/dkp03.jpeg",
  //   logo: "/clients/dkp.png", 
  //   link: "/Projects/dkp",
  // },

  //  {
  //   title: "Jumeirah Bay Hotel Dubai - Buggy Track Pathway Design & Construction",
  //   image: "/projects/JBH/jbh04.jpeg",
  //   logo: "/clients/dkp.png", 
  //   link: "/Projects/jbh",
  // },
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