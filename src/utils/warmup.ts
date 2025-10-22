"use client"

export const warmupBackend = () => {
  // Fire and forget request to warm up the backend
  fetch(process.env.NEXT_PUBLIC_BACKEND_URL || '')
    .then(() => console.log('Backend warmed up'))
    .catch(() => console.log('Backend warmup attempted'))
}
