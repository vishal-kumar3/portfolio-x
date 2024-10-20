'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  if(!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    throw new Error('NEXT_PUBLIC_POSTHOG_KEY is not defined')
  }
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: true,
    autocapture: true,
  })
}

export function CSPostHogProvider({ children }: {children: React.ReactNode}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
