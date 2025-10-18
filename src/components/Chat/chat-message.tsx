"use client"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.sender === "user"

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300 text-card-foreground`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-2 py-3 md:px-4 md:py-1 rounded-2xl border border-elavation-opp_one bg-card ${isUser
          ? "rounded-br-none"
          : "rounded-bl-none "
          }`}
      >
        {!isUser &&
          <div className="flex gap-2 items-center mb-1">
            <div className="flex items-center justify-center size-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">V</div>
            Vishi
          </div>
        }

        <p className="text-sm md:text-base leading-relaxed">{message.content}</p>
        <p className={"text-xs mt-2"}>
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  )
}
