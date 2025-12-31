import { Hero } from "@/components/marketing/hero";
import { Reframe } from "@/components/marketing/reframe";
import { SolutionPrinciple } from "@/components/marketing/solution-principle";
import { StruktoraImplementation } from "@/components/marketing/struktora-implementation";
import { UseAreas } from "@/components/marketing/use-areas";
import { StandardDefinition } from "@/components/marketing/standard-definition";
import { TransitionToExample } from "@/components/marketing/transition-to-example";
import { UseCaseExample } from "@/components/marketing/use-case-example";
import { WhatStruktoraIsNot } from "@/components/marketing/what-struktora-is-not";
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
      <UseAreas />
      <StandardDefinition />
      <TransitionToExample />
      <UseCaseExample />
      <WhatStruktoraIsNot />

      <Demo />
      <UseCases />
      <Pricing />
      <FAQ />
    </>
  );
}
