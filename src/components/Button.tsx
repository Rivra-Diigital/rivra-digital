import Link from "next/link";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  content: string;
  icon?: React.ReactNode;
  color?: "purple" | "green" | "blue";
  size?: "small" | "default" | "large";
  url?: string;
}

export const Button = ({
  className,
  onClick,
  content,
  icon,
  color = "purple",
  size = "default",
  url,
}: ButtonProps) => {
  const colorStyles = {
    purple: "bg-purple-800",
    green: "bg-lime-800",
    blue: "bg-blue-800",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm",
    default: "px-4 py-2 text-base sm:px-6 sm:py-2.5 md:px-8 md:py-3 md:text-lg",
    large: "px-6 py-3 text-lg sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-xl",
  };

  const baseStyles =
    "w-max font-bold rounded-full cursor-pointer flex items-center gap-1 sm:gap-2 text-neutral-50";
  const buttonStyles = `${baseStyles} ${colorStyles[color]} ${sizeStyles[size]}`;

  if (url) {
    return (
      <Link href={url} className={buttonStyles + " " + className}>
        {content}
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles + " " + className}>
      {content}
      {icon}
    </button>
  );
};
