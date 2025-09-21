"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema, { ContactFormData } from "@/schemas/contact-form-schema";
import { Button } from "@/components/Button";
import { FormInputField } from "@/components/form/FormInputField";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      whatsapp: "",
      mensagem: "",
    },
  });

  useEffect(() => {
    const hutk = getCookie("hubspotutk");
    if (hutk) {
      sessionStorage.setItem("hutk", hutk);
    }
  }, []);

  function getCookie(name: string): string | null {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  }

  const onSubmit = async (values: ContactFormData) => {
    setIsLoading(true);
    try {
      const hutk = sessionStorage.getItem("hutk");

      const res = await fetch("/api/send-to-hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, hutk }),
      });

      const data = await res.json();
      toast.success(
        data.success
          ? "E-mail enviado com sucesso!"
          : "Erro ao enviar o e-mail."
      );
    } catch (err) {
      console.error("Erro na requisição:", err);
      toast.error("Erro ao enviar o e-mail.");
    } finally {
      form.reset();
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInputField
            control={form.control}
            name="nome"
            label="Seu nome *"
            placeholder="Digite aqui"
          />
          <FormInputField
            control={form.control}
            name="empresa"
            label="Sua empresa"
            placeholder="Digite aqui"
          />
          <FormInputField
            control={form.control}
            name="email"
            label="Seu e-mail *"
            placeholder="email@gmail.com"
          />
          <FormInputField
            control={form.control}
            name="whatsapp"
            label="Whatsapp"
            placeholder="(DDD) 0 0000 - 0000"
          />
          <FormInputField
            control={form.control}
            name="mensagem"
            label="Mensagem (Opcional)"
            placeholder="Digite sua mensagem aqui"
            isTextarea
          />
          <button
            className="w-full md:w-max bg-purple-800 text-neutral-50 font-bold text-xl py-4 px-8 rounded-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};
