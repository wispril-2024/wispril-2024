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
    <Accordion type="single" collapsible className="mb-40 w-full p-20">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="mb-4 rounded-3xl border border-2 border-[#F4D38E] bg-[#82080A] px-4 py-2 text-left font-cgp text-lg font-bold text-[#ECCC9B]">
            {faq.question}
          </AccordionTrigger>
          <div className="px-7">
            <AccordionContent className="rounded-3xl border border-2 border-[#F4D38E] bg-[#82080A] px-4 pb-4 pt-10 font-cgp font-normal text-[#ECCC9B]">
              {faq.answer}
            </AccordionContent>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
