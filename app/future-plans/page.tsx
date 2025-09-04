"use client";

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { FuturePlansHero } from '@/components/future-plans/FuturePlansHero';
import { UpcomingProjects } from '@/components/future-plans/UpcomingProjects';
import { ExpansionPlans } from '@/components/future-plans/ExpansionPlans';
import { InnovationRoadmap } from '@/components/future-plans/InnovationRoadmap';

export default function FuturePlansPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <FuturePlansHero />
      <UpcomingProjects />
      <ExpansionPlans />
      <InnovationRoadmap />
      <Footer />
    </div>
  );
}