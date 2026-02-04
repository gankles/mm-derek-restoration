import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "../lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | M&M Restoration",
  description: "Privacy Policy for M&M Restoration. Learn how we collect, use, and protect your personal information when you use our restoration services in the Greater Lansing Area.",
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "February 4, 2026";

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-4">
              {BUSINESS_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our restoration services in the Greater Lansing Area, Michigan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-700 mb-3">Personal Information</h3>
            <p className="text-slate-600 mb-4">When you contact us or request our services, we may collect:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Name and contact information (phone number, email address)</li>
              <li>Property address where services are needed</li>
              <li>Insurance information for claims processing</li>
              <li>Details about the damage or service request</li>
              <li>Payment information for service fees</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-700 mb-3">Automatically Collected Information</h3>
            <p className="text-slate-600 mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Provide restoration and cleaning services</li>
              <li>Respond to your inquiries and service requests</li>
              <li>Process insurance claims on your behalf</li>
              <li>Send service updates and appointment reminders</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Information Sharing</h2>
            <p className="text-slate-600 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Insurance Companies:</strong> To process claims on your behalf</li>
              <li><strong>Service Partners:</strong> Subcontractors who assist with restoration work</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-slate-600 mb-4">
              We do not sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies</h2>
            <p className="text-slate-600 mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Children&apos;s Privacy</h2>
            <p className="text-slate-600 mb-4">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to This Policy</h2>
            <p className="text-slate-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
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
