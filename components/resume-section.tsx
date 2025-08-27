"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Eye, ExternalLink } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements
          </p>
        </div>

        <Card className="max-w-2xl mx-auto hover-lift bg-gradient-card backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse-glow">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Divyani Gour - Resume</h3>
              <p className="text-muted-foreground">UI/UX Designer & Frontend Developer</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span>Updated: January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span>Figma Design</span>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>Includes detailed information about:</p>
                <div className="grid grid-cols-2 gap-2 mt-2 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Education & Coursework</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-secondary"></div>
                    <span>Technical Skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent"></div>
                    <span>Project Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Hackathon Achievements</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white px-8 transition-all duration-300 hover-lift"
                asChild
              >
                <a
                  href="https://www.figma.com/design/vbeZZet9Y1FttLW8dIsuN6/Untitled?node-id=0-1&m=dev&t=E7jT3uWVDjrUWkL1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.figma.com/design/vbeZZet9Y1FttLW8dIsuN6/Untitled?node-id=0-1&m=dev&t=E7jT3uWVDjrUWkL1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  Preview Online
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">Click to view my professional resume design on Figma.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
