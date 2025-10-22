"use server"

export const fetchChatHistory = async (userId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat_history/${userId}`)
    if (!response.ok) throw new Error('Failed to fetch chat history')
    return await response.json()
  } catch (error) {
    console.error('Error fetching chat history:', error)
    return { chat_history: [] }
  }
}

export const isBackendUp = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
    if (!response.ok) return false
    return !!(await response.json())
  } catch (err) {
    return false
  }
}
