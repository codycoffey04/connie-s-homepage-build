import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  return (
    <AccordionItem value={value} className="border-b border-border">
      <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-base leading-relaxed text-foreground/80 pt-2">
        {answer}
        
        {/* Was This Helpful Feedback */}
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Was this helpful?</span>
          <button 
            onClick={() => setFeedback('helpful')}
            className={`flex items-center gap-1 text-sm transition-colors ${
              feedback === 'helpful' ? 'text-green-600' : 'hover:text-green-600'
            }`}
            aria-label="Mark as helpful"
          >
            <ThumbsUp className={`w-4 h-4 ${feedback === 'helpful' ? 'fill-current' : ''}`} />
            <span>Yes</span>
          </button>
          <button 
            onClick={() => setFeedback('not-helpful')}
            className={`flex items-center gap-1 text-sm transition-colors ${
              feedback === 'not-helpful' ? 'text-red-600' : 'hover:text-red-600'
            }`}
            aria-label="Mark as not helpful"
          >
            <ThumbsDown className={`w-4 h-4 ${feedback === 'not-helpful' ? 'fill-current' : ''}`} />
            <span>No</span>
          </button>
          {feedback && (
            <span className="text-sm text-muted-foreground ml-2">
              Thanks for your feedback!
            </span>
          )}
        </div>
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
