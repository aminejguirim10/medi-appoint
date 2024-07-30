import { HomeTopSpecialistsDoctors } from "@/components/app/home-top-specialists-doctors";

const HomeTopSpecialists = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-4 md:items-center ">
          <h1 className="text-[#EB9626] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl md:text-center">
            Meet Our Top Specialists
          </h1>
          <p className="text-muted-foreground max-w-2xl md:text-center">
            Experience the Best in Medical Care
          </p>
        </div>
      </div>
      <div className="mt-8">
        <HomeTopSpecialistsDoctors />
      </div>
    </section>
  );
};

export default HomeTopSpecialists;
