"use client"

import { Github, Heart, FileText, Shield } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { resourceLimits } from "worker_threads"

const footerLinks = {
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Repository", href: "https://github.com/dnsxmrs/scribesent" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/scribesent/scribesent", icon: Github },
  ]
}

export function Footer() {
  return (
    <footer className="bg-background border-t-4 border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Open source platform for automated YouTube channel monitoring and AI-powered summaries. 
              Never miss important content from your favorite creators.
            </p>


          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        

        {/* Bottom Bar */}
        <div className="border-t-2 border-border pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-muted-foreground">
              © 2025 Scribesent. All rights reserved.
            </div>
            
            {/* Made with attribution */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>with</span>
              <Link 
                href="https://kiro.dev" 
                target="_blank"
                className="text-main hover:underline font-bold"
              >
                Kiro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
