import { FaApple, FaGooglePlay } from "react-icons/fa";

const OurApp = () => {
  return (
    <div className="bg-[#1C4670] text-white flex flex-col md:flex-row items-center justify-between px-16 py-12">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Manage Your Services by your Mobile Phone
        </h2>
        <p className="text-lg text-gray-300">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="inline-flex justify-center items-center gap-2 border border-[#A5C937] bg-white text-gray-900 font-semibold py-2 px-3 rounded-lg shadow-md"
          >
            <FaApple className="w-10 h-10 text-[#A5C937]" />
            <div>
              <p>Get it on</p>
              <span className="font-bold">Apple Store</span>
            </div>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center gap-2 border border-[#A5C937] bg-white text-gray-900 font-semibold py-2 px-3 rounded-lg shadow-md"
          >
            <FaGooglePlay className="w-10 h-10 text-[#A5C937]" />
            <div>
              <p>Get it on</p>
              <span className="font-bold">Google Play</span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-16 md:w-1/2 flex justify-center relative">
        {/* <div className="relative flex items-center justify-center gap-4">
          <img src={phone} alt="Small Phone" className="h-64 object-contain" />
          <img src={phone} alt="Large Phone" className="h-80 object-contain" />
        </div> */}
      </div>
    </div>
  );
};

export default OurApp;
