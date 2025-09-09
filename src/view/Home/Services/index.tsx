import { TitleSection } from "@/components/TitleSection";
import { Plane, Settings, Store, Users } from "lucide-react";

interface ServicesCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const servicesCards: ServicesCardProps[] = [
  {
    title: "Desenvolvemos a sua necessidade",
    icon: <Users color="#9333EA" />,
    description:
      "Nosso time está preparado para desenvolver a sua necessidade. Trabalhamos com uma equipe pronta para prototipar e apresentar opções antes mesmo de iniciar o desenvolvimento.",
  },
  {
    title: "Atualizações sob medida",
    icon: <Settings color="#9333EA" />,
    description:
      "Está com uma versão antiga do seu site e quer dar uma repaginada? Trazemos soluções novas para você com ideias e novas formas de desenvolver.",
  },
  {
    title: "E-commerce",
    icon: <Store color="#9333EA" />,
    description:
      "Está iniciando no mundo do e-commerce e quer trazer um front único para a sua loja? Com a Rivra conseguimos dar o toque de atualidade e objetividade para seu site.",
  },
  {
    title: "Inovação e simplicidade",
    icon: <Plane color="#9333EA" />,
    description:
      "Está com uma ideia no lápis e não sabe como iniciar? A Rivra trás modelos de gerenciamento de produto para te impulsionar na hora de desenvolver e te auxiliar da melhor maneira possível.",
  },
];

export const ServicesView = () => {
  return (
    <section id="servicos" className="">
      <div className="container">
        <div className="flex justify-center sm:justify-start">
          <TitleSection title="O que fazemos?" />
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mt-12">
          {servicesCards.map((card) => (
            <div
              key={card.title}
              className="bg-neutral-800 p-5 rounded-2xl flex flex-col shadow-md service-card"
            >
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                {card.icon}
                <h3 className="text-xl lg:text-2xl text-lime-200 font-semibold text-center sm:text-left">
                  {card.title}
                </h3>
              </div>

              <p className="lg:text-lg text-center sm:text-left text-neutral-50 font-normal mt-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
