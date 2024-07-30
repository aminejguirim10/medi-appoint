import { HomeServicesItems } from "@/constants";
import HomeServiceItem from "@/components/app/home-service-item";

const HomeServices = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 md:gap-4 md:items-center ">
        <h1 className="text-[#47526B] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl md:text-center">
          Expert Doctors at Your Service
        </h1>
        <p className="text-muted-foreground max-w-2xl md:text-center">
          Experience the Best in Medical Care
        </p>
        <div className="mt-10 max-md:mt-5 flex flex-wrap gap-5 md:gap-6 justify-center">
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
  );
};

export default HomeServices;
