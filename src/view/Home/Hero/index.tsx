import { Button } from "@/components/Button";

export const HomeHero = () => {
  return (
    <main className="hero-banner overflow-hidden ">
      <div className="hero-bg" />
      <div className="container h-screen relative z-20 flex flex-col justify-center">
        <div className="flex flex-col w-full md:max-w-[611px]">
          <h1 className="text-neutral-50 font-bold text-2xl sm:text-[42px] w-full text-center md:text-left">
            Entregamos soluções e identidade visual para o seu negócio.
          </h1>

          <Button
            url="#quem-somos"
            className="mx-auto md:mx-0 mt-4"
            content="Conheça a Rivra"
            color="green"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.7 13.0002L10.3306 8.76453C10.7158 8.31514 10.7158 7.65202 10.3306 7.20263L6.7 2.96691"
                  stroke="#FAFAFA"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </main>
  );
};
