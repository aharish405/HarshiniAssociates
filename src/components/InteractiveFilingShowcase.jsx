import React, { useState, useEffect } from 'react'
import { 
  MessageSquare, 
  User, 
  Send, 
  FileText, 
  Check, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  BellRing
} from 'lucide-react'
import heroImg from '../assets/finance-hero.png'

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
      {/* Outer ambient blur card glow */}
      <div className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-tr ${activeColor.primary} opacity-25 blur-xl transition-all duration-1000`}></div>

      {/* Main Container - Wraps the Hero Image and Overlay Widgets */}
      <div className="relative w-full aspect-[4/3] min-h-[440px] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-2xl bg-slate-950 flex flex-col justify-between">
        
        {/* The Base Hero Image */}
        <img 
          src={heroImg} 
          alt="HA Tax Financial Analytics Render" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-45 dark:opacity-35"
          loading="eager"
        />

        {/* Dynamic Dark Mask Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] pointer-events-none"></div>

        {/* Top bar (Header Overlay) */}
        <div className="relative z-10 p-4 bg-slate-950/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-tr ${activeColor.primary} animate-pulse`}></span>
            <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
              Filing Flow Simulator
            </span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <span 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${step === idx ? `w-4 bg-gradient-to-r ${activeColor.primary}` : 'bg-white/20'}`}
              ></span>
            ))}
          </div>
        </div>

        {/* DYNAMIC ABSOLUTE FLOATING OVERLAYS */}
        <div className="relative z-10 flex-1 p-6 flex flex-col justify-center">
          
          {/* STEP 1: CLIENT REQUEST */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in absolute inset-x-6 top-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20 shadow-md">
                  <User className="w-4 h-4" />
                </div>
                <div className="bg-slate-900/90 text-white p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm font-semibold max-w-[85%] border border-white/10 shadow-xl backdrop-blur-md">
                  Hi, I need to file my ITR-2 for FY 2025-26. Can you help me maximize my refund?
                </div>
              </div>
              <div className="flex items-center gap-1.5 ml-11 text-[11px] text-slate-300 font-medium">
                <Send className="w-3 h-3 text-slate-400" />
                <span>Sent from mobile App</span>
              </div>
              
              {/* CA Typing indicator */}
              <div className="flex items-start gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20 shadow-md">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="bg-slate-900/80 border border-white/10 text-slate-300 py-2 px-4 rounded-full text-xs flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <span className="font-semibold text-emerald-400">HA CA is typing</span>
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
            <div className="space-y-4 animate-fade-in absolute inset-x-6 top-8">
              {/* Previous message minimized */}
              <div className="flex items-start gap-3 opacity-30">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="bg-slate-900/90 text-white p-2.5 rounded-2xl rounded-tl-none text-xs max-w-[80%]">
                  Hi, I need to file my ITR-2...
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20 shadow-md">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="bg-slate-900/95 border border-emerald-500/30 text-white p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm font-bold max-w-[85%] shadow-2xl backdrop-blur-md">
                  Hello! Yes, absolutely. We will analyze your Form 26AS, Form 16, and AIS/TIS logs. Uploading your smart portal document checklist now.
                </div>
              </div>
              <div className="flex items-center gap-1.5 ml-11 text-[11px] text-emerald-400 font-bold">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Assigned to Senior CA</span>
              </div>
            </div>
          )}

          {/* STEP 3: DOCUMENT UPLOAD & VERIFICATION */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in absolute inset-x-6 top-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 drop-shadow-md">
                <FileText className={`w-4 h-4 text-blue-400`} />
                Document Verification Hub
              </h4>

              {/* Upload Item 1 */}
              <div className="p-3 bg-slate-900/90 border border-white/10 rounded-xl flex items-center justify-between shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-red-500/20 text-red-400 rounded-lg">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Form_16_Salary.pdf</span>
                    <span className="text-[10px] text-slate-300">2.4 MB • Reconciled</span>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Upload Item 2 */}
              <div className="p-3 bg-slate-900/90 border border-white/10 rounded-xl flex items-center justify-between shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white block">AIS_Summary_TIS.pdf</span>
                    <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${activeColor.primary} animate-pulse`} style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold animate-pulse">
                  Verifying Ledger...
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REFUND OPTIMIZATION */}
          {step === 4 && (
            <div className="space-y-5 animate-fade-in text-center absolute inset-x-6 top-10">
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-1 shadow-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-200 tracking-wider block drop-shadow-md">
                  Deductions u/s 80C & 80D Maximized
                </span>
                <span className={`text-3xl sm:text-4xl font-extrabold font-display bg-gradient-to-r ${activeColor.primary} bg-clip-text text-transparent block tracking-tight`}>
                  ₹{refundVal.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-white font-bold block drop-shadow-md">
                  Tax Refund Calculated & Optimized
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                <div className="p-2.5 bg-slate-900/90 border border-white/10 rounded-xl backdrop-blur-md shadow-lg">
                  <span className="text-[9px] text-slate-400 uppercase block">Old Tax</span>
                  <span className="text-xs font-bold text-red-400 block line-through">₹78,400</span>
                </div>
                <div className="p-2.5 bg-slate-900/95 border border-emerald-500/35 rounded-xl backdrop-blur-md shadow-lg">
                  <span className="text-[9px] text-emerald-400 uppercase block">Optimized Tax</span>
                  <span className="text-xs font-extrabold text-emerald-400 block font-display">₹35,900</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: OFFICIAL SUBMISSION */}
          {step === 5 && (
            <div className="space-y-4 animate-fade-in text-center absolute inset-x-6 top-12">
              <div className="relative mx-auto w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-white/10 border-t-emerald-500 animate-spin"></div>
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-extrabold text-white block drop-shadow-md">
                  Securing IT Portal Gateway
                </span>
                <span className="text-xs text-slate-200 block drop-shadow-md">
                  Transmitting XML / JSON schema u/s 139(1)...
                </span>
              </div>
              
              <div className="p-3 bg-slate-900/90 border border-white/10 rounded-xl text-left max-w-sm mx-auto flex items-center gap-3 backdrop-blur-md shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0"></div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-200">
                  Connecting to Govt E-filing API Server...
                </span>
              </div>
            </div>
          )}

          {/* STEP 6: REFUND CREDITED */}
          {step === 6 && (
            <div className="space-y-4 animate-fade-in absolute inset-x-6 top-10">
              {/* Bank Credit Toast Notification */}
              <div className="bg-slate-950/95 border border-emerald-500/40 p-4 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 animate-bounce border border-emerald-500/20 shadow-md">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Refund Credited Alert
                      </span>
                      <span className="text-[9px] text-slate-400">Just Now</span>
                    </div>
                    <p className="text-xs font-bold text-slate-100 leading-normal">
                      Alert! Bank A/c ...0493 is credited with <span className="text-emerald-400 font-extrabold font-display">₹42,500</span> from Income Tax Department refund u/s 143(1).
                    </p>
                  </div>
                </div>
              </div>

              {/* Celebrating block */}
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-extrabold drop-shadow-md">
                <Coins className="w-4.5 h-4.5 animate-bounce" />
                <span>Tax liability filed & cleared successfully!</span>
              </div>
            </div>
          )}

        </div>

        {/* Bottom bar (Footer Overlay) */}
        <div className="relative z-10 p-4 bg-slate-950/60 backdrop-blur-md border-t border-white/10 flex justify-between items-center text-[10px] sm:text-xs font-bold text-slate-200">
          <span>Active Step:</span>
          <span className={`text-white uppercase flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10`}>
            {step === 1 && "1. Consult Request"}
            {step === 2 && "2. CA Assignment"}
            {step === 3 && "3. Docs Upload"}
            {step === 4 && "4. Tax Optimizer"}
            {step === 5 && "5. E-Filing Submit"}
            {step === 6 && "6. Refund Cleared"}
          </span>
        </div>

      </div>
    </div>
  )
}
