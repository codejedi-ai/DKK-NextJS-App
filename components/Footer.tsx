import Link from "next/link"
import { Heart, Globe, Users } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-white">Kintrace</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Preserving family cultural legacies through AI-assisted storytelling. Connect generations and keep your
              heritage alive.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>10,000+ Families</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>50+ Cultures</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/stories" className="hover:text-primary transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/families" className="hover:text-primary transition-colors">
                  Families
                </Link>
              </li>
              <li>
                <Link href="/cultures" className="hover:text-primary transition-colors">
                  Cultures
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-primary transition-colors">
                  Archive
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/help" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Kintrace. Preserving cultural legacies with ❤️</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Supported by University of Waterloo</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
