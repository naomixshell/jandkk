import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const documentType = formData.get('documentType') as string;
    const applicantName = formData.get('applicantName') as string;
    const file = formData.get('file') as File;
    
    // Simulate verification process
    const verificationId = `VER-${Date.now()}`;
    
    // In a real implementation, you would:
    // 1. Store the file securely
    // 2. Run AI-powered document analysis
    // 3. Queue for manual review if needed
    // 4. Update verification status in database
    
    return NextResponse.json({
      success: true,
      verificationId,
      status: 'pending',
      message: 'Document submitted successfully for verification'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Verification submission failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return verification status for all submitted documents
  const verifications = [
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
    }
  ];

  return NextResponse.json({ verifications });
}