import { TitleSection } from "@/components/TitleSection";
import { Carousel } from "./Carousel";

export const SolutionsView = () => {
  return (
    <section id="solucoes" className="mt-20">
      <div className="container">
        <div className="w-full flex justify-center sm:justify-start">
          <TitleSection
            title="Integrações a pronta entrega."
            description="Garantimos a integridade do seu projeto utilizando soluções seguras e que cabem no seu bolso."
          />
        </div>

        <Carousel />
      </div>
    </section>
  );
};
