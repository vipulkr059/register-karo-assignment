import clsx from "clsx";
import { CreditCard, Headset, Mail, NotepadTextIcon } from "lucide-react";

export default function Steps() {
  const steps = [
    {
      icon: <NotepadTextIcon />,
      title: "Fill up the Application Form",
      color: "bg-[#EB5757]",
    },
    {
      icon: <CreditCard />,
      title: "Make Online Payment",
      color: "bg-[#27AE60]",
    },
    {
      icon: <Headset />,
      title: "Executive will Process Application",
      color: "bg-[#F2994A]",
    },
    { icon: <Mail />, title: "Get Confirm Mail", color: "bg-[#828282]" },
  ];
  return (
    <div className="flex justify-normal lg:justify-center items-center lg:gap-12 gap-6 flex-nowrap overflow-x-scroll no-scrollbar p-10 bg-[#FFA229]">
      {steps.map((step) => (
        <div
          className="flex-shrink-0 flex items-center justify-center gap-2"
          key={step.title}
        >
          <div
            className={clsx(
              "text-white w-16 h-16 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-3",
              `${step.color}`
            )}
          >
            {step.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
            {step.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
