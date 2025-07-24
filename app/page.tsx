import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Process from "@/components/Process"
import CaseStudies from "@/components/CaseStudies"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <CaseStudies />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
