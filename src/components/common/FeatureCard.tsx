interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div className={`p-8 rounded-lg border border-[#FCDDEC]  ${className}`}>
      <div className="space-y-4 flex flex-col items-center justify-center">
        <div className="w-10 h-10 ">
          <img src={icon} className="h-full self-center" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
