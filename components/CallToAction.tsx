import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-yellow-400 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Challenge the Law?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the fun and test your wildest scenarios against the Indian Constitution!
        </p>
        <Button size="lg" variant="secondary" className="bg-gray-900 text-yellow-400 hover:bg-gray-800">
          Start Playing Now
        </Button>
      </div>
    </section>
  )
}

