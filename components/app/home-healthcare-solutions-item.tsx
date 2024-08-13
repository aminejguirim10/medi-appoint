import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import { motion } from "framer-motion"

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const HomeHealthcareSolutionsItem = ({
  title,
  subTitle,
  icon: Icon,
  buttonText,
  controls,
  index,
}: HomeHealthcareSotionsItemProps) => {
  return (
    <motion.div
      className="mt-4 flex flex-col gap-2 md:items-center md:gap-5"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <div className="w-fit rounded-full bg-[#967F4A]/35 p-2">
        <Icon className="size-6 text-[#967F4A] sm:size-7" />
      </div>
      <h2 className="text-lg font-semibold text-[#47526B] md:font-bold lg:text-center xl:text-lg">
        {title}
      </h2>
      <p className="text-sm text-gray-600 max-md:text-sm lg:text-center xl:text-base">
        {subTitle}
      </p>
      <Link
        href={"/"}
        className={buttonVariants({
          variant: "ghost",
          className: "flex w-fit items-center gap-1",
        })}
      >
        {buttonText}
        <span>
          <Icons.chevronRight className="size-5" />
        </span>
      </Link>
    </motion.div>
  )
}

export default HomeHealthcareSolutionsItem
