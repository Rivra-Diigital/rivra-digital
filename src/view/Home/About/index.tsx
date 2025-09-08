import { Button } from "@/components/Button";
import { TitleSection } from "@/components/TitleSection";
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

      <div className="bg-neutral-900 w-full px-4 py-8 lg:px-14 lg:py-12">
        <div className="half-container lg:align-right flex flex-col justify-center h-full">
          <div className="w-full flex justify-center sm:justify-start">
            <TitleSection title="Quem somos" />
          </div>

          <p className="text-base md:text-lg text-center sm:text-left text-neutral-50 mt-12 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <Button
            className="mx-auto sm:mx-0"
            content="Conheça nossa equipe"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11.7872"
                  cy="8.40425"
                  r="3.40426"
                  stroke="#A3E635"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.7446 16.8594C17.7446 16.1272 17.2843 15.474 16.5948 15.2277V15.2277C13.4859 14.1174 10.0885 14.1174 6.9796 15.2277V15.2277C6.29004 15.474 5.82974 16.1272 5.82974 16.8594L5.82974 17.979C5.82974 18.9896 6.72481 19.7659 7.72523 19.6229L8.05878 19.5753C10.5318 19.222 13.0425 19.222 15.5156 19.5753L15.8491 19.6229C16.8496 19.7659 17.7446 18.9896 17.7446 17.979L17.7446 16.8594Z"
                  stroke="#A3E635"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.68088 11.9028C5.20364 11.9028 4.0061 10.7052 4.0061 9.22799C4.0061 7.75076 5.20364 6.55322 6.68088 6.55322"
                  stroke="#A3E635"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3.75143 18.0051L3.48935 18.0425C2.7033 18.1548 2.00003 17.5448 2.00003 16.7508L2.00003 15.8711C2.00003 15.2958 2.3617 14.7826 2.9035 14.5891C3.44395 14.3961 3.99549 14.2458 4.55322 14.1382"
                  stroke="#A3E635"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17.3192 11.9028C18.7965 11.9028 19.994 10.7052 19.994 9.22799C19.994 7.75076 18.7965 6.55322 17.3192 6.55322"
                  stroke="#A3E635"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20.2487 18.0051L20.5108 18.0425C21.2968 18.1548 22.0001 17.5448 22.0001 16.7508L22.0001 15.8711C22.0001 15.2958 21.6384 14.7826 21.0966 14.5891C20.5562 14.3961 20.0046 14.2458 19.4469 14.1382"
                  stroke="#A3E635"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};
