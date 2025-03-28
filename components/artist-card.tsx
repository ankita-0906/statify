"use client"

import Image from "next/image"
import { Check } from "lucide-react"

interface Artist {
  id: number
  name: string
  image: string
}

interface ArtistCardProps {
  artist: Artist
  isSelected: boolean
  onSelect: () => void
}

export function ArtistCard({ artist, isSelected, onSelect }: ArtistCardProps) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-md transition-all ${
        isSelected ? "ring-2 ring-green-500 ring-offset-2 ring-offset-black" : "hover:opacity-90"
      }`}
      onClick={onSelect}
    >
      <div className="aspect-square relative">
        <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-2 flex flex-col justify-end">
        <p className="text-xs font-medium text-white truncate">{artist.name}</p>
      </div>

      {isSelected && (
        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
          <Check className="h-3 w-3 text-black" />
        </div>
      )}
    </div>
  )
}

