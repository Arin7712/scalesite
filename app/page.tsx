import About from "@/components/About";
import { FeatureStepsDemo } from "@/components/FeaturedStepsDemo";
import Hero from "@/components/Hero";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import Navbar from "@/components/Navbar";
import Sales from "@/components/Sales";
import Services from "@/components/Services";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="bg-[#fffaf5] overflow-hidden">
      <div className="flex justify-center md:mx-0 mx-6">
        <Navbar />
      </div>
      <Hero/>
      <MarqueeDemo/>
      <About/>
      <Services/>
      <Sales/>
      <FeatureStepsDemo/>
      {/* DotPattern filling top-right corner and fading out */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] pointer-events-none z-10">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_top_right,white,transparent)]",
            "mask-image-[radial-gradient(600px_circle_at_top_right,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
}
