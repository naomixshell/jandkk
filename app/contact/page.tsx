"use client";

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}