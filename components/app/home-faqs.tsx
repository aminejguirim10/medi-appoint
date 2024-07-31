import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HomeFaqs = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ">
      <div className="flex flex-col gap-2 md:gap-4 items-center">
        <h1 className="text-[#47526B] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl text-center">
          FAQs
        </h1>
        <p className="text-muted-foreground max-w-xl text-center ">
          Find answers to common questions about appointments, services, and
          policies.
        </p>
        <Accordion
          type="single"
          collapsible
          className="w-full lg:max-w-5xl self-center mt-3 md:mt-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-[#4A6296]/90">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center gap-2 md:gap-4 mt-8 md:mt-12">
          <h1 className="text-[#47526B] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl text-center">
            Still have questions?
          </h1>
          <p className="text-muted-foreground max-w-xl text-center ">
            Contact us for more information or assistance.
          </p>
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "outline",
              className: "w-fit mt-1 md:mt-2",
            })}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFaqs;
