import HomeDiscoverServices from "@/components/app/home-discover-services";
import HomeFeatures from "@/components/app/home-features";
import HomeHealthcareSolutions from "@/components/app/home-healthcare-solutions";
import HomeHero from "@/components/app/home-hero";
import HomeServices from "@/components/app/home-services";
import HomeTopSpecialists from "@/components/app/home-top-specialists";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeDiscoverServices />
      <HomeServices />
      <HomeHealthcareSolutions />
      <HomeTopSpecialists />
      <HomeFeatures />
    </main>
  );
}
