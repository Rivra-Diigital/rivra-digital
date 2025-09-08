import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import Link from "next/link";

const navigation = [
  {
    name: "Quem somos",
    url: "#quem-somos",
  },
  {
    name: "Serviços",
    url: "#servicos",
  },
  {
    name: "Soluções",
    url: "#solucoes",
  },
];

export const Header = () => {
  return (
    <header className="w-full py-[26px] bg-neutral-800/50 fixed z-[999]">
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-16">
          <nav>
            <ul className="flex gap-6">
              {navigation.map((item) => (
                <li key={item.name} className="text-neutral-50 font-medium">
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
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
        </div>
      </div>
    </header>
  );
};
