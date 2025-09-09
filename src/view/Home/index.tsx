import { AboutView } from "./About";
import { HomeHero } from "./Hero";
import { ServicesView } from "./Services";
import { SolutionsView } from "./Solutions";

export const HomeView = () => {
  return (
    <>
      <HomeHero />
      <AboutView />
      <div className="bg-gradient-to-b from-blue-950 to-purple-950 py-20 ">
        <ServicesView />
        <SolutionsView />
      </div>
    </>
  );
};
