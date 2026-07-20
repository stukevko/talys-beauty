# Talys Beauty — Initiative-Website

Hochwertige Landingpage für **Talys Beauty** (Speyer, Altpörtel).

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis (smooth scroll)

## Lokal starten

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Struktur

- `src/components/Hero.tsx` — Full-bleed Hero
- `src/components/Services.tsx` — Leistungen
- `src/components/InstagramGallery.tsx` — Instagram-Style-Galerie
- `src/components/Booking.tsx` — Frontend-only Terminanfrage (`localStorage`)
- `src/data/bookings.ts` — Services + Speicher-Hilfen
- `src/components/Contact.tsx` — Standort, Telefon, Karte
- `src/components/Footer.tsx` / `Navigation.tsx`
- `public/images/` — Hero- und Galerie-Assets

## Terminbuchung (Demo)

Formular unter `#termin` speichert Anfragen clientseitig in `localStorage` (`talys-beauty-bookings`). Kein Backend.

## Kontakt

- Adresse: Roßmarktstraße 36, 67346 Speyer
- Telefon: [01512 0036909](tel:+4915120036909)
- Instagram: [talys_beauty](https://www.instagram.com/talys_beauty/)
