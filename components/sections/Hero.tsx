"use client";

import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            J&K株式会社
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Premium Apparel Design, Automotive Solutions & CAD Technology
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Established in 2022, we specialize in apparel product design, automotive equipment, 
            and advanced CAD solutions with headquarters in Saitama, Japan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Explore Products <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/company">
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                Company Overview
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">CAD Solutions</h3>
              <p className="text-gray-400">Advanced 3D/CAD design and data solutions</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Apparel Design</h3>
              <p className="text-gray-400">Premium apparel product design and manufacturing</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-colors">
              <Shield className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automotive Solutions</h3>
              <p className="text-gray-400">Automotive and motorcycle equipment solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}