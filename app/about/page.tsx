"use client";

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, User, MapPin, Calendar, DollarSign, FileText } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About J&K株式会社
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Complete company information and corporate details
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Company Registration Details */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Building2 className="w-6 h-6 text-blue-400" />
                  <span>Company Registration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Company Number</p>
                    <p className="text-white font-mono">0300-01-149220</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Established</p>
                    <p className="text-white">July 7, 2022</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Capital</p>
                    <p className="text-white">¥5,000,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Authorized Shares</p>
                    <p className="text-white">10,000 shares</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Issued Shares</p>
                  <p className="text-white">500 shares</p>
                </div>
              </CardContent>
            </Card>

            {/* Executive Information */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <User className="w-6 h-6 text-purple-400" />
                  <span>Executive Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Chief Executive Officer</p>
                  <p className="text-white text-lg font-semibold">Kan M.D. Ibrahim</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Executive Address</p>
                  <p className="text-white">3-1-15 Oji, Kita-ku, Tokyo</p>
                  <p className="text-white">Satsuki Heim</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Publication Method</p>
                  <p className="text-white">Official Gazette</p>
                </div>
              </CardContent>
            </Card>

            {/* Headquarters */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span>Headquarters</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-white">Saitama, Saba City</p>
                  <p className="text-white">Kita-cho 1-16-12</p>
                  <p className="text-white">Honda Mansion Building 1, Room 210</p>
                  <p className="text-sm text-gray-400 mt-4">Main Operations Center</p>
                </div>
              </CardContent>
            </Card>

            {/* Business Activities */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-orange-400" />
                  <span>Business Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Design, planning, manufacturing, sale and import/export of apparel products</p>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Sale and import/export of automobiles, motorcycles and related equipment</p>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Creation of design drawings using 3D/CAD data and sale of CAD data</p>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">Any related ancillary business activities</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Share Transfer Information */}
          <Card className="bg-gray-800 border-gray-700 mt-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-yellow-400" />
                <span>Share Transfer Restrictions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Any transfer of shares issued by the company requires approval from the general shareholders meeting. 
                Share transfers are subject to company approval and must comply with corporate governance policies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}