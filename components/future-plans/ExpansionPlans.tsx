"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Building, Users, Target } from 'lucide-react';

const expansionPlans = [
  {
    region: "Apparel Expansion",
    countries: ["Premium Lines", "Seasonal Collections", "Custom Designs"],
    timeline: "2025-2026",
    investment: "¥50M",
    focus: "Design innovation and manufacturing",
    flag: "👔",
    color: "from-green-500 to-emerald-500"
  },
  {
    region: "Automotive Growth",
    countries: ["Electric Vehicles", "Hybrid Parts", "Smart Components"],
    timeline: "2026-2027",
    investment: "¥80M",
    focus: "Next-generation automotive solutions",
    flag: "🚗",
    color: "from-orange-500 to-red-500"
  },
  {
    region: "CAD Technology",
    countries: ["AI Integration", "Cloud Solutions", "Mobile Apps"],
    timeline: "2027-2028",
    investment: "¥120M",
    focus: "Advanced CAD and design technology",
    flag: "🎨",
    color: "from-blue-500 to-purple-500"
  }
];

export function ExpansionPlans() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Global Expansion Strategy
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Strategic expansion into new markets with localized solutions and partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {expansionPlans.map((plan, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardHeader>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-2xl`}>
                  {plan.flag}
                </div>
                <CardTitle className="text-white text-center">{plan.region}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">Target Markets</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {plan.countries.map((country, i) => (
                      <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-green-400" />
                    <div>
                      <p className="text-xs text-gray-500">Timeline</p>
                      <p className="text-sm text-gray-300">{plan.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-500">Investment</p>
                      <p className="text-sm text-gray-300">{plan.investment}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">Focus Area</p>
                  <p className="text-sm text-gray-300">{plan.focus}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}