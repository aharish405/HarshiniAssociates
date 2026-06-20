import React from 'react'
import { Phone, Mail, MapPin, Download } from 'lucide-react'
import logoImg from '../assets/logo.png'

export default function Footer({
  activeColor,
  scrollToSection,
  isAppInstalled,
  deferredPrompt,
  handlePwaInstall
}) {
  return (
    <footer className="relative z-10 w-full glass-navbar border-t border-[var(--border-color)] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1 shadow border border-slate-200 overflow-hidden">
                <img 
                  src={logoImg} 
                  alt="HARSHINI Associates Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-base tracking-tight text-[var(--text-primary)] block">
                  HARSHINI
                </span>
                <span className={`text-[9px] uppercase tracking-[0.25em] ${activeColor.textAccent} font-bold block -mt-1`}>
                  Associates
                </span>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-light leading-relaxed">
              Expert tax filing, return validation, corporate bookkeeping, and advisory. Serving taxpayers across India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-display font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-4">Support Channels</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>+91 91779 27084</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-blue-500 shrink-0" />
                <span className="truncate">info@harshiniassociates.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 text-indigo-500 shrink-0 mt-0.5" />
                <span>Flat No. 102, Premier Plaza, Hyderabad, 500016</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Install PWA */}
          <div>
            <h4 className="font-display font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider mb-4">Web Application</h4>
            
            {/* Install trigger button */}
            {isAppInstalled ? (
              <div className="text-xs text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5 font-semibold py-1">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                PWA standalone installed
              </div>
            ) : deferredPrompt ? (
              <button
                onClick={handlePwaInstall}
                className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-primary)] bg-white/5 hover:bg-white/10 active:scale-95 cursor-pointer transition-all shadow-sm`}
              >
                <Download className="w-3.5 h-3.5" />
                Install ITR App
              </button>
            ) : (
              <div className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                Open this page on your mobile browser (Safari/Chrome) and select "Add to Home Screen" to install it.
              </div>
            )}
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-secondary)] text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} HARSHINI Associates. All rights reserved.
          </p>
          <p className="text-[var(--text-secondary)] text-xs text-center sm:text-right font-light">
            Designed & Developed by{' '}
            <a 
              href="https://svenbyte.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`font-semibold text-[var(--text-primary)] hover:underline transition-all`}
            >
              Svenbyte Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
