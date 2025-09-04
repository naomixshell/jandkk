"use client";

import { Shield, Users, Zap, Award, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest business practices and transparent operations in every market"
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Technology should be accessible to everyone, regardless of location or background"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Continuously pushing boundaries to deliver cutting-edge solutions"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Commitment to quality in every product, service, and interaction"
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building lasting relationships and supporting local development"
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Responsible business practices for a better future"
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            These principles guide our decisions and shape our culture across all regions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}