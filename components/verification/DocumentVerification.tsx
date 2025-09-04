"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, Shield, CheckCircle } from 'lucide-react';

export function DocumentVerification() {
  const [documentType, setDocumentType] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification submission
    console.log('Verification submitted');
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Shield className="w-6 h-6 text-blue-400" />
          <span>Upload Documents</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="document-type" className="text-gray-300">Document Type</Label>
            <Select value={documentType} onValueChange={setDocumentType}>
              <SelectTrigger className="bg-gray-900 border-gray-600 text-white">
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-600">
                <SelectItem value="employment">Employment Verification</SelectItem>
                <SelectItem value="hiring">Hiring Documentation</SelectItem>
                <SelectItem value="registration">Company Registration</SelectItem>
                <SelectItem value="invitation">Official Invitation</SelectItem>
                <SelectItem value="certificate">Professional Certificate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="document-upload" className="text-gray-300">Upload Document</Label>
            <div className="mt-2">
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-lg hover:border-gray-500 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-gray-900 rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
            {uploadedFile && (
              <div className="mt-3 flex items-center space-x-2 text-green-400">
                <CheckCircle size={16} />
                <span className="text-sm">{uploadedFile.name}</span>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="applicant-name" className="text-gray-300">Applicant Name</Label>
            <Input
              id="applicant-name"
              placeholder="Full name as shown in document"
              className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="notes" className="text-gray-300">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any additional information or special requirements..."
              rows={4}
              className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            <FileText className="w-4 h-4 mr-2" />
            Submit for Verification
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}