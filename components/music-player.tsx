"use client"

import { useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Play, Pause, SkipBack, SkipForward, Repeat, Heart, Volume2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const { theme } = useTheme()

  return (
    <div
      className={`flex h-20 items-center justify-between border-t px-4 ${
        theme === "light" ? "bg-white border-zinc-200 text-zinc-900" : "bg-black border-zinc-800 text-white"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 max-w-[30%]">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded">
          <Image
            src="/placeholder.svg?height=48&width=48&text=NO"
            alt="Album cover"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-medium truncate">Dreaming On</h4>
          <p className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} truncate`}>NEFFEX</p>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`ml-2 hidden sm:block ${
            isFavorite
              ? "text-green-500"
              : theme === "light"
                ? "text-zinc-500 hover:text-zinc-900"
                : "text-zinc-400 hover:text-white"
          }`}
        >
          <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-1 max-w-md w-full px-2">
        <div className="flex items-center gap-3">
          <button
            className={`hidden xs:block ${theme === "light" ? "text-zinc-500 hover:text-zinc-900" : "text-zinc-400 hover:text-white"}`}
          >
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            className={`hidden xs:block ${theme === "light" ? "text-zinc-500 hover:text-zinc-900" : "text-zinc-400 hover:text-white"}`}
          >
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
        <div className="flex w-full items-center gap-2">
          <span className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} hidden xs:block`}>
            2:11
          </span>
          <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
          <span className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} hidden xs:block`}>
            2:42
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 max-w-[30%] hidden md:flex">
        <button className={theme === "light" ? "text-zinc-500 hover:text-zinc-900" : "text-zinc-400 hover:text-white"}>
          <Repeat className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 w-28">
          <Volume2 className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
          <Slider defaultValue={[70]} max={100} step={1} className="w-full" />
        </div>
      </div>
    </div>
  )
}

