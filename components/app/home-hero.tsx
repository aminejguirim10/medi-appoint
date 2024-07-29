import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HomeHero = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/assets/img1.jpg"}
          width={1400}
          height={632}
          alt="hero image"
          quality={100}
          className="w-full h-[calc(100vh-110px)] md:h-[calc(100vh-104px)] "
        />
      </div>
      <div className="absolute flex flex-col gap-4 top-1/2 left-6 xl:left-40 2xl:left-60">
        <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold max-lg:max-w-md  text-white">
          Find the right doctor for you
        </h1>
        <p className="text-white font-medium">
          Book your next appointment with ease and convenience
        </p>
        <div className="flex gap-2">
          <Link href={"/"} className={buttonVariants({ variant: "default" })}>
            Book
          </Link>
          <Link
            href={"/"}
            className={buttonVariants({ variant: "heroOutline" })}
          >
            Learn More
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default HomeHero;
