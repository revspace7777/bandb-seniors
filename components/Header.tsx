"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-100 py-2 hidden lg-block">
        <div className="container">
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:9049971844" className="flex items-center space-x-2 text-gray-700">
              <Phone size={16} />
              <span>(904) 997-1844</span>
            </a>
            <a href="mailto:bandbmovers@comcast.net" className="flex items-center space-x-2 text-gray-700">
              <Mail size={16} />
              <span>bandbmovers@comcast.net</span>
            </a>
            <a
              href="https://maps.app.goo.gl/6DoeA9Bm9M17Ea4SA"
              target="_blank"
              className="flex items-center space-x-2 text-gray-700"
              rel="noreferrer"
            >
              <MapPin size={16} />
              <span>6558 Beach Boulevard Jacksonville, Florida. 32216</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black shadow-md sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/bandblogo.svg"
                alt="B&B Movers Logo"
                width={110}
                height={102}
                className="h-16 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg-flex items-center space-x-4">
              <Link href="/" className="text-white px-4 py-2">
                Home
              </Link>
              <Link href="/families" className="text-white px-4 py-2">
                For Families
              </Link>
              <Link href="/professionals" className="text-white px-4 py-2">
                For Professionals
              </Link>
              <Link href="/about" className="text-white px-4 py-2">
                About
              </Link>
              <Link href="#contact" className="text-white px-4 py-2">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg-block">
              <a href="#contact" className="btn-primary">
                Get A Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg-hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg-hidden py-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-white px-4 py-2">
                  Home
                </Link>
                <Link href="/families" className="text-white px-4 py-2">
                  For Families
                </Link>
                <Link href="/professionals" className="text-white px-4 py-2">
                  For Professionals
                </Link>
                <Link href="/about" className="text-white px-4 py-2">
                  About
                </Link>
                <Link href="#contact" className="text-white px-4 py-2">
                  Contact
                </Link>
                <div className="pt-4">
                  <a href="#contact" className="btn-primary block text-center">
                    Get A Quote
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
