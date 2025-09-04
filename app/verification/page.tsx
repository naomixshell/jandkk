"use client";

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { DocumentVerification } from '@/components/verification/DocumentVerification';
import { VerificationStatus } from '@/components/verification/VerificationStatus';

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Document Verification
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Secure verification system for employment documents, hiring processes, and company registration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <DocumentVerification />
            <VerificationStatus />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}