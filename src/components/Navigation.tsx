import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#termin', label: 'Termin' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const solidOpacity = useTransform(scrollY, [0, 100], [0, 0.94])

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 36))
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav-bar fixed inset-x-0 top-0 z-40">
      {/* Always-on top scrim so links stay readable over the hero */}
      <div className="nav-bar__scrim" aria-hidden />
      <motion.div className="nav-bar__solid" style={{ opacity: solidOpacity }} aria-hidden />

      <div
        className={`relative flex items-center justify-between gap-4 px-4 sm:px-6 md:px-10 py-4 transition-[border-color] duration-300 ${
          scrolled || open ? 'border-b border-[rgba(201,168,76,0.22)]' : 'border-b border-transparent'
        }`}
      >
        <a href="#top" className="relative z-10 font-display text-sm sm:text-base tracking-[0.2em] uppercase">
          <span className="gold-text">Talys</span>
          <span className="nav-bar__brand-rest"> Beauty</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-bar__link">
              {link.label}
            </a>
          ))}
          <a href="#termin" className="btn-primary text-[11px] px-5 py-2.5 min-h-0">
            Termin buchen
          </a>
        </nav>

        <button
          type="button"
          className="nav-bar__menu-btn md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-px bg-current transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <motion.nav
          className="nav-bar__mobile md:hidden absolute inset-x-0 top-full px-4 py-8 flex flex-col gap-6"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-2xl tracking-wide text-[#f4f2ee]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#termin" className="btn-primary w-full" onClick={() => setOpen(false)}>
            Termin buchen
          </a>
          <a href="tel:+4915120036909" className="btn-ghost w-full text-center" onClick={() => setOpen(false)}>
            Anrufen
          </a>
        </motion.nav>
      )}
    </header>
  )
}
