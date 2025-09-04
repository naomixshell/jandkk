"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Building2, Rocket, Globe, Award, Users, TrendingUp } from 'lucide-react';

const timelineEvents = [
  {
    year: "2022",
    title: "Company Founded",
    description: "J&K株式会社 established in Saitama on July 7th with ¥5M capital",
    icon: Building2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2022",
    title: "Business Registration",
    description: "Official company registration (0300-01-149220) and headquarters establishment",
    icon: Rocket,
    color: "from-green-500 to-teal-500"
  },
  {
    year: "2023",
    title: "Apparel Division Launch",
    description: "Started apparel design, planning, and manufacturing operations",
    icon: Globe,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2023",
    title: "Automotive Division",
    description: "Expanded into automotive and motorcycle equipment import/export",
    icon: Users,
    color: "from-orange-500 to-red-500"
  },
  {
    year: "2024",
    title: "CAD Technology",
    description: "Launched 3D/CAD design services and CAD data solutions",
    icon: Award,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description: "Implementing digital verification systems and online presence",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500"
  }
];

export function CompanyTimeline() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Journey</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Three years of growth and diversification across multiple business sectors since 2022
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px w-px h-full bg-gray-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center">
                    <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 order-2'}`}>
                      <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            {!isEven && <Icon className="w-6 h-6 text-blue-400" />}
                            <span className="text-2xl font-bold text-blue-400">{event.year}</span>
                            {isEven && <Icon className="w-6 h-6 text-blue-400" />}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-400">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center border-4 border-gray-900">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xl font-bold text-blue-400">{event.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-400">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}