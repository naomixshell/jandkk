"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, TrendingUp, Award } from 'lucide-react';

const regions = [
  { name: 'Apparel Design', color: 'from-red-500 to-orange-500' },
  { name: 'Automotive Solutions', color: 'from-green-500 to-emerald-500' },
  { name: 'CAD Technology', color: 'from-blue-500 to-cyan-500' },
  { name: 'Import/Export', color: 'from-purple-500 to-pink-500' },
];

const stats = [
  { label: 'Years in Business', value: '3+', icon: Award },
  { label: 'Capital', value: '¥5M', icon: TrendingUp },
  { label: 'Business Lines', value: '3', icon: Users },
  { label: 'Headquarters', value: 'Saitama', icon: MapPin },
];

export function CompanyOverview() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Diversified Business Solutions
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            J&K株式会社 operates across three core business sectors: apparel design, automotive solutions, 
            and CAD technology, delivering premium services with innovation and quality.
          </p>
        </div>

        {/* Regional Operations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, index) => (
            <Card key={region.name} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${region.color} flex items-center justify-center`}>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{region.name}</h3>
                <p className="text-gray-400 text-sm mt-2">Business Division</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="bg-gray-900 border-gray-700 text-center">
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}