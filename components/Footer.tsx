import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Law & Disorder. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
            <Link
              href="https://github.com/yourusername/law-and-disorder"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

