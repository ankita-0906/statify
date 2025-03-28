"use client"

import { useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Play, Heart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for albums with better images
const albums = [
  { id: 1, title: "SOS", artist: "SZA", image: "/placeholder.svg?height=200&width=200&text=SOS" },
  { id: 2, title: "Midnights", artist: "Taylor Swift", image: "/placeholder.svg?height=200&width=200&text=Midnights" },
  { id: 3, title: "Un Verano Sin Ti", artist: "Bad Bunny", image: "/placeholder.svg?height=200&width=200&text=UVSM" },
  { id: 4, title: "Harry's House", artist: "Harry Styles", image: "/placeholder.svg?height=200&width=200&text=Harry" },
  { id: 5, title: "Renaissance", artist: "Beyoncé", image: "/placeholder.svg?height=200&width=200&text=Renaissance" },
  { id: 6, title: "Honestly, Nevermind", artist: "Drake", image: "/placeholder.svg?height=200&width=200&text=Drake" },
  {
    id: 7,
    title: "Mr. Morale & The Big Steppers",
    artist: "Kendrick Lamar",
    image: "/placeholder.svg?height=200&width=200&text=MMTBS",
  },
  { id: 8, title: "Motomami", artist: "Rosalía", image: "/placeholder.svg?height=200&width=200&text=Motomami" },
  { id: 9, title: "Dawn FM", artist: "The Weeknd", image: "/placeholder.svg?height=200&width=200&text=Dawn" },
  {
    id: 10,
    title: "Twelve Carat Toothache",
    artist: "Post Malone",
    image: "/placeholder.svg?height=200&width=200&text=TCT",
  },
  { id: 11, title: "Gemini Rights", artist: "Steve Lacy", image: "/placeholder.svg?height=200&width=200&text=Gemini" },
  {
    id: 12,
    title: "Traumazine",
    artist: "Megan Thee Stallion",
    image: "/placeholder.svg?height=200&width=200&text=Traumazine",
  },
]

export default function AlbumsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { theme } = useTheme()

  const filteredAlbums = searchQuery
    ? albums.filter(
        (album) =>
          album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          album.artist.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : albums

  return (
    <div className={`p-6 space-y-6 ${theme === "light" ? "bg-zinc-50" : "bg-black"}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Albums</h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search albums or artists"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

      <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src={album.image || "/placeholder.svg"}
                alt={album.title}
                width={200}
                height={200}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full bg-green-500 text-black hover:bg-green-600 hover:scale-105 transition-transform"
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-medium">{album.title}</h3>
              <p className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>{album.artist}</p>
            </div>
            <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <MoreHorizontal className="h-4 w-4" />
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
                    View Artist
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={theme === "light" ? "text-zinc-900 cursor-pointer" : "text-white cursor-pointer"}
                  >
                    Share
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

