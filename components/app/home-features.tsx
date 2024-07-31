import { HomeFeaturesItems } from "@/components/app/home-features-items";

const HomeFeatures = () => {
  return (
    <section className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-4 md:items-center ">
          <h1 className="text-[#47526B] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl md:text-center">
            Advanced Features for a Seamless Experience
          </h1>
          <p className="text-muted-foreground max-w-2xl md:text-center">
            Explore the innovative features designed to enhance your healthcare
            appointment experience.
          </p>
        </div>
        <HomeFeaturesItems />
      </div>
    </section>
  );
};

export default HomeFeatures;
