"use client"

import { useEffect } from "react"

export const WarmupBackend = () => {

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL!)
      .then(() => console.log('Backend warmed up'))
      .catch(() => console.log('Backend warmup attempted'))
  }, [])

  return null
}
