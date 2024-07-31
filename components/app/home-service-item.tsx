import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

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
      className={` border border-gray-500 flex ${
        isVertical ? "flex-col lg:w-[49%] w-full" : "flex-row w-full"
      } max-sm:flex-col gap-2 h-fit`}
    >
      <div
        className={`flex flex-col justify-center gap-2 pl-5 ${
          isVertical ? "py-8" : "max-lg:py-6 w-1/2 max-sm:w-full"
        }`}
      >
        <Badge variant="default" className="w-fit">
          {badge}
        </Badge>
        <h2 className="font-bold">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
        <Link
          href={"/"}
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
            className: "flex gap-1 items-center w-fit",
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
            : "sm:ml-2 w-1/2 max-sm:w-full max-sm:h-[300px] bg-blue-500"
        }`}
      >
        <Image
          src={image}
          alt="image"
          width={600}
          height={400}
          quality={100}
          className={isVertical ? "w-full h-[300px] md:h-[450px]" : "h-full"}
        />
      </div>
    </div>
  );
};

export default HomeServiceItem;
