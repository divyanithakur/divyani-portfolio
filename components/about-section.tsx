"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Trophy } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intuitive digital experiences and exploring the latest in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="space-y-6 animate-fade-scale">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Hello! I'm Divyani Gour</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate UI/UX designer and frontend developer currently pursuing my Computer Science
                Engineering degree at MIT ADT University, Pune. I love creating beautiful, functional digital
                experiences that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a strong foundation in Java and Python programming, combined with my design skills in Figma and
                frontend technologies like HTML, CSS, JavaScript, and React, I bring a unique perspective to every
                project I work on.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card
                className="border-l-4 border-l-primary hover-lift bg-gradient-card backdrop-blur-sm animate-fade-scale"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p className="text-sm text-muted-foreground">
                        Computer Science Engineering, MIT ADT University, Pune
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="border-l-4 border-l-accent hover-lift bg-gradient-card backdrop-blur-sm animate-fade-scale"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Community</h4>
                      <p className="text-sm text-muted-foreground">Design Team Member - Cloud Computing Club</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="border-l-4 border-l-secondary hover-lift bg-gradient-card backdrop-blur-sm animate-fade-scale"
                style={{ animationDelay: "0.3s" }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-secondary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Achievement</h4>
                      <p className="text-sm text-muted-foreground">
                        2nd Rank in Hackathon at VIT Pune - UI/UX Designer (3-member team)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Interests & Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift border-primary/30"
                >
                  User Experience Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift border-primary/30"
                >
                  Frontend Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift border-primary/30"
                >
                  App Cloning
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift border-primary/30"
                >
                  Hackathons
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift border-primary/30"
                >
                  Problem Solving
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
