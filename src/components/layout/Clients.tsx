import { ArrowRight } from "lucide-react";
import logo1 from "../../assets/clients/Logo.png";
import logo2 from "../../assets/clients/Logo (1).png";
import logo3 from "../../assets/clients/Logo (2).png";
import logo4 from "../../assets/clients/Logo (3).png";

interface ClientLogo {
  name: string;
  src: string;
}

export default function Clients() {
  const logos: ClientLogo[] = [
    { name: "Dropbox", src: logo1 },
    { name: "Pinterest", src: logo2 },
    { name: "Shopify", src: logo3 },
    { name: "Microsoft", src: logo4 },
    { name: "GitLab", src: logo1 },
    { name: "Trello", src: logo2 },
    { name: "Slack", src: logo3 },
    { name: "Figma", src: logo4 },
    { name: "Adobe", src: logo1 },
    { name: "Notion", src: logo2 },
    { name: "GitHub", src: logo3 },
    { name: "Asana", src: logo4 },
    { name: "Adobe", src: logo1 },
    { name: "Notion", src: logo2 },
    { name: "GitHub", src: logo3 },
    { name: "Asana", src: logo4 },
    { name: "Adobe", src: logo1 },
    { name: "Notion", src: logo2 },
    { name: "GitHub", src: logo3 },
    { name: "Asana", src: logo4 },
    { name: "Adobe", src: logo1 },
    { name: "Notion", src: logo2 },
    { name: "GitHub", src: logo3 },
    { name: "Asana", src: logo4 },
    { name: "Notion", src: logo2 },
    { name: "GitHub", src: logo3 },
    { name: "Asana", src: logo4 },
    { name: "GitHub", src: logo3 },
    { name: "Adobe", src: logo1 },
    { name: "Notion", src: logo2 },
    { name: "Asana", src: logo4 },
  ];

  return (
    <section className="py-16 lg:px-0 px-6 bg-white">
      <div className="">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Happy Clients
          </h2>
          <p className="text-gray-600">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-4 grid-rows-4 lg:grid-cols-8 gap-8  mx-auto">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${
                  index % 2 === 0 ? "transform md:translate-y-8" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-md transition-shadow duration-300 flex items-center justify-center p-3">
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => {}}
              className="flex items-center gap-2 text-[#1C4670]  font-medium"
            >
              Show
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-200`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
