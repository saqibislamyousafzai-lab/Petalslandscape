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

  const whatsappNumber = "971588431763"

  const whatsappMessage = encodeURIComponent(
    "Hello, I found Petals Landscape and Gardening LLC online. I would like to get a quote for landscaping or gardening services in Dubai. Please share more details."
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="max-container padding-container flex flex-col gap-14 py-12 md:gap-20 lg:py-20 xl:flex-row">

      <div className="hero-map" />

      {/* LEFT CONTENT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        {/* Heading */}
        <h1 className="font-bold text-3xl leading-tight sm:text-4xl lg:text-6xl">
          Professional Landscape and Gardening Services in Dubai
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-green-600 sm:text-xl lg:text-2xl">
          Transforming Outdoor Spaces Into Living Art
        </h2>

        <p className="mt-6 text-gray-600 text-sm sm:text-base xl:max-w-[520px] leading-relaxed">
          Petals Landscape specializes in premium landscape design, garden
          landscaping, villa landscaping, irrigation systems, pergola installation,
          outdoor lighting, and complete gardening maintenance services.
        </p>

        <p className="mt-4 text-gray-600 text-sm sm:text-base xl:max-w-[520px] leading-relaxed">
          We design and build elegant outdoor environments for villas,
          commercial spaces, and luxury developments across Dubai.
        </p>

        {/* Reviews */}
        <div className="mt-8 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="5 star landscape service rating"
                width={18}
                height={18}
              />
            ))}
          </div>

          <p className="font-semibold text-sm sm:text-base text-blue-700">
            1000+
            <span className="ml-1 font-normal text-gray-600">
              Trusted Reviews
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              type="button"
              title="GET IN TOUCH"
              variant="btn_green"
            />
          </a>

          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />

        </div>
      </div>

      {/* RIGHT SLIDER */}
      <div className="relative flex flex-1 items-start">

        <div className="relative z-20 w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">

          {heroImages.map((bg, index) => (
            <div
              key={bg}
              className={`
                absolute inset-0
                ${bg}
                bg-cover bg-center
                transition-opacity duration-1000 ease-in-out
                ${index === current ? 'opacity-100' : 'opacity-0'}
              `}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Hero