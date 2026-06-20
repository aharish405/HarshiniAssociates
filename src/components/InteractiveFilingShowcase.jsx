import React, { useState, useEffect, useRef } from 'react'
import { 
  MessageSquare, 
  User, 
  Send, 
  FileText, 
  Check, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  BellRing,
  ArrowRight,
  Smartphone,
  Server
} from 'lucide-react'
import heroImg from '../assets/finance-hero.png'

export default function InteractiveFilingShowcase({ activeColor }) {
  const [step, setStep] = useState(1)
  const [refundVal, setRefundVal] = useState(0)
  const chatEndRef = useRef(null)

  // Automatic sequence loop
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev === 6 ? 1 : prev + 1))
    }, 5000)
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

  // Scroll chat simulator to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [step])

  return (
    <div className="relative w-full max-w-lg lg:max-w-none min-h-[500px] flex items-center justify-center p-2">
      
      {/* Outer ambient blur card glow */}
      <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-tr ${activeColor.primary} opacity-20 blur-2xl transition-all duration-1000`}></div>

      {/* Main Base Card Container */}
      <div className="relative w-full aspect-[4/3] min-h-[480px] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-2xl bg-slate-950 flex items-center justify-center">
        
        {/* The Base Image of the Woman with the Phone */}
        <img 
          src={heroImg} 
          alt="Woman utilizing tax application" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-50 dark:opacity-40"
          loading="eager"
        />

        {/* Dynamic mask overlay */}
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px] pointer-events-none"></div>

        {/* Glowing visual hotspot placed exactly where she holds the phone */}
        <div className="absolute bottom-[30%] left-[28%] z-20 pointer-events-none">
          <span className="absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500 shadow-md shadow-blue-500/50"></span>
        </div>

        {/* SVG DATA TRANSIT LINE: Connecting phone hotspot to CA Dashboard card */}
        <svg className="absolute inset-0 w-full h-full z-15 pointer-events-none select-none">
          {/* Base Connection Path */}
          <path 
            d="M 150 320 C 180 250, 240 180, 280 180" 
            fill="none" 
            stroke="rgba(255,255,255,0.08)" 
            strokeWidth="2" 
            strokeDasharray="4 4"
          />
          {/* Animated Glowing Transit Blob */}
          <path 
            d="M 150 320 C 180 250, 240 180, 280 180" 
            fill="none" 
            stroke={`url(#glowGrad-${step})`} 
            strokeWidth="3" 
            strokeDasharray="15 150" 
            strokeDashoffset={step * -60}
            className="transition-all duration-1000 ease-in-out"
          />
          <defs>
            <linearGradient id={`glowGrad-${step}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* 1. MOCK MOBILE PHONE CONTAINER (Floats on the Left u/s her phone) */}
        <div className="absolute bottom-6 left-6 z-20 w-[180px] sm:w-[200px] h-[280px] bg-slate-900/95 border border-white/10 rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-md transition-all duration-500 hover:scale-[1.02]">
          {/* Phone Speaker & Notch */}
          <div className="h-4 bg-slate-950 flex items-center justify-center border-b border-white/5">
            <div className="w-12 h-1 bg-white/20 rounded-full"></div>
          </div>

          {/* Chat Header */}
          <div className="bg-slate-950 p-2 border-b border-white/5 flex items-center gap-1.5 shrink-0">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <User className="w-3 h-3" />
            </div>
            <div className="leading-none">
              <span className="text-[9px] font-bold text-white block">HA Tax Assistant</span>
              <span className="text-[7px] text-emerald-400 animate-pulse block">Filing ITR-2</span>
            </div>
          </div>

          {/* Live Messaging Stream */}
          <div className="flex-1 p-2 overflow-y-auto space-y-2 flex flex-col scrollbar-none text-[9px]">
            {/* Step 1 message */}
            <div className="bg-blue-600 text-white p-2 rounded-xl rounded-tr-none self-end max-w-[85%] font-medium">
              Need to file ITR-2 for FY 25-26. Can you help?
            </div>

            {/* Step 2 message */}
            {step >= 2 && (
              <div className="bg-white/15 text-slate-100 p-2 rounded-xl rounded-tl-none self-start max-w-[85%] font-bold border border-white/5">
                Hi! Yes, analyzing your Form 16 & 26AS records now.
              </div>
            )}

            {/* Step 3 message */}
            {step >= 3 && (
              <div className="bg-blue-600 text-white p-2 rounded-xl rounded-tr-none self-end max-w-[85%] font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Uploaded Form_16.pdf</span>
              </div>
            )}

            {/* Step 6 message */}
            {step === 6 && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2 rounded-xl rounded-tl-none self-start max-w-[85%] font-bold">
                🎉 Refund cleared! ₹42,500 credited u/s 143(1).
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Phone Send Bar */}
          <div className="p-1.5 bg-slate-950 border-t border-white/5 flex items-center justify-between shrink-0">
            <span className="text-[8px] text-slate-400 pl-1">CA analyzing files...</span>
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
              <Send className="w-2.5 h-2.5" />
            </div>
          </div>
        </div>

        {/* 2. CONSULTANT PORTAL / DECISION MODULE (Floats on the Right) */}
        <div className="absolute top-6 right-6 z-20 w-[240px] sm:w-[260px] bg-slate-900/90 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02] flex flex-col justify-between min-h-[220px]">
          
          {/* Card Title */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
              <Server className="w-3 h-3 text-blue-400" />
              CA Portal Dashboard
            </span>
            <span className={`text-[8px] font-semibold text-white px-2 py-0.5 rounded bg-white/10 border border-white/5`}>
              Step {step}/6
            </span>
          </div>

          {/* Dynamic Content display based on active step */}
          <div className="flex-1 flex flex-col justify-center py-1">
            
            {/* Step 1: Initiating file */}
            {step === 1 && (
              <div className="space-y-2 animate-fade-in">
                <span className="text-[10px] font-bold text-white block">Awaiting Client Assets</span>
                <p className="text-[9px] text-slate-300 leading-normal">
                  Filing request registered. Establishing secure connection tunnel to client handset u/s 139...
                </p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-blue-500 animate-pulse"></div>
                </div>
              </div>
            )}

            {/* Step 2: Verification */}
            {step === 2 && (
              <div className="space-y-2.5 animate-fade-in">
                <span className="text-[10px] font-bold text-white block">AIS / TIS Reconciliation</span>
                <ul className="space-y-1 text-[8px] text-slate-300 font-semibold">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                    Fetching PAN tax liability records...
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    Reconciling TDS vouchers...
                  </li>
                </ul>
              </div>
            )}

            {/* Step 3: Document uploads */}
            {step === 3 && (
              <div className="space-y-2 animate-fade-in">
                <span className="text-[10px] font-bold text-white block">Document Parsing</span>
                <div className="p-2 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between text-[8px]">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-white truncate max-w-[110px]">Form_16_Salary.pdf</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% Parsed</span>
                </div>
                <div className="flex justify-between text-[8px] text-slate-400">
                  <span>Sec. 80C Claim: verified</span>
                  <span>Sec. 10(14): verified</span>
                </div>
              </div>
            )}

            {/* Step 4: Tax Optimization */}
            {step === 4 && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white">Refund Calculated</span>
                  <span className="text-[8px] text-emerald-400 font-bold">Optimal Regime u/s 115BAC</span>
                </div>
                <span className="text-2xl font-extrabold font-display text-emerald-400 block tracking-tight">
                  ₹{refundVal.toLocaleString('en-IN')}
                </span>
                <div className="flex justify-between text-[8px] text-slate-400">
                  <span>Old regime: ₹0 refund</span>
                  <span className="text-emerald-400">Savings: +₹42,500</span>
                </div>
              </div>
            )}

            {/* Step 5: Official Submission */}
            {step === 5 && (
              <div className="space-y-2 animate-fade-in">
                <span className="text-[9px] font-bold text-white block">Transmitting XML to Govt Portal</span>
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center gap-2 text-[8px]">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
                  <span className="text-blue-300 font-semibold">ITR-2 JSON package submission...</span>
                </div>
                <div className="flex justify-between text-[7px] text-slate-400">
                  <span>Govt ACK ID: 8932048</span>
                  <span>E-verified: Success</span>
                </div>
              </div>
            )}

            {/* Step 6: Refund Cleared */}
            {step === 6 && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-bold">Filing Cycle Complete</span>
                </div>
                <p className="text-[8px] text-slate-300 leading-normal">
                  Filing receipt generated u/s 143(1). Assessment details dispatched to client inbox.
                </p>
                <div className="inline-block px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[8px] font-bold rounded">
                  Filing Status: Cleared
                </div>
              </div>
            )}

          </div>
          
          {/* Card footer description */}
          <div className="border-t border-white/5 pt-2 mt-2 flex justify-between items-center text-[7px] font-semibold text-slate-400 uppercase tracking-widest">
            <span>Filing engine v4.3</span>
            <span className="text-emerald-400">Online</span>
          </div>

        </div>

        {/* 3. REFUND SMS ALERTS (Drops down from bottom-right only in step 6) */}
        {step === 6 && (
          <div className="absolute bottom-6 right-6 z-35 w-[220px] bg-slate-950 border border-emerald-500/40 p-3 rounded-xl shadow-2xl animate-bounce backdrop-blur-md">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <BellRing className="w-3.5 h-3.5" />
              </div>
              <div className="space-y-0.5 leading-none">
                <span className="text-[8px] font-bold text-emerald-400 uppercase block tracking-wider">SMS Alert</span>
                <span className="text-[9px] font-bold text-white block">Refund Credited</span>
                <p className="text-[7.5px] text-slate-300 font-semibold leading-normal pt-1">
                  Bank A/c ...0493 credited u/s 143(1) with INR 42,500.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
