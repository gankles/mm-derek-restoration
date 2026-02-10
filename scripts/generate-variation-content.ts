import OpenAI from "openai";
import * as fs from "fs";
import * as path from "path";

// ── Configuration ──────────────────────────────────────────────────────────────
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY not set. Add it to .env.local or export it.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const MODEL = "gpt-4.1-mini";
const OUTPUT_PATH = path.join(__dirname, "..", "app", "lib", "variation-content.ts");
const CHECKPOINT_PATH = path.join(__dirname, "..", ".variation-checkpoint.json");
const DELAY_MS = 2500;

// ── All 22 keyword variations ──────────────────────────────────────────────────
interface VariationInput {
  slug: string;
  parentService: string;
  h1: string;
  family: string;
  angle: string;
}

const VARIATIONS: VariationInput[] = [
  // Water Damage family (7)
  { slug: "water-damage-repair", parentService: "water-damage-restoration", h1: "Water Damage Repair Services", family: "water-damage", angle: "Focus on the REPAIR aspect — structural fixes to walls, floors, cabinets, and drywall after water damage. Emphasize reconstruction, material replacement, and restoring the home to pre-loss condition. Differentiate from 'cleanup' (which is about water removal) and 'remediation' (which is about the full treatment process)." },
  { slug: "water-damage-cleanup", parentService: "water-damage-restoration", h1: "Water Damage Cleanup Services", family: "water-damage", angle: "Focus on the CLEANUP aspect — removing standing water, extracting moisture from carpets and padding, clearing debris, and initial sanitization. This is the first-response phase. Differentiate from 'repair' (structural fixes) and 'mitigation' (prevention of further damage)." },
  { slug: "water-damage-remediation", parentService: "water-damage-restoration", h1: "Water Damage Remediation", family: "water-damage", angle: "Focus on the FULL REMEDIATION process — the complete treatment from assessment through restoration. Cover the scientific/technical approach: moisture mapping, psychrometric calculations, antimicrobial protocols, and verification testing. This is the comprehensive professional service term." },
  { slug: "water-damage-mitigation", parentService: "water-damage-restoration", h1: "Water Damage Mitigation", family: "water-damage", angle: "Focus on MITIGATION — preventing further damage from occurring. Emphasize speed of response, emergency actions like shutting off water, emergency extraction, setting up containment, protecting undamaged areas, and minimizing total loss. This is an insurance industry term — mention that mitigation is often required by insurance policies." },
  { slug: "flood-damage-restoration", parentService: "water-damage-restoration", h1: "Flood Damage Restoration", family: "water-damage", angle: "Focus specifically on FLOOD scenarios — natural flooding from storms, river overflow, flash floods, and basement flooding. Cover the unique challenges: contaminated Category 3 water, extensive structural saturation, FEMA/flood insurance considerations, and the scale of flood vs. pipe leak damage." },
  { slug: "flood-damage-cleanup", parentService: "water-damage-restoration", h1: "Flood Damage Cleanup", family: "water-damage", angle: "Focus on FLOOD CLEANUP specifically — the immediate response to flooding events. Cover mud/silt removal, contaminated water extraction, debris clearing after floods, and the urgency of acting within 24-48 hours. Mention Michigan-specific flood risks (spring thaw, heavy rain events)." },
  { slug: "flood-damage-repair", parentService: "water-damage-restoration", h1: "Flood Damage Repair", family: "water-damage", angle: "Focus on REPAIRING flood-specific damage — warped flooring, swollen drywall, damaged foundations, ruined electrical systems, and compromised structural members after flooding. Cover the reconstruction phase that follows cleanup and drying." },

  // Storm Damage family (4)
  { slug: "storm-damage-repair", parentService: "storm-damage-restoration", h1: "Storm Damage Repair", family: "storm-damage", angle: "Focus on REPAIRING damage from storms — roof repairs, siding replacement, window boarding, structural fixes. Cover the hands-on construction/repair work after storm assessment. Mention Michigan storm patterns (severe thunderstorms, derechos, ice storms)." },
  { slug: "storm-damage-cleanup", parentService: "storm-damage-restoration", h1: "Storm Damage Cleanup", family: "storm-damage", angle: "Focus on CLEANUP after storms — tree/debris removal, water extraction from storm intrusion, clearing damaged materials, making the property safe. This is the immediate response phase before repairs begin." },
  { slug: "tornado-damage-restoration", parentService: "storm-damage-restoration", h1: "Tornado Damage Restoration", family: "storm-damage", angle: "Focus specifically on TORNADO damage — the devastating, large-scale destruction tornados cause. Cover structural assessment of severely damaged buildings, safety concerns with partially collapsed structures, working with FEMA, and the extended restoration timeline. Michigan averages 15+ tornadoes per year." },
  { slug: "tornado-damage-repair", parentService: "storm-damage-restoration", h1: "Tornado Damage Repair", family: "storm-damage", angle: "Focus on REPAIRING tornado-specific damage — major structural reconstruction, roof replacement, wall rebuilding, foundation assessment. Cover the difference between repairable damage and total loss situations." },

  // Mold family (3)
  { slug: "mold-removal", parentService: "mold-remediation", h1: "Mold Removal Services", family: "mold", angle: "Focus on PHYSICAL REMOVAL of mold colonies — cutting out contaminated drywall, removing affected insulation, HEPA vacuuming surfaces, and eliminating visible mold growth. This is what homeowners search when they SEE mold. Differentiate from 'remediation' (the full scientific process) and 'testing' (identification only)." },
  { slug: "mold-cleanup", parentService: "mold-remediation", h1: "Mold Cleanup Services", family: "mold", angle: "Focus on CLEANING UP after mold — treating surfaces, cleaning contents, HEPA cleaning the air, and restoring the affected area after mold removal. This includes the decontamination, sanitization, and making the space livable again." },
  { slug: "mold-testing", parentService: "mold-inspection-services", h1: "Mold Testing Services", family: "mold", angle: "Focus specifically on TESTING and INSPECTION — air quality sampling, surface swab testing, moisture readings, identifying mold species, and providing detailed lab reports. This is for people who SUSPECT mold but haven't confirmed it. Cover when testing is needed, what the results mean, and action thresholds." },

  // Fire Damage family (4)
  { slug: "fire-damage-restoration", parentService: "fire-damage-cleanup", h1: "Fire Damage Restoration", family: "fire-damage", angle: "Focus on the COMPLETE RESTORATION after fire — the full journey from emergency board-up through reconstruction. Cover the comprehensive process: assessment, water removal (from firefighting), smoke/soot cleaning, odor elimination, structural repairs, and rebuilding. This is the holistic term." },
  { slug: "smoke-damage-cleanup", parentService: "fire-damage-cleanup", h1: "Smoke Damage Cleanup", family: "fire-damage", angle: "Focus specifically on SMOKE damage — which travels far beyond the fire itself. Cover smoke residue on walls/ceilings throughout the home, HVAC contamination, smoke damage to contents in unburned rooms, and the chemistry of different smoke types (protein, synthetic, wood). Smoke damage can affect the entire home even from a small kitchen fire." },
  { slug: "smoke-damage-restoration", parentService: "fire-damage-cleanup", h1: "Smoke Damage Restoration", family: "fire-damage", angle: "Focus on RESTORING smoke-damaged properties — the full process from cleaning through rebuilding. Cover wall/ceiling repainting, replacing smoke-saturated insulation, HVAC duct cleaning, content restoration, and the difference between surface cleaning and deep restoration when smoke penetrates materials." },
  { slug: "soot-removal", parentService: "fire-damage-cleanup", h1: "Soot Removal Services", family: "fire-damage", angle: "Focus specifically on SOOT — the black, oily residue that coats surfaces after fire. Cover the technical aspects: different soot types (dry/powdery vs wet/oily), why improper cleaning causes permanent staining, specialized soot removal chemicals, and the time-sensitive nature of soot cleanup (it becomes harder to remove each day)." },

  // Sewage family (2)
  { slug: "sewage-backup-cleanup", parentService: "sewage-cleanup-services", h1: "Sewage Backup Cleanup", family: "sewage", angle: "Focus specifically on BACKUP scenarios — sewage coming up through drains, toilets, or basement floor drains. Cover the specific health hazards (Category 3 black water), common backup causes (tree roots, city sewer issues, septic failures), and the urgency of professional intervention. Mention the specific endorsement needed on insurance policies." },
  { slug: "sewer-cleanup", parentService: "sewage-cleanup-services", h1: "Sewer Cleanup Services", family: "sewage", angle: "Focus on general SEWER-related cleanup — broader than just backups. Cover sewer line breaks, lateral line failures, combined sewer overflows during storms, and commercial sewer issues. Include the environmental and health compliance aspects, and differentiation from residential backup (which is more specific)." },
];

