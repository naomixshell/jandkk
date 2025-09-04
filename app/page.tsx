"use client";

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { CompanyOverview } from '@/components/sections/CompanyOverview';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <CompanyOverview />
      <ContactSection />
      <Footer />
    </div>
  );
}