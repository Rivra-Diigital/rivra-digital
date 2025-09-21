import { Button } from "@/components/Button";
import { ContactModal } from "@/components/form/ContactModal";
import {
  Sheet,
  SheetClose,
  SheetContent,
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
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu color="white" />
        </SheetTrigger>

        <SheetContent className="z-[1000] bg-gradient-to-b from-neutral-950 to-purple-950 border-0 p-8">
          <SheetTitle></SheetTitle>

          <SheetHeader>
            <nav className="mt-20">
              <ul className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <li
                    key={item.name}
                    className="text-lime-200 text-xl font-medium"
                  >
                    <SheetClose asChild>
                      <Link href={item.url}>{item.name}</Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetClose asChild>
              <ContactModal
                trigger={
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
                }
              />
            </SheetClose>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
