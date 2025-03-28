"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Sidebar } from "@/components/sidebar"
import { MusicPlayer } from "@/components/music-player"
import { LogoutDialog } from "@/components/logout-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { User, LogOut, Settings, Search } from "lucide-react"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { theme } = useTheme()

  // Close logout dialog when navigating
  useEffect(() => {
    setShowLogoutDialog(false)
  }, [pathname])

  const handleLogout = () => {
    setShowLogoutDialog(true)
  }

  const navigateToProfile = () => {
    router.push("/profile")
  }

  const navigateToSettings = () => {
    router.push("/settings")
  }

  return (
    <div className={`flex h-screen flex-col ${theme === "light" ? "bg-white text-zinc-900" : "bg-black text-white"}`}>
      <header
        className={`flex items-center justify-end p-4 border-b ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}
      >
        <div className="flex items-center gap-4">
          {/* Search bar moved to right side, next to profile icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className={`w-64 rounded-full px-4 py-2 pl-10 text-sm ${
                theme === "light"
                  ? "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-500"
                  : "bg-zinc-800 text-white placeholder-zinc-400"
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            <Search
              className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}
            >
              <DropdownMenuItem className="cursor-pointer" onClick={navigateToProfile}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={navigateToSettings}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-500" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1 overflow-block">
        <Sidebar onLogout={() => setShowLogoutDialog(true)} />
        <main className={`flex-1 overflow-auto pb-20 ${theme === "light" ? "bg-zinc-50" : "bg-black"}`}>{children}</main>
      </div>  
      {/* add pb-20 */}
      <div className="fixed bottom-0 left-0 w-full bg-black shadow-md">
      <MusicPlayer />
      </div>
      <LogoutDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog} />
    </div>
  )
}