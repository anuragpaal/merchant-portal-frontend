import type { ButtonHTMLAttributes } from "react";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton = ({
  children,
  className = "",
  ...props
}: AppButtonProps) => {
  return (
    <button
      className={`
        w-full
        bg-blue-600
        text-white
        px-4
        py-2
        rounded-md
        hover:bg-blue-700
        transition
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;