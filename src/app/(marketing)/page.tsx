import { Hero } from "@/components/marketing/hero";
import { Problem } from "@/components/marketing/problem";
import { Solution } from "@/components/marketing/solution";
import { Features } from "@/components/marketing/features";
import { Pricing } from "@/components/marketing/pricing";
import { CTA } from "@/components/marketing/cta";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Pricing />
      <CTA />
    </>
  );
}
