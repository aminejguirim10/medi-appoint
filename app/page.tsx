import HomeBookAppointment from "@/components/app/home-book-appointment";
import HomeContacts from "@/components/app/home-contact";
import HomeDiscoverServices from "@/components/app/home-discover-services";
import HomeFaqs from "@/components/app/home-faqs";
import HomeFeatures from "@/components/app/home-features";
import HomeHealthcareSolutions from "@/components/app/home-healthcare-solutions";
import HomeHero from "@/components/app/home-hero";
import HomeServices from "@/components/app/home-services";
import HomeTestimonials from "@/components/app/home-testimonials";
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
      <HomeTestimonials />
      <HomeBookAppointment />
      <HomeContacts />
      <HomeFaqs />
    </main>
  );
}
