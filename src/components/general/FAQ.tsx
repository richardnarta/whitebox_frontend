import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

const faqData = [
  {
    question: "How far in advance should we book our session?",
    answer: "We recommend booking your session at least 2-3 months in advance, especially for weddings and during peak seasons. For other portraits, 3-4 weeks is usually sufficient. This ensures we have ample time for consultation and planning."
  },
  {
    question: "What is your photography style?",
    answer: "Our style is a blend of fine art and documentary photography. We focus on capturing genuine emotions and moments in a timeless, elegant manner, using natural light whenever possible to create soft and beautiful images."
  },
  {
    question: "Do you provide props for studio sessions?",
    answer: "Yes, our studio is equipped with a variety of timeless props, chairs, and backdrops. However, we always encourage clients to bring personal items that are meaningful to them to make their session unique."
  },
  {
    question: "How long does it take to receive our photos?",
    answer: "For portrait sessions, the turnaround time for your final edited gallery is typically 2-3 weeks. For weddings, you can expect your complete gallery within 6-8 weeks after your wedding day."
  },
  {
    question: "Can we order prints or albums directly from you?",
    answer: "Absolutely! We offer a full range of high-quality printing services, from fine art prints and canvases to custom-designed wedding albums. You can order directly through your private online gallery."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-brand-white py-16 sm:py-24">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="font-serif text-3xl md:text-4xl font-bold text-brand-black text-center mb-12"
          variants={fadeInUp()}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={fadeInUp(0.5)}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index} className="border-b-brand-gold-200">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline text-brand-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FaqSection;