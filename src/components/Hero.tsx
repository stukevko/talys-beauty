import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section id="top" ref={ref} className="hero">
      <motion.div className="hero__media" style={{ y: imageY, scale: imageScale }}>
        <img
          src="/images/hero-nails.jpg"
          alt="Luxuriöse Nail Art von Talys Beauty"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </motion.div>
      <div className="hero__veil" aria-hidden />

      <motion.div className="hero__content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="font-display text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.95] tracking-[0.04em] uppercase mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="gold-text">Talys Beauty</span>
        </motion.p>

        <motion.h1
          className="font-serif italic font-light text-[clamp(1.75rem,4.5vw,3rem)] leading-tight text-stone-soft/95 max-w-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Luxus für Hände, Füße und Ausstrahlung
        </motion.h1>

        <motion.p
          className="mt-5 sm:mt-6 max-w-md text-[15px] sm:text-base text-stone-soft/70 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Beauty Studio in Speyer am Altpörtel — Jet Set Nails, Pflege und Treatments mit präzisem Anspruch.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <a href="#termin" className="btn-primary">
            Termin buchen
          </a>
          <a href="#galerie" className="btn-ghost">
            Arbeiten ansehen
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
