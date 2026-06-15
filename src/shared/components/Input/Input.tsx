import type { InputHTMLAttributes } from "react";

type AppInputProps = InputHTMLAttributes<HTMLInputElement>;

const AppInput = ({
  className = "",
  ...props
}: AppInputProps) => {
  return (
    <input
      className={`
        w-full
        border
        border-gray-300
        rounded-md
        px-3
        py-2
        outline-none
        focus:ring-2
        focus:ring-blue-500
        ${className}
      `}
      {...props}
    />
  );
};

export default AppInput;