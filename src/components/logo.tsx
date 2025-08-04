"use client"

import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "hero"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "p-2 rounded-base border-2 shadow-neo",
        variant === "hero" 
          ? "bg-background text-main border-main-foreground/30" 
          : "bg-main text-main-foreground border-border"
      )}>
        <Play className="h-5 w-5 fill-current" />
      </div>
      <span className={cn(
        "text-xl font-bold",
        variant === "hero" 
          ? "text-main-foreground" 
          : "text-foreground"
      )}>
        ScribeSent
      </span>
    </div>
  )
}
