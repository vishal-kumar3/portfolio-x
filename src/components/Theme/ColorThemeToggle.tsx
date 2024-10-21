'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { themeClickEvent, ThemeEventName } from '@/utils/posthog'
import { useTheme } from 'next-themes'

interface ColorThemeToggleProps {
  className?: string
  children: React.ReactNode
}

export default function ColorThemeToggle({ className, children }: ColorThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [colorTheme, setColorTheme] = useState<'default' | 'blue'>('default')

  useEffect(() => {
    const root = document.documentElement
    const randomTheme = Math.random() < 0.5 ? 'default' : 'blue'
    if (randomTheme === 'blue') {
      root.classList.add('blue-theme')
    } else {
      root.classList.remove('blue-theme')
    }
    setColorTheme(randomTheme as 'default' | 'blue')
  }, [theme])

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
        className
      )}
      aria-label="Toggle color theme"
    >
      {typeof children === 'string' ? (
        <span className={colorTheme === 'default' ? 'text-[#0066CC]' : 'text-primary'}>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
