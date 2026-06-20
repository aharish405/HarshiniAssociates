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
      title: 'Consult',
      desc: 'Secure Chat',
      icon: <MessageSquare className="w-4.5 h-4.5" />
    },
    {
      id: 2,
      title: 'Upload',
      desc: 'File Parse',
      icon: <UploadCloud className="w-4.5 h-4.5" />
    },
    {
      id: 3,
      title: 'Optimize',
      desc: 'Deductions',
      icon: <TrendingUp className="w-4.5 h-4.5" />
    },
    {
      id: 4,
      title: 'Submit',
      desc: 'Government',
      icon: <ShieldCheck className="w-4.5 h-4.5" />
    },
    {
      id: 5,
      title: 'Credit',
      desc: 'Refund Paid',
      icon: <CheckCircle className="w-4.5 h-4.5" />
    }
  ]

  return (
    <div className="relative w-full min-h-[460px] flex items-center justify-center p-1">
      {/* Background card accent glow */}
      <div className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-tr ${activeColor.primary} opacity-15 blur-2xl transition-all duration-1000`}></div>

      {/* Main Glass Panel (Flex column layout) */}
      <div className="relative w-full glass-card p-6 sm:p-8 rounded-3xl border-[var(--border-color)] shadow-2xl flex flex-col gap-8 overflow-hidden">
        
        {/* Top Section: Horizontal Stepper Tracker */}
        <div className="relative flex items-center justify-between px-2 pb-2">
          
          {/* Base Connection line */}
          <div className="absolute left-6 right-6 top-[22px] h-[2px] bg-[var(--border-color)] z-0">
            {/* Active glowing path */}
            <div 
              className={`h-full bg-gradient-to-r ${activeColor.primary} transition-all duration-1000`}
              style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
            ></div>
          </div>

          {steps.map((s) => {
            const isActive = activeStep === s.id
            const isPassed = activeStep > s.id
            return (
              <div 
                key={s.id} 
                className="flex flex-col items-center gap-2 relative z-10"
              >
                {/* Step Circle Node */}
                <button
                  onClick={() => setActiveStep(s.id)}
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-500 shadow-md cursor-pointer ${
                    isActive 
                      ? `${activeColor.badgeBg} border-[var(--text-primary)] ring-4 ring-white/5` 
                      : isPassed 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' 
                        : 'bg-white/5 border-[var(--border-color)] text-[var(--text-secondary)]'
                  }`}
                >
                  {isPassed ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : s.icon}
                </button>
                
                {/* Node Labels */}
                <div className="text-center leading-none">
                  <span className={`text-[9px] sm:text-[10px] font-bold block ${isActive ? 'text-[var(--text-primary)] font-extrabold' : 'text-[var(--text-secondary)]'}`}>
                    {s.title}
                  </span>
                  <span className="text-[7.5px] text-[var(--text-secondary)] hidden sm:block mt-0.5 font-light">
                    {s.desc}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section: Micro-Animation Showcase Display (Spans 100% width) */}
        <div className="w-full min-h-[260px] bg-white/5 dark:bg-white/5 rounded-2xl border border-[var(--border-color)] p-6 relative overflow-hidden flex flex-col justify-between">
          
          {/* Subtle details glow */}
          <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${activeColor.primary} opacity-[0.06] blur-2xl pointer-events-none rounded-full`}></div>
          
          <div className="flex-1 flex flex-col justify-center">
            
            {/* STEP 1 ANIMATION: CHAT INITIATION */}
            {activeStep === 1 && (
              <div className="space-y-4 animate-fade-in w-full">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/10">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="bg-[var(--border-color)] text-[var(--text-primary)] p-3.5 rounded-2xl rounded-tl-none text-xs leading-normal max-w-[85%] font-semibold shadow-sm">
                    Hi, filing for FY 2025-26. Can you review HRA and home loan deductions?
                  </div>
                </div>
                
                <div className="flex gap-3 items-start animate-fade-in delay-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-[var(--text-primary)] p-3.5 rounded-2xl rounded-tl-none text-xs font-extrabold leading-normal max-w-[85%] shadow-md">
                    Hi! Absolutely, we will map out your home loan interest claims u/s 24(b) and optimize your allowances.
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 ANIMATION: DOCUMENT PARSING & LOADER */}
            {activeStep === 2 && (
              <div className="space-y-4 animate-fade-in w-full">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] block">
                  Document Scanning Pipeline
                </span>
                
                {/* PDF progress card */}
                <div className="p-4 bg-white/5 border border-[var(--border-color)] rounded-2xl flex items-center justify-between shadow-sm w-full">
                  <div className="flex items-center gap-3.5 flex-1 mr-4">
                    <div className="p-2.5 bg-red-500/10 text-red-500 rounded-xl">
                      <FileText className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] block">Form_16_Salary_Reconciliation.pdf</span>
                      <div className="w-full h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${activeColor.primary} transition-all duration-100`} 
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[var(--text-primary)] font-display shrink-0 pl-2">
                    {percent}%
                  </span>
                </div>

                <div className="flex justify-between items-center text-[10.5px] text-[var(--text-secondary)] px-1">
                  <span>AIS / TIS ledger match validation</span>
                  {percent === 100 ? (
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <FileCheck className="w-4.5 h-4.5" /> File Parsed Successfully
                    </span>
                  ) : (
                    <span className="animate-pulse">Reading fields & tax credits...</span>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3 ANIMATION: REGIME COMPARISON */}
            {activeStep === 3 && (
              <div className="space-y-4 animate-fade-in text-center w-full">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] block">
                  Tax Savings Audit Result
                </span>
                <span className={`text-4xl sm:text-5xl font-extrabold font-display bg-gradient-to-r ${activeColor.primary} bg-clip-text text-transparent block tracking-tight`}>
                  ₹{refundCount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] block">
                  Refund optimized using New Regime u/s 115BAC
                </span>

                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-2">
                  <div className="p-3 bg-[var(--border-color)] rounded-2xl text-xs font-semibold">
                    <span className="text-[9px] text-[var(--text-secondary)] block mb-0.5">Old Regime</span>
                    <span className="text-slate-400 dark:text-slate-500 line-through">₹78,400</span>
                  </div>
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-xs font-extrabold text-emerald-500">
                    <span className="text-[9px] text-emerald-500 block mb-0.5">Optimized Regime</span>
                    <span>₹35,900</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 ANIMATION: SECURE GOVERNMENT PORTAL TRANSMISSION */}
            {activeStep === 4 && (
              <div className="space-y-4 animate-fade-in text-center w-full">
                <div className="relative mx-auto w-14 h-14 flex items-center justify-center mb-1">
                  <div className="absolute inset-0 rounded-full border-2 border-[var(--border-color)] border-t-blue-500 animate-spin"></div>
                  <Lock className="w-5.5 h-5.5 text-blue-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-[var(--text-primary)] block">
                    Government Gateway Encrypted Connection
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] block">
                    Transmitting encrypted JSON u/s 139(1) to IT Department portal...
                  </span>
                </div>
                <div className="p-2.5 bg-blue-500/5 border border-blue-500/10 rounded-xl text-xs text-[var(--text-secondary)] flex items-center justify-center gap-2 max-w-sm mx-auto">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping shrink-0"></span>
                  <span>Govt ACK ID: 8932048502 Verified</span>
                </div>
              </div>
            )}

            {/* STEP 5 ANIMATION: REFUND SMS CREDITED ALERT */}
            {activeStep === 5 && (
              <div className="space-y-4 animate-fade-in w-full">
                {/* Alert Toast */}
                <div className="bg-slate-900 border border-emerald-500/40 p-4 sm:p-5 rounded-2xl shadow-2xl relative overflow-hidden w-full">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 animate-bounce">
                      <BellRing className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">SMS Alert</span>
                        <span className="text-[8px] sm:text-[9px] text-slate-400">Just Now</span>
                      </div>
                      <p className="text-xs font-bold text-slate-100 leading-normal">
                        HDFC Bank: Your Account *0493 is credited with <span className="text-emerald-400 font-extrabold font-display">₹42,500</span> from Income Tax Department towards tax refund for AY 2026-27.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-emerald-500 text-xs font-bold animate-pulse">
                  <Sparkles className="w-4 h-4 animate-spin animate-duration-1000" />
                  <span>ITR filing cycle completed successfully!</span>
                </div>
              </div>
            )}

          </div>

          {/* Action details trigger */}
          <div className="mt-5 pt-3 border-t border-[var(--border-color)] flex justify-between items-center text-[10px] sm:text-xs text-[var(--text-secondary)] font-bold uppercase tracking-wider">
            <span>Filing Status:</span>
            <span className="text-[var(--text-primary)] flex items-center gap-1 font-extrabold">
              {activeStep === 1 && "Consultation"}
              {activeStep === 2 && "Verification"}
              {activeStep === 3 && "Regime Optimization"}
              {activeStep === 4 && "Government Submitted"}
              {activeStep === 5 && "Refund Disbursed"}
              <ArrowRight className="w-4 h-4 text-[var(--text-secondary)]" />
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}
