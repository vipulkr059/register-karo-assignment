import React from "react";
import { section13Data } from "@/data";

const ImportantNumbers: React.FC = () => {
  return (
    <div className="trusted-section py-12 bg-white">
      <p className="text-[#EB8D15] text-md uppercase text-center">
        Why Register Karo
      </p>
      <h2 className="text-gray-700 text-center text-3xl font-bold mb-10">
        Some Numbers are important
      </h2>

      <div className="flex justify-normal lg:justify-evenly lg:gap-12 gap-6 flex-nowrap overflow-x-scroll no-scrollbar p-6">
        {section13Data.map((item, idx) => (
          <div key={idx} className="flex flex-col ">
            <div className="font-sans lg:text-3xl lg:text-left text-center text-xl font-extrabold text-transparent bg-[linear-gradient(157.81deg,_#FFA229_10%,_#1C4670_68%)] bg-clip-text">
              {item.title}
            </div>
            <div className="text-lg lg:text-left font-semibold text-center text-gray-600 bg-[linear-gradient(127.81deg,_#FFA229_10%,_#1C4670_68%)] bg-clip-text">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantNumbers;
