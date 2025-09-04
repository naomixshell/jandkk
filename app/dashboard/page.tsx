"use client";

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Package, 
  FileText, 
  Users, 
  Plus, 
  Edit, 
  Trash2,
  Upload,
  Download,
  TrendingUp
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Products', value: '156', icon: Package, color: 'text-blue-400' },
    { label: 'Pending Verifications', value: '23', icon: FileText, color: 'text-yellow-400' },
    { label: 'Active Users', value: '1,247', icon: Users, color: 'text-green-400' },
    { label: 'Monthly Revenue', value: '¥2.4M', icon: TrendingUp, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage J&K株式会社 operations and content</p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-gray-800 p-1 rounded-lg">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'products', label: 'Products', icon: Package },
              { id: 'verifications', label: 'Verifications', icon: FileText },
              { id: 'content', label: 'Content', icon: Edit },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'New product added', item: 'Premium Business Suit', time: '2 hours ago' },
                      { action: 'Verification completed', item: 'Employment Document #VER-123', time: '4 hours ago' },
                      { action: 'CAD file uploaded', item: 'Automotive Design Template', time: '1 day ago' },
                    ].map((activity, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                        <div>
                          <p className="text-white text-sm">{activity.action}</p>
                          <p className="text-gray-400 text-xs">{activity.item}</p>
                        </div>
                        <span className="text-gray-500 text-xs">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 h-20 flex flex-col items-center justify-center">
                      <Plus className="w-6 h-6 mb-2" />
                      Add Product
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 h-20 flex flex-col items-center justify-center">
                      <Upload className="w-6 h-6 mb-2" />
                      Upload CAD
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 h-20 flex flex-col items-center justify-center">
                      <FileText className="w-6 h-6 mb-2" />
                      Verify Docs
                    </Button>
                    <Button className="bg-orange-600 hover:bg-orange-700 h-20 flex flex-col items-center justify-center">
                      <Download className="w-6 h-6 mb-2" />
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'products' && (
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Product Management</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Premium Business Suit', category: 'Apparel', price: '¥89,900', status: 'Active' },
                    { name: 'CAD Pro Suite', category: 'Software', price: '¥129,900', status: 'Active' },
                    { name: 'Toyota Parts Kit', category: 'Automotive', price: '¥249,900', status: 'Active' },
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{product.name}</h4>
                        <p className="text-gray-400 text-sm">{product.category} • {product.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-600">{product.status}</Badge>
                        <Button size="sm" variant="outline" className="border-gray-600">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600 text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'verifications' && (
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Document Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 'VER-001', type: 'Employment Verification', applicant: 'John Smith', status: 'Verified', date: '2025-01-10' },
                    { id: 'VER-002', type: 'Immigration Document', applicant: 'Sarah Johnson', status: 'Pending', date: '2025-01-14' },
                    { id: 'VER-003', type: 'Hiring Invitation', applicant: 'Ahmed Hassan', status: 'Under Review', date: '2025-01-13' },
                  ].map((verification, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{verification.type}</h4>
                        <p className="text-gray-400 text-sm">{verification.applicant} • {verification.id}</p>
                        <p className="text-gray-500 text-xs">Submitted: {verification.date}</p>
                      </div>
                      <Badge className={
                        verification.status === 'Verified' ? 'bg-green-600' :
                        verification.status === 'Pending' ? 'bg-yellow-600' : 'bg-blue-600'
                      }>
                        {verification.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'content' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-gray-300 text-sm">Company Description</label>
                    <Textarea 
                      className="bg-gray-900 border-gray-600 text-white mt-1"
                      rows={4}
                      defaultValue="Leading company specializing in apparel design, automotive equipment, and CAD solutions based in Saitama, Japan."
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Update Information</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-gray-300 text-sm">Primary Email</label>
                    <Input 
                      className="bg-gray-900 border-gray-600 text-white mt-1"
                      defaultValue="info@jk-corp.co.jp"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm">Phone Number</label>
                    <Input 
                      className="bg-gray-900 border-gray-600 text-white mt-1"
                      defaultValue="+81-48-XXX-XXXX"
                    />
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Update Contact</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}