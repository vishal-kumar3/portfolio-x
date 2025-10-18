"use client"
import { ChatInterface } from "@/components/Chat/chat-interface"
import { ChatToggleButton } from "@/components/Chat/chat-toggle"
import { useState } from "react"

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div>
      {/* Chat Toggle Button */}
      <ChatToggleButton isOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)} />

      {/* Chat Modal */}
      {isChatOpen && <ChatInterface onClose={() => setIsChatOpen(false)} />}
    </div>
  )
}
