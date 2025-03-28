"use client"

import { useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Play, MoreVertical, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<"songs" | "podcasts">("songs")
  const { theme } = useTheme()

  // Mock data for songs
  const songs = [
    {
      title: "Snooze",
      artist: "SZA",
      album: "SOS",
      plays: "140,000",
      duration: "04:01",
      image: "/placeholder.svg?height=40&width=40&text=SZA",
    },
    {
      title: "Kill Bill",
      artist: "SZA",
      album: "SOS",
      plays: "120,000",
      duration: "03:42",
      image: "/placeholder.svg?height=40&width=40&text=KB",
    },
    {
      title: "Seek & Destroy",
      artist: "Metallica",
      album: "Kill 'Em All",
      plays: "95,000",
      duration: "06:55",
      image: "/placeholder.svg?height=40&width=40&text=S&D",
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      plays: "180,000",
      duration: "03:20",
      image: "/placeholder.svg?height=40&width=40&text=BL",
    },
    {
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      plays: "160,000",
      duration: "02:47",
      image: "/placeholder.svg?height=40&width=40&text=AIW",
    },
  ]

  // Mock data for podcasts
  const podcasts = [
    {
      title: "Ruby Franke wrote 'Abuse Diary' While Posting A 'Keeping Kid Safe in Predatory School'",
      host: "Rotten Mango",
      description:
        "It was the most viewed home on realtor websites for weeks. It's a curious looking house. As you swipe through the photos of the 15 foot tall ceilings, the grand glass windows, the $5M price tag starts to make sense.....",
      duration: "1hr 14min",
      day: "Sunday",
      image: "/placeholder.svg?height=96&width=96&text=RM",
    },
    {
      title: "The Science of Happiness: Finding Joy in Daily Life",
      host: "Mind Matters",
      description:
        "In this episode, we explore the neuroscience behind happiness and practical ways to increase your daily joy through simple habits and mindfulness techniques.",
      duration: "45min",
      day: "Tuesday",
      image: "/placeholder.svg?height=96&width=96&text=MM",
    },
    {
      title: "Music Theory for Modern Producers",
      host: "Studio Sessions",
      description:
        "Learn how top producers use music theory to create hit songs, with practical examples from recent chart-toppers and techniques you can apply to your own productions.",
      duration: "1hr 22min",
      day: "Friday",
      image: "/placeholder.svg?height=96&width=96&text=SS",
    },
  ]

  return (
    <div className={`p-6 space-y-6 ${theme === "light" ? "bg-zinc-50" : "bg-black"}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Recently Played {activeTab === "songs" ? "Songs" : "Podcasts"}</h1>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder={`Search Your Last Played ${activeTab === "songs" ? "Songs" : "Podcasts"}`}
            className={`w-full rounded-full px-4 py-2 pl-10 text-sm ${
              theme === "light"
                ? "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-500"
                : "bg-zinc-800 text-white placeholder-zinc-400"
            } focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}
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

      <div className={`flex space-x-1 rounded-md p-1 w-fit ${theme === "light" ? "bg-zinc-200" : "bg-zinc-800"}`}>
        <button
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "songs"
              ? "bg-green-500 text-black"
              : theme === "light"
                ? "text-zinc-600 hover:text-zinc-900"
                : "text-zinc-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("songs")}
        >
          Recently Played Songs
        </button>
        <button
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "podcasts"
              ? "bg-green-500 text-black"
              : theme === "light"
                ? "text-zinc-600 hover:text-zinc-900"
                : "text-zinc-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("podcasts")}
        >
          Recently Played Podcasts
        </button>
      </div>

      {activeTab === "songs" ? (
        <div className="space-y-4">
          <div
            className={`grid grid-cols-12 gap-4 border-b pb-2 text-xs font-medium ${
              theme === "light" ? "border-zinc-200 text-zinc-500" : "border-zinc-800 text-zinc-400"
            }`}
          >
            <div className="col-span-5">TITLE</div>
            <div className="col-span-3 hidden md:block">ALBUM</div>
            <div className="col-span-2 hidden sm:block">PLAYS</div>
            <div className="col-span-2">TIME</div>
          </div>

          {songs.map((song, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 gap-4 items-center py-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-md group ${
                theme === "light" ? "hover:bg-zinc-100/50" : "hover:bg-zinc-800/50"
              }`}
            >
              <div className="col-span-5 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded">
                  <Image
                    src={song.image || "/placeholder.svg"}
                    alt={`${song.title} cover`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Button size="icon" variant="ghost" className="h-6 w-6 text-white">
                      <Play className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="font-medium">{song.title}</p>
                  <p className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>{song.artist}</p>
                </div>
              </div>
              <div
                className={`col-span-3 text-sm hidden md:block ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}
              >
                {song.album}
              </div>
              <div
                className={`col-span-2 text-sm hidden sm:block ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}
              >
                {song.plays}
              </div>
              <div className="col-span-2 flex items-center justify-between">
                <span className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                  {song.duration}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-8 w-8 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} opacity-0 group-hover:opacity-100`}
                    >
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className={theme === "light" ? "bg-white border-zinc-200" : "bg-zinc-900 border-zinc-800"}
                  >
                    <DropdownMenuItem
                      className={theme === "light" ? "text-zinc-900 cursor-pointer" : "text-white cursor-pointer"}
                    >
                      Add to Playlist
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={theme === "light" ? "text-zinc-900 cursor-pointer" : "text-white cursor-pointer"}
                    >
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={theme === "light" ? "text-zinc-900 cursor-pointer" : "text-white cursor-pointer"}
                    >
                      Remove from History
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {podcasts.map((podcast, i) => (
            <div
              key={i}
              className={`flex flex-col space-y-4 rounded-lg p-4 ${
                theme === "light" ? "bg-white border border-zinc-200" : "bg-zinc-900"
              }`}
            >
              <div className="flex gap-4">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={podcast.image || "/placeholder.svg"}
                    alt={`${podcast.title} cover`}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg font-bold">{podcast.title}</h3>
                  <p className="font-medium">{podcast.host}</p>
                  <p className={`mt-2 text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} line-clamp-2`}>
                    {podcast.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                      {podcast.day} {podcast.duration}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-black" />
                      </div>
                      <Button size="icon" className="h-8 w-8 rounded-full bg-green-500 text-black">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

