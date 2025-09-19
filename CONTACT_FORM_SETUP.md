# Configurare Contact Form - Mimi Dance Academy

## 📧 Configurare Email Automat

Am implementat un sistem complet de contact form care trimite automat email-uri la adresa ta de Gmail când utilizatorii completează formularul.

## 🔧 Pași de Configurare

### 1. Creează fișierul .env.local

Copiază fișierul `env.example` ca `.env.local` în directorul rădăcină al proiectului:

```bash
cp env.example .env.local
```

### 2. Configurează Gmail App Password

Pentru a folosi Gmail cu aplicația, ai nevoie de un App Password (nu parola normală):

1. **Mergi la Google Account Settings**: https://myaccount.google.com/
2. **Activează 2-Step Verification** (dacă nu este deja activată):
   - Security → 2-Step Verification → Turn on
3. **Generează App Password**:
   - Security → 2-Step Verification → App passwords
   - Selectează "Mail" ca aplicație
   - Copiază parola generată (16 caractere)

### 3. Completează .env.local

Editează fișierul `.env.local` cu datele tale:

```env
# Adresa ta de Gmail
GMAIL_USER=your-email@gmail.com

# App Password generat (16 caractere)
GMAIL_APP_PASSWORD=your-16-character-app-password

# Adresa unde vrei să primești email-urile (opțional)
CONTACT_EMAIL=your-email@gmail.com
```

### 4. Testează Funcționalitatea

1. Pornește aplicația: `npm run dev`
2. Mergi la secțiunea Contact
3. Completează formularul și trimite
4. Verifică că primești email-ul automat

## 🎨 Funcționalități

### ✅ Ce am implementat:

- **API Endpoint**: `/api/contact` pentru procesarea formularului
- **Email HTML**: Email-uri frumos formatate cu stilizare
- **Validare**: Validare completă a datelor pe frontend și backend
- **Feedback**: Mesaje de succes/eroare pentru utilizator
- **Responsive**: Funcționează pe toate dispozitivele
- **Securitate**: Validare și sanitizare a datelor

### 📧 Format Email

Email-urile primite vor avea:
- **Subiect**: "Mesaj nou de la [Nume] [Prenume] - Mimi Dance Academy"
- **Conținut HTML**: Formatat frumos cu stilizare
- **Informații**: Nume, prenume, email, telefon, mesaj
- **Timestamp**: Data și ora trimiterii

### 🔒 Securitate

- Validare pe frontend și backend
- Sanitizare a datelor de intrare
- Rate limiting prin Next.js
- Variabile de mediu pentru credențiale

## 🚀 Deployment

Pentru deployment pe Vercel/Netlify:

1. Adaugă variabilele de mediu în dashboard-ul platformei
2. Nu include fișierul `.env.local` în repository
3. Testează funcționalitatea în producție

## 🛠️ Troubleshooting

### Probleme comune:

1. **"Invalid login"**: Verifică că folosești App Password, nu parola normală
2. **"2-Step Verification required"**: Activează 2-Step Verification în Google Account
3. **Email-urile nu ajung**: Verifică folderul Spam
4. **Eroare 500**: Verifică că toate variabilele de mediu sunt setate corect

### Logs pentru debugging:

Verifică console-ul browser-ului și terminalul pentru erori detaliate.

## 📞 Suport

Dacă întâmpini probleme, verifică:
1. Configurarea variabilelor de mediu
2. App Password-ul Gmail
3. Logs-urile din console
4. Conectivitatea la internet

---

**Notă**: Acest sistem este complet funcțional și gata de utilizare. Doar completează configurarea Gmail și vei primi email-uri automate!
