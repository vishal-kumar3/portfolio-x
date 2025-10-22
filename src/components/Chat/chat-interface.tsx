"use client"

import { useState, useRef, useEffect } from "react"
import { Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "./chat-message"
import { QuickQuestions } from "./chat-quick-question"
import { streamChat } from "@/utils/streamChat"
import { getUserIdStorage, setUserIdStorage } from "@/utils/localstorage"

export interface Message {
  id: string
  content: string
  sender: "user" | "vishi"
  timestamp: Date
}

interface ChatInterfaceProps {
  onClose: () => void
  initialMessages?: Message[]
  isLoading?: boolean
  onUserIdReceived?: (userId: string) => void
}

export function ChatInterface({
  onClose,
  initialMessages,
  isLoading = false,
  onUserIdReceived
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isThinking, setIsThinking] = useState(false)

  useEffect(() => {
    if (initialMessages && initialMessages.length > 0) {
      setMessages(initialMessages);
    } else {
      setMessages([{
        id: "1",
        content: "Hello! I'm Vishal's Portfolio Assistant. How can I help you?",
        sender: "vishi",
        timestamp: new Date(),
      }]);
    }
    // Focus input after initial messages are set
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [initialMessages])

  const cleanupRef = useRef<(() => void) | undefined>(undefined);
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return
    cleanupRef.current?.()
    setIsThinking(true)

    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    const userId = getUserIdStorage()
    cleanupRef.current = streamChat({
      query: userMessage.content,
      userId,
      onConnection: () => {
        const vishiMessage: Message = {
          id: Date.now().toString(),
          content: "",
          sender: "vishi",
          timestamp: new Date()
        }
        setMessages(prev => [...prev, vishiMessage])
      },
      onMessage: (msg: { type: string, content: string, userId: string }) => {
        if (msg.userId) {
          setUserIdStorage(msg.userId);
          onUserIdReceived?.(msg.userId);
        }

        if (msg.type === "chunk") {
          setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage.sender === "vishi") {
              const updatedMessages = [...prev];
              updatedMessages[prev.length - 1] = {
                ...lastMessage,
                content: lastMessage.content + msg.content
              };
              return updatedMessages;
            }
            return prev;
          });
        }
      },
      onDone: () => {
        setIsThinking(false);
        scrollToBottom();
        // Focus input after response with a small delay to ensure UI updates are complete
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      },
      onError: (err: unknown) => {
        // Only handle actual errors, not connection close events
        if (err && typeof err === 'object' && 'target' in err && 
            err.target && typeof err.target === 'object' && 'readyState' in err.target && 
            typeof err.target.readyState === 'number' && err.target.readyState !== 2) {
          setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage.sender === "vishi") {
              const updatedMessages = [...prev];
              updatedMessages[prev.length - 1] = {
                ...lastMessage,
                content: lastMessage.content || "Sorry, there was an error connecting to the server. Please try again."
              };
              return updatedMessages;
            }
            return prev;
          });
        }
        setIsThinking(false);
        inputRef.current?.focus();
      }
    })
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
          <div className="flex items-center justify-between p-4 md:p-2 border-b border-elavation-one bg-card">
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
          <div className="flex-1 overflow-y-auto p-4 md:p-3 space-y-4 md:space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent text-card-foreground">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="flex gap-2 items-center text-card-foreground/70">
                  <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="bg-card border-t border-elavation-one p-2">
            {messages.length === 1 && <QuickQuestions onSelect={handleQuickQuestion} />}

            <div className="relative flex gap-3">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage(input)
                  }
                }}
                onFocus={() => {
                  // Ensure cursor goes to the end of input when focused
                  const input = inputRef.current;
                  if (input) {
                    const length = input.value.length;
                    input.setSelectionRange(length, length);
                  }
                }}
                autoFocus
                disabled={isThinking}
                placeholder={isThinking ? "Vishi is thinking..." : "Ask me about my work and experience..."}
                className="flex-1 border border-elavation-two text-card-foreground placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl pr-24 transition-all duration-200"
              />
              <div className="absolute right-0 top-0 h-full flex items-center pr-1.5">
                <Button
                  onClick={() => handleSendMessage(input)}
                  disabled={isThinking || !input.trim()}
                  className={`bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-card-foreground rounded-lg px-4 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20
                    ${isThinking ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isThinking ? (
                    <div className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
