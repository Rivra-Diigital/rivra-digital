import { Button } from "@/components/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export const MobileMenu = () => {
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

  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="white" />
      </SheetTrigger>

      <SheetContent className="z-[1000] bg-neutral-950 border-0 p-8">
        <SheetTitle></SheetTitle>

        <SheetHeader>
          <nav className="mt-20">
            <ul className="flex flex-col gap-6">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="text-lime-200 text-xl font-medium"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            className="mt-10"
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
