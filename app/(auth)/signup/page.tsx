"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { ArtistCard } from "@/components/artist-card"

// Mock data for artists
const popularArtists = [
  { id: 1, name: "Taylor Swift", image: "/placeholder.svg?height=150&width=150" },
  { id: 2, name: "The Weeknd", image: "/placeholder.svg?height=150&width=150" },
  { id: 3, name: "Drake", image: "/placeholder.svg?height=150&width=150" },
  { id: 4, name: "Billie Eilish", image: "/placeholder.svg?height=150&width=150" },
  { id: 5, name: "BTS", image: "/placeholder.svg?height=150&width=150" },
  { id: 6, name: "Ariana Grande", image: "/placeholder.svg?height=150&width=150" },
  { id: 7, name: "Dua Lipa", image: "/placeholder.svg?height=150&width=150" },
  { id: 8, name: "Post Malone", image: "/placeholder.svg?height=150&width=150" },
  { id: 9, name: "Bad Bunny", image: "/placeholder.svg?height=150&width=150" },
]

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArtists, setSelectedArtists] = useState<number[]>([])
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    dob: "",
    gender: "male",
  })

  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenderChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }))
  }

  const handleArtistSelect = (artistId: number) => {
    setSelectedArtists((prev) => {
      if (prev.includes(artistId)) {
        return prev.filter((id) => id !== artistId)
      }

      if (prev.length < 3) {
        return [...prev, artistId]
      }

      return prev
    })
  }

  const filteredArtists = searchQuery
    ? popularArtists.filter((artist) => artist.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : popularArtists

  const handleNextStep = () => {
    if (step === 1) {
      // Validate first step
      if (!formData.email || !formData.password) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        })
        return
      }
      setStep(2)
    } else if (step === 2) {
      // Validate second step
      if (!formData.username || !formData.dob || !formData.gender) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        })
        return
      }
      setStep(3)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedArtists.length < 3) {
      toast({
        title: "Please select 3 artists",
        description: "Choose your 3 favorite artists to continue",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // In a real app, this would be an API call to register the user
      // For now, we'll simulate a successful registration

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Set auth token cookie (in a real app, this would be a JWT token)
      document.cookie = "auth_token=new_user_token; path=/; max-age=86400"

      toast({
        title: "Account created!",
        description: "Welcome to Statify!",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Could not create your account. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-green-950 p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
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
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white">Statify</h1>
      </div>

      <div className="w-full max-w-md rounded-lg border border-green-800 bg-black/60 p-6 backdrop-blur-sm">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">Create your account</h2>

        <div className="mb-6 flex justify-between">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex h-2 w-full ${s === 1 ? "rounded-l-full" : s === 3 ? "rounded-r-full" : ""} ${
                s <= step ? "bg-green-500" : "bg-zinc-700"
              } ${s !== 3 ? "mr-1" : ""}`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-zinc-800 border-zinc-700 text-white pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white">
                  Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="cooluser123"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob" className="text-white">
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">Gender</Label>
                <RadioGroup value={formData.gender} onValueChange={handleGenderChange} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" className="border-zinc-600" />
                    <Label htmlFor="male" className="text-white">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" className="border-zinc-600" />
                    <Label htmlFor="female" className="text-white">
                      Female
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" className="border-zinc-600" />
                    <Label htmlFor="other" className="text-white">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-2">
                <Label className="text-white">Choose 3 favorite artists</Label>
                <p className="text-sm text-zinc-400">
                  Select 3 artists you love to help us personalize your experience
                </p>

                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search artists..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {filteredArtists.map((artist) => (
                    <ArtistCard
                      key={artist.id}
                      artist={artist}
                      isSelected={selectedArtists.includes(artist.id)}
                      onSelect={() => handleArtistSelect(artist.id)}
                    />
                  ))}
                </div>

                <div className="mt-2 text-sm text-zinc-400">{selectedArtists.length}/3 artists selected</div>
              </div>
            </>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevStep}
                className="border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={handleNextStep}
                className="bg-green-500 hover:bg-green-600 text-black font-bold"
              >
                Next
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black font-bold"
                disabled={isLoading || selectedArtists.length !== 3}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            )}
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

