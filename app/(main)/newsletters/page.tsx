"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

export default function NewslettersPage() {
  const { theme } = useTheme()

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Weekly Spotify Listening Report</h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className={`w-full rounded-full px-4 py-2 pl-10 text-sm ${
              theme === "light"
                ? "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-500"
                : "bg-zinc-800 text-white placeholder-zinc-400"
            } focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
              theme === "light" ? "text-zinc-500" : "text-zinc-400"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          className={`md:col-span-2 rounded-lg border p-6 newsletter-highlight ${
            theme === "light" ? "border-blue-200 bg-blue-50" : "border-blue-500/20 bg-blue-500/5"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Person using Statify"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Welcome to the Future of Music with Statify</h2>
              <div className="h-1 w-8 bg-green-500 mb-4 rounded-full"></div>
              <p className={`mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>
                Embark on a journey where your music meets insightful analytics and trends tailored just for you.
              </p>
              <h3 className="text-xl font-bold mb-4">What you get in a nutshell</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
                  <path d="M16 8l-8 8" />
                  <path d="M8 8l8 8" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Listening Trends</h3>
              <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                Dive deep into your daily, weekly, and monthly listening patterns with engaging visualizations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M12 2v2" />
                  <path d="M12 22v-2" />
                  <path d="m17 20.66-1-1.73" />
                  <path d="M11 10.27 7 3.34" />
                  <path d="m20.66 17-1.73-1" />
                  <path d="m3.34 7 1.73 1" />
                  <path d="M22 12h-2" />
                  <path d="M2 12h2" />
                  <path d="m20.66 7-1.73 1" />
                  <path d="m3.34 17 1.73-1" />
                  <path d="m17 3.34-1 1.73" />
                  <path d="m7 20.66 1-1.73" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Top Tracks & Artists</h3>
              <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                See which songs and artists dominate your playlist with detailed insights.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  <path d="M5.8 11.3a6 6 0 0 1 0-2.6" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M8 2.5c1.5 1 3.8 1.5 4 3 .2-1.5 2.5-2 4-3" />
                  <path d="M8 21.5c1.5-1 3.8-1.5 4-3 .2 1.5 2.5 2 4 3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Genre Distribution</h3>
              <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                Explore the diversity in your music taste through interactive genre breakdowns.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Listening Time Analysis</h3>
              <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                Find out when you listen the most with heatmaps showing your peak activity.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div
            className={`rounded-lg border p-6 newsletter-card ${
              theme === "light" ? "border-zinc-200 bg-white shadow-sm" : "border-zinc-800 bg-zinc-900"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Your Past Reports</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Weekly Reports</h3>
                <ul className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`flex items-center justify-between rounded-md p-2 ${
                          theme === "light" ? "hover:bg-zinc-100" : "hover:bg-zinc-800"
                        }`}
                      >
                        <span className={`text-sm ${theme === "light" ? "text-zinc-700" : "text-white"}`}>
                          Weekly Spotify Recap – March 10-17, 2025
                        </span>
                        <ChevronRight className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Monthly Reports</h3>
                <ul className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`flex items-center justify-between rounded-md p-2 ${
                          theme === "light" ? "hover:bg-zinc-100" : "hover:bg-zinc-800"
                        }`}
                      >
                        <span className={`text-sm ${theme === "light" ? "text-zinc-700" : "text-white"}`}>
                          Monthly Spotify Recap – March 10-17, 2025
                        </span>
                        <ChevronRight className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Yearly Reports</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className={`flex items-center justify-between rounded-md p-2 ${
                        theme === "light" ? "hover:bg-zinc-100" : "hover:bg-zinc-800"
                      }`}
                    >
                      <span className={`text-sm ${theme === "light" ? "text-zinc-700" : "text-white"}`}>
                        Yearly Spotify Recap – March 10-17, 2025
                      </span>
                      <ChevronRight className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

