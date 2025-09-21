import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormInputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  isTextarea?: boolean;
}

export function FormInputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  isTextarea = false,
}: FormInputFieldProps<T>) {
  const Component = isTextarea ? Textarea : Input;

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    const limitedNumbers = numbers.slice(0, 11);

    if (limitedNumbers.length <= 2) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 7) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
    } else {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(
        2,
        7
      )}-${limitedNumbers.slice(7)}`;
    }
  };

  function formatCNPJ(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-4">
          <FormLabel className="text-sm text-neutral-50 font-semibold">
            {label}
          </FormLabel>

          <FormControl>
            <Component
              placeholder={placeholder}
              className={
                isTextarea
                  ? "min-h-[210px] text-base placeholder:text-sm py-3 px-4 border-[3px] border-lime-200 rounded-2xl"
                  : "h-[48px] text-sm placeholder:text-sm rounded-full py-3 px-4 border-[3px] border-lime-200"
              }
              {...field}
              onChange={(e) => {
                if (name === "whatsapp") {
                  const formattedValue = formatPhoneNumber(e.target.value);
                  field.onChange(formattedValue);
                } else {
                  field.onChange(e);
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
