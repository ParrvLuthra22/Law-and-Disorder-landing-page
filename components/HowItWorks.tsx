import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Input a Situation",
    description: "Enter an absurd scenario into the game interface.",
  },
  {
    number: "2",
    title: "AI Analysis",
    description: "Our AI analyzes the situation based on the Indian Constitution.",
  },
  {
    number: "3",
    title: "Get the Verdict",
    description: "Receive a YES, NO, or MAYBE verdict with relevant articles.",
  },
  {
    number: "4",
    title: "Explore Loopholes",
    description: "Discover potential legal loopholes in the situation.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              {index < steps.length - 1 && <ArrowRight className="text-yellow-400 mt-4 hidden lg:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

