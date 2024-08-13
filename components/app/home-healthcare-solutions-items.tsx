"use client"

import { HomeHealthcareSotionsItems } from "@/constants"
import HomeHealthcareSolutionsItem from "@/components/app/home-healthcare-solutions-item"
import { useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
const HomeHealthcareSotionsItemsSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <div
      ref={ref}
      className="mt-4 grid grid-cols-1 md:mt-14 md:grid-cols-3 md:gap-4"
    >
      {HomeHealthcareSotionsItems.map((solution, index) => (
        <HomeHealthcareSolutionsItem
          key={index}
          title={solution.title}
          icon={solution.icon}
          buttonText={solution.buttonText}
          subTitle={solution.subTitle}
          index={index}
          controls={controls}
        />
      ))}
    </div>
  )
}

export default HomeHealthcareSotionsItemsSection
