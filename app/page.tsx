import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

