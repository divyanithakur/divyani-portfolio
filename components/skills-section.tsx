"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Palette, Code, Server, Users } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "text-primary",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Prototyping", level: 85 },
        { name: "Wireframing", level: 88 },
        { name: "User Research", level: 75 },
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-accent",
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 78 },
        { name: "Responsive Design", level: 90 },
      ],
      tools: ["React", "Tailwind CSS", "Bootstrap", "Sass"],
    },
    {
      title: "Programming",
      icon: Server,
      color: "text-secondary",
      skills: [
        { name: "Java", level: 70 },
        { name: "Python", level: 60 },
        { name: "Data Structures & Algorithms", level: 60 },
        { name: "Problem Solving", level: 75 },
      ],
      tools: ["Java", "Python", "Git", "VS Code"],
    },
    {
      title: "Design & Collaboration",
      icon: Users,
      color: "text-primary",
      skills: [
        { name: "Team Collaboration", level: 85 },
        { name: "Design Systems", level: 80 },
        { name: "Communication", level: 90 },
        { name: "Project Management", level: 75 },
      ],
      tools: ["Slack", "Trello", "Notion", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover-lift hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary/20 hover:border-l-primary bg-gradient-card backdrop-blur-sm animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-primary text-white animate-glow`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <span className="font-heading font-semibold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Skills with Progress */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="animate-fade-scale"
                      style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-3 bg-muted transition-all duration-1000" />
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift border-primary/30"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
