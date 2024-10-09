import React from "react";

interface ButtonProps {
  children: React.ReactNode | string;
}

const ButtonForm: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-[#1C92CB] mt-5 border-solid border-[1px] border-[#046CCB] text-[#F5F5F5] p-2 rounded-[8px] h-[55px] w-full"
    >
      {children}
    </button>
  );
};

export default ButtonForm;
