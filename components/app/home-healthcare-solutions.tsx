import HomeHealthcareSotionsItemsSection from "@/components/app/home-healthcare-solutions-items";

const HomeHealthcareSolutions = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-4 md:items-center ">
          <h1 className="text-[#26A2EB] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl md:text-center">
            Explore Our Full Range of Healthcare Solutions
          </h1>
        </div>
        <HomeHealthcareSotionsItemsSection />
      </div>
    </section>
  );
};

export default HomeHealthcareSolutions;
