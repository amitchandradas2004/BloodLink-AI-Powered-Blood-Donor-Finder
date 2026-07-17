"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is BloodLink free to use?",
    answer: "Yes, BloodLink is a 100% free service for both blood seekers and voluntary donors. We are a community-driven initiative and do not charge any fees or accept money for matching.",
  },
  {
    question: "How is donor privacy and contact info protected?",
    answer: "We take privacy seriously. Your phone number and location are encrypted and never shown publicly on the platform. When a critical request matches your profile, you receive a secure notification, and you choose whether to establish contact.",
  },
  {
    question: "Who is eligible to donate blood?",
    answer: "Generally, healthy individuals between 18 and 65 years old, weighing at least 50kg (110 lbs), with no active infections or blood-borne illnesses can donate. Additional guidelines depend on local medical standards.",
  },
  {
    question: "How fast is the matching engine?",
    answer: "Alerts are sent to matched local donors within 2 minutes of request verification. Depending on donor availability and location proximity, connections are often established in under 15 minutes.",
  },
  {
    question: "Can I register as a donor if I recently got a tattoo?",
    answer: "In most regions, individuals who recently got a tattoo or piercing must wait a deferral period of 3 to 6 months before donating blood. Please consult local healthcare rules before accepting requests.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-50 dark:bg-neutral-900/20 border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            Find answers to common questions about donation, safety, matching, and privacy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white dark:bg-neutral-900 border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md ${
                  isOpen
                    ? "border-brand-red/40 dark:border-brand-red/40 shadow-md"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-brand-red/20 dark:hover:border-brand-red/30"
                }`}
              >
                {/* Accordion Trigger (44x44px min touch target implicitly met by padding) */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-neutral-900 dark:text-white font-bold text-base cursor-pointer focus:outline-none focus:bg-neutral-50 dark:focus:bg-neutral-800/50"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-brand-red shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-neutral-400 dark:text-neutral-500"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                {/* Accordion Content Panel (Smooth Framer Motion height toggle) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800/60 bg-neutral-50/30 dark:bg-neutral-900/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
