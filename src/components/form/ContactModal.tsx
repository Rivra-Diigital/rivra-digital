import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import { TitleSection } from "../TitleSection";

export const ContactModal = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="bg-gradient-to-b from-neutral-950 to-purple-950 border-0 z-[1100] w-full h-full lg:min-w-[640px] lg:max-h-[768px] px-4 py-20 overflow-y-auto lg:p-20 custom-scroll">
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-center sm:justify-start">
              <TitleSection title="Vamos conversar?" />
            </div>
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para conversamos sobre sua ideia.
          </DialogDescription>
        </DialogHeader>

        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};
