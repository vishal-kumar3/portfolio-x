"use client"

import { useState, useEffect } from "react"
import { ChatInterface } from "@/components/Chat/chat-interface"
import { ChatToggleButton } from "@/components/Chat/chat-toggle"
import type { Message } from "./chat-interface"
import { getUserIdStorage } from "@/utils/localstorage"
import { fetchChatHistory } from "@/action/chat.action"

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatHistory, setChatHistory] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isChatOpen) {
      const storedUserId = getUserIdStorage()
      if (storedUserId) {
        setIsLoading(true)
        const loadHistory = async () => {
          try {
            const history = await fetchChatHistory(storedUserId)
            if (history.chat_history?.length > 0) {
              const messages: Message[] = history.chat_history.map((msg: { role: "user" | "assistant", content: string, timestamp?: string }) => ({
                id: Math.random().toString(36).substr(2, 9),
                sender: msg.role === "user" ? "user" : "vishi",
                timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date(),
                content: msg.content,
              }))
              setChatHistory(messages)
            }
          } catch (error) {
            console.error("Error loading chat history:", error)
          } finally {
            setIsLoading(false)
          }
        }
        loadHistory()
      }
    }
  }, [isChatOpen])

  useEffect(() => {
    if (isChatOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isChatOpen])

  const handleClose = () => {
    setIsChatOpen(false)
    setChatHistory([])
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isChatOpen ? (
        <ChatInterface
          onClose={handleClose}
          initialMessages={chatHistory}
          isLoading={isLoading}
        />
      ) : (
        <ChatToggleButton onClick={() => setIsChatOpen(true)} isOpen={false} />
      )}
    </div>
  )
}