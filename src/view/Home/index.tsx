import { AboutView } from "./About";
import { HomeHero } from "./Hero";
import { ServicesView } from "./Services";
import { SolutionsView } from "./Solutions";
import { Timeline } from "./Timeline";
import { ContactCTA } from "@/components/contactCTA";

export const HomeView = () => {
  return (
    <>
      <HomeHero />
      <AboutView />
      <div className="bg-gradient-to-b from-blue-950 to-purple-950 py-20 ">
        <ServicesView />
        <SolutionsView />
        <Timeline />

        <div className="container">
          <ContactCTA />
        </div>
      </div>
    </>
  );
};
