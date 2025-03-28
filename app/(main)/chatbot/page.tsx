"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mic, MicOff, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const { theme } = useTheme()

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Speech recognition setup
  useEffect(() => {
    if ((typeof window !== "undefined" && "SpeechRecognition" in window) || "webkitSpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = true

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("")

        setInput(transcript)
      }

      recognition.onend = () => {
        if (isListening) {
          recognition.start()
        }
      }

      if (isListening) {
        recognition.start()
      }

      return () => {
        recognition.stop()
      }
    }
  }, [isListening])

  const toggleListening = () => {
    setIsListening(!isListening)
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I've analyzed your listening patterns and noticed you've been enjoying a lot of indie rock lately. Would you like some similar recommendations?",
        "Based on your history, I think you might enjoy the new album by Arctic Monkeys. Would you like me to play it?",
        "Your most played song this week is 'Blinding Lights' by The Weeknd. You've listened to it 23 times!",
        "I notice you listen to music most frequently on Thursdays around 7pm. Would you like me to create a special evening playlist for you?",
        "Your music taste is quite diverse! You've explored 15 different genres this month, with indie rock and alternative being your favorites.",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto p-6">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center">
            <div
              className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                theme === "light" ? "bg-green-500/10" : "bg-green-500/10"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Ask our AI anything</h2>
            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <button
                  className={`rounded-lg border p-4 text-left ${
                    theme === "light"
                      ? "border-zinc-300 bg-white hover:bg-zinc-50"
                      : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
                  }`}
                  onClick={() => setInput("What's my most played song this week?")}
                >
                  <p>What&apos;s my most played song this week?</p>
                </button>
                <button
                  className={`rounded-lg border p-4 text-left ${
                    theme === "light"
                      ? "border-zinc-300 bg-white hover:bg-zinc-50"
                      : "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
                  }`}
                  onClick={() => setInput("Which artist have I listened to the most this month?")}
                >
                  <p>Which artist have I listened to the most this month?</p>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "chatbot-message-user bg-green-500 text-black"
                      : `chatbot-message-ai ${theme === "light" ? "bg-zinc-100 text-zinc-800" : "bg-zinc-800 text-white"}`
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="mt-1 text-right text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className={`border-t p-4 ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className={`border-zinc-700 ${
              isListening
                ? "bg-green-500 text-black"
                : theme === "light"
                  ? "bg-white border-zinc-300 text-zinc-700"
                  : "bg-zinc-800 text-white"
            }`}
            onClick={toggleListening}
          >
            {isListening ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </Button>
          <div className="relative flex-1">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about your music taste"
              className={`h-10 w-full resize-none rounded-md border px-4 py-2 ${
                theme === "light"
                  ? "border-zinc-300 bg-white text-zinc-800 placeholder-zinc-500"
                  : "border-zinc-700 bg-zinc-800 text-white placeholder-zinc-400"
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
              style={{ minHeight: "40px", maxHeight: "120px" }}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className={
              theme === "light" ? "border-zinc-300 bg-white text-zinc-700" : "border-zinc-700 bg-zinc-800 text-white"
            }
            onClick={handleSendMessage}
            disabled={!input.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

