import { features } from "@/data";
import { FeatureCard } from "../common/FeatureCard";

export default function WhyChoose() {
  return (
    <section className="py-16 lg:px-12 px-6">
      <div className="max-w-7xl mx-auto lg:px-4 px-2 grid lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="max-w-3xl lg:col-span-2 lg:row-span-1">
          <p className="text-[#EB8D15] mb-2">WHY REGISTERKARO.IN</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Register Karo
          </h2>
          <p className="text-gray-600 mb-12 ">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="lg:col-span-1 lg:row-start-2"></div>
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className={feature.className}
          />
        ))}
      </div>
    </section>
  );
}
