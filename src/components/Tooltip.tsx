'use client'

import React, { useState } from 'react'
import { cn } from "@/lib/utils"

type Direction = 'top' | 'right' | 'bottom' | 'left'

interface TooltipProps {
  tip: string
  direction?: Direction
  children: React.ReactNode
}

export default function Tooltip({ tip, direction = 'top', children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const getTooltipClasses = (dir: Direction) => {
    const baseClasses = "pointer-events-none absolute z-[99999] whitespace-nowrap py-1 px-2 rounded bg-popover text-popover-foreground text-sm transition-opacity duration-200 ease-in-out"

    const directionClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2"
    }

    const arrowClasses = {
      top: "after:top-full after:left-1/2 after:-ml-1 after:border-t-4 after:border-x-transparent after:border-x-4",
      right: "after:right-full after:top-1/2 after:-mt-1 after:border-r-4 after:border-y-transparent after:border-y-4",
      bottom: "after:bottom-full after:left-1/2 after:-ml-1 after:border-b-4 after:border-x-transparent after:border-x-4",
      left: "after:left-full after:top-1/2 after:-mt-1 after:border-l-4 after:border-y-transparent after:border-y-4"
    }

    return cn(
      baseClasses,
      directionClasses[dir],
      "after:absolute after:border-popover",
      arrowClasses[dir],
      isVisible ? "opacity-100 visible" : "opacity-0 invisible"
    )
  }

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <div className={getTooltipClasses(direction)}>
        {tip}
      </div>
    </div>
  )
}
