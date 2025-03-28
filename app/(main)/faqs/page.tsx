"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTheme } from "next-themes"

interface FAQ {
  question: string
  answer: string
  isOpen: boolean
}

export default function FAQsPage() {
  const { theme } = useTheme()
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "What data does Statify visualize?",
      answer:
        "Statify visualizes your Spotify listening data, including your top tracks, artists, genres, and listening patterns. We analyze your streaming history to provide insights about your music preferences and habits over time.",
      isOpen: true,
    },
    {
      question: "How often is the data updated?",
      answer:
        "Your Statify data is updated daily. When you listen to music on Spotify, it may take up to 24 hours for that activity to be reflected in your Statify dashboard.",
      isOpen: false,
    },
    {
      question: "Is my Spotify data secure?",
      answer:
        "Yes, your data is secure. Statify uses OAuth to connect to your Spotify account, which means we never see or store your Spotify password. We only access the data you've authorized us to use, and we follow strict privacy practices to keep your information safe.",
      isOpen: false,
    },
    {
      question: "Can I share my insights with others?",
      answer:
        "Statify makes it easy to share your music insights with friends. You can generate shareable links to your stats, download images of your top artists and tracks, or share directly to social media platforms.",
      isOpen: false,
    },
    {
      question: "How do I connect my Spotify account to Statify?",
      answer:
        "To connect your Spotify account, click the 'Connect with Spotify' button on the login page. You'll be redirected to Spotify to authorize the connection. Once you approve, you'll be brought back to Statify with full access to your personalized music insights.",
      isOpen: false,
    },
    {
      question: "What should I do if my data isn't displaying correctly?",
      answer:
        "If your data isn't displaying correctly, try these steps: 1) Make sure your Spotify account is connected properly, 2) Check if you have sufficient listening history (new Spotify users may not have enough data yet), 3) Try disconnecting and reconnecting your account, 4) Clear your browser cache, or 5) Contact our support team for assistance.",
      isOpen: false,
    },
  ])

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen }
        }
        return faq
      }),
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg border overflow-hidden faq-item ${
              theme === "light" ? "border-zinc-200 bg-white shadow-sm" : "border-zinc-800 bg-zinc-900"
            }`}
          >
            <button className="flex w-full items-center justify-between p-4 text-left" onClick={() => toggleFAQ(index)}>
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {faq.isOpen ? (
                <ChevronUp className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
              ) : (
                <ChevronDown className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
              )}
            </button>

            {faq.isOpen && (
              <div
                className={`border-t p-4 faq-content ${
                  theme === "light" ? "border-zinc-200 text-zinc-600" : "border-zinc-800 text-zinc-400"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

