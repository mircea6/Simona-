import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { nume, prenume, email, telefon, mesaj } = await request.json();

    // Validare de bază
    if (!nume || !prenume || !email || !mesaj) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate' },
        { status: 400 }
      );
    }

    // Configurare transporter pentru Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Adresa ta de Gmail
        pass: process.env.GMAIL_APP_PASSWORD // App Password pentru Gmail
      }
    });

    // Configurare email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER, // Adresa unde vrei să primești email-urile
      subject: `Mesaj nou de la ${nume} ${prenume} - Mimi Dance Academy`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #e91e63; text-align: center; margin-bottom: 30px; font-family: 'Courgette', cursive;">
              🎭 Mesaj nou de la Mimi Dance Academy
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">Detalii contact:</h3>
              <p><strong>Nume:</strong> ${nume}</p>
              <p><strong>Prenume:</strong> ${prenume}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #e91e63;">${email}</a></p>
              ${telefon ? `<p><strong>Telefon:</strong> <a href="tel:${telefon}" style="color: #e91e63;">${telefon}</a></p>` : ''}
            </div>
            
            <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; border-left: 4px solid #e91e63;">
              <h3 style="color: #333; margin-top: 0;">Mesaj:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${mesaj}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>📧 Trimis prin formularul de contact Mimi Dance Academy</p>
              <p>🕒 Data: ${new Date().toLocaleString('ro-RO')}</p>
            </div>
          </div>
        </div>
      `,
      text: `
Mesaj nou de la formularul de contact:

Nume: ${nume}
Prenume: ${prenume}
Email: ${email}
${telefon ? `Telefon: ${telefon}` : ''}

Mesaj:
${mesaj}

---
Trimis prin formularul de contact Mimi Dance Academy
Data: ${new Date().toLocaleString('ro-RO')}
      `
    };

    // Trimitere email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mesajul a fost trimis cu succes!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Eroare la trimiterea email-ului:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.' },
      { status: 500 }
    );
  }
}
