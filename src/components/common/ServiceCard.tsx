import { ArrowRightCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-4 flex flex-col items-center justify-center px-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <img src={icon} alt={title} className="w-full" />
        </div>

        <h3 className="text-xl font-bold text-center">{title}</h3>

        <p className="text-gray-600 text-lg leading-relaxed text-center">
          {description}
        </p>

        <a
          href={href}
          className="inline-flex gap-1 items-center text-sm font-medium text-[#001038] hover:text-blue-700"
        >
          Learn more <ArrowRightCircle className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
