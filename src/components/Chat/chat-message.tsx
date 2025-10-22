"use client"

import { Message } from "./chat-interface"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

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

        <div className="text-sm md:text-base leading-relaxed prose dark:prose-invert max-w-none prose-pre:bg-card-hover prose-pre:text-card-foreground prose-p:my-1 prose-headings:mb-2 prose-headings:mt-4 first:prose-headings:mt-1">
          {message.content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ children, ...props }) => (
                  <a {...props} className="text-blue-500 hover:text-blue-600 no-underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                code: ({ className, children, ...props }) => (
                  <code
                    className={`${className || ''} bg-card-hover px-1 py-0.5 rounded text-sm`}
                    {...props}
                  >
                    {children}
                  </code>
                ),
                pre: ({ children, ...props }) => (
                  <pre className="rounded-lg p-4 overflow-x-auto text-sm my-2" {...props}>
                    {children}
                  </pre>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          ) : (
            !isUser && (
              <span className="flex gap-2 items-center text-card-foreground/70">
                <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="inline-block w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </span>
            )
          )}
        </div>
        <p className={"text-xs mt-2 text-card-foreground/70"}>
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  )
}
