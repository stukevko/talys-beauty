import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import {
  SERVICES,
  saveBooking,
  formatBookingDate,
  type BookingRequest,
} from '../data/bookings'

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  message: string
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

export function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormState>(initialForm)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState<BookingRequest | null>(null)

  const minDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().slice(0, 10)
  }, [])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (error) setError('')
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const name = form.name.trim()
    const phone = form.phone.trim()
    const email = form.email.trim()

    if (!name) {
      setError('Bitte gib deinen Namen an.')
      return
    }
    if (!phone && !email) {
      setError('Bitte Telefonnummer oder E-Mail hinterlassen.')
      return
    }
    if (!form.service) {
      setError('Bitte eine Leistung auswählen.')
      return
    }
    if (!form.date || !form.time) {
      setError('Bitte Wunschdatum und -zeit angeben.')
      return
    }

    const entry = saveBooking({
      name,
      phone,
      email,
      service: form.service,
      date: form.date,
      time: form.time,
      message: form.message.trim(),
    })

    setSubmitted(entry)
    setForm(initialForm)
  }

  function resetFlow() {
    setSubmitted(null)
    setError('')
  }

  return (
    <section
      id="termin"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-10 bg-stone-soft overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 100% 10%, rgba(201,168,76,0.14), transparent 50%), linear-gradient(180deg, transparent, rgba(10,10,10,0.03))',
        }}
        aria-hidden
      />

      <div className="relative max-w-[900px] mx-auto">
        <motion.header
          className="mb-12 sm:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">Termin</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide leading-[1.1]">
            Wunschtermin
            <br />
            <span className="font-serif italic font-light gold-text normal-case tracking-normal">anfragen</span>
          </h2>
          <p className="mt-5 text-muted text-[15px] sm:text-base max-w-md leading-relaxed">
            Wähle Leistung, Datum und Uhrzeit — wir melden uns zur Bestätigung. Die Anfrage bleibt lokal in diesem Browser gespeichert (Demo).
          </p>
        </motion.header>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="booking-success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              role="status"
              aria-live="polite"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold-muted mb-4">Anfrage erhalten</p>
              <h3 className="font-display text-2xl sm:text-3xl tracking-wide mb-4">
                Danke, {submitted.name.split(' ')[0]}.
              </h3>
              <p className="font-serif italic text-xl text-muted mb-8 max-w-lg">
                Deine Terminanfrage für {submitted.service} am {formatBookingDate(submitted.date)} um{' '}
                {submitted.time} Uhr ist gespeichert.
              </p>

              <dl className="booking-summary">
                <div>
                  <dt>Leistung</dt>
                  <dd>{submitted.service}</dd>
                </div>
                <div>
                  <dt>Datum</dt>
                  <dd>{formatBookingDate(submitted.date)}</dd>
                </div>
                <div>
                  <dt>Uhrzeit</dt>
                  <dd>{submitted.time} Uhr</dd>
                </div>
                {(submitted.phone || submitted.email) && (
                  <div>
                    <dt>Kontakt</dt>
                    <dd>{[submitted.phone, submitted.email].filter(Boolean).join(' · ')}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button type="button" className="btn-primary" onClick={resetFlow}>
                  Weitere Anfrage
                </button>
                <a href="tel:+4915120036909" className="btn-outline-dark">
                  Lieber anrufen
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="booking-form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="booking-field">
                <label htmlFor="booking-name">Name</label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Vor- und Nachname"
                />
              </div>

              <div className="booking-row">
                <div className="booking-field">
                  <label htmlFor="booking-phone">Telefon</label>
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="01512 …"
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="booking-email">E-Mail</label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="optional, falls kein Telefon"
                  />
                </div>
              </div>

              <div className="booking-field">
                <label htmlFor="booking-service">Leistung</label>
                <select
                  id="booking-service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-row">
                <div className="booking-field">
                  <label htmlFor="booking-date">Wunschdatum</label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    required
                    min={minDate}
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="booking-time">Wunschzeit</label>
                  <input
                    id="booking-time"
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => update('time', e.target.value)}
                  />
                </div>
              </div>

              <div className="booking-field">
                <label htmlFor="booking-message">Nachricht</label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Optional — z. B. Allergien, Wunsch-Look, flexibel bei der Uhrzeit…"
                />
              </div>

              {error && (
                <p className="booking-error" role="alert">
                  {error}
                </p>
              )}

              <div className="booking-actions">
                <button type="submit" className="btn-primary">
                  Anfrage senden
                </button>
                <p className="booking-hint">
                  Kein Versand an den Server — Speicherung nur lokal als Demo für die Initiative.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
