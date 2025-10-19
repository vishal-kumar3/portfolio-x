"use client"


export const getUserIdStorage = () => {
  const userId = localStorage.getItem("chatId")
  return userId || ""
}

export const setUserIdStorage = (userId: string) => {
  localStorage.setItem("chatId", userId || "")
}
