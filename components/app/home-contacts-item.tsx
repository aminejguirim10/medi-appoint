import { motion } from "framer-motion"

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const HomeContactsItem = ({
  title,
  subTitle,
  icon: Icon,
  controls,
  index,
  info,
}: HomeContactsItemProps) => {
  return (
    <motion.div
      className="flex flex-col gap-2 md:items-center md:gap-5"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <div className="w-fit p-2 transition-all hover:rounded-full hover:bg-[#EB262D]/35">
        <Icon className="size-6 text-[#EB262D] sm:size-7" />
      </div>
      <h2 className="text-lg font-semibold text-[#47526B] md:font-bold lg:text-center xl:text-lg">
        {title}
      </h2>
      <p className="text-sm text-gray-600 max-md:text-sm lg:text-center xl:text-base">
        {subTitle}
      </p>
      <p className="-mt-1 text-[#6B6A47] underline hover:cursor-pointer hover:text-[#6B6A47]/80 md:-mt-2">
        {info}
      </p>
    </motion.div>
  )
}

export default HomeContactsItem
