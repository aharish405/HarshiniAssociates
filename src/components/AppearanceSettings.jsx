import React from 'react'
import { X, Moon, Sun, Palette } from 'lucide-react'

export default function AppearanceSettings({
  theme,
  setTheme,
  colorTheme,
  setColorTheme,
  colorThemes,
  activeColor,
  showSettings,
  setShowSettings
}) {
  if (!showSettings) return null

  return (
    <div className="fixed top-24 right-4 z-50 w-72 glass-card p-6 rounded-2xl border-[var(--border-color)] animate-fade-in shadow-2xl">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border-color)] pb-3">
        <h4 className="font-display font-bold text-sm text-[var(--text-primary)] flex items-center gap-2">
          <Palette className={`w-4.5 h-4.5 ${activeColor.textAccent}`} />
          Appearance Presets
        </h4>
        <button 
          onClick={() => setShowSettings(false)}
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1 rounded hover:bg-white/5 transition-all text-xs"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Color Accent Themes */}
        <div>
          <span className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
            Color Accent Theme
          </span>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(colorThemes).map((key) => {
              const item = colorThemes[key]
              const isActive = colorTheme === key
              return (
                <button
                  key={key}
                  onClick={() => setColorTheme(key)}
                  className={`flex items-center gap-2 p-2 rounded-lg border text-left text-xs font-semibold cursor-pointer transition-all ${isActive ? 'border-[var(--text-primary)] bg-white/10 dark:bg-white/5 shadow-md' : 'border-[var(--border-color)] hover:bg-white/5'}`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${item.primary} border border-white/20 shrink-0`}></span>
                  <span className="truncate">{item.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dark / Light Toggle */}
        <div>
          <span className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
            Theme Scheme
          </span>
          <div className="flex bg-[var(--border-color)] p-1 rounded-lg">
            <button
              onClick={() => setTheme('dark')}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${theme === 'dark' ? 'bg-slate-900 text-white shadow-md' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              <Moon className="w-3.5 h-3.5" /> Dark Mode
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`flex-1 py-1.5 rounded-md text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${theme === 'light' ? 'bg-white text-slate-900 shadow-md' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              <Sun className="w-3.5 h-3.5" /> Light Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
