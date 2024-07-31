import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
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
      className="flex flex-col md:items-center gap-2 md:gap-5  "
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <div className="p-2 hover:bg-[#EB262D]/35 hover:rounded-full transition-all w-fit">
        <Icon className="size-6 sm:size-7 text-[#EB262D]" />
      </div>
      <h2 className="font-semibold md:font-bold text-lg xl:text-lg lg:text-center text-[#47526B]">
        {title}
      </h2>
      <p className="text-gray-600 max-md:text-sm lg:text-center text-sm xl:text-base">
        {subTitle}
      </p>
      <p className="underline text-[#6B6A47]  hover:cursor-pointer hover:text-[#6B6A47]/80 -mt-1 md:-mt-2">
        {info}
      </p>
    </motion.div>
  );
};

export default HomeContactsItem;
