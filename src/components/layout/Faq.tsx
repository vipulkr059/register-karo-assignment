import { MoveRight } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/data";

export function Faq() {
  const [displayCount, setDisplayCount] = useState(5);
  const hasMore = displayCount < faqItems.length;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <div className="text-sm font-medium uppercase tracking-wider text-[#F5A623]">
          FAQ
        </div>
        <h2 className="mt-2 text-3xl font-bold text-[#4A2800] md:text-4xl">
          Frequent Ask Questions
        </h2>
      </div>

      <div className="mx-auto max-w-7xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.slice(0, displayCount).map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="relative rounded-lg border bg-white px-6 py-2 shadow-sm"
            >
              <AccordionTrigger className="flex items-center gap-4 text-left">
                <div className="absolute -left-0 top-0 h-full w-1 rounded-l-lg bg-[linear-gradient(127.81deg,_#FFA229_10%,_#1C4670_58%)]" />
                <span className="pr-8 text-base font-medium text-gray-900 no-underline">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {hasMore && (
          <div className="mt-8 text-center">
            <Button
              variant="default"
              className="gap-2"
              onClick={() => setDisplayCount((prev) => prev + 5)}
            >
              Show more
              <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
