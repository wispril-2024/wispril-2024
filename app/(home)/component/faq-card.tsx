import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCardProps {
  faqs: FaqItem[];
}

export const FaqCard: React.FC<FaqCardProps> = ({ faqs }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-full max-w-[1000px] flex-col gap-4 px-4 pb-12 sm:px-16"
    >
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="border-2 border-[#F4D38E] bg-[#82080A] px-4 py-2 text-start font-cgp text-base font-bold text-[#ECCC9B] data-[state=closed]:rounded-xl data-[state=open]:rounded-t-xl sm:text-lg">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="rounded-b-xl border-b-2 border-l-2 border-r-2 border-[#F4D38E] bg-[#82080A] px-4 py-2 font-cgp text-base font-semibold text-[#ECCC9B]">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
