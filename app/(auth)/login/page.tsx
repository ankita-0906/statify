"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to authenticate the user
      // For now, we'll simulate a successful login

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Set auth token cookie (in a real app, this would be a JWT token)
      document.cookie = "auth_token=sample_token; path=/; max-age=86400"

      toast({
        title: "Login successful",
        description: "Welcome back to Statify!",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)

    try {
      // In a real app, this would redirect to Google OAuth
      // For now, we'll simulate a successful OAuth login

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Set auth token cookie (in a real app, this would be a JWT token)
      document.cookie = "auth_token=google_oauth_token; path=/; max-age=86400"

      toast({
        title: "Google login successful",
        description: "Welcome back to Statify!",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Google login failed",
        description: "Could not authenticate with Google. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleFacebookLogin = async () => {
    setIsLoading(true)

    try {
      // In a real app, this would redirect to Facebook OAuth
      // For now, we'll simulate a successful OAuth login

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Set auth token cookie (in a real app, this would be a JWT token)
      document.cookie = "auth_token=facebook_oauth_token; path=/; max-age=86400"

      toast({
        title: "Facebook login successful",
        description: "Welcome back to Statify!",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Facebook login failed",
        description: "Could not authenticate with Facebook. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-green-950 p-4">
      <div className="w-full max-w-md rounded-lg border border-green-800 bg-black/60 p-6 backdrop-blur-sm">
        {/* Statify Logo */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
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
              className="text-black"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Login to Statify</h1>
        </div>

        {/* Spotify Login Button */}
        <Button
          type="button"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold flex items-center justify-center gap-2 mb-6"
          onClick={handleGoogleLogin} // Reusing the Google login function for now
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
          Login with Spotify
        </Button>

        {/* Info Text */}
        <div className="text-center text-zinc-400 text-sm mb-2">
          To use this dashboard, you'll need a Spotify account.
        </div>
        <div className="text-center text-zinc-400 text-sm">
          Don't have a Spotify account?{" "}
          <Link href="https://www.spotify.com/signup" className="text-green-500 hover:underline">
            sign up here
          </Link>
        </div>
      </div>
    </div>
  )
}

