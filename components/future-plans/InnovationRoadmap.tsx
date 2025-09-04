"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Digital Platform Launch",
    description: "Launch comprehensive digital platform for all business divisions",
    status: "in-progress",
    completion: 75
  },
  {
    quarter: "Q2 2025",
    title: "Apparel Design Studio",
    description: "Advanced 3D apparel design and virtual fitting platform",
    status: "planned",
    completion: 0
  },
  {
    quarter: "Q3 2025",
    title: "Automotive E-commerce",
    description: "Online automotive parts marketplace with AR visualization",
    status: "planned",
    completion: 0
  },
  {
    quarter: "Q4 2025",
    title: "CAD Cloud Platform",
    description: "Cloud-based CAD collaboration and data sharing system",
    status: "research",
    completion: 0
  },
  {
    quarter: "Q1 2026",
    title: "AI Design Assistant",
    description: "AI-powered design recommendations and automation",
    status: "concept",
    completion: 0
  },
  {
    quarter: "Q2 2026",
    title: "Integrated Business Platform",
    description: "Unified platform connecting all three business divisions",
    status: "concept",
    completion: 0
  }
];

function getStatusIcon(status: string) {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case 'in-progress':
      return <Clock className="w-5 h-5 text-blue-400" />;
    default:
      return <Calendar className="w-5 h-5 text-gray-400" />;
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'completed':
      return <Badge className="bg-green-600">Completed</Badge>;
    case 'in-progress':
      return <Badge className="bg-blue-600">In Progress</Badge>;
    case 'planned':
      return <Badge className="bg-yellow-600">Planned</Badge>;
    case 'research':
      return <Badge className="bg-purple-600">Research</Badge>;
    default:
      return <Badge variant="secondary">Concept</Badge>;
  }
}

export function InnovationRoadmap() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Innovation Roadmap
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our strategic technology roadmap for the next 24 months
          </p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    {getStatusIcon(item.status)}
                    {index < roadmapItems.length - 1 && (
                      <div className="w-px h-16 bg-gray-600 mt-4"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        {getStatusBadge(item.status)}
                      </div>
                      <span className="text-sm text-blue-400 font-medium">{item.quarter}</span>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    
                    {item.status === 'in-progress' && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-300 mb-1">
                          <span>Progress</span>
                          <span>{item.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
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