import React, { useState, useEffect } from 'react'
import { Calculator, Check, ArrowRight, Info } from 'lucide-react'

export default function TaxCalculator({ activeColor }) {
  const [income, setIncome] = useState(1200000) // Default 12 Lakhs
  const [deductions, setDeductions] = useState(150000) // Default 1.5 Lakhs (80C limit)
  const [oldTax, setOldTax] = useState(0)
  const [newTax, setNewTax] = useState(0)
  const [recommendation, setRecommendation] = useState('')

  // Calculate tax on change
  useEffect(() => {
    // OLD REGIME CALCULATION (FY 2025-26 / AY 2026-27)
    // Standard Deduction: 50,000
    const taxableOld = Math.max(0, income - deductions - 50000)
    let taxOld = 0

    if (taxableOld <= 250000) {
      taxOld = 0
    } else if (taxableOld <= 500000) {
      taxOld = (taxableOld - 250000) * 0.05
    } else if (taxableOld <= 1000000) {
      taxOld = 12500 + (taxableOld - 500000) * 0.20
    } else {
      taxOld = 112500 + (taxableOld - 1000000) * 0.30
    }
    // Cess 4%
    taxOld = taxOld * 1.04

    // NEW REGIME CALCULATION (FY 2025-26 / AY 2026-27 as per Budget 2024 updates)
    // Standard Deduction: 75,000
    const taxableNew = Math.max(0, income - 75000)
    let taxNew = 0

    // New Slabs:
    // 0 - 3L: Nil
    // 3L - 7L: 5%
    // 7L - 10L: 10%
    // 10L - 12L: 15%
    // 12L - 15L: 20%
    // > 15L: 30%
    if (taxableNew <= 300000) {
      taxNew = 0
    } else if (taxableNew <= 700000) {
      taxNew = (taxableNew - 300000) * 0.05
    } else if (taxableNew <= 1000000) {
      taxNew = 20000 + (taxableNew - 700000) * 0.10
    } else if (taxableNew <= 1200000) {
      taxNew = 50000 + (taxableNew - 1000000) * 0.15
    } else if (taxableNew <= 1500000) {
      taxNew = 80000 + (taxableNew - 1200000) * 0.20
    } else {
      taxNew = 140000 + (taxableNew - 1500000) * 0.30
    }
    // Tax rebate under Sec 87A for New Regime is up to 7 Lakhs (Taxable income after standard deduction <= 7L is 0 tax)
    if (taxableNew <= 700000) {
      taxNew = 0
    }

    taxNew = taxNew * 1.04

    setOldTax(Math.round(taxOld))
    setNewTax(Math.round(taxNew))

    // Formulate Recommendation
    const diff = Math.abs(taxOld - taxNew)
    if (Math.round(taxOld) === Math.round(taxNew)) {
      setRecommendation("Both regimes offer identical tax liabilities for your profile.")
    } else if (taxOld > taxNew) {
      setRecommendation(`The New Tax Regime saves you approximately ₹${diff.toLocaleString('en-IN')}!`)
    } else {
      setRecommendation(`The Old Tax Regime saves you approximately ₹${diff.toLocaleString('en-IN')}!`)
    }
  }, [income, deductions])

  const maxTaxVal = Math.max(oldTax, newTax, 50000)

  return (
    <section id="tax-planner" className="py-24 border-t border-[var(--border-color)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Dynamic sliders */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${activeColor.badgeBg} border`}>
              <Calculator className="w-3.5 h-3.5" />
              Interactive Planning Tool
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
              Tax Regime Comparison
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed">
              Compare your tax liability under the **Old Regime** vs. **New Regime** for FY 2025-26. Slide to customize your inputs and see tax estimates in real-time.
            </p>
          </div>

          <div className="glass-card-dark p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl border-[var(--border-color)]">
            {/* Income Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[var(--text-primary)]">
                  Annual Gross Income (Salary/Business)
                </label>
                <span className="text-sm font-bold font-display text-[var(--text-primary)]">
                  ₹{income.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="300000"
                max="3000000"
                step="50000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-[var(--border-color)] appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-[var(--text-secondary)]">
                <span>3 Lakhs</span>
                <span>15 Lakhs</span>
                <span>30 Lakhs</span>
              </div>
            </div>

            {/* Deductions Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[var(--text-primary)]">
                  Applicable Deductions (Sec 80C, 80D, HRA, etc.)
                </label>
                <span className="text-sm font-bold font-display text-[var(--text-primary)]">
                  ₹{deductions.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="400000"
                step="10000"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-[var(--border-color)] appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-[var(--text-secondary)]">
                <span>0 (No investments)</span>
                <span>2 Lakhs</span>
                <span>4 Lakhs (Max benefits)</span>
              </div>
            </div>

            {/* Disclaimer info */}
            <div className="flex gap-2.5 p-3.5 bg-white/5 dark:bg-white/5 rounded-xl border border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
              <Info className="w-4 h-4 shrink-0 text-blue-500 mt-0.5" />
              <span>Calculations include the standard deduction (₹50k for Old, ₹75k for New) and 4% Health & Education Cess. Rebate u/s 87A is factored in.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Comparison visualization */}
        <div className="lg:col-span-6">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border-[var(--border-color)] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            {/* Visual glow background */}
            <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${activeColor.primary} opacity-[0.08] blur-3xl pointer-events-none rounded-full`}></div>
            
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4 mb-6">
              Estimate Summary
            </h3>

            {/* Regime Bars */}
            <div className="space-y-6">
              {/* Old Regime */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-[var(--text-primary)]">Old Tax Regime</span>
                  <span className="font-bold text-[var(--text-primary)] font-display">
                    {oldTax > 0 ? `₹${oldTax.toLocaleString('en-IN')}` : 'Nil Tax'}
                  </span>
                </div>
                <div className="h-5 w-full bg-[var(--border-color)] rounded-lg overflow-hidden flex">
                  <div 
                    className="h-full bg-slate-400 dark:bg-slate-600 rounded-lg transition-all duration-500" 
                    style={{ width: `${Math.max(5, (oldTax / maxTaxVal) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* New Regime */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-[var(--text-primary)]">New Tax Regime (Default)</span>
                  <span className={`font-bold font-display ${newTax < oldTax ? 'text-emerald-500' : 'text-[var(--text-primary)]'}`}>
                    {newTax > 0 ? `₹${newTax.toLocaleString('en-IN')}` : 'Nil Tax'}
                  </span>
                </div>
                <div className="h-5 w-full bg-[var(--border-color)] rounded-lg overflow-hidden flex">
                  <div 
                    className={`h-full rounded-lg transition-all duration-500 bg-gradient-to-r ${activeColor.primary}`} 
                    style={{ width: `${Math.max(5, (newTax / maxTaxVal) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Dynamic Advice Callout */}
            <div className="mt-8 p-5 bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-2xl flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-wider block mb-0.5">
                  Recommendation
                </span>
                <span className="text-sm font-bold text-[var(--text-primary)] block">
                  {recommendation}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                <Check className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
              <p className="text-[11px] text-[var(--text-secondary)] mb-4">
                Regime choices impact eligible investment declarations. Our consultants will design a personalized filing layout for your maximum legal savings.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold text-xs ${activeColor.btnBg} transition-all duration-300 shadow-md`}
              >
                File taxes under optimal regime
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
