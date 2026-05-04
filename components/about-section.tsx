"use client"

import { useInView } from "react-intersection-observer"
import { Target, Users, Award, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const coreValues = [
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters. We deliver pixel-perfect solutions with unmatched accuracy.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your success is our mission. We work alongside you at every step of the journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We set the standard for quality. Our work speaks through results, not promises.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead of the curve. We leverage cutting-edge technology for your advantage.",
  },
]

const milestones = [
  { year: "2024", title: "Founded", description: "Started with a vision to transform digital privacy" },
  { year: "2025", title: "First Products", description: "Launched our first line of CONCORD USB drives" },
  { year: "2026", title: "Privacy Revolution", description: "Leading the future of secure, private solutions" },
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <div className={cn(
            "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-blue-400 mb-4">
              About Concord
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Working is <span className="gradient-text">Your Work</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every effort, project, and solution we provide is tailored entirely around your success. 
              We believe in the dedication to craftsmanship and the pursuit of excellence in everything we do.
            </p>
          </div>

          {/* Mission Statement */}
          <div className={cn(
            "glass-card rounded-3xl p-8 md:p-12 mb-20 transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Concord, we are committed to delivering exceptional privacy solutions that empower 
                  individuals and businesses to protect their most sensitive data. Our team combines 
                  security expertise with innovative design to create products that are both powerful and easy to use.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a focus on privacy, security, and innovation, we ensure that every product we 
                  create meets the highest standards of quality and exceeds client expectations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "4", label: "Products Available" },
                  { value: "2+", label: "Years Experience" },
                  { value: "100%", label: "Privacy Focused" },
                ].map((stat, index) => (
                  <div key={index} className="glass p-6 rounded-2xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h3 className={cn(
              "text-2xl md:text-3xl font-bold text-center text-white mb-12 transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    "glass-card rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-500 group",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <value.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className={cn(
              "text-2xl md:text-3xl font-bold text-center text-white mb-12 transition-all duration-700 delay-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Our Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500/20" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative flex items-center gap-8 transition-all duration-700",
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <div className={cn(
                      "flex-1 glass-card rounded-2xl p-6 ml-12 md:ml-0",
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    )}>
                      <span className="text-blue-400 font-mono text-sm">{milestone.year}</span>
                      <h4 className="text-xl font-bold text-white mt-1">{milestone.title}</h4>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-background -translate-x-1/2 z-10" />
                    
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
