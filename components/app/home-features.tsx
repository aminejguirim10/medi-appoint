import { HomeFeaturesItems } from "@/components/app/home-features-items"

const HomeFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 md:items-center">
          <h1 className="text-4xl font-bold text-[#47526B] max-md:text-3xl max-sm:text-2xl md:max-w-3xl md:text-center">
            Advanced Features for a Seamless Experience
          </h1>
          <p className="max-w-2xl text-muted-foreground md:text-center">
            Explore the innovative features designed to enhance your healthcare
            appointment experience.
          </p>
        </div>
        <HomeFeaturesItems />
      </div>
    </section>
  )
}

export default HomeFeatures
