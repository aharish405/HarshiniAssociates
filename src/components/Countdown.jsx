import React from 'react'
import { AlertTriangle, ArrowRight } from 'lucide-react'

export default function Countdown({ timeLeft, activeColor, scrollToSection }) {
  return (
    <section id="countdown" className="pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-6 sm:p-8 rounded-3xl border-[var(--border-color)] relative overflow-hidden shadow-xl text-center">
          
          {/* Top alert colored bar */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 rounded-b-full bg-gradient-to-r from-red-500 via-orange-400 to-red-500"></div>
          
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3 select-none">
            <AlertTriangle className="w-4.5 h-4.5 animate-bounce" />
            Urgent Filing Notice
          </div>
          
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[var(--text-primary)] mb-2">
            FY 2025-26 (AY 2026-27) Filing Deadline
          </h3>
          
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-light mb-6">
            Avoid the late filing fee up to ₹5,000 and standard notice letters. File with HARSHINI Associates today.
          </p>

          {/* Countdown Compartments */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto">
            
            {/* Days */}
            <div className="glass-card-dark border-[var(--border-color)] py-3.5 sm:py-5 rounded-2xl">
              <span className="block font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-widest font-semibold block mt-1">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="glass-card-dark border-[var(--border-color)] py-3.5 sm:py-5 rounded-2xl">
              <span className="block font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-widest font-semibold block mt-1">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="glass-card-dark border-[var(--border-color)] py-3.5 sm:py-5 rounded-2xl">
              <span className="block font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-widest font-semibold block mt-1">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div className="glass-card-dark border-[var(--border-color)] py-3.5 sm:py-5 rounded-2xl">
              <span className="block font-display font-black text-2xl sm:text-4xl text-[var(--text-primary)]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-widest font-semibold block mt-1">
                Secs
              </span>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md cursor-pointer ${activeColor.btnBg} active:scale-95`}
            >
              File My Return Now
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
