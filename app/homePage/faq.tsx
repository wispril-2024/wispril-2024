import { FaqCard } from "./component/faqcard";
import { faqsData } from "./faqdata";

export default function Faq() {
  return (
    <section>
      <div className="mt-20">
        <h1 className="font-wesmeath mt-8 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-6xl xl:text-8xl">
          FAQ
        </h1>
        <div>
          <FaqCard faqs={faqsData} />
        </div>
      </div>
    </section>
  );
}
