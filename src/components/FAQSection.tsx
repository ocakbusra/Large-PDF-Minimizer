/**
 * FAQ Section Component
 * Expandable FAQ for SEO pages with schema markup support
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
    faqs,
    title = 'Frequently Asked Questions',
    subtitle,
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-2xl mb-4">
                        <HelpCircle className="text-indigo-600" size={28} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-slate-500">{subtitle}</p>
                    )}
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                            >
                                <span className="font-bold text-slate-900 pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-200 ease-in-out ${openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
