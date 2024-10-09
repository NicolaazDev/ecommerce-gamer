"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import InputField from "@/components/inputField";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type AuthFormInputs = z.infer<typeof schema>;

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    resolver: zodResolver(schema),
  });

  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const onSubmit = async (data: AuthFormInputs) => {
    console.log("Login form data:", data);

    try {
      await login(data.email, data.password);

      router.push("/home");
    } catch (error) {
      setError("Error ao realizar o login!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="center-col !items-start w-[80%]"
    >
      <h2 className="font-poppinsSemibold text-start text-foreground text-6xl">
        Bem-vindo de volta.
      </h2>

      <p className="font-poppinsThin tracking-wide text-foreground text-start w-full text-[16px] mt-3 mb-8">
        Entre com seu email e senha para continuar.
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

      {error && (
        <p className="text-destructive text-[12px] mt-1 opacity-90">{error}</p>
      )}

      <button
        className="w-full h-[65px] mt-4 rounded-3xl text-background bg-foreground"
        type="submit"
      >
        Entrar
      </button>

      <p className="mt-5 text-sm text-gray-100 w-full text-center">
        Não tem uma conta ?
        <button
          onClick={onSwitchToRegister}
          className="text-blue-500 ml-1 hover:underline focus:outline-none"
        >
          Registre-se
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
