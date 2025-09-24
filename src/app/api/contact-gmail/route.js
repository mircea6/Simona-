import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { nume, prenume, email, telefon, mesaj, gdpr } = await request.json();

    // Validare de bază
    if (!nume || !prenume || !email || !telefon || !mesaj || !gdpr) {
      return NextResponse.json(
        { ok: false, error: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      );
    }

    // Verifică dacă Gmail este configurat
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('Gmail nu este configurat. Verifică .env file.');
      return NextResponse.json(
        { ok: false, error: 'Serviciul de email nu este configurat' },
        { status: 500 }
      );
    }

    // Configurează transporter-ul Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Configurare email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
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
    };

    console.log('Încerc să trimit email cu Gmail...');
    console.log('From:', process.env.GMAIL_USER);
    console.log('To:', process.env.CONTACT_EMAIL || process.env.GMAIL_USER);

    // Trimite email-ul
    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email trimis cu succes:', result.messageId);
    
    return NextResponse.json({ 
      ok: true, 
      message: 'Email trimis cu succes!',
      messageId: result.messageId 
    });

  } catch (error) {
    console.error('Eroare la trimiterea email-ului:', error);
    
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Eroare la trimiterea email-ului: ' + error.message 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Pentru compatibilitate cu CSRF token
  return NextResponse.json({ 
    csrfToken: 'gmail-no-csrf-needed',
    message: 'Gmail endpoint ready' 
  });
}
