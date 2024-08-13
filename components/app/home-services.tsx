import { HomeServicesItems } from "@/constants"
import HomeServiceItem from "@/components/app/home-service-item"

const HomeServices = () => {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 md:items-center md:gap-4">
        <h1 className="text-4xl font-bold text-[#47526B] max-md:text-3xl max-sm:text-2xl md:max-w-3xl md:text-center">
          Expert Doctors at Your Service
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-center">
          Experience the Best in Medical Care
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5 max-md:mt-5 md:gap-6">
          {HomeServicesItems.map((service, index) => (
            <HomeServiceItem
              key={index}
              title={service.title}
              badge={service.badge}
              description={service.description}
              butttonText={service.butttonText}
              image={service.image}
              isVertical={service.isVertical}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServices
