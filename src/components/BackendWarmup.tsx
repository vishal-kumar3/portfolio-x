"use client"

import { useEffect } from "react"

export function BackendWarmup() {
  useEffect(() => {
    // Fire and forget request to warm up the backend
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL || '')
      .then(() => console.log('Backend warmed up'))
      .catch(() => console.log('Backend warmup attempted'))
  }, []) // Run once on component mount

  return null // This component doesn't render anything
}