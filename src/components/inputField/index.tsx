import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  error?: FieldError;
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  error,
  register,
  placeholder,
}) => {
  return (
    <div className="center-col !items-start relative w-full my-3">
      <input
        placeholder={placeholder}
        className="peer w-full pl-6 text-foreground bg-transparent rounded-3xl h-[65px] border transition-all border-solid border-border focus:!border-foreground"
        id={id}
        type={type}
        {...register}
      />
      <label
        className="text-border text-[13px] transition-all mb-2 ml-1 absolute bg-background px-2 top-[-8px] left-8 peer-focus:text-foreground"
        htmlFor={id}
      >
        {label}
      </label>
      {error && (
        <span className="text-destructive text-[12px] mt-1 opacity-90 ml-1">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
