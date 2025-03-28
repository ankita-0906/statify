"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { BarChart3, PieChart, LineChart, Clock, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  const [username] = useState("Angel")
  const { theme } = useTheme()

  // Data for favorite day graph
  const favoriteDayData = [
    { day: "Mon", fullDay: "Monday", hours: 4, color: "#22c55e" },
    { day: "Tue", fullDay: "Tuesday", hours: 6, color: "#22c55e" },
    { day: "Wed", fullDay: "Wednesday", hours: 5, color: "#22c55e" },
    { day: "Thu", fullDay: "Thursday", hours: 8, color: "#22c55e" },
    { day: "Fri", fullDay: "Friday", hours: 3, color: "#22c55e" },
    { day: "Sat", fullDay: "Saturday", hours: 4.5, color: "#22c55e" },
    { day: "Sun", fullDay: "Sunday", hours: 5.5, color: "#22c55e" },
  ]
  const barWidth = 60
  const gap = 40
  const totalWidth = favoriteDayData.length * (barWidth + gap) - gap + 100

  return (
    <div className={`p-4 md:p-6 space-y-6 ${theme === "light" ? "bg-zinc-50" : "bg-black"}`}>
      <div>
        <h1 className="text-2xl font-bold">Hi {username},</h1>
        <h2 className="text-3xl font-bold text-green-500">Welcome to Statify!</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className={`text-sm font-medium ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
              Today&apos;s Listen Time
            </CardTitle>
            <Clock className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 Minutes</div>
            <p className="text-xs text-green-500">+15%</p>
          </CardContent>
        </Card>
        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className={`text-sm font-medium ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
              Monthly Listen Time
            </CardTitle>
            <Clock className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1000 Minutes</div>
            <p className="text-xs text-green-500">+15%</p>
          </CardContent>
        </Card>
        <Card
          className={`${theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"} sm:col-span-2 lg:col-span-1`}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className={`text-sm font-medium ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
              Average Listen Time
            </CardTitle>
            <Clock className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50 Minutes</div>
            <p className="text-xs text-green-500">+15%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Genre Analysis</CardTitle>
            <PieChart className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative h-[200px] w-[200px]">
              <div
                className="absolute inset-0 rounded-full border-8 border-blue-500"
                style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 0, 50% 0)" }}
              />
              <div
                className="absolute inset-0 rounded-full border-8 border-orange-500"
                style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 75% 100%)" }}
              />
              <div
                className="absolute inset-0 rounded-full border-8 border-green-500"
                style={{ clipPath: "polygon(50% 50%, 75% 100%, 25% 100%)" }}
              />
              <div
                className="absolute inset-0 rounded-full border-8 border-purple-500"
                style={{ clipPath: "polygon(50% 50%, 25% 100%, 0 100%, 0 50%)" }}
              />
              <div
                className="absolute inset-0 rounded-full border-8 border-yellow-500"
                style={{ clipPath: "polygon(50% 50%, 0 50%, 0 0, 50% 0)" }}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center rounded-full text-xs ${
                  theme === "light" ? "bg-white text-zinc-500" : "bg-zinc-900 text-zinc-400"
                }`}
                style={{ width: "60%", height: "60%", margin: "20%" }}
              >
                Genre Analysis
              </div>
            </div>

            {/* Genre Legend */}
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>Pop</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>Hip Hop</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>Rock</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>R&B</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>Electronic</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Detailed Listening Time</CardTitle>
            <LineChart className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} mb-2`}>
              Nov 1 — Nov 30
            </div>
            <div className="h-[200px] w-full relative">
              {/* Y-axis labels */}
              <div
                className={`absolute left-0 top-0 h-full flex flex-col justify-between text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} pr-2`}
              >
                <span>200 min</span>
                <span>150 min</span>
                <span>100 min</span>
                <span>50 min</span>
                <span>0 min</span>
              </div>

              {/* X-axis grid lines */}
              <div className="ml-10 h-full relative">
                <div className="absolute inset-0 flex items-center">
                  <div
                    className={`w-full border-t border-dashed ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}
                  />
                </div>
                <div className="absolute inset-0 flex items-center" style={{ top: "25%" }}>
                  <div
                    className={`w-full border-t border-dashed ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}
                  />
                </div>
                <div className="absolute inset-0 flex items-center" style={{ top: "50%" }}>
                  <div
                    className={`w-full border-t border-dashed ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}
                  />
                </div>
                <div className="absolute inset-0 flex items-center" style={{ top: "75%" }}>
                  <div
                    className={`w-full border-t border-dashed ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}
                  />
                </div>

                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M0,50 L5,60 L10,40 L15,55 L20,45 L25,60 L30,40 L35,50 L40,30 L45,45 L50,60 L55,50 L60,70 L65,55 L70,40 L75,60 L80,50 L85,30 L90,45 L95,35 L100,30"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1"
                  />
                </svg>

                {/* X-axis labels */}
                <div
                  className={`absolute bottom-0 left-0 flex w-full justify-between text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} pt-2`}
                >
                  <span>Nov 1</span>
                  <span>Nov 10</span>
                  <span>Nov 20</span>
                  <span>Nov 30</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Your Top Artists Over Time</CardTitle>
            <LineChart className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full relative">
              {/* Y-axis labels */}
              <div
                className={`absolute left-0 top-0 h-full flex flex-col justify-between text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} pr-2`}
              >
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Graph area */}
              <div className="ml-8 h-full relative">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 L20,70 L40,75 L60,60 L80,50 L100,30" fill="none" stroke="#ef4444" strokeWidth="1" />
                  <path d="M0,50 L20,55 L40,45 L60,50 L80,40 L100,45" fill="none" stroke="#3b82f6" strokeWidth="1" />
                  <path d="M0,30 L20,40 L40,35 L60,45 L80,30 L100,40" fill="none" stroke="#a855f7" strokeWidth="1" />
                  <path d="M0,60 L20,50 L40,55 L60,40 L80,45 L100,35" fill="none" stroke="#22c55e" strokeWidth="1" />
                </svg>

                <div
                  className={`absolute bottom-0 left-0 flex w-full justify-between text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}
                >
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>Taylor Swift</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>BTS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>Arijit Singh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className={`text-xs ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>Shawn Mendes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          className={`${theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"} md:col-span-2`}
        >
          <CardHeader>
            <CardTitle>Top Artist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Jackie Burhan",
                  album: "500 Play Album",
                  image: "/placeholder.svg?height=40&width=40&text=JB",
                },
                { name: "Maria", album: "100 Play Album", image: "/placeholder.svg?height=40&width=40&text=M" },
                { name: "Jim Kho", album: "350 Play Album", image: "/placeholder.svg?height=40&width=40&text=JK" },
                { name: "Aurora Sodakh", album: "80 Play Album", image: "/placeholder.svg?height=40&width=40&text=AS" },
                { name: "Marsha Mei", album: "550 Play Album", image: "/placeholder.svg?height=40&width=40&text=MM" },
              ].map((artist, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={artist.image} />
                      <AvatarFallback>{artist.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{artist.name}</p>
                      <p className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                        {artist.album}
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-8 w-8 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}
                      >
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className={theme === "light" ? "bg-white border-zinc-200" : "bg-zinc-900 border-zinc-800"}
                    >
                      <DropdownMenuItem
                        className={theme === "light" ? "text-zinc-900 cursor-pointer" : "text-white cursor-pointer"}
                      >
                        View Artist
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={theme === "light" ? "text-zinc-900 cursor-pointer" : "text-white cursor-pointer"}
                      >
                        Play All
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={theme === "light" ? "text-zinc-900 cursor-pointer" : "text-white cursor-pointer"}
                      >
                        Add to Playlist
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader>
            <CardTitle>Listening Streaks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }).map((_, i) => {
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
          </CardContent>
        </Card>
      </div>

      <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardTitle className="text-sm font-medium">Favourite Day to Listen</CardTitle>
    <BarChart3 className={`h-4 w-4 ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`} />
  </CardHeader>
  <CardContent>
    <div className="relative w-full h-[280px]"> {/* Single container for both Y-axis and graph */}
      
      {/* SVG Graph */}
      <svg className="absolute top-0 left-0 h-[240px] w-full" viewBox={`0 0 ${totalWidth} 240`} preserveAspectRatio="none">
        {/* Horizontal grid lines */}
        {[0, 50, 100, 150, 200].map((y) => (
          <line key={y} x1="0" y1={y} x2={totalWidth} y2={y} stroke={theme === "light" ? "#e4e4e7" : "#27272a"} strokeWidth="1" />
        ))}

        {/* X-axis line */}
        <line x1="0" y1="200" x2={totalWidth} y2="200" stroke={theme === "light" ? "#71717a" : "#52525b"} strokeWidth="2" />

        {/* Bars */}
        {favoriteDayData.map((item, index) => {
          const x = index * (barWidth + gap) + 50;
          const maxBarHeight = 200;
          const barHeight = (item.hours / 10) * maxBarHeight;
          const yPosition = 200 - barHeight;

          return (
            <g key={item.day}>
              {/* Bar */}
              <rect x={x} y={yPosition} width={barWidth} height={barHeight} fill={item.color} rx="4" />

              {/* Hours label */}
              <text x={x + barWidth / 2} y={yPosition - 5} textAnchor="middle" fontSize="12" fill="#22c55e" fontWeight="bold">
                {item.hours}h
              </text>

              {/* Day label */}
              <text x={x + barWidth / 2} y={225} textAnchor="middle" fontSize="14" fontWeight="medium" fill={theme === "light" ? "#3f3f46" : "#d4d4d8"}>
                {item.fullDay}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Y-axis Labels (Placed in the same div, positioned absolutely) */}
      <div className={`absolute left-0 top-0 h-[200px] flex flex-col justify-between text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} pr-2`}>
        <span>10h</span>
        <span>7.5h</span>
        <span>5h</span>
        <span>2.5h</span>
        <span>0h</span>
      </div>
    </div>
  </CardContent>
</Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader>
            <CardTitle>Recently Played</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Blinding Lights",
                  artist: "The Weeknd",
                  plays: "46%",
                  image: "/placeholder.svg?height=32&width=32&text=BL",
                },
                {
                  title: "Levitating",
                  artist: "Dua Lipa",
                  plays: "17%",
                  image: "/placeholder.svg?height=32&width=32&text=LL",
                },
                {
                  title: "Industry Baby",
                  artist: "Lil Nas X",
                  plays: "45%",
                  image: "/placeholder.svg?height=32&width=32&text=IB",
                },
                {
                  title: "Someone Like You",
                  artist: "Adele",
                  plays: "28%",
                  image: "/placeholder.svg?height=32&width=32&text=SLY",
                },
              ].map((song, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded">
                      <img
                        src={song.image || "/placeholder.svg"}
                        alt={song.title}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{song.title}</p>
                      <p className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                        {song.artist}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-green-500">{song.plays}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={theme === "light" ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"}>
          <CardHeader>
            <CardTitle>Newsletter Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-sm ${theme === "light" ? "text-zinc-500" : "text-zinc-400"} mb-4`}>
              Stay up to date with the latest music trends and personalized recommendations.
            </p>
            <div className="space-y-2">
              <div className={`rounded-lg ${theme === "light" ? "bg-zinc-100" : "bg-zinc-800"} p-3`}>
                <h3 className="font-medium">New Releases This Week</h3>
                <p className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                  Check out the latest albums from your favorite artists
                </p>
              </div>
              <div className={`rounded-lg ${theme === "light" ? "bg-zinc-100" : "bg-zinc-800"} p-3`}>
                <h3 className="font-medium">Your Weekly Mix</h3>
                <p className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                  Personalized playlist based on your listening habits
                </p>
              </div>
              <div className={`rounded-lg ${theme === "light" ? "bg-zinc-100" : "bg-zinc-800"} p-3`}>
                <h3 className="font-medium">Upcoming Concerts</h3>
                <p className={`text-xs ${theme === "light" ? "text-zinc-500" : "text-zinc-400"}`}>
                  Artists you love are performing near you
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

