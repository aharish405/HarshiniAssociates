import React, { useState, useEffect } from 'react'
import { 
  MessageSquare, 
  User, 
  UploadCloud, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle,
  FileText,
  FileCheck,
  Lock,
  ArrowRight,
  Sparkles,
  BellRing
} from 'lucide-react'

export default function InteractiveFilingShowcase({ activeColor }) {
  const [activeStep, setActiveStep] = useState(1)
  const [percent, setPercent] = useState(0)
  const [refundCount, setRefundCount] = useState(0)

  // Step looping
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 5 ? 1 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Percentage loader effect for Step 2
  useEffect(() => {
    if (activeStep === 2) {
      setPercent(0)
      const loader = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 100) {
            clearInterval(loader)
            return 100
          }
          return prev + 5
        })
      }, 100)
      return () => clearInterval(loader)
    }
  }, [activeStep])

  // Countup refund value effect for Step 3
  useEffect(() => {
    if (activeStep === 3) {
      setRefundCount(0)
      const target = 42500
      const increment = 1700
      let current = 0
      const counter = setInterval(() => {
        current += increment
        if (current >= target) {
          setRefundCount(target)
          clearInterval(counter)
        } else {
          setRefundCount(current)
        }
      }, 50)
      return () => clearInterval(counter)
    }
  }, [activeStep])

  // Process steps metadata
  const steps = [
    {
      id: 1,
      title: 'Consult & Initiate',
      desc: 'Secure onboarding chat',
      icon: <MessageSquare className="w-4 h-4" />
    },
    {
      id: 2,
      title: 'Upload Documents',
      desc: 'Form 16 & AIS parsing',
      icon: <UploadCloud className="w-4 h-4" />
    },
    {
      id: 3,
      title: 'Audit & Optimize',
      desc: 'Max deductions u/s 80',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      id: 4,
      title: 'Secure Submission',
      desc: 'IT Portal direct filing',
      icon: <ShieldCheck className="w-4 h-4" />
    },
    {
      id: 5,
      title: 'Refund Credited',
      desc: 'Bank credit alert',
      icon: <CheckCircle className="w-4 h-4" />
    }
  ]

  return (
    <div className="relative w-full min-h-[460px] flex items-center justify-center p-1">
      {/* Background card accent glow */}
      <div className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-tr ${activeColor.primary} opacity-15 blur-2xl transition-all duration-1000`}></div>

      {/* Main Glass Panel */}
      <div className="relative w-full min-h-[440px] glass-card p-6 rounded-3xl border-[var(--border-color)] shadow-2xl flex flex-col md:flex-row gap-8 overflow-hidden">
        
        {/* Left Side: Vertical Infographic Timeline Track */}
        <div className="flex flex-col justify-between py-2 shrink-0 md:w-[220px]">
          <div className="space-y-4 relative">
            
            {/* Liquid Flow Path Line */}
            <div className="absolute left-6 top-3 bottom-3 w-[2px] bg-[var(--border-color)]">
              {/* Dynamic glowing active path height */}
              <div 
                className={`w-full bg-gradient-to-b ${activeColor.primary} transition-all duration-1000`}
                style={{ height: `${((activeStep - 1) / 4) * 100}%` }}
              ></div>
            </div>

            {steps.map((s) => {
              const isActive = activeStep === s.id
              const isPassed = activeStep > s.id
              return (
                <div 
                  key={s.id}
                  className={`flex items-start gap-4 relative z-10 transition-all duration-300 ${isActive ? 'scale-[1.03]' : 'opacity-50'}`}
                >
                  {/* Step Circle Node */}
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 transition-all duration-500 shadow-md ${
                      isActive 
                        ? `${activeColor.badgeBg} border-[var(--text-primary)] ring-4 ring-white/5` 
                        : isPassed 
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' 
                          : 'bg-white/5 border-[var(--border-color)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {isPassed ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : s.icon}
                  </div>

                  {/* Step Description texts */}
                  <div className="leading-tight pt-1">
                    <span className={`text-xs font-bold block ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                      {s.title}
                    </span>
                    <span className="text-[10px] text-[var(--text-secondary)] block mt-0.5 font-light">
                      {s.desc}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Side: Micro-Animation Showcase Display */}
        <div className="flex-1 flex flex-col justify-between min-h-[280px] md:min-h-0 bg-white/5 dark:bg-white/5 rounded-2xl border border-[var(--border-color)] p-5 relative overflow-hidden">
          {/* Subtle details glow */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${activeColor.primary} opacity-[0.06] blur-2xl pointer-events-none rounded-full`}></div>
          
          <div className="flex-1 flex flex-col justify-center">
            
            {/* STEP 1 ANIMATION: CHAT INITIATION */}
            {activeStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/10">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-[var(--border-color)] text-[var(--text-primary)] p-3 rounded-2xl rounded-tl-none text-xs leading-normal max-w-[85%] font-medium shadow-sm">
                    Hi, filing for FY 2025-26. How do I optimize deductions?
                  </div>
                </div>
                
                <div className="flex gap-2.5 items-start animate-fade-in delay-500">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/10">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-[var(--text-primary)] p-3 rounded-2xl rounded-tl-none text-xs font-bold leading-normal max-w-[85%] shadow-md">
                    Hi! I will analyze your documents to claim maximum benefits under Section 80C, 80D, and HRA.
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 ANIMATION: DOCUMENT PARSING & LOADER */}
            {activeStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] block">
                  Document Scanning Pipeline
                </span>
                
                {/* PDF progress card */}
                <div className="p-3 bg-white/5 border border-[var(--border-color)] rounded-xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-[var(--text-primary)] block">Form_16_Salary.pdf</span>
                      <div className="w-40 h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${activeColor.primary} transition-all duration-100`} 
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[var(--text-primary)] font-display">
                    {percent}%
                  </span>
                </div>

                <div className="flex justify-between items-center text-[10px] text-[var(--text-secondary)] px-1">
                  <span>Reconciling AIS/TIS summary</span>
                  {percent === 100 ? (
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5" /> Checked
                    </span>
                  ) : (
                    <span className="animate-pulse">Parsing fields...</span>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3 ANIMATION: REGIME COMPARISON */}
            {activeStep === 3 && (
              <div className="space-y-4 animate-fade-in text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] block">
                  Tax Savings Audit Result
                </span>
                <span className={`text-3xl sm:text-4xl font-extrabold font-display bg-gradient-to-r ${activeColor.primary} bg-clip-text text-transparent block tracking-tight`}>
                  ₹{refundCount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-[var(--text-primary)] block">
                  Refund optimized using New Regime u/s 115BAC
                </span>

                <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto pt-2">
                  <div className="p-2 bg-[var(--border-color)] rounded-xl text-xs font-semibold">
                    <span className="text-[9px] text-[var(--text-secondary)] block">Old Regime</span>
                    <span className="text-slate-400 dark:text-slate-500 line-through">₹78,400</span>
                  </div>
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-extrabold text-emerald-500">
                    <span className="text-[9px] text-emerald-500 block">Optimized Regime</span>
                    <span>₹35,900</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 ANIMATION: SECURE GOVERNMENT PORTAL TRANSMISSION */}
            {activeStep === 4 && (
              <div className="space-y-4 animate-fade-in text-center">
                <div className="relative mx-auto w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[var(--border-color)] border-t-blue-500 animate-spin"></div>
                  <Lock className="w-5 h-5 text-blue-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[var(--text-primary)] block">
                    Govt Gateway Encryption
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] block">
                    Transmitting e-filing JSON schema...
                  </span>
                </div>
                <div className="p-2.5 bg-blue-500/5 border border-blue-500/10 rounded-xl text-[10px] text-[var(--text-secondary)] flex items-center justify-center gap-2 max-w-xs mx-auto">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping shrink-0"></span>
                  <span>E-Verified and Acknowledged</span>
                </div>
              </div>
            )}

            {/* STEP 5 ANIMATION: REFUND SMS CREDITED ALERT */}
            {activeStep === 5 && (
              <div className="space-y-3 animate-fade-in">
                {/* Alert Toast */}
                <div className="bg-slate-900 border border-emerald-500/40 p-4 rounded-xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 animate-bounce">
                      <BellRing className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">SMS Alert</span>
                        <span className="text-[8px] text-slate-400">Just Now</span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-100 leading-normal">
                        HDFC Bank: A/c ...0493 is credited with <span className="text-emerald-400">₹42,500</span> from Income Tax Department refund.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-emerald-500 text-[10px] font-bold animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>ITR filing cycle completed successfully!</span>
                </div>
              </div>
            )}

          </div>

          {/* Action details trigger */}
          <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex justify-between items-center text-[10px] text-[var(--text-secondary)] font-semibold uppercase">
            <span>Filing Status:</span>
            <span className="text-[var(--text-primary)] flex items-center gap-1 font-bold">
              {activeStep === 1 && "Consultation"}
              {activeStep === 2 && "Verification"}
              {activeStep === 3 && "Optimized"}
              {activeStep === 4 && "Submitted"}
              {activeStep === 5 && "Credited"}
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}