// ── Prompt template ────────────────────────────────────────────────────────────
function buildPrompt(v: VariationInput): string {
  return `You are an SEO content writer for M&M Restoration, a damage restoration company in Greater Lansing, Michigan (Lansing, East Lansing, Okemos, Haslett, Mason, Grand Ledge, St. Johns, Charlotte, Williamston, DeWitt). Phone: 616-648-7775. IICRC certified, 24/7 emergency response, 60-minute response time, insurance billing direct.

Generate UNIQUE content for the "${v.h1}" page (URL: /${v.slug}).
Parent service: ${v.parentService}
Content family: ${v.family}

CRITICAL DIFFERENTIATION ANGLE:
${v.angle}

Generate a JSON object with these EXACT keys:
{
  "title": "SEO title under 60 chars using the CNI formula: [Service] + [Location] + [Differentiator/Year]. Must include 'Lansing MI' or 'Lansing, MI'.",
  "description": "Meta description 145-155 chars. Include the phone number 616-648-7775. Unique selling point specific to THIS variation.",
  "heroTagline": "Short punchy tagline (8-12 words) specific to this variation's angle. NOT generic.",
  "introText": "2-3 paragraph intro (200-250 words total) that explains this specific service angle. Include Lansing/Michigan references. Use natural language, not keyword stuffing. This MUST be different from sibling variations.",
  "processSteps": ["Array of 5-7 steps specific to THIS variation. Each step should be a sentence describing the action. These MUST differ from the parent service steps and sibling variation steps."],
  "whatToExpect": {
    "heading": "What to Expect heading customized to this service",
    "items": [
      {"title": "Short title", "description": "2-3 sentence description of what the customer experiences at this stage. Specific to this variation."}
    ]
  },
  "benefits": ["Array of 5-6 unique benefits specific to THIS variation angle. Not generic 'we're certified' stuff — tie each benefit to the specific service angle."],
  "faqs": [
    {"question": "Unique FAQ question specific to this variation", "answer": "Detailed 2-4 sentence answer with specific information, costs when relevant, and Lansing/Michigan context."}
  ],
  "relatedVariations": ["Array of 3-4 sibling variation slugs from the same family that should be cross-linked"]
}

REQUIREMENTS:
- Generate exactly 7 FAQs
- Generate exactly 5-7 process steps
- Generate exactly 4-5 "What to Expect" items
- Generate exactly 5-6 benefits
- All content must be factually accurate for the restoration industry
- Include specific cost ranges, timeframes, and technical details where relevant
- Reference Greater Lansing, Michigan naturally throughout
- Content must read as written by an experienced restoration professional
- NO placeholder text, NO brackets to fill in, NO generic filler

Return ONLY valid JSON, no markdown code fences, no extra text.`;
}

