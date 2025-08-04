"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features", anchor: true },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const heroHeight = window.innerHeight * 0.3 // Trigger when scrolled 30% of viewport height
      setIsScrolled(scrollTop > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isScrolled 
        ? "border-b-4 border-border bg-background shadow-neo" 
        : "bg-main border-b-0"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo variant={isScrolled ? "default" : "hero"} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              item.anchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="no-underline"
                  onClick={e => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("features");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                      "font-bold transition-colors duration-300",
                      isScrolled 
                        ? "text-foreground hover:text-foreground/80" 
                        : "text-main-foreground hover:text-main-foreground/80 hover:bg-main-foreground/10"
                    )}
                  >
                    {item.name}
                  </Button>
                </a>
              ) : (
                <Link key={item.name} href={item.href}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                      "font-bold transition-colors duration-300",
                      isScrolled 
                        ? "text-foreground hover:text-foreground/80" 
                        : "text-main-foreground hover:text-main-foreground/80 hover:bg-main-foreground/10"
                    )}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            ))}
            
            {/* GitHub Link */}
            <Link href="https://github.com/scribesent/scribesent" target="_blank">
              <Button 
                variant="outline" 
                size="sm" 
                className={cn(
                  "gap-2 ml-2 transition-colors duration-300",
                  isScrolled
                    ? "border-border text-foreground hover:bg-muted"
                    : "border-main-foreground/60 text-main-foreground hover:bg-main-foreground/10 bg-main-foreground/5"
                )}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
            
            {/* Login Button */}
            <Link href="/login">
              <Button 
                size="sm" 
                className={cn(
                  "ml-2 transition-colors duration-300",
                  isScrolled
                    ? "bg-main text-main-foreground hover:bg-main/90"
                    : "bg-background text-foreground hover:bg-background/90"
                )}
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "transition-colors duration-300",
                isScrolled
                  ? "border-border text-foreground hover:bg-muted"
                  : "border-main-foreground/60 text-main-foreground hover:bg-main-foreground/10 bg-main-foreground/5"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={cn(
            "md:hidden border-t-2 py-4 transition-colors duration-300",
            isScrolled
              ? "border-border bg-background"
              : "border-main-foreground/20 bg-main"
          )}>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.anchor ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="no-underline"
                    onClick={e => {
                      if (window.location.pathname === "/") {
                        e.preventDefault();
                        const el = document.getElementById("features");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start font-bold transition-colors duration-300",
                        isScrolled
                          ? "text-foreground hover:text-foreground/80"
                          : "text-main-foreground hover:text-main-foreground/80 hover:bg-main-foreground/10"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Button>
                  </a>
                ) : (
                  <Link key={item.name} href={item.href}>
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start font-bold transition-colors duration-300",
                        isScrolled
                          ? "text-foreground hover:text-foreground/80"
                          : "text-main-foreground hover:text-main-foreground/80 hover:bg-main-foreground/10"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              ))}
              
              <Link href="https://github.com/scribesent/scribesent" target="_blank">
                <Button 
                  variant="outline" 
                  className={cn(
                    "w-full justify-start gap-2 transition-colors duration-300",
                    isScrolled
                      ? "border-border text-foreground hover:bg-muted"
                      : "border-main-foreground/60 text-main-foreground hover:bg-main-foreground/10 bg-main-foreground/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              
              <Link href="/login">
                <Button 
                  className={cn(
                    "w-full transition-colors duration-300",
                    isScrolled
                      ? "bg-main text-main-foreground hover:bg-main/90"
                      : "bg-background text-foreground hover:bg-background/90"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
