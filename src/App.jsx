import React, { useState, useEffect } from 'react'
import { 
  FileText, 
  Building2, 
  ClipboardCheck, 
  TrendingUp
} from 'lucide-react'

// Import modular components
import Navbar from './components/Navbar'
import AppearanceSettings from './components/AppearanceSettings'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Services from './components/Services'
import TaxCalculator from './components/TaxCalculator'
import WhyChooseUs from './components/WhyChooseUs'
import DocumentChecklist from './components/DocumentChecklist'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import logoImg from './assets/logo.png'

// Dynamic Color Preset Configurations
const colorThemes = {
  blue: {
    name: 'Classic Blue',
    primary: 'from-blue-600 to-emerald-500',
    primaryHover: 'from-blue-500 to-emerald-400',
    textAccent: 'text-blue-600 dark:text-blue-400',
    textAccentHover: 'hover:text-blue-500 dark:hover:text-blue-300',
    bgGlow1: 'bg-blue-600/10 dark:bg-blue-900/30',
    bgGlow2: 'bg-indigo-600/10 dark:bg-purple-950/20',
    bgGlow3: 'bg-emerald-600/10 dark:bg-emerald-950/25',
    borderGlow: 'group-hover:border-blue-500/40 dark:group-hover:border-blue-400/30',
    btnBg: 'bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white shadow-blue-500/20',
    badgeBg: 'text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/30',
    cardShadow: 'shadow-blue-500/5',
    accentLine: 'bg-blue-500',
    textGlow: 'shadow-blue-500/20'
  },
  emerald: {
    name: 'Forest Emerald',
    primary: 'from-emerald-600 to-teal-500',
    primaryHover: 'from-emerald-500 to-teal-400',
    textAccent: 'text-emerald-600 dark:text-emerald-400',
    textAccentHover: 'hover:text-emerald-500 dark:hover:text-emerald-300',
    bgGlow1: 'bg-emerald-600/10 dark:bg-emerald-950/30',
    bgGlow2: 'bg-teal-600/10 dark:bg-teal-950/20',
    bgGlow3: 'bg-cyan-600/10 dark:bg-cyan-950/25',
    borderGlow: 'group-hover:border-emerald-500/40 dark:group-hover:border-emerald-400/30',
    btnBg: 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-emerald-500/20',
    badgeBg: 'text-emerald-600 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/30',
    cardShadow: 'shadow-emerald-500/5',
    accentLine: 'bg-emerald-500',
    textGlow: 'shadow-emerald-500/20'
  },
  purple: {
    name: 'Royal Purple',
    primary: 'from-purple-600 to-pink-500',
    primaryHover: 'from-purple-500 to-pink-400',
    textAccent: 'text-purple-600 dark:text-purple-400',
    textAccentHover: 'hover:text-purple-500 dark:hover:text-purple-300',
    bgGlow1: 'bg-purple-600/10 dark:bg-purple-950/30',
    bgGlow2: 'bg-pink-600/10 dark:bg-pink-950/20',
    bgGlow3: 'bg-indigo-600/10 dark:bg-indigo-950/25',
    borderGlow: 'group-hover:border-purple-500/40 dark:group-hover:border-purple-400/30',
    btnBg: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-purple-500/20',
    badgeBg: 'text-purple-600 bg-purple-50 dark:text-purple-300 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900/30',
    cardShadow: 'shadow-purple-500/5',
    accentLine: 'bg-purple-500',
    textGlow: 'shadow-purple-500/20'
  },
  amber: {
    name: 'Sunset Amber',
    primary: 'from-amber-600 to-orange-500',
    primaryHover: 'from-amber-500 to-orange-400',
    textAccent: 'text-amber-600 dark:text-amber-400',
    textAccentHover: 'hover:text-amber-500 dark:hover:text-amber-300',
    bgGlow1: 'bg-amber-600/10 dark:bg-amber-950/30',
    bgGlow2: 'bg-orange-600/10 dark:bg-orange-950/20',
    bgGlow3: 'bg-red-600/10 dark:bg-red-950/25',
    borderGlow: 'group-hover:border-amber-500/40 dark:group-hover:border-amber-400/30',
    btnBg: 'bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-slate-950 font-bold shadow-amber-500/20',
    badgeBg: 'text-amber-600 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/30',
    cardShadow: 'shadow-amber-500/5',
    accentLine: 'bg-amber-500',
    textGlow: 'shadow-amber-500/20'
  }
}

