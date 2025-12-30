import { Hero } from "@/components/marketing/hero";
import { Reframe } from "@/components/marketing/reframe";
import { SolutionPrinciple } from "@/components/marketing/solution-principle";
import { StruktoraImplementation } from "@/components/marketing/struktora-implementation";
import { Demo } from "@/components/marketing/demo";
import { UseCases } from "@/components/marketing/use-cases";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Reframe />
      <SolutionPrinciple />
      <StruktoraImplementation />

      <Demo />
      <UseCases />
      <Pricing />
      <FAQ />
    </>
  );
}
