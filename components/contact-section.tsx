"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about design and
            technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-scale">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a UI/UX designer, frontend developer, or just want to connect with a fellow
                tech enthusiast, I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card hover:bg-muted/50 transition-all duration-300 hover-lift">
                <div className="p-2 rounded-lg bg-primary/20 text-primary animate-float">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">Pune, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card hover:bg-muted/50 transition-all duration-300 hover-lift">
                <div
                  className="p-2 rounded-lg bg-accent/20 text-accent animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">divyanigour2@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card hover:bg-muted/50 transition-all duration-300 hover-lift">
                <div
                  className="p-2 rounded-lg bg-secondary/20 text-secondary animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-sm text-muted-foreground">+91 9011492357</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/divyani-gour-309607332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-card hover:bg-primary/20 transition-all duration-300 group border hover-lift animate-glow"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/divyanithakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-card hover:bg-primary/20 transition-all duration-300 group border hover-lift animate-glow"
                >
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:divyanigour2@gmail.com"
                  className="p-3 rounded-lg bg-gradient-card hover:bg-primary/20 transition-all duration-300 group border hover-lift animate-glow"
                >
                  <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 animate-fade-scale" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="font-heading font-semibold text-xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-input resize-none border-border focus:border-primary transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white transition-all duration-300 hover-lift"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">© 2025 Divyani Gour. Built with passion and modern web technologies.</p>
        </div>
      </div>
    </section>
  )
}
