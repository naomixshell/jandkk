"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Users, DollarSign, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: "Digital Apparel Design Platform",
    description: "Advanced 3D apparel design system with virtual fitting technology",
    timeline: "Q2 2025",
    progress: 65,
    budget: "¥25M",
    team: "15 designers",
    status: "In Progress",
    impact: "50% faster design process"
  },
  {
    title: "Automotive E-commerce Platform",
    description: "Online marketplace for automotive parts with AR visualization",
    timeline: "Q3 2025",
    progress: 30,
    budget: "¥18M",
    team: "12 developers",
    status: "Development",
    impact: "Enhanced customer experience"
  },
  {
    title: "CAD Cloud Integration",
    description: "Cloud-based CAD collaboration platform with real-time sharing",
    timeline: "Q4 2025",
    progress: 15,
    budget: "¥32M",
    team: "18 engineers",
    status: "Planning",
    impact: "Streamlined design workflow"
  }
];

export function UpcomingProjects() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Upcoming Projects</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Innovative initiatives that will reshape our industry and enhance customer experience
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <Badge className={`${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-500">Timeline</p>
                      <p className="text-sm text-gray-300">{project.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-400" />
                    <div>
                      <p className="text-xs text-gray-500">Team</p>
                      <p className="text-sm text-gray-300">{project.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-yellow-400" />
                    <div>
                      <p className="text-xs text-gray-500">Budget</p>
                      <p className="text-sm text-gray-300">{project.budget}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-500">Expected Impact</p>
                      <p className="text-sm text-gray-300">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-600 hover:bg-blue-700';
    case 'Development':
      return 'bg-green-600 hover:bg-green-700';
    case 'Planning':
      return 'bg-yellow-600 hover:bg-yellow-700';
    default:
      return 'bg-gray-600 hover:bg-gray-700';
  }
}