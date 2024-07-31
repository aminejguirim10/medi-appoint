import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
      className="flex flex-col md:items-center gap-2 md:gap-5 mt-4"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <div className="bg-[#967F4A]/35 p-2 rounded-full w-fit">
        <Icon className="size-6 sm:size-7 text-[#967F4A]" />
      </div>
      <h2 className="font-semibold md:font-bold text-lg xl:text-lg lg:text-center text-[#47526B]">
        {title}
      </h2>
      <p className="text-gray-600 max-md:text-sm lg:text-center text-sm xl:text-base">
        {subTitle}
      </p>
      <Link
        href={"/"}
        className={buttonVariants({
          variant: "ghost",
          className: "flex gap-1 items-center w-fit ",
        })}
      >
        {buttonText}
        <span>
          <Icons.chevronRight className="size-5" />
        </span>
      </Link>
    </motion.div>
  );
};

export default HomeHealthcareSolutionsItem;
