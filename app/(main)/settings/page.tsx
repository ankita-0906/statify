"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Bell, BellOff, Info, HelpCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const { toast } = useToast()

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    toast({
      title: "Theme updated",
      description: `Theme changed to ${newTheme} mode`,
    })
  }

  const handleNotificationChange = (checked: boolean) => {
    setNotifications(checked)
    toast({
      title: "Notifications settings updated",
      description: `Notifications ${checked ? "enabled" : "disabled"}`,
    })
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="space-y-6">
        <div
          className={`rounded-lg border overflow-hidden settings-card ${
            theme === "light" ? "border-zinc-200 bg-white shadow-sm" : "border-zinc-800 bg-zinc-900"
          }`}
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Appearance</h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {theme === "dark" ? (
                  <Moon className="h-5 w-5 text-zinc-400" />
                ) : (
                  <Sun className="h-5 w-5 text-zinc-500" />
                )}
                <div>
                  <p className="font-medium">Theme</p>
                  <p className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                    Switch between dark and light mode
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className={`border-zinc-700 ${
                  theme === "dark"
                    ? "bg-zinc-800 text-white"
                    : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-100"
                }`}
                onClick={handleThemeChange}
              >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </Button>
            </div>
          </div>

          <Separator className={theme === "light" ? "bg-zinc-200" : "bg-zinc-800"} />

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Notifications</h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {notifications ? (
                  <Bell className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
                ) : (
                  <BellOff className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
                )}
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                    Receive notifications about new music and updates
                  </p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={handleNotificationChange} />
            </div>
          </div>

          <Separator className={theme === "light" ? "bg-zinc-200" : "bg-zinc-800"} />

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">About</h2>

            <div className="space-y-4">
              <button
                className={`flex w-full items-center justify-between rounded-md p-3 ${
                  theme === "light" ? "hover:bg-zinc-100" : "hover:bg-zinc-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Info className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
                  <div>
                    <p className="font-medium">About Statify</p>
                    <p className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                      Learn more about our service
                    </p>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
              </button>

              <button
                className={`flex w-full items-center justify-between rounded-md p-3 ${
                  theme === "light" ? "hover:bg-zinc-100" : "hover:bg-zinc-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
                  <div>
                    <p className="font-medium">Help & Support</p>
                    <p className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                      Get help with using Statify
                    </p>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`rounded-lg border p-6 settings-card ${
            theme === "light" ? "border-zinc-200 bg-white shadow-sm" : "border-zinc-800 bg-zinc-900"
          }`}
        >
          <h2 className="text-xl font-semibold mb-6">Account</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="email" className={theme === "light" ? "text-zinc-500" : "text-zinc-400"}>
                  Email Address
                </Label>
                <input
                  id="email"
                  type="email"
                  value="angel123@gmail.com"
                  disabled
                  className={`mt-1 w-full rounded-md border px-3 py-2 ${
                    theme === "light"
                      ? "border-zinc-300 bg-zinc-100 text-zinc-800"
                      : "border-zinc-700 bg-zinc-800 text-white"
                  }`}
                />
              </div>

              <div>
                <Label htmlFor="username" className={theme === "light" ? "text-zinc-500" : "text-zinc-400"}>
                  Username
                </Label>
                <input
                  id="username"
                  type="text"
                  value="Angel123"
                  disabled
                  className={`mt-1 w-full rounded-md border px-3 py-2 ${
                    theme === "light"
                      ? "border-zinc-300 bg-zinc-100 text-zinc-800"
                      : "border-zinc-700 bg-zinc-800 text-white"
                  }`}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="outline"
                className={
                  theme === "light"
                    ? "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100"
                    : "border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                }
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-red-900/20 bg-red-900/10 p-6">
          <h2 className="text-xl font-semibold mb-4 text-red-500">Danger Zone</h2>
          <p className={`mb-4 ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
            Permanently delete your account and all of your data. This action cannot be undone.
          </p>
          <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  )
}

