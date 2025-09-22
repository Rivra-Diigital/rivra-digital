import { Button } from "@/components/Button";
import { TitleSection } from "@/components/TitleSection";
import { ValuesModal } from "@/components/valuesModal";
import Image from "next/image";

export const AboutView = () => {
  return (
    <section id="quem-somos" className="flex overflow-hidden">
      <div className="hidden lg:block w-full relative min-h-[543px]">
        <Image
          className="w-full absolute inset-0 h-full object-cover"
          fill
          alt="fill later"
          src="/images/home/about-image.png"
        />
      </div>

      <div className="w-full pl-4 py-8 lg:pl-14 lg:py-12">
        <div className="half-container lg:align-right flex flex-col justify-center h-full">
          <div className="w-full flex justify-center sm:justify-start">
            <TitleSection title="Quem somos" />
          </div>

          <p className="text-base md:text-lg text-center sm:text-left text-neutral-50 mt-12 mb-8">
            Somos a Rivra Digital, um time formado por jovens empreendedores
            apaixonados por tecnologia e inovação. Acreditamos que cada negócio
            carrega uma essência única que merece ser expressada com
            autenticidade. Dessa forma, buscamos transformar a identidade do seu
            negócio em algo que vai além da estética e transcende a barreira
            digital, dando alma ao seu projeto.
            <br/><br/>
            Combinando a sensibilidade
            humana com a eficácia comprovada da inteligência artificial,
            trazemos soluções com agilidade e qualidade, sem abrir mão do
            cuidado em cada detalhe. E mais do que criar, buscamos conectar
            marcas e pessoas através de nossa criatividade de inovação, com
            soluções feita sob medida para cada cliente.
          </p>

          <ValuesModal
            trigger={<Button className="mx-auto sm:mx-0" content="Conheça o nosso propósito" />}
          />
        </div>
      </div>
    </section>
  );
};
