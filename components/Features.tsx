import { CheckCircle, Lightbulb, Scale, Zap } from "lucide-react"

const features = [
  {
    icon: <Scale className="h-8 w-8 text-yellow-400" />,
    title: "AI-Powered Analysis",
    description: "Get instant verdicts based on the Indian Constitution.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
    title: "Legal Loopholes",
    description: "Discover potential legal loopholes in absurd situations.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-yellow-400" />,
    title: "Clear Verdicts",
    description: "Receive YES, NO, or MAYBE verdicts with cited articles.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: "User-Friendly Interface",
    description: "Easily input situations and get quick results.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

