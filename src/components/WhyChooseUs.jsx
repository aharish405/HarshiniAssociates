import React from 'react'
import { ShieldCheck, Lock, Clock, Award, ArrowRight } from 'lucide-react'

export default function WhyChooseUs({ activeColor, scrollToSection }) {
  return (
    <section id="why-choose-us" className="py-24 border-t border-[var(--border-color)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Explanation Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`text-xs font-bold tracking-wider ${activeColor.textAccent} uppercase`}>
            Why Partner With Us
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] leading-tight">
            Secure & Reliable Tax Partner for Individuals & Corporates
          </h2>
          <p className="text-[var(--text-secondary)] font-light text-base leading-relaxed">
            Handling returns and corporate audits demands extreme precision and absolute trust. At HARSHINI Associates, we combine years of field expertise with robust encryption policies to keep your files secure and correct.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`flex items-center gap-2 text-sm font-semibold ${activeColor.textAccent} ${activeColor.textAccentHover} transition-colors cursor-pointer group`}
            >
              Schedule an expert call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side Glass Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="glass-card-dark p-6 rounded-2xl border-[var(--border-color)] hover:border-[var(--text-primary)]/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
              <ShieldCheck className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">99.9% Accuracy Rate</h3>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-light leading-relaxed">
              Every calculation passes double-checking processes to eliminate human errors and reduce standard notice rates.
            </p>
          </div>

          <div className="glass-card-dark p-6 rounded-2xl border-[var(--border-color)] hover:border-[var(--text-primary)]/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
              <Lock className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
            </div>
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">Absolute Confidentiality</h3>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-light leading-relaxed">
              Your financial worksheets, income records, and documents are safe inside our encrypted repository.
            </p>
          </div>

          <div className="glass-card-dark p-6 rounded-2xl border-[var(--border-color)] hover:border-[var(--text-primary)]/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20">
              <Clock className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            </div>
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">Fast Turnaround Times</h3>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-light leading-relaxed">
              Most submissions are processed, optimized, and ready for your sign-off within 24 to 48 hours.
            </p>
          </div>

          <div className="glass-card-dark p-6 rounded-2xl border-[var(--border-color)] hover:border-[var(--text-primary)]/15 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
              <Award className="w-6 h-6 text-purple-500 dark:text-purple-400" />
            </div>
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">Certified Advisory</h3>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-light leading-relaxed">
              Stay updated with changing Indian tax structures. Work directly with experienced legal and tax accountants.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
