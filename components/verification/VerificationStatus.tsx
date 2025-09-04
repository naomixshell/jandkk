"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle, FileText, Calendar } from 'lucide-react';

const verificationRecords = [
  {
    id: "VER-001",
    applicant: "John Smith",
    type: "Employment Verification",
    status: "verified",
    submittedDate: "2025-01-10",
    completedDate: "2025-01-12"
  },
  {
    id: "VER-002",
    applicant: "Sarah Johnson",
    type: "Company Registration",
    status: "pending",
    submittedDate: "2025-01-14",
    completedDate: null
  },
  {
    id: "VER-003",
    applicant: "Ahmed Hassan",
    type: "Hiring Documentation",
    status: "under-review",
    submittedDate: "2025-01-13",
    completedDate: null
  },
];

function getStatusIcon(status: string) {
  switch (status) {
    case 'verified':
      return <CheckCircle className="w-4 h-4 text-green-400" />;
    case 'pending':
      return <Clock className="w-4 h-4 text-yellow-400" />;
    case 'under-review':
      return <AlertCircle className="w-4 h-4 text-blue-400" />;
    default:
      return <FileText className="w-4 h-4 text-gray-400" />;
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'verified':
      return <Badge className="bg-green-600 hover:bg-green-700">Verified</Badge>;
    case 'pending':
      return <Badge className="bg-yellow-600 hover:bg-yellow-700">Pending</Badge>;
    case 'under-review':
      return <Badge className="bg-blue-600 hover:bg-blue-700">Under Review</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
}

export function VerificationStatus() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <FileText className="w-6 h-6 text-green-400" />
          <span>Verification Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {verificationRecords.map((record) => (
            <Card key={record.id} className="bg-gray-900 border-gray-600">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(record.status)}
                    <span className="font-medium text-white">{record.applicant}</span>
                  </div>
                  {getStatusBadge(record.status)}
                </div>
                
                <p className="text-gray-400 text-sm mb-2">{record.type}</p>
                <p className="text-xs text-gray-500 mb-2">ID: {record.id}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>Submitted: {record.submittedDate}</span>
                  </div>
                  {record.completedDate && (
                    <div className="flex items-center space-x-1">
                      <CheckCircle size={12} className="text-green-400" />
                      <span>Completed: {record.completedDate}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-600">
          <h4 className="font-medium text-white mb-2">Verification Process</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Documents are reviewed within 24-48 hours</li>
            <li>• Automated AI verification for standard documents</li>
            <li>• Manual review for complex cases</li>
            <li>• Secure encryption for all uploaded documents</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}