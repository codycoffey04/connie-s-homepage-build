import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border-b border-border">
      <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-base leading-relaxed text-foreground/80 pt-2">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

interface FAQListProps {
  faqs: Array<{ question: string; answer: string }>;
}

export const FAQList = ({ faqs }: FAQListProps) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          value={`item-${index}`}
        />
      ))}
    </Accordion>
  );
};
