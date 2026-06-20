import React from 'react'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import InteractiveFilingShowcase from './InteractiveFilingShowcase'

export default function Hero({ activeColor, scrollToSection }) {
  return (
    <section id="hero" className="pt-12 pb-16 md:pt-24 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Trust Badge */}
          <div className={`glass-card border-[var(--border-color)] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide ${activeColor.badgeBg} uppercase mb-8 flex items-center gap-1.5 shadow-inner`}>
            <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            SECURE TAX CONSULTATION & ITR FILING SERVICES
          </div>

          {/* Value Proposition */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.1] max-w-2xl mb-6">
            Expert <span className={`bg-gradient-to-r ${activeColor.primary} bg-clip-text text-transparent text-glow`}>ITR Filing</span> & Tax Consultation
          </h1>

          {/* Subtitle */}
          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-8 px-2 lg:px-0">
            Maximize your returns and avoid compliance notice letters. Trust <strong className="text-[var(--text-primary)] font-semibold">HARSHINI Associates</strong> for absolute audit precision, fast return submissions, and premium tax planning.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 lg:px-0 mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`w-full sm:w-auto py-4 px-8 rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl group premium-shimmer hover:scale-[1.02] active:scale-95 cursor-pointer ${activeColor.btnBg}`}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto glass-card hover:bg-white/10 dark:hover:bg-white/5 text-[var(--text-primary)] border-[var(--border-color)] py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Explore Services
            </button>
          </div>

          {/* Metrics Row */}
          <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-4 px-2 lg:px-0">
            <div className="glass-card border-[var(--border-color)] p-4 rounded-xl text-center">
              <span className="block text-xl md:text-2xl font-extrabold font-display bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">99.9%</span>
              <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-wider mt-1 block">Accuracy</span>
            </div>
            <div className="glass-card border-[var(--border-color)] p-4 rounded-xl text-center">
              <span className="block text-xl md:text-2xl font-extrabold font-display bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">24 Hr</span>
              <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-wider mt-1 block">Response</span>
            </div>
            <div className="glass-card border-[var(--border-color)] p-4 rounded-xl text-center">
              <span className="block text-xl md:text-2xl font-extrabold font-display bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">5000+</span>
              <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-wider mt-1 block">Clients</span>
            </div>
            <div className="glass-card border-[var(--border-color)] p-4 rounded-xl text-center">
              <span className="block text-xl md:text-2xl font-extrabold font-display bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">100%</span>
              <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-wider mt-1 block">Secure</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Graphic Showcase */}
        <div className="lg:col-span-5 flex justify-center">
          <InteractiveFilingShowcase activeColor={activeColor} />
        </div>

      </div>
    </section>
  )
}
