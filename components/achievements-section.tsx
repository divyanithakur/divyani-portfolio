"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, Calendar } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      title: "VIT Pune Hackathon - 2nd Place",
      description:
        "Secured 2nd rank in a competitive hackathon at VIT Pune, contributing as the lead UI/UX designer for our team's innovative solution.",
      icon: Trophy,
      date: "2024",
      category: "Hackathon",
      highlights: ["Lead UI/UX Designer", "Team of 4 members", "48-hour challenge", "Innovative solution design"],
    },
    {
      title: "Cloud Computing Club Member",
      description:
        "Active member of the Cloud Computing Club at MIT ADT University, participating in workshops and collaborative projects.",
      icon: Users,
      date: "2023 - Present",
      category: "Community",
      highlights: ["Active participation", "Workshop attendance", "Collaborative projects", "Knowledge sharing"],
    },
    {
      title: "Academic Excellence",
      description:
        "Maintaining strong academic performance in Computer Science Engineering with focus on practical application of concepts.",
      icon: Award,
      date: "2023 - Present",
      category: "Academic",
      highlights: ["Consistent performance", "Practical projects", "Technical skills", "Problem-solving approach"],
    },
  ]

  const certifications = [
    "UI/UX Design Fundamentals",
    "Frontend Development with React",
    "Python Programming",
    "Java Object-Oriented Programming",
    "Git & Version Control",
  ]

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that showcase my dedication to learning and excellence
          </p>
        </div>

        {/* Major Achievements */}
        <div className="space-y-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <CardTitle className="font-heading font-semibold text-xl">{achievement.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{achievement.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{achievement.description}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {achievement.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-accent" />
                <span className="font-heading font-semibold">Certifications & Courses</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hackathon Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-primary" />
                <span className="font-heading font-semibold">Hackathon Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">VIT Pune Hackathon 2024</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Led the UI/UX design for our team's solution, focusing on user-centered design principles and
                    creating an intuitive interface that contributed to our 2nd place finish.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      UI/UX Design
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Team Leadership
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Rapid Prototyping
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      User Research
                    </Badge>
                  </div>
                </div>

                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <Trophy className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg text-foreground mb-2">2nd Place Winner</h4>
                  <p className="text-sm text-muted-foreground">Out of 50+ participating teams</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
