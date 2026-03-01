import type { Metadata } from "next";
import Link from "next/link";
import { buildSEOTitle } from "../lib/utils";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: buildSEOTitle([
    "Restoration Cost Calculator",
    "Estimate Water, Fire, Mold & Storm Damage Repair Costs",
    "Free On-Site Assessments in Greater Lansing",
    "Direct Insurance Billing Available",
    "M&M Restoration",
  ]),
  description: "Estimate your restoration costs for water damage, fire damage, mold remediation, and storm repair in Greater Lansing, MI. Free interactive calculator with realistic pricing. Call (616) 648-7775 for a free on-site assessment.",
  alternates: {
    canonical: "/restoration-cost-calculator",
  },
  openGraph: {
    title: "Restoration Cost Calculator | M&M Restoration",
    description: "Estimate your water damage, fire, mold, or storm restoration costs in Greater Lansing. Free calculator with realistic pricing based on local averages.",
  },
};

export default function CostCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6">
              <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">Home</Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-300">Restoration Cost Calculator</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restoration <span className="text-emerald-300">Cost Calculator</span>
            </h1>
            <p className="text-xl text-slate-200 mb-4">
              Get a quick estimate of what your water damage, fire damage, mold remediation, or storm repair might cost in the Greater Lansing area.
            </p>
            <p className="text-slate-300">
              For an accurate quote, call us for a free on-site assessment. Most insurance claims mean you only pay your deductible.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Component */}
      <Calculator />
    </div>
  );
}
