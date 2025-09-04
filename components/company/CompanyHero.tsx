"use client";

import { Building2, Users, Globe, Award } from 'lucide-react';

export function CompanyHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About J&K株式会社
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          A dynamic company established in 2022, specializing in apparel design, automotive solutions, 
          and advanced CAD technology with headquarters in Saitama, Japan.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { icon: Building2, title: "Established", value: "2022", desc: "July 7th Foundation" },
            { icon: Users, title: "Capital", value: "¥5M", desc: "Authorized Capital" },
            { icon: Globe, title: "Business Lines", value: "3", desc: "Core Sectors" },
            { icon: Award, title: "Company No.", value: "0300-01-149220", desc: "Registration Number" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <h3 className="font-semibold text-gray-300 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}