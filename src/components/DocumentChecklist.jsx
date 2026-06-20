import React, { useState } from 'react'
import { ClipboardCheck, FileText, CheckSquare, Square, Copy, MessageSquare, Check } from 'lucide-react'

export default function DocumentChecklist({ activeColor }) {
  const [activeCategory, setActiveCategory] = useState('salaried')
  const [copied, setCopied] = useState(false)
  
  // Document checklists grouped by profile
  const checklistData = {
    salaried: {
      name: 'Salaried Professional',
      desc: 'Mandatory documents for individuals drawing income from salaries/pensions.',
      docs: [
        'Form 16 (Part A & B from employer)',
        'Form 26AS & AIS/TIS summary matching',
        'Monthly salary slips (for verification of HRA/allowances)',
        'Bank statements for all active accounts (FY interest details)',
        'Investment proofs (Sec 80C, 80D, 80E receipts)',
        'Aadhaar Card and PAN card details'
      ]
    },
    freelancer: {
      name: 'Freelancer / Consultant',
      desc: 'Required inputs for independent contractors, consultants, and professionals.',
      docs: [
        'Detailed income ledger (receipts matching Form 26AS)',
        'Expense ledger (internet, travel, software tools, depreciation)',
        'Form 26AS detailing Tax Deducted at Source (TDS)',
        'GST invoices (if registered under GST)',
        'Bank statements (revealing active savings/current deposits)',
        'PAN card and Aadhaar details'
      ]
    },
    business: {
      name: 'Business Owner',
      desc: 'Mandatory documents for proprietorships, firms, and companies.',
      docs: [
        'Profit & Loss Statement and Balance Sheet drafts',
        'GST registration certificate & summary filings (GSTR-3B/1)',
        'Bank account statements (Current & Savings)',
        'TDS certificates and advance tax payment details',
        'Audit reports (if tax audit u/s 44AB is applicable)',
        'Asset purchase invoices for capital depreciation claims'
      ]
    },
    nri: {
      name: 'NRI / Foreign Income',
      desc: 'Filing checklists for NRIs, foreign asset holders, and double tax claims.',
      docs: [
        'NRO/NRE bank statements and interest certificates',
        'Foreign salary details (with tax credit proofs/tax returns filed)',
        'Double Taxation Avoidance Agreement (DTAA) details u/s 90/91',
        'Passport copies showing foreign residency tenure logs',
        'Indian property rental details (if applicable)',
        'PAN and Aadhaar details'
      ]
    }
  }

  const [selectedDocs, setSelectedDocs] = useState(() => {
    // Initialize checked states
    const initial = {}
    Object.keys(checklistData).forEach(cat => {
      initial[cat] = new Array(checklistData[cat].docs.length).fill(false)
    })
    return initial
  })

  const toggleDoc = (cat, idx) => {
    setSelectedDocs(prev => {
      const updated = { ...prev }
      updated[cat] = [...updated[cat]]
      updated[cat][idx] = !updated[cat][idx]
      return updated
    })
  }

  const copyToChecklist = () => {
    const category = checklistData[activeCategory]
    const listText = category.docs
      .map((doc, idx) => `${selectedDocs[activeCategory][idx] ? '[x]' : '[ ]'} ${doc}`)
      .join('\n')
    
    navigator.clipboard.writeText(`HARSHINI Associates Document Checklist - ${category.name}:\n\n${listText}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareToWhatsapp = () => {
    const category = checklistData[activeCategory]
    const items = category.docs.map((doc, idx) => {
      const checked = selectedDocs[activeCategory][idx] ? '✅' : '⬜'
      return `${checked} ${doc}`
    }).join('\n')

    const message = `Hello HARSHINI Associates,

I would like to file my ITR. Here is my document list under *${category.name}*:

${items}

Please help me start my filing.`
    
    window.open(`https://wa.me/919177927084?text=${encodeURIComponent(message)}`, '_blank')
  }

  const currentCategory = checklistData[activeCategory]

  return (
    <section id="document-checklist" className="py-24 border-t border-[var(--border-color)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Description and Categories list */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${activeColor.badgeBg} border`}>
              <ClipboardCheck className="w-3.5 h-3.5" />
              Interactive Checklist
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)]">
              Filing Documents checklist
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed">
              Verify your documents based on your professional profile. Select a category, check off what you have, and copy the checklist or send it directly to our consultants via WhatsApp.
            </p>
          </div>

          {/* Profile list */}
          <div className="flex flex-col gap-2">
            {Object.keys(checklistData).map((cat) => {
              const item = checklistData[cat]
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all hover:scale-[1.01] active:scale-99 cursor-pointer ${isActive ? 'border-[var(--text-primary)] bg-white/10 dark:bg-white/5 shadow-md' : 'border-[var(--border-color)] bg-transparent hover:bg-white/5'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${isActive ? activeColor.badgeBg : 'border-[var(--border-color)] bg-white/5'}`}>
                      <FileText className={`w-4.5 h-4.5 ${isActive ? activeColor.textAccent : 'text-[var(--text-secondary)]'}`} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[var(--text-primary)] block">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[var(--text-secondary)] truncate max-w-[200px] block">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Checkbox interactive card */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border-[var(--border-color)] shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-4 mb-6">
              <div>
                <h4 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  {currentCategory.name} List
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Mark items you have ready for submission.
                </p>
              </div>
              
              {/* Category-specific indicator */}
              <span className={`text-[10px] sm:text-xs font-semibold ${activeColor.badgeBg} px-3 py-1 rounded-full border shrink-0`}>
                AY 2026-27 filings
              </span>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {currentCategory.docs.map((doc, idx) => {
                const isChecked = selectedDocs[activeCategory][idx]
                return (
                  <button
                    key={idx}
                    onClick={() => toggleDoc(activeCategory, idx)}
                    className="w-full flex items-start text-left p-3.5 bg-white/5 dark:bg-white/5 rounded-2xl border border-[var(--border-color)] hover:border-[var(--text-primary)]/10 transition-colors select-none cursor-pointer"
                  >
                    <div className="mr-3.5 mt-0.5 shrink-0">
                      {isChecked ? (
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${activeColor.btnBg} text-white`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded border border-[var(--border-color)] bg-transparent hover:border-[var(--text-primary)]/35 transition-colors"></div>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[var(--text-primary)] leading-normal">
                      {doc}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Checklist Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyToChecklist}
                className="flex-1 py-3 px-5 rounded-xl border border-[var(--border-color)] hover:bg-white/5 text-xs font-bold text-[var(--text-primary)] flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500 animate-pulse" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied to clipboard' : 'Copy selected list'}
              </button>
              <button
                onClick={shareToWhatsapp}
                className={`flex-1 py-3 px-5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 bg-[#25D366] hover:bg-[#20ba59] shadow-md`}
              >
                <MessageSquare className="w-4 h-4" />
                Submit list via WhatsApp
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
