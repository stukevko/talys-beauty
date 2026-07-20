import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { assetUrl } from '../lib/assets'

const PROFILE_URL = 'https://www.instagram.com/talys_beauty/'
const USERNAME = 'talys_beauty'

const POSTS = [
  {
    src: assetUrl('images/ig-nails-black.jpg'),
    alt: 'Schwarze Nail Art mit Gold- und Marmorakzenten',
    label: 'Jet Set Nails',
  },
  {
    src: assetUrl('images/ig-nails-floral.jpg'),
    alt: 'Nude Nail Art mit floralen Details',
    label: 'Nail Art',
  },
  {
    src: assetUrl('images/ig-nails-green.jpg'),
    alt: 'Smaragdgrüne Stiletto-Nägel',
    label: 'Statement Look',
  },
  {
    src: assetUrl('images/ig-pedicure.jpg'),
    alt: 'Gepflegte Pediküre',
    label: 'Fußpflege',
  },
  {
    src: assetUrl('images/gallery-atmosphere.jpg'),
    alt: 'Studio-Atmosphäre mit Maniküre',
    label: 'Studio',
  },
  {
    src: assetUrl('images/ig-lash.jpg'),
    alt: 'Wimpernlifting Ergebnis',
    label: 'Wimpernlifting',
  },
]

export function InstagramGallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="galerie"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-10 bg-ink text-stone-soft overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(201,168,76,0.14), transparent 55%), linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1200px] mx-auto">
        <motion.header
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold/80 mb-4">Instagram</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide leading-[1.1]">
            Einblicke aus dem
            <br />
            <span className="font-serif italic font-light gold-text normal-case tracking-normal">Studio</span>
          </h2>
          <p className="mt-5 text-stone-soft/60 max-w-md mx-auto text-[15px] sm:text-base leading-relaxed">
            Nail Art, After-Shots und Treatments — folge @{USERNAME} für aktuelle Arbeiten.
          </p>
        </motion.header>

        <div className="ig-grid">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.src}
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-grid__item"
              aria-label={`${post.label} auf Instagram ansehen`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 + i * 0.07 }}
            >
              <img src={post.src} alt={post.alt} loading="lazy" width={800} height={800} />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-10 sm:mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
        >
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex w-full sm:w-auto max-w-sm"
          >
            @{USERNAME} auf Instagram
            <span aria-hidden>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
