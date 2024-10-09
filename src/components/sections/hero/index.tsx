import Header from "@/components/header";
import SliderHeroSection from "@/components/ui/sliderHeroSection";

export default function Hero() {
  return (
    <section className="h-screen min-h-screen w-full center relative">
      <Header />
      <div className="w-full h-full pt-[100px] grid grid-cols-1 gap-x-4">
        <SliderHeroSection />
      </div>
    </section>
  );
}
