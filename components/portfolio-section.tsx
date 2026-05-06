"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    title: "CONCORD USB 4GB",
    size: "4GB",
    description: "Compact, secure privacy USB with password protection",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Ak2WpBBsSq2PYlLQJ141eL4B8yH0n.png",
    price: "$899.99",
    rating: 3,
  },
  {
    id: 2,
    title: "CONCORD USB 8GB",
    size: "8GB",
    description: "Enhanced storage with military-grade encryption",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2gOuO5dZ2DWmhHAA5bsA2AA3rv7sER.png",
    price: "$999.99",
    rating: 5,
  },
  {
    id: 3,
    title: "CONCORD USB 16GB",
    size: "16GB",
    description: "Professional grade secure storage solution",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yYycHBzRUnOEJxc7KtclaKx6d977Rc.png",
    price: "$1199.99",
    rating: 2,
  },
  {
    id: 4,
    title: "CONCORD USB 32GB",
    size: "32GB",
    description: "Enterprise-level secure storage with advanced features",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kpihIT3gYERG6qmL5qGYSEarnWwcvO.png",
    price: "$1499.99",
    rating: 4,
  },
]

const sizes = ["4GB", "8GB", "16GB", "32GB"]

export function PortfolioSection() {
  const [activeSize, setActiveSize] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProducts = activeSize
    ? products.filter(p => p.size === activeSize)
    : products

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, Math.ceil(filteredProducts.length / 2)))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, Math.ceil(filteredProducts.length / 2))) % Math.max(1, Math.ceil(filteredProducts.length / 2)))
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={cn(
              "w-4 h-4",
              star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
            )}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-blue-400 mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            CONCORD <span className="gradient-text">USB</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Keep your files safe and private with your own password. No one can see 
            your data unless they have your CONCORD-USB. Compact, secure, and easy to use.
          </p>
        </div>

        {/* Size Filters */}
        <div className={cn(
          "flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <button
            onClick={() => {
              setActiveSize(null)
              setCurrentSlide(0)
            }}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeSize === null
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "glass-card text-muted-foreground hover:text-white hover:border-blue-500/30"
            )}
          >
            All
          </button>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                setActiveSize(size)
                setCurrentSlide(0)
              }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeSize === size
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "glass-card text-muted-foreground hover:text-white hover:border-blue-500/30"
              )}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={cn(
          "grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-400",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group glass-card rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Size Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-medium backdrop-blur-sm">
                  {product.size}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  {renderStars(product.rating)}
                  <span className="text-xs text-muted-foreground">({product.rating * 234})</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div>
                  <span className="text-xs text-muted-foreground">Price</span>
                  <p className="text-xl font-bold gradient-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className={cn(
          "flex justify-center gap-4 mt-12 transition-all duration-700 delay-600",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-blue-500/50 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-white" />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === dot ? "w-6 bg-blue-500" : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-blue-500/50 transition-all group"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
