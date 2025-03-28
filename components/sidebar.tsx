"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import {
  LayoutDashboard,
  Disc,
  Newspaper,
  MessageSquare,
  History,
  Settings,
  User,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState } from "react"

interface SidebarProps {
  onLogout: () => void
}

export function Sidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const { theme } = useTheme()

  const isActive = (path: string) => {
    return pathname === path
  }

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
      active: isActive("/dashboard"),
    },
    {
      icon: Disc,
      label: "Albums",
      href: "/albums",
      active: isActive("/albums"),
    },
    {
      icon: Newspaper,
      label: "Newsletters",
      href: "/newsletters",
      active: isActive("/newsletters"),
    },
    {
      icon: MessageSquare,
      label: "Chatbot",
      href: "/chatbot",
      active: isActive("/chatbot"),
    },
    {
      icon: History,
      label: "History",
      href: "/history",
      active: isActive("/history"),
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
      active: isActive("/settings"),
    },
    {
      icon: User,
      label: "Profile",
      href: "/profile",
      active: isActive("/profile"),
    },
    {
      icon: HelpCircle,
      label: "FAQs",
      href: "/faqs",
      active: isActive("/faqs"),
    },
  ]

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          className={`fixed top-4 left-4 z-50 p-2 rounded-md ${theme === "light" ? "bg-zinc-200 text-zinc-900" : "bg-zinc-800 text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "flex h-full w-56 flex-col"
        } ${theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-black border-zinc-800"} border-r`}
      >
        {/* Logo moved slightly upwards with reduced top padding */}
        <div className="flex items-center gap-2 p-4 pt-3 mb-1">
          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
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
          </div>
          <h1 className="text-xl font-bold">Statify</h1>
        </div>

        <div className={`border-b py-2 ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}>
          <p className={`px-6 text-sm font-medium ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>Menu</p>
        </div>

        <nav className="flex-1 p-2 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-green-500/10 text-green-500"
                      : theme === "light"
                        ? "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                  onClick={() => isMobile && setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="">
          <button
            onClick={onLogout}
            className={`flex w-full items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-red-500 ${theme === "light" ? "hover:bg-red-50" : "hover:bg-red-500/10"} transition-colors`}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
        </nav>
      </div>
  

{/* change here */}

      {/* Overlay for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}