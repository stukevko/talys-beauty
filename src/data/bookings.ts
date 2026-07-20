export const SERVICES = [
  'Jet Set Nails',
  'Fußpflege',
  'BB-Glow Microneedling',
  'Kosmetische Zahnaufhellung',
  'Wimpernlifting',
  'Massage',
] as const

export type ServiceName = (typeof SERVICES)[number]

export type BookingRequest = {
  id: string
  name: string
  phone: string
  email: string
  service: ServiceName | string
  date: string
  time: string
  message: string
  createdAt: string
}

const STORAGE_KEY = 'talys-beauty-bookings'

export function loadBookings(): BookingRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as BookingRequest[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveBooking(booking: Omit<BookingRequest, 'id' | 'createdAt'>): BookingRequest {
  const entry: BookingRequest = {
    ...booking,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  const next = [entry, ...loadBookings()]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  return entry
}

export function formatBookingDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number)
  if (!y || !m || !d) return isoDate
  return new Date(y, m - 1, d).toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
