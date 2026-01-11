import FeaturesSection from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import HolidayDestinations from "@/components/home/HolidayDestinations";
import Home from "@/components/home/Home";
import InstantDeals from "@/components/home/InstantDeals";
import Navbar from "@/components/home/Navbar";

export default function HeroSection() {
  return (
    <>
      <Home />
      <HolidayDestinations />
      <InstantDeals />
      <FeaturesSection />
    </>
  );
}
