"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu, Sparkles, Code, User, Mail } from "lucide-react"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  const routes = [
    { href: "/", label: "Home", icon: <Sparkles className="h-4 w-4 mr-1 text-tropical-indigo-500" /> },
    { href: "/projects", label: "Projects", icon: <Code className="h-4 w-4 mr-1 text-asparagus-500" /> },
    { href: "/about", label: "About", icon: <User className="h-4 w-4 mr-1 text-light-coral-500" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="h-4 w-4 mr-1 text-vanilla-400" /> },
  ]

  return (
    <nav className="flex items-center justify-between w-full py-4">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-mono font-bold bg-gradient-to-r from-tropical-indigo-600 to-asparagus-500 bg-clip-text text-transparent">
          Creator
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link 
              key={route.href} 
              href={route.href}
              className="text-sm font-medium flex items-center transition-colors hover:text-tropical-indigo-500"
            >
              {route.icon}
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <button aria-label="Open menu" className="p-2 text-charcoal-500 hover:text-charcoal-700">
              <Menu className="h-5 w-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-mono text-charcoal-700">Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {routes.map((route) => (
              <DropdownMenuItem key={route.href} asChild>
                <Link href={route.href} className="flex items-center">
                  {route.icon}
                  {route.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}