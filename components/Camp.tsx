import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`
        relative h-full w-[85%] min-w-[280px] sm:min-w-[400px] lg:min-w-[500px]
        ${backgroundImage}
        bg-cover bg-center bg-no-repeat
        rounded-3xl lg:rounded-5xl
        overflow-hidden shadow-xl
      `}
    >
      {/* Dark Overlay for Premium Look */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-start justify-between p-6 sm:p-8 lg:px-10 lg:py-10 text-white">
        
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-500 p-3 shadow-lg">
            <Image
              src="/folded-map.svg"
              alt="landscape project location"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold">
              {title}
            </h3>
            <p className="text-sm opacity-90">
              {subtitle}
            </p>
          </div>
        </div>

        {/* <div className="flex items-center gap-4 mt-6">
          <span className="flex -space-x-3 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image 
                className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-white"
                src={url}
                key={url}
                alt="happy landscaping client"
                width={40}
                height={40}
              />
            ))}
          </span>
          <p className="text-sm sm:text-base font-semibold">
            {peopleJoined}
          </p>
        </div> */}
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-12 lg:mb-10 lg:py-20 xl:mb-20">

      <div className="hide-scrollbar flex h-[320px] w-full items-start justify-start gap-6 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-3"
          title="Villa Nova"
          subtitle="Dubai"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-4"
          title="The Villa"
          subtitle="Premium Residential Landscaping"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-12 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 sm:p-10 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">

          {/* SEO Optimized Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold capitalize text-white leading-snug">
            Complete Garden Landscaping & Outdoor Development Solutions
          </h2>

          {/* SEO Supporting Text */}
          <p className="text-sm sm:text-base xl:text-lg mt-6 text-white leading-relaxed">
            We specialize in customized garden landscaping, softscape and hardscape 
            installation, irrigation planning, pergola structures, outdoor seating 
            areas, and long-term garden maintenance services across Dubai.
          </p>

          <p className="text-sm sm:text-base xl:text-lg mt-4 text-white leading-relaxed">
            Our team ensures every landscape project is designed with attention to 
            climate, sustainability, functionality, and aesthetic excellence — 
            delivering outdoor environments that enhance property value and lifestyle.
          </p>

          <p className="text-sm sm:text-base xl:text-lg mt-6 text-white font-medium">
            🌿 Designed with purpose. Built with precision. Maintained with care.
          </p>

          <Image 
            src="/quote.svg"
            alt="garden landscaping inspiration"
            width={160}
            height={200}
            className="camp-quote opacity-30"
          />
        </div>
      </div>

    </section>
  )
}
export default Camp