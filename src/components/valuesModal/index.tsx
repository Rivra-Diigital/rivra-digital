import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { values } from "./data";

export const ValuesModal = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogTitle />

      <DialogContent className="bg-gradient-to-b from-neutral-950 to-purple-950 border-0 z-[1100] w-full lg:min-w-[1024px] max-h-[540px] lg:max-h-[768px] px-4 py-20 overflow-y-auto lg:p-20 custom-scroll">
        <div className="grid lg:grid-cols-3 gap-10">
          {values.map((item) => (
            <div key={item.name} className="flex flex-col gap-4 items-center">
              
              <h4 className="text-lime-200 text-2xl font-semibold flex gap-2 items-center">
                {item.icon}
                {item.name}
              </h4>
              {item.content}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
