import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Jet Set Nails',
    text: 'Präzise Nail Art und langanhaltende Looks — von clean bis statement.',
  },
  {
    num: '02',
    title: 'Fußpflege',
    text: 'Wohlfühl-Pediküre mit Hornhautpflege, Peeling und Shellac für gepflegte Füße.',
  },
  {
    num: '03',
    title: 'BB-Glow Microneedling',
    text: 'Frischer, ebenmäßiger Teint durch gezieltes Microneedling-Treatment.',
  },
  {
    num: '04',
    title: 'Kosmetische Zahnaufhellung',
    text: 'Schonende Aufhellung für ein strahlenderes Lächeln.',
  },
  {
    num: '05',
    title: 'Wimpernlifting',
    text: 'Natürlicher Schwung und offener Blick — ohne Extensions.',
  },
  {
    num: '06',
    title: 'Massage',
    text: 'Professionelle Massagetherapie zum Entspannen und Regenerieren.',
  },
]

export function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leistungen" ref={ref} className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-10 bg-stone-soft overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 0% 0%, rgba(201,168,76,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(10,10,10,0.06), transparent 50%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1100px] mx-auto">
        <motion.header
          className="mb-12 sm:mb-16 md:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">Leistungen</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide leading-[1.1]">
            Behandlungen mit
            <br />
            <span className="font-serif italic font-light gold-text normal-case tracking-normal">Anspruch</span>
          </h2>
          <p className="mt-5 text-muted text-[15px] sm:text-base max-w-md leading-relaxed">
            Alles unter einem Dach — Nägel, Pflege, Glow und Entspannung in Speyer.
          </p>
        </motion.header>

        <div className="services-list">
          {services.map((service, i) => (
            <motion.article
              key={service.num}
              className="services-list__item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.06 }}
            >
              <span className="font-display text-xs tracking-[0.2em] text-gold">{service.num}</span>
              <h3 className="font-display text-lg sm:text-xl tracking-wide">{service.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed md:text-right col-span-2 md:col-span-1 md:col-start-3">
                {service.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
