"use client";

import { useState, useEffect } from "react";
import { ChatInterface } from "@/components/Chat/chat-interface";
import { ChatToggleButton } from "@/components/Chat/chat-toggle";
import type { Message } from "./chat-interface";
import { getUserIdStorage } from "@/utils/localstorage";
import { fetchChatHistory } from "@/action/chat.action";

const splitMessageAndTime = (
	message: string | null | undefined
): { content: string | null; timestamp: Date | null } => {
	if (message) {
		const match = message.match(/\[(.*?)\]:\s*([\s\S]*)/);
		if (match) {
			const [, timestamp, content] = match;
			return { content: content.trim(), timestamp: new Date(timestamp) };
		}
	}
	return { content: null, timestamp: null };
};

export default function Chat() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [chatHistory, setChatHistory] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isChatOpen) {
			const storedUserId = getUserIdStorage();
			if (storedUserId) {
				setIsLoading(true);
				fetchChatHistory(storedUserId)
					.then((history) => {
            const chat_history = history.chat_history;
            console.log(chat_history)
						if (chat_history && chat_history.length > 0) {
              const messages: Message[] = chat_history.map((msg: any, index: number) => {
                return {
                  id: index.toString(),
                  sender: msg.user ? "user" : "vishi",
                  timestamp: splitMessageAndTime(msg.user).timestamp || splitMessageAndTime(msg.Vishi).timestamp,
                  content: splitMessageAndTime(msg.user).content || splitMessageAndTime(msg.Vishi).content
                }
              });
							setChatHistory(messages);
						} else {
							setChatHistory([
								{
									id: "1",
									content:
										"Hello! I'm Vishal's Portfolio Assistant. How can I help you?",
									sender: "vishi",
									timestamp: new Date(),
								},
							]);
						}
					})
					.finally(() => setIsLoading(false));
			}
		}
	}, [isChatOpen]);

	useEffect(() => {
		if (isChatOpen && window.innerWidth < 768) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isChatOpen]);

	const handleClose = () => {
		setIsChatOpen(false);
		setChatHistory([]);
	};

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
	);
}
