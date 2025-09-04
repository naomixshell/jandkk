"use client";

import { Rocket, Calendar, Target } from 'lucide-react';

export function FuturePlansHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Future Plans
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Shaping tomorrow's technology landscape with ambitious projects and strategic expansion
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">2025 Goals</h3>
            <p className="text-gray-400">Revolutionary product launches and market expansion</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Roadmap</h3>
            <p className="text-gray-400">Detailed timeline for upcoming innovations and milestones</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <Target className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Vision 2030</h3>
            <p className="text-gray-400">Long-term strategic objectives and market leadership goals</p>
          </div>
        </div>
      </div>
    </section>
  );
}