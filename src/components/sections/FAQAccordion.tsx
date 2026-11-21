import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/faqData';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  category?: string;
  limit?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ category, limit }) => {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0]?.id || '']);

  const toggle = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  let items = category 
    ? faqData.filter(item => item.category === category)
    : faqData;

  if (limit) {
    items = items.slice(0, limit);
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-xl border border-slate-800/80 bg-slate-900/60 overflow-hidden transition-colors hover:border-slate-700"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-sm sm:text-base text-white pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-150">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
