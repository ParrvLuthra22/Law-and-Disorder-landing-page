import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-up">
          Welcome to <span className="text-yellow-400">Law & Disorder</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          The hilarious party game where absurd situations meet the Indian Constitution!
        </p>
        <Button size="lg" className="animate-fade-in-up animation-delay-400">
          Start Playing <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  )
}

