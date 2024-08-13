import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

const HomeBookAppointment = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col justify-center gap-4 max-sm:gap-2 md:w-1/2">
          <h1 className="text-4xl font-bold text-[#47526B] max-md:text-3xl max-sm:text-2xl md:max-w-lg">
            Book Your Appointment Today!
          </h1>
          <p className="text-muted-foreground md:max-w-lg">
            Our experienced doctors are ready to provide you with the best
            medical care.
          </p>
          <div className="flex gap-2">
            <Link
              href={"/"}
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
            >
              Book
            </Link>
            <Link
              href={"/"}
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="h-[300px] max-lg:h-[280px] max-md:h-[220px] md:w-1/2">
          <Image
            src={"/assets/img11.jpg"}
            width={1000}
            height={300}
            quality={100}
            alt="book appointment image"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeBookAppointment
