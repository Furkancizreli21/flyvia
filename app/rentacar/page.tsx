import Contain from "@/components/cars/Main/Contain";
import Browse from "@/components/cars/Main/Browse";
import Cars from "@/components/cars/Main/Cars";
import WhyUs from "@/components/cars/Main/WhyUs";
const HeroSection = () => {
  return (
    <div className="p-10">
      <section className="relative w-full h-130">
        <Contain />
      </section>
      <Browse />
      <Cars />
      <WhyUs />
    </div>
  );
};

export default HeroSection;
