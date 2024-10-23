'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ButtonEventName } from '@/utils/posthog'

interface SpicyResumeLinkProps {
  buttonClickEvent: (eventName: ButtonEventName) => void
}

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute size-1.5 bg-white rounded-full"
    initial={{ scale: 0, opacity: 1 }}
    animate={{
      scale: [0, 2, 0],
      opacity: [1, 0.8, 0],
      x: [0, (Math.random() - 0.5) * 60],
      y: [0, (Math.random() - 0.5) * 60],
    }}
    transition={{
      duration: 1.2,
      delay,
      ease: [0.4, 0, 0.2, 1]
    }}
  />
)

export default function SpicyResumeLink({ buttonClickEvent }: SpicyResumeLinkProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const particleCount = 6

  const startAnimation = () => {
    setIsAnimating(true)
    controls.start("visible")
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      controls.start("hidden")
    }, 2500)
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      startAnimation() // Initial animation with delay
    }, 500)
    return () => {
      clearTimeout(delay)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (isHovered) {
      startAnimation()
    }
  }, [isHovered])

  return (
    <div className="relative">
      <motion.div
        className="hidden sm:fixed z-50 top-3 right-5 sm:flex"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href="/resume.pdf"
          target="_blank"
          onClick={() => buttonClickEvent(ButtonEventName.ResumeButton)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative size-14 flex justify-center items-center rounded-full border border-border overflow-hidden bg-background text-xl font-bold shadow-sm transition-shadow hover:shadow-md"
        >
          <span className="relative z-10">VK</span>

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 0.2 : 0,
              background: isHovered
                ? "linear-gradient(to bottom right, rgb(59, 130, 246), rgb(168, 85, 247), rgb(236, 72, 153))"
                : "linear-gradient(to bottom right, rgb(59, 130, 246), rgb(168, 85, 247))"
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          />

          <AnimatePresence>
            {isHovered && [...Array(particleCount)].map((_, i) => (
              <Particle key={i} delay={i * 0.1} />
            ))}
          </AnimatePresence>
        </Link>
      </motion.div>

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial="hidden"
            animate={controls}
            exit="hidden"
            variants={{
              hidden: { width: 0, opacity: 0, x: 56 },
              visible: { width: 'auto', opacity: 1, x: 0 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed top-3 right-[76px] z-40 h-14 flex items-center overflow-hidden"
          >
            <motion.div
              className="whitespace-nowrap px-4 py-2 rounded-l-full font-bold border border-border border-r-0 relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.15 }}
            >
              <span className="relative z-10 text-white">View Resume</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                  background: [
                    "linear-gradient(to right, rgb(59, 130, 246), rgb(168, 85, 247), rgb(236, 72, 153))",
                    "linear-gradient(to right, rgb(236, 72, 153), rgb(59, 130, 246), rgb(168, 85, 247))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
