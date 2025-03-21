import React from "react";
import { PricingSection } from "./pricing";
import { HeroSection } from "./hero";
import { FeaturesSection } from "./features";
import { CallToAction } from "./call-to-action";
export default async function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CallToAction />
    </div>
  );
}
