"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Laptop, Headphones, Cpu, Shield, Truck } from 'lucide-react';

const businessTypes = [
  {
    title: "Apparel Products",
    description: "Design, planning, manufacturing, sale and import/export of apparel",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Automotive Equipment",
    description: "Sale and import/export of automobiles, motorcycles and related equipment",
    icon: Truck,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "CAD Solutions",
    description: "Creation of design drawings using 3D/CAD data and CAD data sales",
    icon: Cpu,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Import/Export Services",
    description: "International trade and logistics for all product categories",
    icon: Globe,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Document Verification",
    description: "Document verification and authentication",
    icon: Shield,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Design Services",
    description: "Professional design and planning services",
    icon: Target,
    color: "from-yellow-500 to-orange-500"
  },
];

export function BusinessOperations() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Business Operations
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Tohon AI operates across multiple business sectors, delivering comprehensive 
            technology solutions with expertise in each domain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((business, index) => {
            const Icon = business.icon;
            return (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${business.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-center">{business.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400">{business.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}