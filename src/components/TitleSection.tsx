interface TitleSectionProps {
  title: string;
  description?: string;
  className?: string;
}

export const TitleSection = ({
  title,
  description,
  className,
}: TitleSectionProps) => {
  return (
    <div className={`flex flex-col gap-4 w-max ${className}`}>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-[32px] font-bold text-neutral-50">{title}</h2>
        <div className="w-full h-[4px] bg-lime-200 rounded-2xl"></div>
      </div>
      {description && (
        <p className="text-neutral-300 max-w-[600px]">{description}</p>
      )}
    </div>
  );
};
