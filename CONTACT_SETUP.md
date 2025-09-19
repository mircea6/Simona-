# 📧 Configurare Sistem Contact - Mimi Dance Academy

## 🚀 Instrucțiuni de Configurare

### 1. Obținere API Key Resend

1. **Înregistrare**: Mergi la [https://resend.com/](https://resend.com/)
2. **Creează cont**: Înregistrează-te cu email-ul tău
3. **Obține API Key**: 
   - Mergi la "API Keys" în dashboard
   - Creează un nou API key
   - Copiază cheia (începe cu `re_`)

### 2. Configurare Variabile de Mediu

Creează fișierul `.env.local` în root-ul proiectului:

```bash
# Resend API Key pentru trimiterea email-urilor
RESEND_API_KEY=re_your_actual_api_key_here

# Next.js environment
NODE_ENV=production
```

### 3. Configurare Domeniu în Resend

1. **Adaugă domeniul**: În dashboard-ul Resend, mergi la "Domains"
2. **Verifică DNS**: Urmează instrucțiunile pentru a adăuga record-urile DNS
3. **Folosește domeniul**: În cod, domeniul va fi folosit automat

### 4. Testare Sistem

1. **Start aplicația**: `npm run dev`
2. **Testează formularul**: Mergi la secțiunea "Contact"
3. **Trimite mesaj**: Completează formularul și trimite
4. **Verifică email**: Mesajul ar trebui să ajungă la `academy.mimidance@gmail.com`

## 🔧 Funcționalități Implementate

### ✅ Securitate
- **Rate Limiting**: 1 mesaj per 30 secunde per IP
- **CSRF Protection**: Token unic de securitate
- **Honeypot**: Protecție anti-bot (câmp ascuns)
- **Validare Strictă**: Validare cu Zod pe frontend și backend

### ✅ GDPR Compliance
- **Consimțământ**: Checkbox obligatoriu pentru politica de confidențialitate
- **Fără Logging**: Mesajele nu sunt logate în console în producție
- **Cookie Securizat**: CSRF token în cookie httpOnly, SameSite=Lax

### ✅ Email Template
- **Design Elegant**: Template HTML profesional
- **Toate Detaliile**: Nume, prenume, email, telefon, mesaj
- **Timestamp**: Data și ora trimiterii
- **Fallback Text**: Versiune text pentru clientii simpli

### ✅ UI/UX
- **Stări Vizuale**: Loading, success, error
- **Validare Real-time**: Erori afișate imediat
- **Reset Automat**: Formularul se resetează la succes
- **Responsive**: Funcționează pe toate dispozitivele

## 🐛 Troubleshooting

### Eroare: "Serviciul de email nu este configurat"
- **Cauza**: `RESEND_API_KEY` nu este setat în `.env.local`
- **Soluție**: Adaugă API key-ul în fișierul `.env.local`

### Eroare: "Prea multe încercări"
- **Cauza**: Rate limiting activ (1 mesaj/30s per IP)
- **Soluție**: Așteaptă 30 de secunde sau schimbă IP-ul

### Email-urile nu ajung
- **Verifică**: API key-ul este valid în Resend
- **Verifică**: Domeniul este verificat în Resend
- **Verifică**: Spam folder-ul în Gmail

### Build Error: "Missing API key"
- **Cauza**: Resend se inițializează fără API key
- **Soluție**: Adaugă `RESEND_API_KEY` în `.env.local`

## 📋 Structura API

### POST `/api/contact`
```typescript
// Request
{
  nume: string,
  prenume: string,
  email: string,
  telefon: string,
  mesaj: string,
  gdpr: boolean,
  company?: string, // honeypot
  csrfToken: string
}

// Response Success
{ ok: true }

// Response Error
{ 
  ok: false, 
  error: string,
  details?: ValidationError[]
}
```

### GET `/api/contact`
```typescript
// Response
{ csrfToken: string }
```

## 🎯 Email Template

Email-urile sunt trimise cu:
- **From**: `Mimi Dance Academy <noreply@mimidance.ro>`
- **To**: `academy.mimidance@gmail.com`
- **Subject**: `Mesaj nou de la [Nume] [Prenume] - Mimi Dance Academy`
- **Format**: HTML + Text fallback

## 🔒 Securitate

- **Rate Limiting**: Cache in-memory cu expirare 30s
- **CSRF**: Token unic per sesiune cu cookie httpOnly
- **Honeypot**: Câmp ascuns pentru detectarea bot-urilor
- **Validare**: Schema Zod strictă pentru toate input-urile
- **IP Detection**: Folosește `x-forwarded-for` și `x-real-ip` headers

---

**Sistemul este complet funcțional și gata pentru producție!** 🚀✨
