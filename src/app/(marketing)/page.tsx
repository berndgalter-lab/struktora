import { Hero } from "@/components/marketing/hero";
import { Reframe } from "@/components/marketing/reframe";
import { SolutionPrinciple } from "@/components/marketing/solution-principle";
import { StruktoraImplementation } from "@/components/marketing/struktora-implementation";
import { UseCaseExample } from "@/components/marketing/use-case-example";
import { UseAreas } from "@/components/marketing/use-areas";
import { StandardDefinition } from "@/components/marketing/standard-definition";
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
      <UseCaseExample />
      <UseAreas />
      <StandardDefinition />

      <Demo />
      <UseCases />
      <Pricing />
      <FAQ />
    </>
  );
}
