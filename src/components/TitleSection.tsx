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
    <div className={`flex flex-col gap-4 ${className} ${description ? "items-center sm:items-start text-center sm:text-left" : ""}`}>
      <div className="flex flex-col gap-2 w-max">
        <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold text-neutral-50">
          {title}
        </h2>
        <div className="w-full h-[4px] bg-lime-200 rounded-2xl"></div>
      </div>
      {description && (
        <p className="text-neutral-100 text-medium mt-2 text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
};
