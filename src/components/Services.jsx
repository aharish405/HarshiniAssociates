import React, { useState } from 'react'
import { CheckSquare, ArrowRight, Shield, Clock, FileText, ChevronRight } from 'lucide-react'

export default function Services({ services, activeColor }) {
  const [activeTab, setActiveTab] = useState(0)

  // Map service item highlights to showcase premium customization
  const serviceExtras = [
    {
      price: 'Starting from ₹999',
      timeline: 'Completed within 24 Hours',
      badge: 'Highly Popular',
      roadmap: [
        'Form 16 & ledger validation u/s 26AS',
        'Analysis of maximum eligible deductions (80C/D/etc)',
        'Filing form preparation (ITR-1, 2, 3 or 4)',
        'E-verification assistance & submission validation'
      ]
    },
    {
      price: 'Starting from ₹1,499 / Month',
      timeline: 'Monthly return filings',
      badge: 'Essential Business',
      roadmap: [
        'New GSTIN documentation and registration approval',
        'Regular filing of GSTR-1 & GSTR-3B filings',
        'Quarterly input tax credit (ITC) reconciliation audits',
        'GST annual return (GSTR-9) preparations'
      ]
    },
    {
      price: 'Pricing on consultation',
      timeline: 'Continuous Advisory',
      badge: 'Corporate Focus',
      roadmap: [
        'Corporate tax structuring u/s 115BAA/BAB',
        'MAT credit computations & credit utilization planning',
        'Quarterly advance tax estimation & payment sheets',
        'Transfer pricing report filings and submissions'
      ]
    },
    {
      price: 'Starting from ₹4,999',
      timeline: 'Subject to audit size',
      badge: 'Statutory Audits',
      roadmap: [
        'Books of accounts scrutiny assessment preparation',
        'Form 3CD audit report mapping & checklist checks',
        'Draft balance sheets & audit certificates',
        'Representation files for assessing officers (AO)'
      ]
    }
  ]

  const activeService = services[activeTab]
  const activeExtra = serviceExtras[activeTab]

  return (
    <section id="services" className="py-24 border-t border-[var(--border-color)]">
      <div className="text-center mb-16 space-y-4">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${activeColor.badgeBg} border uppercase tracking-wider`}>
          Our Specialized Domains
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
          Financial & Tax Advisory Services
        </h2>
        <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          Premium consulting, structured compliance filings, and audits tailored to individuals, freelancers, and businesses.
        </p>
      </div>

      {/* Interactive Services Tab Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Tab list */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {services.map((service, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 hover:scale-[1.01] active:scale-99 ${isActive ? 'border-[var(--text-primary)] bg-white/10 dark:bg-white/5 shadow-lg' : 'border-[var(--border-color)] bg-transparent hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl border transition-all ${isActive ? activeColor.badgeBg : 'border-[var(--border-color)] bg-white/5'}`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] block">
                      {service.title}
                    </span>
                    <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] block mt-0.5">
                      {serviceExtras[index].badge} • {serviceExtras[index].timeline}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'translate-x-1 text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`} />
              </button>
            )
          })}
        </div>

        {/* Right Column: Immersive active detail pane */}
        <div className="lg:col-span-7">
          <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border-[var(--border-color)] shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[450px]">
            {/* Visual background accents */}
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${activeColor.primary} opacity-[0.04] blur-3xl pointer-events-none rounded-full`}></div>
            
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
                <span className={`text-[10px] uppercase font-bold tracking-widest ${activeColor.textAccent}`}>
                  {activeExtra.badge}
                </span>
                
                {/* Secondary Meta details */}
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeExtra.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Step-by-Step compliance list */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-[var(--text-primary)] tracking-wider">
                  Roadmap and Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeExtra.roadmap.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border text-[9px] font-bold ${activeColor.badgeBg}`}>
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price indicator & WhatsApp redirect CTA */}
            <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider block">
                  Service pricing estimate
                </span>
                <span className="text-base font-extrabold text-[var(--text-primary)] font-display block">
                  {activeExtra.price}
                </span>
              </div>
              
              <button
                onClick={() => {
                  const message = `Hello HARSHINI Associates,

I'm interested in your services for *${activeService.title}*. Please let me know how to start the process.`
                  window.open(`https://wa.me/919177927084?text=${encodeURIComponent(message)}`, '_blank')
                }}
                className={`py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-bold text-xs ${activeColor.btnBg} transition-all duration-300 shadow-lg`}
              >
                Inquire about service
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
