import type { Metadata } from "next";
import { buildSEOTitle } from "../lib/utils";

export const metadata: Metadata = {
  title: buildSEOTitle([
    "Frequently Asked Questions About Restoration Services",
    "Water Damage, Mold, Fire, Insurance & Cost Answers",
    "Expert Advice from IICRC Certified Professionals",
    "Greater Lansing MI",
    "M&M Restoration",
  ]),
  description: "Get answers to 30+ common questions about water damage restoration, mold remediation, fire damage, insurance claims, costs, and emergency response in Greater Lansing, MI. Expert answers from IICRC certified professionals. Call (616) 648-7775.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Restoration FAQ | M&M Restoration",
    description: "Answers to common questions about water damage, mold, fire damage, insurance claims, and restoration costs in Greater Lansing. Expert advice from certified professionals.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
