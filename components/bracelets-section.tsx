"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Shield, Sparkles, Watch, Zap } from "lucide-react"

const bracelets = [
  {
    id: 1,
    name: "Classic Band",
    description: "Elegant leather bracelet designed to securely hold your CONCORD USB. Perfect for everyday wear.",
    price: "$49.99",
    features: ["Premium leather", "Secure USB holder", "Adjustable fit", "Water resistant"],
    color: "Black",
  },
  {
    id: 2,
    name: "Sport Band",
    description: "Durable silicone bracelet for active lifestyles. Keep your data secure during any activity.",
    price: "$39.99",
    features: ["Silicone material", "Sweat resistant", "Quick release", "Lightweight"],
    color: "Blue",
  },
  {
    id: 3,
    name: "Executive Band",
    description: "Premium stainless steel bracelet for professionals. Combines style with security.",
    price: "$79.99",
    features: ["Stainless steel", "Magnetic clasp", "Polished finish", "Hypoallergenic"],
    color: "Silver",
  },
  {
    id: 4,
    name: "Stealth Band",
    description: "Minimalist design with hidden USB compartment. Your privacy stays completely concealed.",
    price: "$59.99",
    features: ["Hidden compartment", "Matte finish", "Slim profile", "Secure lock"],
    color: "Dark Gray",
  },
]

export function BraceletsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="bracelets" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-blue-400 mb-4">
            Accessories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            USB <span className="gradient-text">Bracelets</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Carry your CONCORD USB with style. Our specially designed bracelets keep your 
            secure storage device always within reach while looking great.
          </p>
        </div>

        {/* Features Banner */}
        <div className={cn(
          "glass-card rounded-2xl p-6 md:p-8 mb-16 transition-all duration-700 delay-200",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Secure Fit", desc: "Your USB stays protected" },
              { icon: Watch, title: "Stylish Design", desc: "Looks like a regular bracelet" },
              { icon: Sparkles, title: "Premium Materials", desc: "Built to last" },
              { icon: Zap, title: "Easy Access", desc: "Quick USB retrieval" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bracelets Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {bracelets.map((bracelet, index) => (
            <div
              key={bracelet.id}
              className={cn(
                "glass-card rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-700 group",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-2">
                      {bracelet.color}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {bracelet.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">Price</span>
                    <p className="text-2xl font-bold gradient-text">{bracelet.price}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{bracelet.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {bracelet.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-muted-foreground mb-4">
            All bracelets are designed to fit any CONCORD USB size (4GB - 32GB)
          </p>
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/5"
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact us for inquiries
          </Button>
        </div>
      </div>
    </section>
  )
}
