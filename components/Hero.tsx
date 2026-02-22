'use client'

import Image from 'next/image'
import Button from './Button'
import { useEffect, useState } from 'react'

const heroImages: string[] = [
  'bg-hero-1',
  'bg-hero-2',
  'bg-hero-3',
]

const Hero = () => {
 const [current, setCurrent] = useState<number>(0)

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])


  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        <h1 className="bold-52 lg:bold-70">Petals Landscape</h1>
        <h6 className="bold-12 lg:bold-40">Transforming Outdoor Spaces Into Living Art</h6>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
         Petals Landscapes designs, builds, and maintains beautiful gardens that elevate your lifestyle—where nature meets luxury.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="GET IN TOUCH" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[100%] h-[100%] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 ">
{heroImages.map((bg, index) => (
        <div
          key={bg}
          className={`
            absolute inset-0
            rounded-3xl
            ${bg}
            bg-cover bg-center
            transition-opacity duration-1000 ease-in-out
            ${index === current ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}
           {/* <div className="absolute flex flex-col" >
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
            </div>
            <p className="relative bold-20 text-white">Dubai Al Quoz</p>
          </div> */}

          {/* <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero