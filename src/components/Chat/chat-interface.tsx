"use client"

import { useState, useRef, useEffect } from "react"
import { Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "./chat-message"
import { QuickQuestions } from "./chat-quick-question"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

interface ChatInterfaceProps {
  onClose: () => void
}

export function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Vishal's Portfolio Assistant. How can I help you?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thanks for asking about "${text}". I'm here to help you learn more about Vishal's work and experience!`,
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    }, 500)
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed z-50 flex items-center justify-center md:items-end md:justify-end p-0 md:p-4 pointer-events-none inset-0 md:inset-auto md:bottom-24 md:right-6">
        <div className="w-full md:max-w-lg h-[90%] md:h-[700px] mb-[80px] md:mb-0 flex flex-col bg-background rounded-none md:rounded-2xl border-0 md:border border-elavation-one shadow-2xl overflow-hidden pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300 md:slide-in-from-bottom-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-elavation-one bg-card">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-card-foreground font-bold text-lg">
                  V
                </div>
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-card-foreground">Vishi</h2>
                <p className="text-xs md:text-sm text-green-700 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Online
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-slate-400 hover:text-white hover:bg-slate-800/50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent text-card-foreground">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area with Quick Questions */}
          <div className="bg-card border-t border-elavation-one p-2">
            {/* Show quick questions only when there's just the initial message */}
            {messages.length === 1 && <QuickQuestions onSelect={handleQuickQuestion} />}

            {/* Input Field */}
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage(input)
                  }
                }}
                placeholder="Ask me about my work and experience..."
                className="flex-1 border border-elavation-two text-card-foreground placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl"
              />
              <Button
                onClick={() => handleSendMessage(input)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-card-foreground rounded-xl px-4 md:px-6 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
