"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-scale" : "opacity-0"}`}>
          {/* Name and Title */}
          <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-gray-800 mb-6">Divyani Gour</h1>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-8 text-lg sm:text-xl">
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30 animate-glow">
              UI/UX Designer
            </span>
            <span className="text-muted-foreground">•</span>
            <span
              className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30 animate-glow"
              style={{ animationDelay: "0.5s" }}
            >
              Frontend Developer
            </span>
            <span className="text-muted-foreground">•</span>
            <span
              className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/30 animate-glow"
              style={{ animationDelay: "1s" }}
            >
              Tech Explorer
            </span>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Second-Year Computer Science Engineering student at MIT ADT University, Pune. Passionate about creating
            beautiful, functional digital experiences and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 text-lg font-semibold hover-lift animate-glow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg bg-transparent border-primary/30 hover:bg-primary/10 hover-lift"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/divyani-gour-309607332"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gradient-card hover:bg-primary/20 transition-all duration-300 group border border-primary/20 hover-lift animate-glow"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/divyanithakur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gradient-card hover:bg-primary/20 transition-all duration-300 group border border-primary/20 hover-lift animate-glow"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:divyanigour2@gmail.com"
              className="p-4 rounded-full bg-gradient-card hover:bg-primary/20 transition-all duration-300 group border border-primary/20 hover-lift animate-glow"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-primary/20 animate-glow">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
