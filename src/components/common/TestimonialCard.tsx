import { StarRating } from "./StarRating";
import { FaQuoteLeft } from "react-icons/fa";
import user from "../../assets/ser.png";

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <FaQuoteLeft className="  h-6 w-6 " />
          <StarRating rating={testimonial.rating} />
        </div>
        <div className="relative mb-6 ">
          <p className="text-gray-600">{testimonial.quote}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={user}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
