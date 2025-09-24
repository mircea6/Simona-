import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

// Rate limiting cache (in-memory)
const rateLimitCache = new Map<string, { count: number; resetTime: number }>();

// Contact form validation schema
const contactSchema = z.object({
  nume: z.string().min(1, 'Numele este obligatoriu').max(100, 'Numele este prea lung'),
  prenume: z.string().min(1, 'Prenumele este obligatoriu').max(100, 'Prenumele este prea lung'),
  email: z.string().email('Email invalid').max(255, 'Email prea lung'),
  telefon: z.string().min(1, 'Telefonul este obligatoriu').max(20, 'Telefonul este prea lung'),
  mesaj: z.string().min(1, 'Mesajul este obligatoriu').max(2000, 'Mesajul este prea lung'),
  gdpr: z.boolean().refine(val => val === true, 'Trebuie să accepți politica de confidențialitate'),
  // Honeypot field (should be empty)
  company: z.string().optional().refine(val => !val || val === '', 'Honeypot field should be empty'),
  // CSRF token
  csrfToken: z.string().min(1, 'CSRF token invalid')
});

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 30 * 1000; // 30 seconds
  const maxRequests = 1;

  const current = rateLimitCache.get(ip);
  
  if (!current || now > current.resetTime) {
    rateLimitCache.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

// Generate CSRF token
function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Validate CSRF token
function validateCSRFToken(token: string, cookieToken: string): boolean {
  return token === cookieToken;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Prea multe încercări. Te rugăm să aștepți 30 de secunde.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Validate input
    const validationResult = contactSchema.safeParse(body);
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build' || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      // For development/testing, simulate successful email sending
      if (validationResult.success) {
        console.log('Email would be sent to academy.mimidance@gmail.com:', {
          from: 'Mimi Dance Academy <noreply@mimidance.ro>',
          to: 'academy.mimidance@gmail.com',
          subject: `Mesaj nou de la ${validationResult.data.nume} ${validationResult.data.prenume} - Mimi Dance Academy`,
          data: {
            nume: validationResult.data.nume,
            prenume: validationResult.data.prenume,
            email: validationResult.data.email,
            telefon: validationResult.data.telefon,
            mesaj: validationResult.data.mesaj
          }
        });
      }
      
      return NextResponse.json({ ok: true });
    }
    if (!validationResult.success) {
      return NextResponse.json(
        { ok: false, error: 'Date invalide', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { nume, prenume, email, telefon, mesaj, gdpr, company, csrfToken } = validationResult.data;

    // Validate CSRF token
    const cookieToken = request.cookies.get('csrf-token')?.value;
    if (!validateCSRFToken(csrfToken, cookieToken || '')) {
      return NextResponse.json(
        { ok: false, error: 'Token CSRF invalid' },
        { status: 403 }
      );
    }

    // Check honeypot
    if (company && company.trim() !== '') {
      return NextResponse.json(
        { ok: false, error: 'Request invalid' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: 'Mimi Dance Academy <noreply@mimidance.ro>',
      to: ['aoistol5395@gmail.com'],
      subject: `Mesaj nou de la ${nume} ${prenume} - Mimi Dance Academy`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ec4899; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            Mesaj nou de la website-ul Mimi Dance Academy
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Detalii contact:</h3>
            <p><strong>Nume:</strong> ${nume}</p>
            <p><strong>Prenume:</strong> ${prenume}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ec4899;">${email}</a></p>
            <p><strong>Telefon:</strong> <a href="tel:${telefon}" style="color: #ec4899;">${telefon}</a></p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mesaj:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${mesaj}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <p style="margin: 0; color: #0369a1; font-size: 14px;">
              <strong>GDPR:</strong> Utilizatorul a acceptat politica de confidențialitate.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            Acest mesaj a fost trimis automat de la website-ul Mimi Dance Academy<br>
            Data: ${new Date().toLocaleString('ro-RO')}
          </p>
        </div>
      `,
      text: `
        Mesaj nou de la website-ul Mimi Dance Academy
        
        Detalii contact:
        Nume: ${nume}
        Prenume: ${prenume}
        Email: ${email}
        Telefon: ${telefon}
        
        Mesaj:
        ${mesaj}
        
        GDPR: Utilizatorul a acceptat politica de confidențialitate.
        
        Data: ${new Date().toLocaleString('ro-RO')}
      `
    });

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error);
      return NextResponse.json(
        { ok: false, error: 'Eroare la trimiterea email-ului. Te rugăm să încerci din nou.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, error: 'Eroare internă. Te rugăm să încerci din nou.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Generate and return CSRF token
  const token = generateCSRFToken();
  
  const response = NextResponse.json({ csrfToken: token });
  
  // Set CSRF token cookie
  response.cookies.set('csrf-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 3600 // 1 hour
  });
  
  return response;
}
