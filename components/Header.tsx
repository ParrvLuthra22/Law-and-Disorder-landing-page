import Link from "next/link"
import { Gavel } from "lucide-react"

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Gavel className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold">Law & Disorder</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="hover:text-yellow-400 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:text-yellow-400 transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#cta"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors"
              >
                Play Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

