import { FaCheckCircle } from "react-icons/fa";

const DigitalReality = () => {
  return (
    <div className="bg-[linear-gradient(96.22deg,_#FFA229_9%,_#1C4670_59.37%)] text-white py-16 px-8 text-center">
      {/* Header Text */}
      <p className="uppercase text-sm font-bold tracking-wide">
        1% of the industry
      </p>
      <h1 className="text-3xl md:text-5xl font-bold mt-2">
        Welcome to your new digital reality. Now.
      </h1>

      {/* Email Subscription */}
      <div className="mt-8 flex justify-center">
        <div className="flex  md:w-1/2 max-w-lg">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow p-4 rounded-l-lg text-gray-800 focus:outline-none"
          />
          <button className="bg-[#FFA229] hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-r-lg">
            Submit
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
        <div className="flex items-center gap-2">
          <FaCheckCircle />
          <p>Instant results</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle />
          <p>User-friendly interface</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle />
          <p>Personalized customization</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalReality;
