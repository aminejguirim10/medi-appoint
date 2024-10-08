"use client"

import { HomeContactsItems } from "@/constants"
import { useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import HomeContactsItem from "@/components/app/home-contacts-item"
const HomeContactsItemsSections = () => {
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
      className="mt-4 grid grid-cols-1 gap-2 md:mt-14 md:grid-cols-3 md:gap-4"
    >
      {HomeContactsItems.map((contact, index) => (
        <HomeContactsItem
          key={index}
          title={contact.title}
          subTitle={contact.subTitle}
          icon={contact.icon}
          info={contact.info}
          controls={controls}
          index={index}
        />
      ))}
    </div>
  )
}

export default HomeContactsItemsSections
