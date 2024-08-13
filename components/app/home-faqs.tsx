import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/constants"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

const HomeFaqs = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-center text-4xl font-bold text-[#47526B] max-md:text-3xl max-sm:text-2xl md:max-w-3xl">
          FAQs
        </h1>
        <p className="max-w-xl text-center text-muted-foreground">
          Find answers to common questions about appointments, services, and
          policies.
        </p>
        <Accordion
          type="single"
          collapsible
          className="mt-3 w-full self-center md:mt-6 lg:max-w-5xl"
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
        <div className="mt-8 flex flex-col items-center gap-2 md:mt-12 md:gap-4">
          <h1 className="text-center text-4xl font-bold text-[#47526B] max-md:text-3xl max-sm:text-2xl md:max-w-3xl">
            Still have questions?
          </h1>
          <p className="max-w-xl text-center text-muted-foreground">
            Contact us for more information or assistance.
          </p>
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "outline",
              className: "mt-1 w-fit md:mt-2",
            })}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeFaqs
