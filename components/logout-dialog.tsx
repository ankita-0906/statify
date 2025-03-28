"use client"

import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface LogoutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LogoutDialog({ open, onOpenChange }: LogoutDialogProps) {
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    // Simulate logout
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    })
    router.push("/login")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-zinc-900 text-white border-zinc-800">
        <DialogHeader>
          <DialogTitle>Log out</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Are you sure you want to log out of your account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-end gap-2 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
          >
            Cancel
          </Button>
          <Button type="button" onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white">
            Log out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