// ── Types for the generated content ────────────────────────────────────────────
interface WhatToExpectItem {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface VariationContent {
  title: string;
  description: string;
  heroTagline: string;
  introText: string;
  processSteps: string[];
  whatToExpect: {
    heading: string;
    items: WhatToExpectItem[];
  };
  benefits: string[];
  faqs: FAQItem[];
  relatedVariations: string[];
}

// ── Validation ─────────────────────────────────────────────────────────────────
function validateContent(content: unknown, slug: string): content is VariationContent {
  const c = content as Record<string, unknown>;
  const errors: string[] = [];

  if (typeof c.title !== "string" || c.title.length < 20) errors.push("title too short or missing");
  if (typeof c.description !== "string" || c.description.length < 100) errors.push("description too short");
  if (typeof c.heroTagline !== "string" || c.heroTagline.length < 10) errors.push("heroTagline missing");
  if (typeof c.introText !== "string" || c.introText.length < 150) errors.push("introText too short");
  if (!Array.isArray(c.processSteps) || c.processSteps.length < 4) errors.push("processSteps needs 4+ items");
  if (!c.whatToExpect || !Array.isArray((c.whatToExpect as Record<string, unknown>).items)) errors.push("whatToExpect.items missing");
  if (!Array.isArray(c.benefits) || c.benefits.length < 4) errors.push("benefits needs 4+ items");
  if (!Array.isArray(c.faqs) || c.faqs.length < 5) errors.push("faqs needs 5+ items");
  if (!Array.isArray(c.relatedVariations)) errors.push("relatedVariations missing");

  if (errors.length > 0) {
    console.error(`  Validation errors for ${slug}:`, errors);
    return false;
  }
  return true;
}

// ── Generate content for one variation ─────────────────────────────────────────
async function generateForVariation(v: VariationInput, retries = 3): Promise<VariationContent> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`  Attempt ${attempt}/${retries} for ${v.slug}...`);
      const response = await openai.chat.completions.create({
        model: MODEL,
        messages: [{ role: "user", content: buildPrompt(v) }],
        temperature: 0.7,
        max_tokens: 3000,
        response_format: { type: "json_object" },
      });

      const raw = response.choices[0]?.message?.content;
      if (!raw) throw new Error("Empty response from OpenAI");

      const parsed = JSON.parse(raw);

      if (!validateContent(parsed, v.slug)) {
        throw new Error("Validation failed");
      }

      return parsed as VariationContent;
    } catch (err) {
      console.error(`  Error on attempt ${attempt}:`, err instanceof Error ? err.message : err);
      if (attempt === retries) throw err;
      await sleep(3000);
    }
  }
  throw new Error("Unreachable");
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadCheckpoint(): Record<string, VariationContent> {
  try {
    if (fs.existsSync(CHECKPOINT_PATH)) {
      const data = JSON.parse(fs.readFileSync(CHECKPOINT_PATH, "utf-8"));
      console.log(`Loaded checkpoint with ${Object.keys(data).length} completed variations.`);
      return data;
    }
  } catch {
    console.log("No valid checkpoint found, starting fresh.");
  }
  return {};
}

