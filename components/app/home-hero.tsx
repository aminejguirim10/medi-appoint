import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

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
          className="h-[calc(100vh-110px)] w-full md:h-[calc(100vh-104px)]"
        />
      </div>
      <div className="absolute left-6 top-1/2 flex flex-col gap-4 xl:left-40 2xl:left-60">
        <h1 className="text-4xl font-bold text-white max-lg:max-w-md max-md:text-3xl max-sm:text-2xl">
          Find the right doctor for you
        </h1>
        <p className="font-medium text-white">
          Book your next appointment with ease and convenience
        </p>
        <div className="flex gap-2">
          <Link href={"/"} className={buttonVariants({ variant: "default" })}>
            Book
          </Link>
          <Link
            href={"/#services"}
            className={buttonVariants({ variant: "heroOutline" })}
          >
            Learn More
          </Link>
        </div>
      </div>{" "}
    </div>
  )
}

export default HomeHero
