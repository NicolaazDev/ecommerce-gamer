"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputCep from "@/components/inputCEP";
import { useMask } from "@react-input/mask";

const cepSchema = z.object({
  cep: z
    .string()
    .min(1, "CEP é obrigatório")
    .regex(/^\d{5}-\d{3}$/, "Formato de CEP inválido"),
});

interface ShippingCalculatorProps {}

const ShippingCalculator: React.FC<ShippingCalculatorProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cepSchema),
  });

  const [result, setResult] = useState("");

  const inputRef = useMask({
    mask: "_____-___",
    replacement: { _: /\d/ },
  });

  const onSubmit = (data: any) => {
    console.log("Dados enviados:", data);
    setResult("R$ 80,58 - Previsão: até 13 de agosto");
  };

  return (
    <div className="mb-4 w-full">
      <span className="block text-foreground text-[16px] font-bold mb-3">
        Calcular prazo de Entrega
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full min-w-full h-[60px] max-w-sm items-center space-x-2"
      >
        <div className="w-full h-full border border-red-900 border-solid">
          <input
            type="text"
            placeholder={"Insira seu CEP"}
            className={`outline-none focus-visible:ring-0 w-full h-full ${
              errors.cep ? "border-red-500" : ""
            }`}
            {...register("cep")}
            ref={inputRef}
          />
          {errors.cep && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.cep.message)}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="h-full border border-red-900 border-solid "
        >
          Calcular
        </button>
      </form>
      {result && (
        <div className="flex flex-col my-4 w-full">
          <span className="flex justify-between items-center text-gray-700 text-[16px] font-bold mb-1">
            Normal <span className="font-black text-[14px]">{result}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;
