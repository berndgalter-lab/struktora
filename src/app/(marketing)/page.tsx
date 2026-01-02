import { Hero } from "@/components/marketing/hero";
import { Reframe } from "@/components/marketing/reframe";
import { SolutionPrinciple } from "@/components/marketing/solution-principle";
import { StruktoraImplementation } from "@/components/marketing/struktora-implementation";
import { UseAreas } from "@/components/marketing/use-areas";
import { StandardDefinition } from "@/components/marketing/standard-definition";
import { TransitionToExample } from "@/components/marketing/transition-to-example";
import { UseCaseExample } from "@/components/marketing/use-case-example";
import { WhatStruktoraIsNot } from "@/components/marketing/what-struktora-is-not";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { TargetAudience } from "@/components/marketing/target-audience";
import { ManagementBenefits } from "@/components/marketing/management-benefits";
import { PracticalExperience } from "@/components/marketing/practical-experience";
import { GettingStarted } from "@/components/marketing/getting-started";
import { FinalCTA } from "@/components/marketing/final-cta";

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
      <HowItWorks />
      <TargetAudience />
      <ManagementBenefits />
      <PracticalExperience />
      <GettingStarted />
      <FinalCTA />
    </>
  );
}
