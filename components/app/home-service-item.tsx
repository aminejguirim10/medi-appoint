import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"

const HomeServiceItem = ({
  badge,
  butttonText,
  description,
  image,
  title,
  isVertical,
}: HomeServiceItemProps) => {
  return (
    <div
      className={`flex border border-gray-500 ${
        isVertical ? "w-full flex-col lg:w-[49%]" : "w-full flex-row"
      } h-fit gap-2 max-sm:flex-col`}
    >
      <div
        className={`flex flex-col justify-center gap-2 pl-5 ${
          isVertical ? "py-8" : "w-1/2 max-lg:py-6 max-sm:w-full"
        }`}
      >
        <Badge variant="default" className="w-fit">
          {badge}
        </Badge>
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Link
          href={"/"}
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
            className: "flex w-fit items-center gap-1",
          })}
        >
          <span>{butttonText}</span>
          <Icons.chevronRight className="size-5" />
        </Link>
      </div>
      <div
        className={`${
          isVertical
            ? ""
            : "w-1/2 bg-blue-500 max-sm:h-[300px] max-sm:w-full sm:ml-2"
        }`}
      >
        <Image
          src={image}
          alt="image"
          width={600}
          height={400}
          quality={100}
          className={isVertical ? "h-[300px] w-full md:h-[450px]" : "h-full"}
        />
      </div>
    </div>
  )
}

export default HomeServiceItem
