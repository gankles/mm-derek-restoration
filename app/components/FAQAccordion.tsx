'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAll = () => {
    setExpandAll(!expandAll);
    setOpenIndex(null);
  };

  const isOpen = (index: number) => expandAll || openIndex === index;

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
            <button
              onClick={toggleAll}
              className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              aria-label={expandAll ? 'Collapse all questions' : 'Expand all questions'}
            >
              {expandAll ? 'Collapse All' : 'Expand All'}
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-slate-800 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 text-emerald-600 transition-transform duration-200 ${
                      isOpen(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen(index)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Still have questions?</h3>
                <p className="text-slate-600">
                  Our team is here to help! Call us 24/7 at{' '}
                  <a
                    href="tel:616-648-7775"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
                  >
                    (616) 648-7775
                  </a>
                  {' '}or{' '}
                  <a
                    href="/contact"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold underline"
                  >
                    contact us online
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