export default function App() {
  // Theme & Accent Preset States
  const [theme, setTheme] = useState(() => localStorage.getItem('ha-theme') || 'light')
  const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('ha-color-theme') || 'blue')
  
  // UI Panel Panels
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [showSettings, setShowSettings] = useState(false)
  
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  
  // PWA triggers
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isAppInstalled, setIsAppInstalled] = useState(false)

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  // Apply root theme selectors
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('ha-theme', theme)
  }, [theme])

  // Save color theme configurations
  useEffect(() => {
    localStorage.setItem('ha-color-theme', colorTheme)
  }, [colorTheme])

  // Countdown timer ticking trigger
  useEffect(() => {
    const targetDate = new Date("2026-07-31T23:59:59")
    
    const updateCountdown = () => {
      const difference = +targetDate - +new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    
    updateCountdown()
    const timerId = setInterval(updateCountdown, 1000)
    return () => clearInterval(timerId)
  }, [])

  // Listen for PWA events
  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    const handleAppInstalled = () => {
      setIsAppInstalled(true)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)
    window.addEventListener('appinstalled', handleAppInstalled)

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsAppInstalled(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  // PWA Canvas PNG Icon Exporter (runs only in development on localhost)
  useEffect(() => {
    const generatePwaIcons = async () => {
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return
      }

      // Preload logo image
      const img = new Image()
      img.src = logoImg
      await new Promise((resolve) => {
        img.onload = resolve
        img.onerror = resolve
      })

      const exportPng = async (size, filename) => {
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')

        // Background
        const gradBg = ctx.createLinearGradient(0, 0, size, size)
        gradBg.addColorStop(0, '#080c1e')
        gradBg.addColorStop(1, '#02040a')
        ctx.fillStyle = gradBg
        ctx.fillRect(0, 0, size, size)

        // Outer circular stroke
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.lineWidth = size * 0.015
        ctx.beginPath()
        ctx.arc(size / 2, size / 2, size * 0.41, 0, Math.PI * 2)
        ctx.stroke()

        // Draw custom logo image in the center
        // Render a clean white rounded rect behind the logo to match the container look
        const boxSize = size * 0.55
        const boxX = (size - boxSize) / 2
        const boxY = (size - boxSize) / 2
        
        ctx.fillStyle = '#ffffff'
        const radius = size * 0.08
        ctx.beginPath()
        ctx.moveTo(boxX + radius, boxY)
        ctx.lineTo(boxX + boxSize - radius, boxY)
        ctx.quadraticCurveTo(boxX + boxSize, boxY, boxX + boxSize, boxY + radius)
        ctx.lineTo(boxX + boxSize, boxY + boxSize - radius)
        ctx.quadraticCurveTo(boxX + boxSize, boxY + boxSize, boxX + boxSize - radius, boxY + boxSize)
        ctx.lineTo(boxX + radius, boxY + boxSize)
        ctx.quadraticCurveTo(boxX, boxY + boxSize, boxX, boxY + boxSize - radius)
        ctx.lineTo(boxX, boxY + radius)
        ctx.quadraticCurveTo(boxX, boxY, boxX + radius, boxY)
        ctx.closePath()
        ctx.fill()

        // Draw image inside the white box
        const pad = size * 0.06
        ctx.drawImage(img, boxX + pad, boxY + pad, boxSize - pad * 2, boxSize - pad * 2)

        const dataUrl = canvas.toDataURL('image/png')
        try {
          const res = await fetch('/api/save-icon', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: filename, dataUrl })
          })
          const result = await res.json()
          if (result.success) {
            console.log(`[PWA Generator] Generated ${filename} successfully`)
          }
        } catch (e) {
          console.warn('[PWA Generator] Saving icons failed (API only active in dev mode):', e)
        }
      }

      await exportPng(192, 'icon-192.png')
      await exportPng(512, 'icon-512.png')
    }

    generatePwaIcons()
  }, [])

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  // Handle PWA Manual Install Button Click
  const handlePwaInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      console.log('User installed the HA Tax PWA app')
    }
    setDeferredPrompt(null)
  }

  // Form Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Lead Form WhatsApp submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Client-side validation
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full Name is required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.trim().replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (10-12 digits)'
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const whatsappBase = 'https://wa.me/919177927084'
    const messageTemplate = `Hello HARSHINI Associates,

I would like to request a free consultation. Here are my details:

👤 *Name:* ${formData.name.trim()}
📞 *Phone:* ${formData.phone.trim()}
✉️ *Message:* ${formData.message.trim()}

Thank you!`

    const encodedMessage = encodeURIComponent(messageTemplate)
    window.open(`${whatsappBase}?text=${encodedMessage}`, '_blank')
  }

  // Get active preset colors
  const activeColor = colorThemes[colorTheme] || colorThemes.blue

  // FAQ data map
  const faqs = [
    {
      question: "What documents are required for filing an individual ITR?",
      answer: "Typically, you need your PAN card, Aadhaar card, Form 16 (from your employer), bank statements for the financial year, interest certificates, and proof of tax-saving investments (under Sec 80C, 80D, etc.)."
    },
    {
      question: "How long does it take to register a new GSTIN?",
      answer: "GST registration typically takes between 3 to 7 working days, subject to government processing times and document verification by the authorities."
    },
    {
      question: "Can HARSHINI Associates assist with corporate tax filing and audits?",
      answer: "Yes, we provide end-to-end corporate services including balance sheet preparation, tax audit under Sec 44AB, wealth planning, and filing Form ITR-6 for corporate entities."
    },
    {
      question: "What is the penalty for filing ITR after the deadline?",
      answer: "Filing after the deadline (July 31st for individuals) attracts a late fee up to ₹5,000 under Section 234F, along with interest on any tax outstanding."
    }
  ]

  // Services data map
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500 dark:text-blue-400 group-hover:scale-105 transition-transform" />,
      title: "Income Tax Return (ITR) Filing",
      description: "Hassle-free, accurate filing for Salaried Individuals, HUFs, Professionals, and Business Owners. We maximize your refunds while ensuring complete compliance.",
      details: ["Salaried & Pension Income", "Capital Gains & Property Sales", "Foreign Assets & Double Taxation", "Form 16 & Form 26AS Reconciliation"]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-emerald-500 dark:text-emerald-400 group-hover:scale-105 transition-transform" />,
      title: "GST Registration & Returns",
      description: "End-to-end Goods and Services Tax compliance. From obtaining a new GSTIN to filing monthly/quarterly returns and handling audits.",
      details: ["New GST Registration", "GSTR-1, GSTR-3B & GSTR-9 Filings", "Input Tax Credit (ITC) Optimization", "E-way Bill & E-invoicing Setup"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-500 dark:text-indigo-400 group-hover:scale-105 transition-transform" />,
      title: "Corporate Tax Planning",
      description: "Strategic corporate tax structure design for startups and established enterprises. Legally minimize liabilities and optimize operational profits.",
      details: ["MAT & AMT Computations", "Transfer Pricing Advisory", "M&A Tax Structuring", "Advance Tax Management"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-500 dark:text-cyan-400 group-hover:scale-105 transition-transform" />,
      title: "Tax Audit & Advisory",
      description: "Professional reviews under Section 44AB of the Income Tax Act. We assist in maintaining robust audit trails and representing you before tax authorities.",
      details: ["Bookkeeping & Ledger Reviews", "Audit Report Form 3CA/3CB/3CD", "Scrutiny Assessment Support", "Response to Income Tax Notices"]
    }
  ]

  return (
    <div className="relative min-h-screen overflow-x-clip font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* SHIFTING MESH GRADIENT BLOB BACKGROUNDS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className={`absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[130px] animate-float-1 transition-colors duration-500 ${activeColor.bgGlow1}`}></div>
        <div className={`absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] animate-float-2 transition-colors duration-500 ${activeColor.bgGlow2}`}></div>
        <div className={`absolute top-[40%] left-[35%] w-[450px] h-[450px] rounded-full blur-[120px] animate-float-3 transition-colors duration-500 ${activeColor.bgGlow3}`}></div>
      </div>

      {/* NAVBAR */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        colorTheme={colorTheme}
        activeColor={activeColor}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* APPEARANCE PRESSETS SIDEPANE */}
      <AppearanceSettings
        theme={theme}
        setTheme={setTheme}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
        colorThemes={colorThemes}
        activeColor={activeColor}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <Hero
          activeColor={activeColor}
          scrollToSection={scrollToSection}
        />

        {/* DEADLINE COUNTDOWN NOTICE */}
        <Countdown
          timeLeft={timeLeft}
          activeColor={activeColor}
          scrollToSection={scrollToSection}
        />

        {/* SERVICES OFFERED */}
        <Services
          services={services}
          activeColor={activeColor}
        />

        {/* TAX REGIME CALCULATOR */}
        <TaxCalculator
          activeColor={activeColor}
        />

        {/* WHY CHOOSE US INFORMATION */}
        <WhyChooseUs
          activeColor={activeColor}
          scrollToSection={scrollToSection}
        />

        {/* DOCUMENT CHECKLIST */}
        <DocumentChecklist
          activeColor={activeColor}
        />

        {/* FAQ ACCORDIONS */}
        <Faq
          faqs={faqs}
          activeFaq={activeFaq}
          setActiveFaq={setActiveFaq}
          activeColor={activeColor}
        />

        {/* SECURE LEAD FORM */}
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          activeColor={activeColor}
        />

      </main>

      {/* FOOTER */}
      <Footer
        activeColor={activeColor}
        scrollToSection={scrollToSection}
        isAppInstalled={isAppInstalled}
        deferredPrompt={deferredPrompt}
        handlePwaInstall={handlePwaInstall}
      />

    </div>
  )
}
