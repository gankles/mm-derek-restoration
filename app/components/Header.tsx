'use client';

import Link from "next/link";
import { useState } from "react";
import { BUSINESS_INFO, SERVICES } from "../lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="border-b border-slate-700 py-2 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="text-emerald-400">📞 {BUSINESS_INFO.phone}</span>
              <span className="hidden sm:block">|</span>
              <span className="text-slate-300">{BUSINESS_INFO.hours}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-red-400">🚨 Emergency Service Available</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-emerald-400 hover:text-emerald-300">
              {BUSINESS_INFO.name}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="hover:text-emerald-400 transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white text-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="grid grid-cols-1 gap-1 p-4">
                    {SERVICES.slice(0, 8).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-3 py-2 rounded hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-sm"
                      >
                        {service.icon} {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-3 py-2 rounded bg-emerald-100 text-emerald-700 font-semibold text-center mt-2"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/locations" className="hover:text-emerald-400 transition-colors">
                Locations
              </Link>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </Link>
              
              {/* CTA Button */}
              <Link
                href="tel:616-648-7775"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: Emergency Service
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-2 mt-4">
                <Link
                  href="/"
                  className="py-2 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="py-2 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/locations"
                  className="py-2 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Locations
                </Link>
                <Link
                  href="/contact"
                  className="py-2 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="tel:616-648-7775"
                  className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg font-semibold transition-colors text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📞 Call Emergency Line
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}