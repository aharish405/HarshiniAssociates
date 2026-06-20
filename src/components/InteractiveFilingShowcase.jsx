import React, { useState, useEffect } from 'react'
import { 
  MessageSquare, 
  User, 
  Send, 
  FileText, 
  Check, 
  ShieldCheck, 
  RefreshCw, 
  ArrowRight, 
  TrendingUp, 
  Coins, 
  BellRing
} from 'lucide-react'

export default function InteractiveFilingShowcase({ activeColor }) {
  const [step, setStep] = useState(1)
  const [refundVal, setRefundVal] = useState(0)

  // Automatic sequence loop
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev === 6 ? 1 : prev + 1))
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  // Number counting effect for Step 4
  useEffect(() => {
    if (step === 4) {
      setRefundVal(0)
      let current = 0
      const target = 42500
      const increment = 1700
      const numTimer = setInterval(() => {
        current += increment
        if (current >= target) {
          setRefundVal(target)
          clearInterval(numTimer)
        } else {
          setRefundVal(current)
        }
      }, 50)
      return () => clearInterval(numTimer)
    }
  }, [step])

  return (
    <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none min-h-[460px] flex items-center justify-center">
      {/* Dynamic ambient card glow that matches active step state */}
      <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-tr ${activeColor.primary} opacity-20 blur-xl transition-all duration-1000`}></div>

      {/* Main Glass Showcase Container */}
      <div className="relative w-full min-h-[440px] glass-card p-6 sm:p-8 rounded-3xl border-[var(--border-color)] shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Step Indicator Top Bar */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-tr ${activeColor.primary} animate-pulse`}></span>
            <span className="text-[10px] sm:text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Filing Flow Simulation
            </span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <span 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${step === idx ? `w-4 bg-gradient-to-r ${activeColor.primary}` : 'bg-[var(--border-color)]'}`}
              ></span>
            ))}
          </div>
        </div>

        {/* STEP CONTENT SWITCHER */}
        <div className="flex-1 flex flex-col justify-center py-2">
          
          {/* STEP 1: CLIENT REQUEST */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="bg-[var(--border-color)] text-[var(--text-primary)] p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm font-medium max-w-[85%] shadow-sm">
                  Hi, I need to file my ITR-2 for FY 2025-26. Can you help me maximize my refund?
                </div>
              </div>
              <div className="flex items-center gap-1.5 ml-11 text-[11px] text-[var(--text-secondary)]">
                <Send className="w-3 h-3" />
                <span>Sent from mobile App</span>
              </div>
              
              {/* CA Typing Loader Indicator */}
              <div className="flex items-start gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)] py-2.5 px-4 rounded-full text-xs flex items-center gap-2">
                  <span className="font-semibold">HA Consultant</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce delay-200"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce delay-300"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CA RESPONSE */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-start gap-3 opacity-60">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="bg-[var(--border-color)] text-[var(--text-primary)] p-3 rounded-2xl rounded-tl-none text-xs max-w-[80%]">
                  Hi, I need to file my ITR-2...
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-[var(--text-primary)] p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm font-semibold max-w-[85%] shadow-md">
                  Hello! Yes, absolutely. We will analyze your Form 26AS, Form 16, and AIS/TIS logs. Uploading your smart portal document checklist now.
                </div>
              </div>
              <div className="flex items-center gap-1.5 ml-11 text-[11px] text-emerald-500 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Assigned to Senior CA</span>
              </div>
            </div>
          )}

          {/* STEP 3: DOCUMENT UPLOAD & VERIFICATION */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
                <FileText className={`w-4 h-4 ${activeColor.textAccent}`} />
                Document Verification Hub
              </h4>

              {/* Upload Item 1 */}
              <div className="p-3 bg-white/5 border border-[var(--border-color)] rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-red-500/10 text-red-500 rounded-lg">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[var(--text-primary)] block">Form_16_Salary.pdf</span>
                    <span className="text-[10px] text-[var(--text-secondary)]">2.4 MB • Reconciled</span>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Upload Item 2 (Loader animation) */}
              <div className="p-3 bg-white/5 border border-[var(--border-color)] rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-blue-500/10 text-blue-500 rounded-lg">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--text-primary)] block">AIS_Summary_TIS.pdf</span>
                    <div className="w-32 h-1 bg-[var(--border-color)] rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${activeColor.primary} animate-pulse`} style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-blue-500 font-semibold animate-pulse">
                  Verifying Ledger...
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REFUND OPTIMIZATION */}
          {step === 4 && (
            <div className="space-y-5 animate-fade-in text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-500 mb-2">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[var(--text-secondary)] tracking-wider">
                  Deductions u/s 80C & 80D Maximized
                </span>
                <span className={`text-3xl sm:text-4xl font-extrabold font-display bg-gradient-to-r ${activeColor.primary} bg-clip-text text-transparent block tracking-tight`}>
                  ₹{refundVal.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[var(--text-primary)] font-bold block">
                  Tax Refund Calculated & Optimized
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                <div className="p-2.5 bg-white/5 border border-[var(--border-color)] rounded-xl">
                  <span className="text-[9px] text-[var(--text-secondary)] uppercase block">Old Tax</span>
                  <span className="text-xs font-bold text-red-400 block line-through">₹78,400</span>
                </div>
                <div className="p-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                  <span className="text-[9px] text-emerald-500 uppercase block">Optimized Tax</span>
                  <span className="text-xs font-extrabold text-emerald-500 block">₹35,900</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: OFFICIAL SUBMISSION */}
          {step === 5 && (
            <div className="space-y-4 animate-fade-in text-center py-2">
              <div className="relative mx-auto w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-slate-500/20 border-t-blue-500 animate-spin"></div>
                <ShieldCheck className="w-7 h-7 text-blue-500" />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-extrabold text-[var(--text-primary)] block">
                  Securing IT Portal Gateway
                </span>
                <span className="text-xs text-[var(--text-secondary)] block">
                  Transmitting XML / JSON schema u/s 139(1)...
                </span>
              </div>
              
              <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl text-left max-w-sm mx-auto flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping shrink-0"></div>
                <span className="text-[10px] sm:text-xs font-medium text-[var(--text-secondary)]">
                  Connecting to Govt E-filing API Server...
                </span>
              </div>
            </div>
          )}

          {/* STEP 6: REFUND CREDITED */}
          {step === 6 && (
            <div className="space-y-4 animate-fade-in">
              {/* Bank Credit Toast Notification */}
              <div className="bg-slate-900 border border-emerald-500/30 p-4 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Visual success gradient */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 animate-bounce">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Refund Credited Alert
                      </span>
                      <span className="text-[9px] text-slate-400">Just Now</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-100 leading-normal">
                      Alert! HDFC Bank A/c ...0493 is credited with <span className="text-emerald-400">₹42,500</span> from Income Tax Department refund u/s 143(1).
                    </p>
                  </div>
                </div>
              </div>

              {/* Celebrating ruppes block */}
              <div className="flex items-center justify-center gap-2 text-emerald-500 text-xs font-extrabold animate-pulse">
                <Coins className="w-4 h-4 animate-spin" />
                <span>Tax liability filed & cleared successfully!</span>
              </div>
            </div>
          )}

        </div>

        {/* Dynamic Footer Description */}
        <div className="border-t border-[var(--border-color)] pt-4 mt-6 flex justify-between items-center text-[10px] sm:text-xs font-semibold text-[var(--text-secondary)]">
          <span>Active Step:</span>
          <span className={`text-[var(--text-primary)] uppercase flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-[var(--border-color)]`}>
            {step === 1 && "1. Consult Request"}
            {step === 2 && "2. CA Assignment"}
            {step === 3 && "3. Docs Upload"}
            {step === 4 && "4. Tax Optimizer"}
            {step === 5 && "5. E-Filing Submit"}
            {step === 6 && "6. Refund Cleared"}
            <ArrowRight className="w-3 h-3 text-[var(--text-secondary)]" />
          </span>
        </div>

      </div>
    </div>
  )
}
