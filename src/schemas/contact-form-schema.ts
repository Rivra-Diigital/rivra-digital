import { z } from "zod";

const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome é obrigatório" }),
  empresa: z
    .string()
    .min(2, { message: "Empresa precisa ter no mínimo dois caracteres" }),
  whatsapp: z
    .string()
    .min(11, {
      message: "O número do Whatsapp deve conter no mínimo 11 caracteres",
    })
    .refine(
      (val) => {
        const numbers = val.replace(/\D/g, "");
        return numbers.length === 11;
      },
      { message: "Whatsapp deve conter 11 dígitos numéricos" }
    ),
  email: z.string().email({ message: "E-mail é obrigatório" }),
  mensagem: z.string().optional(),
});

export type ContactFormData = z.infer<typeof formSchema>;
export default formSchema;
