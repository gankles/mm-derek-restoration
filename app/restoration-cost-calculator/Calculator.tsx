'use client';

import { useState } from "react";
import Link from "next/link";
import { BUSINESS_INFO } from "../lib/constants";

type DamageType = "" | "water" | "fire" | "mold" | "storm";
type Severity = "" | "minor" | "moderate" | "major";
type AreaAffected = "" | "single-room" | "multiple-rooms" | "entire-floor" | "whole-house";
type WaterCategory = "" | "category-1" | "category-2" | "category-3";
type PropertyType = "" | "house" | "condo" | "apartment" | "commercial";

interface CostResult {
  lowEstimate: number;
  highEstimate: number;
  typicalInsurance: string;
  timeline: string;
  deductibleNote: string;
}

const BASE_COSTS: Record<string, Record<string, { low: number; high: number }>> = {
  water: {
    minor: { low: 1200, high: 2500 },
    moderate: { low: 2500, high: 5000 },
    major: { low: 5000, high: 12000 },
  },
  fire: {
    minor: { low: 2500, high: 5000 },
    moderate: { low: 5000, high: 20000 },
    major: { low: 20000, high: 50000 },
  },
  mold: {
    minor: { low: 500, high: 1500 },
    moderate: { low: 1500, high: 4000 },
    major: { low: 4000, high: 10000 },
  },
  storm: {
    minor: { low: 1000, high: 3000 },
    moderate: { low: 3000, high: 10000 },
    major: { low: 10000, high: 25000 },
  },
};

const AREA_MULTIPLIERS: Record<string, number> = {
  "single-room": 1.0,
  "multiple-rooms": 1.6,
  "entire-floor": 2.2,
  "whole-house": 3.0,
};

const PROPERTY_MULTIPLIERS: Record<string, number> = {
  "house": 1.0,
  "condo": 0.85,
  "apartment": 0.75,
  "commercial": 1.4,
};

const WATER_CATEGORY_MULTIPLIERS: Record<string, number> = {
  "category-1": 1.0,
  "category-2": 1.3,
  "category-3": 1.7,
};

const TIMELINES: Record<string, Record<string, string>> = {
  water: { minor: "2-3 days", moderate: "3-5 days", major: "1-2 weeks" },
  fire: { minor: "3-5 days", moderate: "1-2 weeks", major: "2-6 weeks" },
  mold: { minor: "1-3 days", moderate: "3-5 days", major: "1-2 weeks" },
  storm: { minor: "2-4 days", moderate: "1-2 weeks", major: "2-4 weeks" },
};

const INSURANCE_NOTES: Record<string, string> = {
  water: "Most homeowners insurance covers sudden and accidental water damage. Gradual leaks and flooding may require additional coverage.",
  fire: "Fire damage is typically covered comprehensively by homeowners insurance, including smoke damage, temporary housing, and content replacement.",
  mold: "Mold coverage varies by policy. Mold resulting from a covered water damage event is often covered. Standalone mold may require an endorsement.",
  storm: "Wind and hail damage is generally covered by homeowners insurance. Flood damage requires separate NFIP or private flood insurance.",
};

function calculateCost(
  damageType: DamageType,
  severity: Severity,
  area: AreaAffected,
  waterCategory: WaterCategory,
  propertyType: PropertyType
): CostResult | null {
  if (!damageType || !severity || !area || !propertyType) return null;

  const baseCost = BASE_COSTS[damageType]?.[severity];
  if (!baseCost) return null;

  const areaMultiplier = AREA_MULTIPLIERS[area] || 1;
  const propertyMultiplier = PROPERTY_MULTIPLIERS[propertyType] || 1;
  const waterMultiplier = damageType === "water" && waterCategory
    ? WATER_CATEGORY_MULTIPLIERS[waterCategory] || 1
    : 1;

  const totalMultiplier = areaMultiplier * propertyMultiplier * waterMultiplier;

  const lowEstimate = Math.round(baseCost.low * totalMultiplier / 50) * 50;
  const highEstimate = Math.round(baseCost.high * totalMultiplier / 50) * 50;

  return {
    lowEstimate,
    highEstimate,
    typicalInsurance: INSURANCE_NOTES[damageType] || "",
    timeline: TIMELINES[damageType]?.[severity] || "Varies",
    deductibleNote: `Most homeowners with insurance pay just their deductible ($500-$1,500). We bill your insurance directly for the balance.`,
  };
}

