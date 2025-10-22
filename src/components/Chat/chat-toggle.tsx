"use client"

import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatToggleButtonProps {
  isOpen: boolean
  onClick: () => void
}

export function ChatToggleButton({ isOpen, onClick }: ChatToggleButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="fixed h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:bg-card-hover text-foreground border border-elavation-one z-40 flex items-center justify-center group bottom-[90%]  md:bottom-6 right-6"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        )}
      </div>
    </Button>
  )
}
