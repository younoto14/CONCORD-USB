"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Code, MessageSquare, Settings, Headphones, ChevronDown, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code,
    title: "Custom Solutions & Development",
    shortDescription: "Tailored development solutions built specifically for your business needs.",
    fullDescription: "Our expert team crafts bespoke software solutions that perfectly align with your business objectives. From web applications to mobile platforms, we leverage cutting-edge technologies to deliver scalable, secure, and high-performance systems.",
    features: [
      "Custom web and mobile applications",
      "API development and integration",
      "Cloud-native architecture design",
      "Legacy system modernization",
      "Performance optimization",
    ],
    gradient: "from-white to-gray-400",
  },
  {
    icon: MessageSquare,
    title: "Professional Consultation & Strategy",
    shortDescription: "Strategic guidance to navigate your digital transformation journey.",
    fullDescription: "We provide comprehensive consulting services to help you make informed decisions about technology investments. Our strategic approach ensures your digital initiatives align with business goals and deliver measurable results.",
    features: [
      "Technology roadmap planning",
      "Digital transformation strategy",
      "Architecture assessment",
      "Security and compliance audit",
      "Team training and workshops",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Settings,
    title: "End-to-End Execution & Management",
    shortDescription: "Complete project delivery from concept to deployment.",
    fullDescription: "We take full ownership of your project lifecycle, ensuring seamless execution from initial planning through deployment. Our agile methodology and experienced project managers guarantee on-time, on-budget delivery.",
    features: [
      "Agile project management",
      "Quality assurance testing",
      "Continuous integration/deployment",
      "Documentation and training",
      "Stakeholder communication",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Headphones,
    title: "Post-Project Support & Maintenance",
    shortDescription: "Ongoing support to keep your systems running smoothly.",
    fullDescription: "Our commitment doesn&apos;t end at deployment. We provide comprehensive support and maintenance services to ensure your systems remain secure, up-to-date, and performing at peak efficiency.",
    features: [
      "24/7 technical support",
      "Performance monitoring",
      "Security patch management",
      "Feature enhancements",
      "Regular system audits",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
]

export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-white mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What We <span className="gradient-text">Provide</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive solutions designed to meet every aspect of your business needs. 
            From development to support, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "glass-card rounded-2xl overflow-hidden transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                expandedService === index && "ring-2 ring-white/50"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Service Header */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0",
                    `bg-gradient-to-br ${service.gradient}`
                  )}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm font-medium"
                >
                  {expandedService === index ? "Show Less" : "Learn More"}
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    expandedService === index && "rotate-180"
                  )} />
                </button>
              </div>

              {/* Expandable Content */}
              <div className={cn(
                "overflow-hidden transition-all duration-500",
                expandedService === index ? "max-h-[500px]" : "max-h-0"
              )}>
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10">
                  <p className="text-muted-foreground mt-6 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="bg-white hover:bg-white/90 text-black group"
                    onClick={scrollToContact}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={cn(
          "mt-16 glass-card rounded-3xl p-8 md:p-12 text-center transition-all duration-700 delay-600",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Our team is ready to discuss your unique requirements and create a tailored solution 
            that perfectly fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-black px-8"
              onClick={scrollToContact}
            >
              Schedule a Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/5"
              onClick={scrollToPortfolio}
            >
              View Our Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
