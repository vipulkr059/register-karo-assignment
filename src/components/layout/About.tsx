import React from "react";
import team from "../../assets/about/team.png";
import { ArrowRightCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <p className="text-[#EB8D15] text-sm uppercase ">
            Welcome to RegisterKaro.in
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            About <span className="text-[#FFA229]">Register Karo</span>
          </h2>
          <p className="text-gray-900 mt-4">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I'm extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever-changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations.
          </p>
          <p className="text-gray-900 mt-4">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="mt-6 bg-[#1C4670] text-white px-8 py-3 rounded hover:bg-blue-800">
            Learn More <ArrowRightCircle className="h-4 w-4 inline" />
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img src={team} alt="Team Photo" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
