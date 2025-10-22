"use client"

import { Button } from "@/components/ui/button"

const QUICK_QUESTIONS = [
  "What technologies do you work with?",
  "Tell me about your recent projects",
  "How can I contact you for work?",
]

export function QuickQuestions({ onSelect }: { onSelect: (question: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-2">
          {QUICK_QUESTIONS.map((question, index) => (
            <Button
              key={index}
              onClick={() => onSelect(question)}
              variant="outline"
              className="flex-shrink-0 whitespace-nowrap text-left h-auto py-2 px-3 border-elavation-one text-foreground hover:bg-card hover:border-elavation-two hover:text-foreground transition-all duration-200 rounded-lg text-sm group"
            >
              {question}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
