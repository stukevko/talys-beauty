export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-stone-soft/70 px-4 sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-display text-2xl sm:text-3xl tracking-[0.12em] uppercase text-stone-soft mb-3">
            <span className="gold-text">Talys</span> Beauty
          </p>
          <p className="text-sm leading-relaxed max-w-xs">
            Beauty Studio · Speyer Altpörtel
            <br />
            Roßmarktstraße 36 · 67346 Speyer
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
          <a href="#termin" className="hover:text-gold transition-colors">
            Termin
          </a>
          <a href="https://www.instagram.com/talys_beauty/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            Instagram
          </a>
          <a href="tel:+4915120036909" className="hover:text-gold transition-colors">
            01512 0036909
          </a>
          <a href="#top" className="hover:text-gold transition-colors">
            Nach oben
          </a>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto mt-10 pt-6 border-t border-gold/15 flex flex-col sm:flex-row justify-between gap-3 text-xs tracking-wide">
        <p>© {year} Talys Beauty</p>
        <p className="text-stone-soft/40">Initiative-Website · Speyer</p>
      </div>
    </footer>
  )
}
