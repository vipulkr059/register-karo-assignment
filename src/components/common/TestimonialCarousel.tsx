import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/data";

export function TestimonialCarousel() {
  return (
    <div className="bg-[#0B2C4D] px-4 py-12">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            What peoples says about us
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-16 lg:-top-16 -top-20  flex ;g:gap-2 gap-1">
            <CarouselPrevious className="lg:h-10 lg:w-10 h-7 w-7 rounded-full bg-yellow-500" />
            <CarouselNext className="lg:h-10 lg:w-10 h-7 w-7 rounded-full bg-yellow-500" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
