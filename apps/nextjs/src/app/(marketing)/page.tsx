import React from "react"
import { PricingSection } from "./pricing";
import { HeroSection } from "./hero";
import { FeaturesSection } from "./features";

export default async function Home() {
  return (
    // <h1 className="text-4xl flex flex-col gap-4">
    //   The Project Planner AI Starter Kit
    // </h1>

    // <p className="text-xl max-w-xl">This SaaS starter kit includes:</p>

    // <ul className="list-disc grid grid-cols-2 px-12 leading-10">
    //   <li>Authentication (Next-Auth)</li>
    //   <li>Authorization (custom)</li>
    //   <li>Subscription Management (Stripe)</li>
    //   <li>Stripe Integration / Webhooks</li>
    //   <li>Todo Management</li>
    //   <li>Drizzle ORM</li>
    //   <li>Light / Dark Mode</li>
    //   <li>ShadCN components</li>
    //   <li>Tailwind CSS</li>
    //   <li>Account Deletion</li>
    //   <li>Changelog (via Project Planner AI)</li>
    //   <li>Analytics (via Project Planner AI)</li>
    //   <li>Feedback (via Project Planner AI)</li>

    // <SignedIn>
    //   <Button asChild>
    //     <Link href="/todos">Go to your Dashboard</Link>
    //   </Button>
    // </SignedIn>

    // <SignedOut>
    //   <GetStartedButton />
    // </SignedOut>

    // </main>
    (<div>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </div>)
  );
}
