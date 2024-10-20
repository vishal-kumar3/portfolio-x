'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ColorThemeToggleProps {
  className?: string
  children: React.ReactNode
}

export default function ColorThemeToggle({ className, children }: ColorThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const [colorTheme, setColorTheme] = useState<'default' | 'blue'>('default')

  useEffect(() => setMounted(true), [])

  const toggleColorTheme = () => {
    const root = document.documentElement
    if (colorTheme === 'default') {
      root.classList.add('blue-theme')
      setColorTheme('blue')
    } else {
      root.classList.remove('blue-theme')
      setColorTheme('default')
    }
  }

  if (!mounted) return null

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
