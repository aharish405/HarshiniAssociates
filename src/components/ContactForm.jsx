import React from 'react'
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react'

export default function ContactForm({
  formData,
  handleChange,
  handleSubmit,
  errors,
  activeColor
}) {
  return (
    <section id="contact" className="py-24 border-t border-[var(--border-color)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct channels */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
          <span className={`text-xs font-semibold tracking-wider ${activeColor.textAccent} uppercase block`}>
            Free Consultation
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
            Let's Simplify Your Taxes Today
          </h2>
          <p className="text-[var(--text-secondary)] font-light text-sm sm:text-base leading-relaxed">
            Fill out the quick query form. Your inputs will be securely structured into a message and redirected to our WhatsApp desk. A dedicated consultant will review and respond promptly.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-[var(--border-color)] shrink-0">
                <Phone className={`w-5 h-5 ${activeColor.textAccent}`} />
              </div>
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest block">WhatsApp Desk</span>
                <a href="tel:+919177927084" className="text-sm font-semibold text-[var(--text-primary)] hover:underline">+91 91779 27084</a>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-[var(--border-color)] shrink-0">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest block">Email Address</span>
                <a href="mailto:info@harshiniassociates.com" className="text-sm font-semibold text-[var(--text-primary)] hover:underline">info@harshiniassociates.com</a>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-[var(--border-color)] shrink-0">
                <MapPin className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest block">Main Office</span>
                <address className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] not-italic">
                  Flat No. 102, Premier Plaza, Hyderabad, Telangana - 500016
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form Card */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="glass-card-dark p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <MessageSquare className={`w-5 h-5 ${activeColor.textAccent}`} />
              Request Free Call
            </h3>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Harish Kumar"
                  className={`w-full bg-slate-900/5 dark:bg-slate-900/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-[var(--border-color)] focus:border-emerald-500/80'} rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all`}
                />
                {errors.name && (
                  <span className="text-[11px] text-red-400 mt-1 block font-medium">{errors.name}</span>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 99999 88888"
                  className={`w-full bg-slate-900/5 dark:bg-slate-900/50 border ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-[var(--border-color)] focus:border-emerald-500/80'} rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all`}
                />
                {errors.phone && (
                  <span className="text-[11px] text-red-400 mt-1 block font-medium">{errors.phone}</span>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                  Your Message / Tax Requirement *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your tax requirement briefly (e.g., Filing ITR-3 for my small business)..."
                  className={`w-full bg-slate-900/5 dark:bg-slate-900/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-[var(--border-color)] focus:border-emerald-500/80'} rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none`}
                ></textarea>
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 block font-medium">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg active:scale-[0.98] cursor-pointer ${activeColor.btnBg}`}
                >
                  <MessageSquare className="w-5 h-5" />
                  Send via WhatsApp
                </button>
                <p className="text-[11px] text-[var(--text-secondary)] text-center mt-3 font-light">
                  🔒 Your data is structured locally and redirected straight to our secure WhatsApp chat.
                </p>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
