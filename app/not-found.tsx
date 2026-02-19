import Link from "next/link";
import { BUSINESS_INFO } from "./lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4 max-w-2xl">
        <div className="text-8xl font-bold text-emerald-600 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          If you need emergency restoration services, call us right away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            Call {BUSINESS_INFO.phone}
          </a>
          <Link
            href="/"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            Go to Homepage
          </Link>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Looking for something?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
              All Services
            </Link>
            <Link href="/services/water-damage-restoration" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Water Damage
            </Link>
            <Link href="/services/fire-damage-cleanup" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Fire Damage
            </Link>
            <Link href="/services/mold-remediation" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Mold Remediation
            </Link>
            <Link href="/locations" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Service Areas
            </Link>
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Contact Us
            </Link>
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Cost Guides
            </Link>
            <Link href="/about" className="text-emerald-600 hover:text-emerald-700 font-medium">
              About Us
            </Link>
            <Link href="/calculator" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
