"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import InputField from "@/components/inputField";

import { register as registerUser } from "@/services/auth";

const schema = z
  .object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(1, "Confirmação de senha necessaria!"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não conferem",
        path: ["confirmPassword"],
      });
    }
  });

type AuthFormInputs = z.infer<typeof schema>;

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    resolver: zodResolver(schema),
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: AuthFormInputs) => {
    console.log(data);
    try {
      await registerUser(data.email, data.password);

      onSwitchToLogin();
    } catch (error) {
      setError("Error ao realizar o registro!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="center-col !items-start w-[80%]"
    >
      <h2 className="font-poppinsSemibold text-start text-foreground text-6xl">
        Crie sua conta
      </h2>

      <p className="font-poppinsThin tracking-wide text-foreground text-start first-letter:text-[16px] mt-3 mb-8">
        Escolhe seu melhor email e crie sua conta.
      </p>

      <InputField
        label="Email"
        id="email"
        type="email"
        placeholder="seuemail@email.com"
        register={register("email")}
        error={errors.email}
      />

      <InputField
        label="Senha"
        id="password"
        type="password"
        placeholder="*********"
        register={register("password")}
        error={errors.password}
      />

      <InputField
        label="Confirmar Senha"
        id="confirmPassword"
        type="password"
        placeholder="*********"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      {error && (
        <p className="text-destructive text-[12px] mt-1 opacity-90">{error}</p>
      )}

      <button
        className="w-full h-[65px] mt-4 rounded-3xl text-background bg-foreground"
        type="submit"
      >
        Registrar
      </button>

      <p className="mt-5 text-sm text-gray-100 w-full text-center">
        Já tem uma conta ?
        <button
          onClick={onSwitchToLogin}
          className="text-blue-500 ml-1 hover:underline focus:outline-none"
        >
          Entre
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
