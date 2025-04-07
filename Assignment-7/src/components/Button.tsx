import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  return (
    <button
      className="text-white font-medium rounded-lg text-sm px-5 py-2.5 m-2 mb-2 bg-gray-800 hover:bg-gray-700"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
