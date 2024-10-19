'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className, size }: { className?: string, size?: number }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Ensure the component is mounted before rendering
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn("text-foreground transition-colors", className)}
    >
      {theme === 'dark' ? <Moon size={size || 16} /> : <Sun size={size || 16} />}
    </button>
  )
}
