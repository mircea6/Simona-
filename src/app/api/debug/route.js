import { NextResponse } from 'next/server';

export async function GET() {
  const debugInfo = {
    nodeEnv: process.env.NODE_ENV,
    gmailUser: process.env.GMAIL_USER ? '✅ Setat' : '❌ Lipsă',
    gmailPassword: process.env.GMAIL_APP_PASSWORD ? '✅ Setat' : '❌ Lipsă',
    contactEmail: process.env.CONTACT_EMAIL || 'Nu este setat',
    timestamp: new Date().toISOString(),
    platform: process.platform,
    nodeVersion: process.version
  };

  return NextResponse.json(debugInfo, { 
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}
