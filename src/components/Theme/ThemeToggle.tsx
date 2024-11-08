'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { themeClickEvent, ThemeEventName } from '@/utils/posthog'


export default function EnhancedThemeToggle({ className, size = 24 }: { className?: string; size?: number }) {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => {
        themeClickEvent(theme === 'dark' ? ThemeEventName.LightDefault : ThemeEventName.DarkDefault)
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      className={cn(
        "relative p-2 rounded-full transition-colors duration-500",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative">
        {theme === 'dark' ? (
          <div className="relative">
            <Moon
              size={size}
              className="text-slate-200"
            />
            <div className="absolute inset-0 rounded-full animate-pulse bg-gray-700 opacity-20" />
            <div className="absolute -inset-1 bg-gray-400 rounded-full blur opacity-30 animate-pulse" />
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1500}ms`,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="relative">
            <Sun
              size={size}
            />
            <div className="absolute -inset-1 rounded-full blur opacity-30 animate-pulse" />
            <div className="absolute inset-0 rounded-full animate-pulse bg-yellow-100 opacity-20" />
          </div>
        )}
      </div>
    </button>
  )
}
