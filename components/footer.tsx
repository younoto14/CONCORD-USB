"use client"

import Image from "next/image"
import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#portfolio" },
    { label: "Bracelets", href: "#bracelets" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Custom Solutions", href: "#services" },
    { label: "Consultation", href: "#services" },
    { label: "Support", href: "#services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/concord", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/concord", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/concord", label: "LinkedIn" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-secondary/50 border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a 
              href="#home" 
              className="flex items-center gap-3 mb-6"
              onClick={(e) => scrollToSection(e, "#home")}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EurhQd7I0CtGuRcK0h5zA7iaJ2CFmA.png"
                alt="Concord Logo"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Keep your files safe and private with your own password. Your privacy is always protected 
              with CONCORD-USB.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all text-muted-foreground"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h4>
              <p className="text-muted-foreground text-sm">
                Stay updated with our latest news, updates, and exclusive offers.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white hover:bg-white/90 text-black font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Concord. All rights reserved. 
              <span className="block md:inline md:ml-2">Your Privacy Dream 2026</span>
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm group"
            >
              Back to Top
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
