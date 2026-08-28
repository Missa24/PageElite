"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  message: z.string().min(10, "Escribe un mensaje más completo"),
});

type ContactValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactValues) => {
    const subject = encodeURIComponent(
      `Nueva consulta de ${data.name}`
    );

    const body = encodeURIComponent(`
        Nombre: ${data.name}
        Correo: ${data.email}
        Teléfono: ${data.phone}

        Mensaje:
        ${data.message}
      `);

    //const correo = "elite.academy.bo@gmail.com"
    window.location.href = `mailto:missaelapaza@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium"
          >
            Nombre completo
          </label>

          <Input
            id="name"
            placeholder="Ej. María López"
            className="h-12 rounded-xl"
            aria-invalid={!!form.formState.errors.name}
            aria-describedby={
              form.formState.errors.name ? "name-error" : undefined
            }
            {...form.register("name")}
          />

          {form.formState.errors.name && (
            <p
              id="name-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
            Correo electrónico
          </label>

          <Input
            id="email"
            type="email"
            placeholder="correo@gmail.com"
            className="h-12 rounded-xl"
            aria-invalid={!!form.formState.errors.email}
            aria-describedby={
              form.formState.errors.email ? "email-error" : undefined
            }
            {...form.register("email")}
          />

          {form.formState.errors.email && (
            <p
              id="email-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium"
        >
          Teléfono
        </label>

        <Input
          id="phone"
          placeholder="+51 999 999 999"
          className="h-12 rounded-xl"
          aria-invalid={!!form.formState.errors.phone}
          aria-describedby={
            form.formState.errors.phone ? "phone-error" : undefined
          }
          {...form.register("phone")}
        />

        {form.formState.errors.phone && (
          <p
            id="phone-error"
            className="text-sm text-destructive"
            role="alert"
          >
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium"
        >
          Mensaje
        </label>

        <Textarea
          id="message"
          placeholder="Cuéntanos qué programa te interesa..."
          rows={5}
          className="resize-none rounded-xl"
          aria-invalid={!!form.formState.errors.message}
          aria-describedby={
            form.formState.errors.message ? "message-error" : undefined
          }
          {...form.register("message")}
        />

        {form.formState.errors.message && (
          <p
            id="message-error"
            className="text-sm text-destructive"
            role="alert"
          >
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 rounded-xl px-10"
      >
        Enviar consulta
      </Button>
    </form>
  );
};