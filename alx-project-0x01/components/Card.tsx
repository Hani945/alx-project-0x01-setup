import React from "react"
import Image from "next/image"
import Pill from "./Pill"

interface CardProps {
  title: string
  image: string
  badge?: string
  rating?: number // ⭐ rating out of 5
}

const Card: React.FC<CardProps> = ({ title, image, badge, rating = 0 }) => {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Top image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      {/* Card content */}
      <div className="p-4">
        {badge && <Pill text={badge} />}
        <h2 className="text-lg font-semibold mt-2">{title}</h2>

        {/* Star rating */}
        {rating > 0 && (
          <div className="flex items-center mt-2 space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/assets/images/star.png"
                alt="Star"
                width={20}
                height={20}
                className={index < rating ? "opacity-100" : "opacity-30"}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
