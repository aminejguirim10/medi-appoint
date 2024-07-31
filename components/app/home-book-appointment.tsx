import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HomeBookAppointment = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="flex max-md:flex-col gap-8">
        <div className="flex flex-col md:w-1/2 max-sm:gap-2 gap-4 justify-center">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-lg text-[#47526B]">
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
        <div className="md:w-1/2 h-[300px] max-md:h-[220px] max-lg:h-[280px] ">
          <Image
            src={"/assets/img11.jpg"}
            width={1000}
            height={300}
            quality={100}
            alt="book appointment image"
            className="h-full rounded-xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBookAppointment;
