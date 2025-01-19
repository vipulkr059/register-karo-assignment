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
    <div className="grid grid-cols-1 gap-4 bg-[#FFA229] px-16 py-10 overflow-x-scroll sm:grid-cols-4 md:overflow-x-hidden no-scrollbar">
      {steps.map((step) => (
        <div
          className="flex-shrink-0 flex items-center justify-center gap-2"
          key={step.title}
        >
          <div
            className={clsx(
              "text-white w-16 h-16 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-3",
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
