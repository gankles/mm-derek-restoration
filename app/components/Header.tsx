'use client';

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { BUSINESS_INFO, SERVICES } from "../lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  // Click outside handler for mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Move focus to first menu link
      firstMenuLinkRef.current?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
      if (event.key === 'Escape' && isServicesOpen) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen, isServicesOpen]);

  // Keyboard navigation for dropdown
  function handleDropdownKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    } else if (e.key === 'Escape') {
      setIsServicesOpen(false);
    }
  }

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="border-b border-slate-700 py-2 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1"
                aria-label={`Call us at ${BUSINESS_INFO.phone}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {BUSINESS_INFO.phone}
              </a>
              <span className="hidden sm:block text-slate-500" aria-hidden="true">|</span>
              <span className="text-slate-300">{BUSINESS_INFO.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-red-500 font-semibold">Emergency Service Available</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
              aria-label="M&M Restoration Home"
            >
              {BUSINESS_INFO.name}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="hover:text-emerald-300 transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="hover:text-emerald-300 transition-colors flex items-center"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onKeyDown={handleDropdownKeyDown}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-menu"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div
                    id="services-menu"
                    role="menu"
                    className="absolute top-full left-0 mt-2 w-80 bg-white text-gray-800 shadow-xl rounded-lg"
                  >
                    <div className="grid grid-cols-1 gap-1 p-4">
                      {SERVICES.slice(0, 8).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-3 py-2 rounded hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-sm"
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span aria-hidden="true">{service.icon}</span> {service.name}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block px-3 py-2 rounded bg-emerald-100 text-emerald-700 font-semibold text-center mt-2"
                        role="menuitem"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/locations" className="hover:text-emerald-300 transition-colors">
                Locations
              </Link>
              <Link href="/contact" className="hover:text-emerald-300 transition-colors">
                Contact
              </Link>

              {/* CTA Button */}
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                aria-label={`Call emergency line: ${BUSINESS_INFO.phone}`}
              >
                Call Emergency Line
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
            <div
              id="mobile-menu"
              ref={menuRef}
              className="lg:hidden mt-4 pb-4 border-t border-slate-700"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-2 mt-4">
                <Link
                  ref={firstMenuLinkRef}
                  href="/"
                  className="py-2 hover:text-emerald-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="py-2 hover:text-emerald-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/locations"
                  className="py-2 hover:text-emerald-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Locations
                </Link>
                <Link
                  href="/contact"
                  className="py-2 hover:text-emerald-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg font-semibold transition-colors text-center mt-4 flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Call emergency line: ${BUSINESS_INFO.phone}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Emergency Line
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
