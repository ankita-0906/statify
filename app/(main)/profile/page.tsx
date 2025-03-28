"use client"

import type React from "react"

import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useState, useRef } from "react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=128&width=128&text=A")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()

  const handleProfilePictureClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string)
          toast({
            title: "Profile picture updated",
            description: "Your profile picture has been updated successfully",
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated",
    })
  }

  return (
    <div className={`p-6 max-w-4xl mx-auto ${theme === "light" ? "bg-zinc-50" : "bg-black"}`}>
      <h1 className="text-3xl font-bold mb-2">Profile</h1>
      <h2 className="text-2xl font-bold mb-8">Welcome, Angel</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-6">
          <div
            className={`flex flex-col items-center space-y-4 rounded-lg border p-6 ${
              theme === "light" ? "bg-white border-zinc-200" : "bg-zinc-900 border-zinc-800"
            }`}
          >
            <div
              className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-green-500 cursor-pointer group"
              onClick={handleProfilePictureClick}
            >
              <Image
                src={profileImage || "/placeholder.svg"}
                alt="Profile picture"
                width={128}
                height={128}
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-white font-medium">Change Photo</span>
              </div>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>
            <Button
              variant="outline"
              size="sm"
              className={`mt-2 text-xs ${
                theme === "light"
                  ? "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100"
                  : "border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
              onClick={handleProfilePictureClick}
            >
              Change Profile Picture
            </Button>

            <div className="text-center">
              <h3 className="text-xl font-bold">Angel</h3>
              <p className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>Angel123</p>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
              <div
                className={`flex flex-col items-center justify-center rounded-md p-3 ${
                  theme === "light" ? "bg-zinc-100" : "bg-zinc-800"
                }`}
              >
                <span className="text-lg font-bold">186</span>
                <span className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>Genres</span>
              </div>
              <div
                className={`flex flex-col items-center justify-center rounded-md p-3 ${
                  theme === "light" ? "bg-zinc-100" : "bg-zinc-800"
                }`}
              >
                <span className="text-lg font-bold">215</span>
                <span className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>Artists</span>
              </div>
              <div
                className={`flex flex-col items-center justify-center rounded-md p-3 ${
                  theme === "light" ? "bg-zinc-100" : "bg-zinc-800"
                }`}
              >
                <span className="text-lg font-bold">186</span>
                <span className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>Tracks</span>
              </div>
              <div
                className={`flex flex-col items-center justify-center rounded-md p-3 ${
                  theme === "light" ? "bg-zinc-100" : "bg-zinc-800"
                }`}
              >
                <span className="text-lg font-bold">2,156</span>
                <span className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>Minutes</span>
              </div>
            </div>
          </div>

          <div
            className={`rounded-lg border p-6 ${
              theme === "light" ? "bg-white border-zinc-200" : "bg-zinc-900 border-zinc-800"
            }`}
          >
            <h3 className="mb-4 text-lg font-medium">Listening Streaks</h3>
            <div className="grid grid-cols-7 gap-1 max-h-[150px] overflow-hidden">
              {Array.from({ length: 28 }).map((_, i) => {
                const intensity = Math.floor(Math.random() * 5)
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded ${
                      intensity === 0
                        ? theme === "light"
                          ? "bg-zinc-100"
                          : "bg-zinc-800"
                        : intensity === 1
                          ? "bg-green-100"
                          : intensity === 2
                            ? "bg-green-300"
                            : intensity === 3
                              ? "bg-green-400"
                              : "bg-green-500"
                    }`}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div
            className={`rounded-lg border p-6 ${
              theme === "light" ? "bg-white border-zinc-200" : "bg-zinc-900 border-zinc-800"
            }`}
          >
            <h3 className="mb-6 text-lg font-medium">Personal Information</h3>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className={theme === "light" ? "text-zinc-500" : "text-zinc-400"}>
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    defaultValue="Angel"
                    className={
                      theme === "light"
                        ? "bg-white border-zinc-200 text-zinc-900"
                        : "bg-zinc-800 border-zinc-700 text-white"
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={theme === "light" ? "text-zinc-500" : "text-zinc-400"}>
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="angel123@gmail.com"
                    className={
                      theme === "light"
                        ? "bg-white border-zinc-200 text-zinc-900"
                        : "bg-zinc-800 border-zinc-700 text-white"
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username" className={theme === "light" ? "text-zinc-500" : "text-zinc-400"}>
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="Angel123"
                    className={
                      theme === "light"
                        ? "bg-white border-zinc-200 text-zinc-900"
                        : "bg-zinc-800 border-zinc-700 text-white"
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className={theme === "light" ? "text-zinc-500" : "text-zinc-400"}>
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="8143275449"
                    className={
                      theme === "light"
                        ? "bg-white border-zinc-200 text-zinc-900"
                        : "bg-zinc-800 border-zinc-700 text-white"
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className={theme === "light" ? "text-zinc-500" : "text-zinc-400"}>
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  defaultValue="Music enthusiast and avid listener. I love discovering new artists and genres."
                  rows={5}
                  className={
                    theme === "light"
                      ? "bg-white border-zinc-200 text-zinc-900"
                      : "bg-zinc-800 border-zinc-700 text-white"
                  }
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-green-500 hover:bg-green-600 text-black font-bold">
                  Update Profile
                </Button>
              </div>
            </form>
          </div>

          <div
            className={`rounded-lg border p-6 ${
              theme === "light"
                ? "bg-white border-zinc-200 border-red-200 bg-red-50"
                : "bg-red-900/10 border-red-900/20"
            }`}
          >
            <h3 className="mb-4 text-lg font-medium text-red-500">Delete account</h3>
            <p className={`mb-4 text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
              You can delete your stats for Spotify account and delete all your data from our system. You can sign-up
              again after at any time.
            </p>
            <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

