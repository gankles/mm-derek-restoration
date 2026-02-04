import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "../lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | M&M Restoration",
  description: "Terms of Service for M&M Restoration. Read our terms and conditions for restoration services in the Greater Lansing Area, Michigan.",
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "February 4, 2026";

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Agreement to Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing our website or using the services of {BUSINESS_INFO.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Services</h2>
            <p className="text-slate-600 mb-4">
              {BUSINESS_INFO.name} provides professional restoration and cleaning services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Water damage restoration</li>
              <li>Fire and smoke damage cleanup</li>
              <li>Mold remediation</li>
              <li>Storm damage restoration</li>
              <li>Biohazard cleanup</li>
              <li>Professional cleaning services</li>
            </ul>
            <p className="text-slate-600 mb-4">
              All services are provided in the {BUSINESS_INFO.serviceArea} and surrounding communities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Agreements</h2>
            <p className="text-slate-600 mb-4">
              Prior to beginning any restoration work, we will provide you with a written estimate and scope of work. By authorizing work to begin, you agree to the terms of that specific service agreement, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Scope of restoration services to be performed</li>
              <li>Estimated timeline for completion</li>
              <li>Payment terms and pricing</li>
              <li>Insurance claim procedures (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Emergency Services</h2>
            <p className="text-slate-600 mb-4">
              We provide 24/7 emergency response services. For emergency situations, verbal authorization to begin mitigation work is acceptable, with written authorization to follow. Emergency mitigation is essential to prevent further damage and may begin before a full estimate is prepared.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Insurance Claims</h2>
            <p className="text-slate-600 mb-4">
              We work directly with insurance companies to process claims. By authorizing us to work with your insurance company, you agree that:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>You will provide accurate insurance information</li>
              <li>We may communicate directly with your insurance adjuster</li>
              <li>You remain ultimately responsible for any amounts not covered by insurance</li>
              <li>Insurance coverage decisions are made by your insurance company, not by us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Payment Terms</h2>
            <p className="text-slate-600 mb-4">
              Payment terms vary based on the type of service and insurance involvement:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Insurance Claims:</strong> We will bill your insurance company directly. You are responsible for any deductibles and non-covered amounts.</li>
              <li><strong>Non-Insurance Work:</strong> A deposit may be required before work begins. Final payment is due upon completion of services.</li>
              <li><strong>Late Payments:</strong> Accounts past due may be subject to collection efforts and applicable interest charges.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Property Access</h2>
            <p className="text-slate-600 mb-4">
              By engaging our services, you grant us reasonable access to your property to perform restoration work. This includes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Access to affected areas and adjacent spaces as needed</li>
              <li>Permission to use utilities (water, electricity) necessary for restoration</li>
              <li>Authority to remove and dispose of damaged materials</li>
              <li>Access for equipment placement and operation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Warranty and Guarantee</h2>
            <p className="text-slate-600 mb-4">
              We stand behind our work and offer a satisfaction guarantee on all restoration services. Specific warranty terms will be provided in your service agreement. Our warranty does not cover:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Damage from new incidents after restoration is complete</li>
              <li>Pre-existing conditions not related to the restoration work</li>
              <li>Issues caused by customer modifications or interference with restoration equipment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">
              While we carry comprehensive liability insurance and take every precaution, our liability is limited to the direct cost of services provided. We are not liable for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of use or business interruption</li>
              <li>Damage that existed prior to our services</li>
              <li>Damage caused by circumstances beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Website Use</h2>
            <p className="text-slate-600 mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Reproduce or distribute our content without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to Terms</h2>
            <p className="text-slate-600 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Governing Law</h2>
            <p className="text-slate-600 mb-4">
              These Terms of Service are governed by the laws of the State of Michigan. Any disputes arising from these terms or our services shall be resolved in the courts of Ingham County, Michigan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 font-semibold">{BUSINESS_INFO.name}</p>
              <p className="text-slate-600">Phone: {BUSINESS_INFO.phone}</p>
              <p className="text-slate-600">Email: {BUSINESS_INFO.email}</p>
              <p className="text-slate-600">Service Area: {BUSINESS_INFO.serviceArea}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
