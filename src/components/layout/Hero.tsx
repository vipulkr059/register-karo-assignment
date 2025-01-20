import { Handshake, LayoutGrid, UsersRound } from "lucide-react";
import hero from "../../assets/hero/hero.png";
import { StarRating } from "../common/StarRating";
import { FaCirclePlay } from "react-icons/fa6";

export default function Hero() {
  const data = [
    {
      icon: (
        <LayoutGrid className="lg:w-10 lg:h-10 w-6 h-6 text-gray-600 object-contain" />
      ),
      title: "4.5+",
      description: "Customer Rating",
    },
    {
      icon: (
        <UsersRound className="lg:w-10 lg:h-10 w-6 h-6 text-gray-600 object-contain" />
      ),
      title: "20,000+",
      description: "Clients",
    },
    {
      icon: (
        <Handshake className="lg:w-10 lg:h-10 w-6 h-6 text-gray-600 object-contain" />
      ),
      title: "99.8%",
      description: "Financial Stability",
    },
  ];
  return (
    <div className="px-8 lg:px-16 py-12 bg-gradient-to-r from-white via-[#fff0d5] to-[#edf6ff] bg-opacity-70">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12 md:gap-6 gap-4 items-center">
        <div className="space-y-8">
          {/* Google Rating */}
          <div className="flex items-center gap-2">
            <span className="font-medium">Google Rating</span>
            <StarRating rating={5} />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Your trusted partner
              <br />
              for compliance business needs
            </h1>
            <p className="text-gray-600 text-xl">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,{" "}
              <span className="text-gray-700 font-semibold">registrations</span>
              , <span className="text-gray-700 font-semibold">tax filings</span>
              , and other{" "}
              <span className="text-gray-700 font-semibold">legal matters</span>
              .
            </p>
          </div>
          <div className="bg-red-600 w-10 h-[1px]"></div>
          {/* Statistics */}
          <div className="grid grid-cols-3 lg:gap-8 gap-4">
            {data.map((item, idx) => {
              return (
                <div
                  className="flex flex-col lg:flex-row  items-center gap-2"
                  key={idx}
                >
                  <div>{item.icon}</div>
                  <div>
                    <div className="lg:text-2xl lg:text-left text-center text-xl font-bold text-transparent bg-[linear-gradient(157.81deg,_#FFA229_10%,_#1C4670_68%)] bg-clip-text">
                      {item.title}
                    </div>
                    <div className="text-sm lg:text-left text-center text-gray-600">
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex gap-4">
            <button className="bg-[#1C4670] font-semibold text-white lg:px-10 lg:py-4 px-4 py-2 rounded-md hover:bg-blue-900 ">
              Talk An Expert
            </button>
            <button className="px-6 py-3 md:px-3 font-semibold rounded-md  flex items-center gap-2">
              <FaCirclePlay className="text-red-500 w-7 h-7" /> See how it works
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            src={hero}
            alt="Business Illustration"
            className="w-full h-auto"
          />
        </div>
        <aside className="hidden  absolute right-0 top-1/4 lg:flex flex-col space-y-4">
          <button className="bg-white px-6 py-4  shadow-lg hover:bg-gray-200 rounded-l-lg">
            Annual Compliance
          </button>
          <button className="bg-white px-6 py-4  shadow-lg hover:bg-gray-200 rounded-l-lg">
            Payroll Services
          </button>
          <button className="bg-white px-6 py-4  shadow-lg hover:bg-gray-200 rounded-l-lg">
            Company Formation
          </button>
          <button className="bg-white px-6 py-4  shadow-lg hover:bg-gray-200 rounded-l-lg">
            Annual Compliance{" "}
          </button>
        </aside>
      </div>
    </div>
  );
}
