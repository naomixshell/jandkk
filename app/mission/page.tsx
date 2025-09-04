"use client";

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { MissionHero } from '@/components/mission/MissionHero';
import { VisionSection } from '@/components/mission/VisionSection';
import { ValuesSection } from '@/components/mission/ValuesSection';

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <MissionHero />
      <VisionSection />
      <ValuesSection />
      <Footer />
    </div>
  );
}