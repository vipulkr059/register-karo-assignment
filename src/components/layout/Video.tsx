import icon1 from "../../assets/video/icon1.png";
import icon2 from "../../assets/video/icon2.png";
import thumbnail from "../../assets/video/thumbnail.png";

export default function Video() {
  return (
    <div className="bg-[#1C4670] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Video Introductions</h2>
          <p className="text-gray-300 mb-8">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt aptis dui.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="  w-24 h-24 flex items-center justify-center ">
                <img src={icon1} alt="icon1" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Explore ideas together</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="  w-24 h-24 flex items-center justify-center ">
                <img src={icon2} alt="icon2" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Bring those ideas to life</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={thumbnail} alt="Video thumbnail" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