export default function Calculator() {
  const [damageType, setDamageType] = useState<DamageType>("");
  const [severity, setSeverity] = useState<Severity>("");
  const [area, setArea] = useState<AreaAffected>("");
  const [waterCategory, setWaterCategory] = useState<WaterCategory>("");
  const [propertyType, setPropertyType] = useState<PropertyType>("");
  const [result, setResult] = useState<CostResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    const calcResult = calculateCost(damageType, severity, area, waterCategory, propertyType);
    setResult(calcResult);
    setShowResult(true);
  };

  const handleReset = () => {
    setDamageType("");
    setSeverity("");
    setArea("");
    setWaterCategory("");
    setPropertyType("");
    setResult(null);
    setShowResult(false);
  };

  const isFormValid = damageType && severity && area && propertyType &&
    (damageType !== "water" || waterCategory);

  return (
    <div>
      {/* Calculator Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Estimate Your Restoration Cost
              </h2>

              <div className="space-y-6">
                {/* Damage Type */}
                <div>
                  <label htmlFor="damageType" className="block text-sm font-semibold text-slate-700 mb-2">
                    Type of Damage
                  </label>
                  <select
                    id="damageType"
                    value={damageType}
                    onChange={(e) => {
                      setDamageType(e.target.value as DamageType);
                      if (e.target.value !== "water") setWaterCategory("");
                      setShowResult(false);
                    }}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select damage type...</option>
                    <option value="water">Water Damage</option>
                    <option value="fire">Fire &amp; Smoke Damage</option>
                    <option value="mold">Mold Damage</option>
                    <option value="storm">Storm Damage</option>
                  </select>
                </div>

                {/* Water Category - only show for water damage */}
                {damageType === "water" && (
                  <div>
                    <label htmlFor="waterCategory" className="block text-sm font-semibold text-slate-700 mb-2">
                      Water Category
                    </label>
                    <select
                      id="waterCategory"
                      value={waterCategory}
                      onChange={(e) => {
                        setWaterCategory(e.target.value as WaterCategory);
                        setShowResult(false);
                      }}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select water category...</option>
                      <option value="category-1">Category 1 - Clean Water (broken supply line, faucet)</option>
                      <option value="category-2">Category 2 - Gray Water (dishwasher, washing machine)</option>
                      <option value="category-3">Category 3 - Black Water (sewage, flooding)</option>
                    </select>
                    <p className="text-xs text-slate-500 mt-1">
                      Water category affects contamination level and required cleanup protocols.
                    </p>
                  </div>
                )}

                {/* Severity */}
                <div>
                  <label htmlFor="severity" className="block text-sm font-semibold text-slate-700 mb-2">
                    Severity Level
                  </label>
                  <select
                    id="severity"
                    value={severity}
                    onChange={(e) => {
                      setSeverity(e.target.value as Severity);
                      setShowResult(false);
                    }}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select severity...</option>
                    <option value="minor">Minor - Surface damage, limited area</option>
                    <option value="moderate">Moderate - Structural impact, materials affected</option>
                    <option value="major">Major - Significant structural damage, extensive impact</option>
                  </select>
                </div>

                {/* Area Affected */}
                <div>
                  <label htmlFor="area" className="block text-sm font-semibold text-slate-700 mb-2">
                    Area Affected
                  </label>
                  <select
                    id="area"
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value as AreaAffected);
                      setShowResult(false);
                    }}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select area affected...</option>
                    <option value="single-room">Single Room</option>
                    <option value="multiple-rooms">Multiple Rooms</option>
                    <option value="entire-floor">Entire Floor</option>
                    <option value="whole-house">Whole House / Building</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-semibold text-slate-700 mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => {
                      setPropertyType(e.target.value as PropertyType);
                      setShowResult(false);
                    }}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select property type...</option>
                    <option value="house">House</option>
                    <option value="condo">Condo / Townhouse</option>
                    <option value="apartment">Apartment</option>
                    <option value="commercial">Commercial Property</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleCalculate}
                    disabled={!isFormValid}
                    className={`flex-1 py-4 rounded-lg text-lg font-bold transition-colors ${
                      isFormValid
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                        : "bg-slate-300 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    Calculate Estimate
                  </button>
                  {showResult && (
                    <button
                      onClick={handleReset}
                      className="px-6 py-4 rounded-lg text-lg font-bold border-2 border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      {showResult && result && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
                Your Estimated Restoration Cost
              </h2>

              {/* Main Cost Range */}
              <div className="bg-white rounded-xl p-8 shadow-lg text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-2">
                  ${result.lowEstimate.toLocaleString()} - ${result.highEstimate.toLocaleString()}
                </div>
                <p className="text-slate-500 text-lg">Estimated cost range</p>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-emerald-600 text-2xl mb-2">&#128176;</div>
                  <h3 className="font-bold text-slate-800 mb-1">Most Homeowners Pay</h3>
                  <p className="text-2xl font-bold text-emerald-600">$500 - $1,500</p>
                  <p className="text-xs text-slate-500 mt-1">Just their deductible</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-emerald-600 text-2xl mb-2">&#9200;</div>
                  <h3 className="font-bold text-slate-800 mb-1">Estimated Timeline</h3>
                  <p className="text-2xl font-bold text-emerald-600">{result.timeline}</p>
                  <p className="text-xs text-slate-500 mt-1">For typical projects</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-emerald-600 text-2xl mb-2">&#128222;</div>
                  <h3 className="font-bold text-slate-800 mb-1">Response Time</h3>
                  <p className="text-2xl font-bold text-emerald-600">60 Minutes</p>
                  <p className="text-xs text-slate-500 mt-1">24/7 emergency</p>
                </div>
              </div>

              {/* Insurance Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl flex-shrink-0">&#128161;</span>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">Insurance Coverage</h3>
                    <p className="text-blue-700 text-sm">{result.typicalInsurance}</p>
                    <p className="text-blue-600 text-sm mt-2">{result.deductibleNote}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Get Your Exact Cost with a Free Assessment</h3>
                <p className="text-emerald-100 mb-6">
                  This estimate is based on averages. Your actual cost depends on the specific conditions at your property. Call now for a free, no-obligation on-site assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                    className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg"
                  >
                    Call Now: {BUSINESS_INFO.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    Request Free Estimate
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 bg-slate-100 rounded-lg p-4 text-center">
                <p className="text-xs text-slate-500">
                  <strong>Disclaimer:</strong> This calculator provides rough estimates based on industry averages for the Greater Lansing area. Actual costs depend on your specific situation including extent of damage, materials affected, accessibility, and other factors. This is not a quote or guarantee of pricing. Call {BUSINESS_INFO.phone} for a free, accurate on-site assessment with no obligation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How We Price Section - always visible */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
              How Restoration Pricing Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Factors That Affect Cost</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span><strong>Type and severity</strong> of damage (water, fire, mold, storm)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span><strong>Size of affected area</strong> and number of rooms involved</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span><strong>Materials damaged</strong> (hardwood vs. carpet, drywall vs. plaster)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span><strong>Water contamination level</strong> for water damage (clean, gray, black)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span><strong>Reconstruction needed</strong> beyond cleanup and drying</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">&#9679;</span>
                    <span><strong>Time since damage occurred</strong> (secondary damage compounds costs)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Pricing Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">&#10004;</span>
                    <div>
                      <strong className="text-slate-800">Free On-Site Assessment</strong>
                      <p className="text-sm text-slate-600">We inspect the damage and provide a detailed written estimate at no cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">&#10004;</span>
                    <div>
                      <strong className="text-slate-800">No Hidden Fees</strong>
                      <p className="text-sm text-slate-600">Our estimates include all labor, equipment, materials, and disposal. No surprise charges.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">&#10004;</span>
                    <div>
                      <strong className="text-slate-800">Direct Insurance Billing</strong>
                      <p className="text-sm text-slate-600">We bill your insurance directly using Xactimate. You pay only your deductible for covered claims.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0">&#10004;</span>
                    <div>
                      <strong className="text-slate-800">No Work Without Approval</strong>
                      <p className="text-sm text-slate-600">We never begin work without your written authorization and clear understanding of costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cost Pages */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Detailed Cost Guides</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/services/water-damage-restoration"
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all hover:shadow-md"
              >
                <div className="text-2xl mb-1">&#128167;</div>
                <div className="text-sm font-semibold text-slate-800">Water Damage</div>
              </Link>
              <Link
                href="/services/fire-damage-cleanup"
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all hover:shadow-md"
              >
                <div className="text-2xl mb-1">&#128293;</div>
                <div className="text-sm font-semibold text-slate-800">Fire Damage</div>
              </Link>
              <Link
                href="/services/mold-remediation"
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all hover:shadow-md"
              >
                <div className="text-2xl mb-1">&#129440;</div>
                <div className="text-sm font-semibold text-slate-800">Mold Remediation</div>
              </Link>
              <Link
                href="/services/storm-damage-restoration"
                className="bg-white hover:bg-emerald-50 border hover:border-emerald-200 rounded-lg p-4 text-center transition-all hover:shadow-md"
              >
                <div className="text-2xl mb-1">&#9928;&#65039;</div>
                <div className="text-sm font-semibold text-slate-800">Storm Damage</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
