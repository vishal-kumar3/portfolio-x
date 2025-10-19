"use client"
import { ChatInterface } from "@/components/Chat/chat-interface"
import { ChatToggleButton } from "@/components/Chat/chat-toggle"
import { useState } from "react"

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  if (isChatOpen && window.innerWidth < 768)
    document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'scroll'

  return (
    <div>
      <ChatToggleButton isOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)} />
      {isChatOpen && <ChatInterface onClose={() => setIsChatOpen(false)} />}
    </div>
  )
}
