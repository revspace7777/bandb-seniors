import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/bandblogo.svg"
              alt="B&B Movers Logo"
              width={110}
              height={102}
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Jacksonville's trusted moving company for over 40 years. Specializing in compassionate senior relocations
              and comprehensive moving services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/families" className="hover:text-white">
                  Senior Relocations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Local Moves
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Long Distance Moves
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Storage & Warehouse
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Packing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/families" className="hover:text-white">
                  For Families
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-white">
                  For Professionals
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-red-400" />
                <div>
                  <div>6558 Beach Blvd.</div>
                  <div>Jacksonville, FL 32216</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-400" />
                <div>bandbmovers@comcast.net</div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-400" />
                <div>(904) 997-1844</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">Copyright © 2025 B&B Movers</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