function saveCheckpoint(results: Record<string, VariationContent>): void {
  fs.writeFileSync(CHECKPOINT_PATH, JSON.stringify(results, null, 2));
}

// ── Write the output TypeScript file ───────────────────────────────────────────
function writeOutputFile(results: Record<string, VariationContent>): void {
  const lines: string[] = [];

  lines.push("// AUTO-GENERATED by scripts/generate-variation-content.ts");
  lines.push("// Do not edit manually — re-run: npm run generate:variations");
  lines.push(`// Generated: ${new Date().toISOString()}`);
  lines.push("");
  lines.push("export interface WhatToExpectItem {");
  lines.push("  title: string;");
  lines.push("  description: string;");
  lines.push("}");
  lines.push("");
  lines.push("export interface VariationFAQ {");
  lines.push("  question: string;");
  lines.push("  answer: string;");
  lines.push("}");
  lines.push("");
  lines.push("export interface VariationContentData {");
  lines.push("  title: string;");
  lines.push("  description: string;");
  lines.push("  heroTagline: string;");
  lines.push("  introText: string;");
  lines.push("  processSteps: string[];");
  lines.push("  whatToExpect: {");
  lines.push("    heading: string;");
  lines.push("    items: WhatToExpectItem[];");
  lines.push("  };");
  lines.push("  benefits: string[];");
  lines.push("  faqs: VariationFAQ[];");
  lines.push("  relatedVariations: string[];");
  lines.push("}");
  lines.push("");
  lines.push("export const VARIATION_CONTENT: Record<string, VariationContentData> = {");

  for (const [slug, content] of Object.entries(results)) {
    lines.push(`  "${slug}": ${JSON.stringify(content, null, 4).split("\n").map((l, i) => i === 0 ? l : "  " + l).join("\n")},`);
  }

  lines.push("};");
  lines.push("");

  fs.writeFileSync(OUTPUT_PATH, lines.join("\n"));
  console.log(`\nWrote ${OUTPUT_PATH} (${Object.keys(results).length} variations)`);
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log("=== Variation Content Generator ===");
  console.log(`Model: ${MODEL}`);
  console.log(`Variations to generate: ${VARIATIONS.length}`);
  console.log("");

  const results = loadCheckpoint();
  let generated = 0;
  let skipped = 0;

  for (const variation of VARIATIONS) {
    if (results[variation.slug]) {
      console.log(`[${skipped + generated + 1}/${VARIATIONS.length}] SKIP ${variation.slug} (cached)`);
      skipped++;
      continue;
    }

    console.log(`[${skipped + generated + 1}/${VARIATIONS.length}] Generating ${variation.slug}...`);

    try {
      const content = await generateForVariation(variation);
      results[variation.slug] = content;
      generated++;
      saveCheckpoint(results);
      console.log(`  OK — title: "${content.title}" (${content.faqs.length} FAQs, ${content.processSteps.length} steps)`);

      if (generated + skipped < VARIATIONS.length) {
        await sleep(DELAY_MS);
      }
    } catch (err) {
      console.error(`  FAILED ${variation.slug} after all retries:`, err);
      console.error("  Saving checkpoint and exiting. Re-run to continue from here.");
      saveCheckpoint(results);
      process.exit(1);
    }
  }

  console.log(`\nDone! Generated: ${generated}, Cached: ${skipped}, Total: ${Object.keys(results).length}`);
  writeOutputFile(results);

  // Clean up checkpoint
  if (fs.existsSync(CHECKPOINT_PATH)) {
    fs.unlinkSync(CHECKPOINT_PATH);
    console.log("Cleaned up checkpoint file.");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
