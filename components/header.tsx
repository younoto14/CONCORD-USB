"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Products" },
  { href: "#bracelets", label: "Bracelets" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            className="flex items-center gap-3 group"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EurhQd7I0CtGuRcK0h5zA7iaJ2CFmA.png"
              alt="Concord Logo"
              width={180}
              height={50}
              className="h-10 w-auto mix-blend-screen"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="glass-card rounded-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-2 px-4 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <Button 
                className="w-full bg-white hover:bg-white/90 text-black"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
