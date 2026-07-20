import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Ro%C3%9Fmarktstra%C3%9Fe+36,+67346+Speyer'
const MAPS_EMBED =
  'https://www.google.com/maps?q=Ro%C3%9Fmarktstra%C3%9Fe+36,+67346+Speyer&output=embed'

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="kontakt" ref={ref} className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-10 bg-stone overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 40%), linear-gradient(0deg, rgba(10,10,10,0.03), transparent)',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1100px] mx-auto">
        <motion.header
          className="mb-12 sm:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">Standort & Kontakt</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide leading-[1.1]">
            Speyer,
            <br />
            <span className="font-serif italic font-light gold-text normal-case tracking-normal">am Altpörtel</span>
          </h2>
          <p className="mt-5 text-muted text-[15px] sm:text-base max-w-md leading-relaxed">
            Online Terminanfrage, Telefon oder Instagram — wir freuen uns auf dich.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <dl className="space-y-8">
              <div>
                <dt className="text-[11px] tracking-[0.25em] uppercase text-muted mb-2">Adresse</dt>
                <dd className="font-serif text-xl sm:text-2xl leading-snug">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-muted transition-colors"
                  >
                    Roßmarktstraße 36
                    <br />
                    67346 Speyer
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[11px] tracking-[0.25em] uppercase text-muted mb-2">Telefon</dt>
                <dd>
                  <a
                    href="tel:+4915120036909"
                    className="font-display text-xl sm:text-2xl tracking-wide hover:text-gold-muted transition-colors"
                  >
                    01512 0036909
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[11px] tracking-[0.25em] uppercase text-muted mb-2">Instagram</dt>
                <dd>
                  <a
                    href="https://www.instagram.com/talys_beauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl italic hover:text-gold-muted transition-colors"
                  >
                    @talys_beauty
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#termin" className="btn-primary">
                Termin buchen
              </a>
              <a href="tel:+4915120036909" className="btn-outline-dark">
                Anrufen
              </a>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden border border-ink/10 bg-ink/5"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <iframe
              title="Karte: Talys Beauty, Roßmarktstraße 36, Speyer"
              src={MAPS_EMBED}
              className="map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
