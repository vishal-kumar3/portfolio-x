'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { themeClickEvent, ThemeEventName } from '@/utils/posthog'
import { useTheme } from 'next-themes'

interface ColorThemeToggleProps {
  className?: string
  children: React.ReactNode
}

export default function ColorThemeToggle({ className, children }: ColorThemeToggleProps) {
  const { theme } = useTheme()
  const [colorTheme, setColorTheme] = useState<'default' | 'blue'>('default')

  const toggleColorTheme = () => {
    const root = document.documentElement
    if (colorTheme === 'default') {
      themeClickEvent(theme === 'dark' ? ThemeEventName.LightBlue : ThemeEventName.DarkBlue)
      root.classList.add('blue-theme')
      setColorTheme('blue')
    } else {
      root.classList.remove('blue-theme')
      setColorTheme('default')
    }
  }

  return (
    <button
      onClick={toggleColorTheme}
      className={cn(
        "relative inline-flex items-center justify-center",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
        "transition-all duration-300 ease-in-out",
        className
      )}
      aria-label="Toggle color theme"
    >
      {typeof children === 'string' ? (
        <span
          className={cn(
            "transition-all duration-300 ease-in-out",
            colorTheme === 'default' ? 'text-[#0066CC]' : 'text-primary',
            "hover:text-[#0080FF] hover:drop-shadow-[0_0_8px_rgba(0,102,204,0.8)]",
            "dark:hover:text-[#60A5FA] dark:hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          )}
        >
          {children}
        </span>
      ) : (
        <div className="transition-all duration-300 ease-in-out group">
          {children}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 ease-in-out">
            <div className="w-full h-full bg-[#0080FF] dark:bg-[#60A5FA] blur-[8px] opacity-50"></div>
          </div>
        </div>
      )}
    </button>
  )
}
