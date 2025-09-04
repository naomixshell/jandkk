"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Rocket, Globe2, Users } from 'lucide-react';

const visionPoints = [
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description: "Pioneering AI-powered solutions that transform how businesses operate globally"
  },
  {
    icon: Rocket,
    title: "Rapid Expansion",
    description: "Strategic growth across emerging markets with sustainable business practices"
  },
  {
    icon: Globe2,
    title: "Global Connectivity",
    description: "Building bridges between diverse cultures through shared technological advancement"
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Creating employment opportunities and fostering local tech ecosystems"
  }
];

export function VisionSection() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Vision for the Future
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our vision extends beyond technology sales to creating a global ecosystem 
            where innovation thrives and communities prosper.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}