import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function Faq({ faqs, activeFaq, setActiveFaq, activeColor }) {
  return (
    <section id="faq" className="py-24 border-t border-[var(--border-color)]">
      <div className="text-center mb-16">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[var(--text-secondary)] max-w-md mx-auto text-sm sm:text-base font-light">
          Clear answers to the most common queries regarding standard filing and our processing workflow.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeFaq === index
          return (
            <div 
              key={index}
              className="glass-card-dark rounded-2xl overflow-hidden border border-[var(--border-color)] transition-all duration-300"
            >
              <button
                onClick={() => setActiveFaq(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="font-display font-semibold text-[var(--text-primary)] text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className={`w-5 h-5 ${activeColor.textAccent} shrink-0`} />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[var(--text-secondary)] shrink-0" />
                )}
              </button>
              
              {isOpen && (
                <div className="px-6 pb-6 pt-1 border-t border-[var(--border-color)] bg-white/1">
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
