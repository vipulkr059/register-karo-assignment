import ServiceCard from "../common/ServiceCard";
import { services } from "@/data";

export default function Services() {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <p className="text-orange-400 font-medium">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1C4670] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
}
