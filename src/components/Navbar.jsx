import React from 'react'
import { Menu, X, Sun, Moon, Palette } from 'lucide-react'
import logoImg from '../assets/logo.png'

export default function Navbar({
  theme,
  setTheme,
  colorTheme,
  activeColor,
  showSettings,
  setShowSettings,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  return (
    <header className="sticky top-0 z-40 w-full glass-navbar transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center space-x-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1 shadow-md shadow-white/5 group-hover:scale-105 transition-all overflow-hidden border border-slate-200">
            <img 
              src={logoImg} 
              alt="HARSHINI Associates Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[var(--text-primary)] block">
              HARSHINI
            </span>
            <span className={`text-[10px] uppercase tracking-[0.25em] ${activeColor.textAccent} font-bold block -mt-1`}>
              Associates
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('why-choose-us')} 
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Contact
          </button>

          {/* Theme Settings Switcher */}
          <div className="flex items-center space-x-3.5 border-l border-[var(--border-color)] pl-6">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-[var(--border-color)] hover:bg-white/10 text-[var(--text-primary)] transition-all cursor-pointer"
              title="Toggle Dark/Light Mode"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-blue-600" />}
            </button>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-lg ${showSettings ? 'bg-white/15' : 'bg-[var(--border-color)]'} hover:bg-white/10 text-[var(--text-primary)] transition-all cursor-pointer`}
              title="Theme Colors"
            >
              <Palette className={`w-4.5 h-4.5 ${activeColor.textAccent}`} />
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-3">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-[var(--border-color)] text-[var(--text-primary)] focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
          </button>
          <button 
            onClick={() => {
              setShowSettings(!showSettings)
              setMobileMenuOpen(false)
            }}
            className="p-2 rounded-lg bg-[var(--border-color)] text-[var(--text-primary)] focus:outline-none"
            aria-label="Toggle Settings Color"
          >
            <Palette className={`w-5 h-5 ${activeColor.textAccent}`} />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--text-primary)] p-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-transparent backdrop-blur-2xl border-b border-[var(--border-color)] py-6 px-4 space-y-4 animate-fade-in-down shadow-2xl">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="block w-full text-left px-4 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-lg transition-all"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="block w-full text-left px-4 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-lg transition-all"
          >
            Our Services
          </button>
          <button 
            onClick={() => scrollToSection('why-choose-us')}
            className="block w-full text-left px-4 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-lg transition-all"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left px-4 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-lg transition-all"
          >
            Frequently Asked Questions
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-4 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-lg transition-all"
          >
            Contact Us
          </button>
          <div className="pt-2 px-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`w-full flex items-center justify-center py-3 px-6 rounded-xl transition-all shadow-lg text-sm font-bold ${activeColor.btnBg} active:scale-95`}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
