"use client";

import { Target, Eye, Heart } from 'lucide-react';

export function MissionHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Mission
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Empowering global communities through innovative technology solutions that bridge cultures and create opportunities
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To democratize access to premium technology across emerging markets while fostering 
              innovation and economic growth in every region we serve.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <Eye className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the leading technology bridge connecting Asia and the Middle East, 
              creating a world where geographical boundaries don't limit technological access.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
            <p className="text-gray-300 leading-relaxed">
              Quality, innovation, and customer satisfaction guide everything we do. We believe in 
              delivering exceptional products and services that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}