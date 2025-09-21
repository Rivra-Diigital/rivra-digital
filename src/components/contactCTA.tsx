import { ContactModal } from "@/components/form/ContactModal";
import { Button } from "@/components/Button";

export const ContactCTA = () => {
  return (
    <div className="p-10 bg-neutral-800 shadow-2xl rounded-2xl flex flex-col items-center justify-center">
      <div className="text-center flex flex-col gap-4">
        <h3 className="text-lime-200 font-bold text-2xl">
          Vamos tirar sua ideia do papel?
        </h3>

        <p className="text-lg text-neutral-100">Clique no botão abaixo e preencha o formulário. Entraremos em contato em breve!</p>
      </div>

      <ContactModal
        trigger={
          <Button
            className="mt-4"
            content="Contate-nos"
            icon={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.2 13.0002L10.8306 8.76453C11.2158 8.31514 11.2158 7.65202 10.8306 7.20263L7.2 2.96691"
                  stroke="#FAF5FF"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        }
      />
    </div>
  );
};
