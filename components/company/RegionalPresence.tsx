"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Building, TrendingUp } from 'lucide-react';

const regions = [
  {
    country: "Japan (HQ)",
    city: "Saitama",
    flag: "🇯🇵",
    established: "2022",
    employees: "Growing",
    office: "Headquarters",
    focus: "Main Operations & Management",
    gradient: "from-red-500 to-orange-500"
  },
  {
    country: "Apparel Division",
    city: "Design Center",
    flag: "👔",
    established: "2022",
    employees: "Design Team",
    office: "Product Development",
    focus: "Apparel Design & Manufacturing",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    country: "Automotive Division",
    city: "Equipment Center",
    flag: "🚗",
    established: "2022",
    employees: "Sales Team",
    office: "Import/Export Hub",
    focus: "Automotive & Motorcycle Equipment",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    country: "CAD Division",
    city: "Design Studio",
    flag: "🎨",
    established: "2022",
    employees: "CAD Specialists",
    office: "Technical Center",
    focus: "3D/CAD Design & Data Solutions",
    gradient: "from-purple-500 to-pink-500"
  },
];

export function RegionalPresence() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Global Presence
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Strategically positioned across four key markets, Tohon AI maintains 
            a strong regional presence to serve customers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${region.gradient} flex items-center justify-center text-2xl`}>
                    {region.flag}
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{region.country}</CardTitle>
                    <p className="text-gray-400">{region.city} • {region.office}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Building className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Est. {region.established}</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">{region.employees}</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Growing</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{region.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}