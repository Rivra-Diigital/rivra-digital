import { Target, Eye, Clover } from "lucide-react";

export const values = [
  {
    icon: <Target color="white" />,
    name: "Missão",
    content: (
      <p className="text-neutral-50 text-center text-sm">
        Transformar a identidade de cada negócio em experiências digitais
        autênticas e estratégicas, unindo criatividade e tecnologia para gerar
        valor real e conexões significativas entre marcas e pessoas. Criamos
        mais do que um negócio digital, damos alma ao seu produto.
      </p>
    ),
  },
  {
    icon: <Eye color="white" />,
    name: "Visão",
    content: (
      <p className="text-neutral-50 text-center text-sm">
        Ser referência em soluções digitais inovadoras no Brasil, reconhecida
        pela capacidade de transformar ideias em projetos únicos, que unem
        estética, funcionalidade e impacto humano.
      </p>
    ),
  },
  {
    icon: <Clover color="white" />,
    name: "Valores",
    content: (
      <ul className="text-neutral-50 flex flex-col gap-4 text-center text-sm">
        <li>
          <b>Autenticidade</b>: respeitar a essência de cada cliente e traduzir
          sua identidade de forma única.
        </li>

        <li>
          <b>Inovação</b>: aplicar tecnologia e criatividade para superar
          expectativas.
        </li>

        <li>
          <b>Comunicação e Transparência</b>: diálogo aberto, acessivo e colaborativo em todas as etapas dos projetos.
        </li>

        <li>
          <b>Qualidade com Agilidade</b>: entregar soluções eficientes sem abrir
          mão do cuidado nos detalhes.
        </li>

        <li>
          <b>Colaboração</b>: crescer junto com nossos clientes,
          parceiros e equipe.
        </li>
      </ul>
    ),
  },
];
