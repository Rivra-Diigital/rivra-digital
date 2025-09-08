import Link from "next/link";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  content: string;
  icon?: React.ReactNode;
  color?: "purple" | "green" | "blue";
  url?: string;
}

export const Button = ({ className, onClick, content, icon, color = "purple", url }: ButtonProps) => {
  const colorStyles = {
    purple: "bg-purple-800",
    green: "bg-lime-800",
    blue: "bg-blue-800",
  };

  const baseStyles = "w-max px-8 py-3 text-neutral-50 font-bold text-lg rounded-full cursor-pointer flex items-center gap-2";
  const buttonStyles = `${baseStyles} ${colorStyles[color]}`;

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
