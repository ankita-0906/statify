"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
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
        <h2 className="mb-6 text-center text-2xl font-bold text-white">Log in to Statify</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <div className="my-6 flex items-center">
          <Separator className="flex-1 bg-zinc-700" />
          <span className="mx-4 text-sm text-zinc-400">OR</span>
          <Separator className="flex-1 bg-zinc-700" />
        </div>

        <div className="space-y-3">
          <Button
            type="button"
            variant="outline"
            className="w-full border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
            onClick={handleFacebookLogin}
            disabled={isLoading}
          >
            <Facebook className="mr-2 h-4 w-4 text-blue-500" />
            Continue with Facebook
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-green-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

