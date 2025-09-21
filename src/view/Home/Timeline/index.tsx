import { TitleSection } from "@/components/TitleSection";
import { SquareChartGantt, Image, PenLine, CodeXml } from "lucide-react";

export const Timeline = () => {
  const cards = [
    {
      icon: <SquareChartGantt color="#BEF264" />,
      name: "Planejamento",
    },
    {
      icon: <Image color="#BEF264" />,
      name: "Protótipo",
    },
    {
      icon: <PenLine color="#BEF264" />,
      name: "Conteúdo",
    },
    {
      icon: <CodeXml color="#BEF264" />,
      name: "Desenvolvimento",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <TitleSection
          title="Nosso cronograma."
          description="Seguimos o cronograma à risca para garantir o melhor o tempo de entrega e qualidade no desenvolvimento do seu projeto."
        />

        <div className="flex flex-col gap-5 lg:flex-row justify-between items-center mt-20">
          <span className="text-2xl font-bold text-lime-200">START</span>

          <div className="flex flex-col lg:flex-row gap-6">
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex justify-center gap-2 items-center p-5 bg-purple-800 rounded-2xl shadow-2xl timeline-item relative"
              >
                {card.icon}
                <h4 className="text-neutral-50 font-bold text-base">
                  {card.name}
                </h4>
              </div>
            ))}
          </div>

          <span className="text-2xl font-bold text-lime-200">PROD</span>
        </div>
      </div>
    </section>
  );
};
