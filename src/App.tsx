import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { InstagramGallery } from './components/InstagramGallery'
import { Booking } from './components/Booking'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useLenis } from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <InstagramGallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
