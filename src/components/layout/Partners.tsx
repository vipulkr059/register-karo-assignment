import React from "react";

import { Logo } from "@/types";

interface PartnersProps {
  title?: string;
  logos: Logo[];
}

const Partners: React.FC<PartnersProps> = ({ title, logos }) => {
  return (
    <div className="trusted-section py-12 bg-white">
      {title && (
        <h2 className="text-gray-700 text-center text-2xl font-bold mb-10">
          {title}
        </h2>
      )}
      <div className="flex justify-normal lg:justify-center items-center lg:gap-12 gap-6 flex-nowrap overflow-x-scroll no-scrollbar p-6">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-full object-fit"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
