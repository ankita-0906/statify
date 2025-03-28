"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Correct placement of state hooks
  const [playing, setPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(33) // Starting at roughly 1/3 through

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  } 

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex-1 flex items-center select-none touch-none h-10", className)}
      defaultValue={[progress]}
      max={100}
      step={1}
      onValueChange={(value) => setProgress(value[0])}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 grow rounded-full bg-white/20">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-green-500" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-green-500 bg-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }