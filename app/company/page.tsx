"use client";

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CompanyHero } from '@/components/company/CompanyHero';
import { BusinessOperations } from '@/components/company/BusinessOperations';
import { RegionalPresence } from '@/components/company/RegionalPresence';
import { CompanyTimeline } from '@/components/company/CompanyTimeline';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <CompanyHero />
      <BusinessOperations />
      <RegionalPresence />
      <CompanyTimeline />
      <Footer />
    </div>
  );
}