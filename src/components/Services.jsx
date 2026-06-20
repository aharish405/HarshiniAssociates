import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Services({ services, activeColor }) {
  return (
    <section id="services" className="py-24 border-t border-[var(--border-color)]">
      <div className="text-center mb-16">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] mb-4 animate-fade-in">
          Comprehensive Financial & Tax Services
        </h2>
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base font-light">
          We offer specialized accounting, consultation, and tax filing structures for diverse client profiles.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <article 
            key={index}
            className="glass-card-dark p-6 sm:p-8 rounded-3xl relative group hover:border-[var(--text-primary)]/10 transition-all duration-300 shadow-xl"
          >
            {/* Accent Corner Glow */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${activeColor.primary} opacity-[0.03] group-hover:opacity-[0.08] blur-xl rounded-tr-3xl transition-all duration-300`}></div>

            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-white/5 dark:bg-white/5 light:bg-slate-900/5 rounded-2xl border border-[var(--border-color)] group-hover:scale-105 transition-all">
                {service.icon}
              </div>
              <span className={`text-[10px] sm:text-xs font-semibold ${activeColor.badgeBg} px-3 py-1 rounded-full border`}>
                Certified Compliant
              </span>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-3">
              {service.title}
            </h3>
            
            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Checklist details */}
            <ul className="space-y-2.5 pt-4 border-t border-[var(--border-color)]">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center text-xs sm:text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 mr-2.5 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
