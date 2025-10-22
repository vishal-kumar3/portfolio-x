export interface ChatHistoryResponse {
  chat_history: Array<{
    role: 'user' | 'assistant'
    content: string
    timestamp?: string
  }>
}