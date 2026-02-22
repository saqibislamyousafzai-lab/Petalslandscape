'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  images: string[]
  description: string
}

export default function ProjectCard({
  title,
  images,
  description,
}: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="rounded-2xl overflow-hidden border border-green-700 group hover:shadow-xl transition">
      {/* Project Image */}
      <div className="relative h-64 w-full">
        <Image
          src={images[currentIndex]}
          alt={`${title} image`}
          fill
          className="object-cover transition-all duration-500"
        />

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-green-700 transition"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-green-700 transition"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}
