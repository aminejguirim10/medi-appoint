import Image from "next/image";

const HomeDiscoverServices = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4">
        <div className="md:w-1/2 flex flex-col gap-4  justify-center ">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold text-[#2563EB]">
            Discover Our Comprehensive Range of Medical Services
          </h1>
          <p className="text-sm">
            At our clinic, we offer a wide range of medical services to cater to
            your healthcare needs. From routine check-ups to specialized
            treatments, our team of experienced doctors is here to provide you
            with the highest quality care.
          </p>
          <div className="flex gap-4 my-2 ">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold  ">Preventive Care</h2>
              <p className="text-sm text-muted-foreground">
                Stay healthy and prevent illnesses with our comprehensive range
                of preventive care services.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold ">Treatments</h2>
              <p className="text-sm text-muted-foreground">
                Receive personalized and effective treatments from our team of
                specialized doctors.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-[220px] md:h-[350px]  ">
          <Image
            src={"/assets/img2.jpg"}
            alt="image"
            height={300}
            width={500}
            quality={100}
            className="w-full h-[220px] md:h-[350px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeDiscoverServices;
