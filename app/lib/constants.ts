export const BUSINESS_INFO = {
  name: "M&M Restoration",
  phone: "616-648-7775",
  serviceArea: "Greater Lansing Area, Michigan",
  hours: "24/7 Emergency Response",
  email: "info@mmrestoration.com",
  certifications: ["IICRC Certified", "Licensed & Insured", "A+ BBB Rating"],
  foundedYear: 2015,
  employeeCount: 25,
  projectsCompleted: 2847
};

export const SERVICES = [
  {
    name: "Water Damage Restoration",
    slug: "water-damage-restoration",
    description: "Fast emergency water damage cleanup and restoration services",
    keywords: ["water damage", "flood cleanup", "water removal", "water restoration"],
    icon: "💧",
    image: "/images/water-damage-technician.png",
    emergencyService: true,
    typicalDuration: "3-5 days",
    processSteps: [
      "Emergency water extraction using truck-mounted systems",
      "Moisture mapping with thermal imaging cameras",
      "Industrial dehumidification and air movement",
      "Antimicrobial treatment to prevent mold",
      "Structural drying verification with moisture meters"
    ],
    equipment: ["Truck-mounted extractors", "Desiccant dehumidifiers", "Axial air movers", "Infrared cameras", "Moisture meters"],
    commonCauses: ["Burst pipes", "Appliance failures", "Roof leaks", "Sump pump failures", "Storm flooding"],
    insuranceTips: "Document all damage with photos before cleanup begins. Most homeowner policies cover sudden water damage but not gradual leaks."
  },
  {
    name: "Mold Remediation",
    slug: "mold-remediation",
    description: "Professional mold removal and remediation services",
    keywords: ["mold removal", "mold testing", "mold remediation", "mold cleanup"],
    icon: "🦠",
    image: "/images/mold-damage-closeup.png",
    emergencyService: true,
    typicalDuration: "3-7 days",
    processSteps: [
      "Comprehensive mold inspection and air quality testing",
      "Containment setup with negative air pressure",
      "HEPA filtration of affected areas",
      "Safe removal of mold-contaminated materials",
      "Application of antimicrobial treatments",
      "Post-remediation clearance testing"
    ],
    equipment: ["HEPA air scrubbers", "Negative air machines", "PPE suits", "Air quality monitors", "Containment barriers"],
    commonCauses: ["Previous water damage", "High humidity", "Poor ventilation", "Roof/plumbing leaks", "Basement moisture"],
    insuranceTips: "Mold coverage varies significantly. Document the source of moisture - mold from covered water damage is typically covered."
  },
  {
    name: "Fire Damage Cleanup",
    slug: "fire-damage-cleanup",
    description: "Complete fire damage restoration and smoke cleanup",
    keywords: ["fire damage", "smoke cleanup", "fire restoration", "soot removal"],
    icon: "🔥",
    image: "/images/fire-damage-before-after.png",
    emergencyService: true,
    typicalDuration: "1-3 weeks",
    processSteps: [
      "Emergency board-up and property securing",
      "Comprehensive fire and smoke damage assessment",
      "Water removal from firefighting efforts",
      "Soot and smoke residue removal",
      "Thermal fogging for odor elimination",
      "Content cleaning and pack-out services",
      "Structural repairs and reconstruction"
    ],
    equipment: ["Ozone generators", "Thermal foggers", "HEPA vacuums", "Ultrasonic cleaners", "Hydroxyl generators"],
    commonCauses: ["Kitchen fires", "Electrical failures", "Heating equipment", "Candles", "Smoking materials"],
    insuranceTips: "Fire damage is typically fully covered. Keep all receipts for temporary housing and replaced items."
  },
  {
    name: "Storm Damage Restoration",
    slug: "storm-damage-restoration",
    description: "Storm damage repair and emergency restoration services",
    keywords: ["storm damage", "wind damage", "hail damage", "emergency repair"],
    icon: "⛈️",
    image: "/images/roof-leak-repair.png",
    emergencyService: true,
    typicalDuration: "1-2 weeks",
    processSteps: [
      "Emergency tarping and board-up services",
      "Storm damage documentation for insurance",
      "Water intrusion mitigation",
      "Debris removal and site cleanup",
      "Structural assessment and repairs",
      "Roof and siding restoration"
    ],
    equipment: ["Emergency tarps", "Extraction equipment", "Structural drying systems", "Debris removal equipment"],
    commonCauses: ["High winds", "Hail", "Fallen trees", "Lightning strikes", "Tornado damage"],
    insuranceTips: "File claims promptly after storms. Document all damage with dated photos and videos."
  },
  {
    name: "Biohazard Cleanup",
    slug: "biohazard-cleanup",
    description: "Safe biohazard and trauma scene cleanup services",
    keywords: ["biohazard cleanup", "trauma cleanup", "crime scene cleanup", "hazmat cleanup"],
    icon: "⚠️",
    image: "/images/restoration-team-hero.png",
    emergencyService: true,
    typicalDuration: "1-3 days",
    processSteps: [
      "Scene assessment and safety protocols",
      "Biohazard containment and isolation",
      "Removal of contaminated materials",
      "Deep cleaning and disinfection",
      "Odor neutralization",
      "Verification and clearance"
    ],
    equipment: ["Level A PPE", "Hospital-grade disinfectants", "Enzyme cleaners", "HEPA filtration", "Biohazard disposal containers"],
    commonCauses: ["Unattended deaths", "Crime scenes", "Accidents", "Hoarding situations", "Infectious disease"],
    insuranceTips: "Many homeowner policies include biohazard cleanup. Victim assistance programs may also provide coverage."
  },
  {
    name: "Odor Removal Services",
    slug: "odor-removal-services",
    description: "Professional odor elimination and air purification",
    keywords: ["odor removal", "smell elimination", "air purification", "deodorization"],
    icon: "💨",
    image: "/images/remediation-team-work.png",
    emergencyService: false,
    typicalDuration: "1-3 days",
    processSteps: [
      "Odor source identification",
      "Source removal or treatment",
      "Ozone or hydroxyl treatment",
      "Thermal fogging if needed",
      "Air quality verification"
    ],
    equipment: ["Ozone generators", "Hydroxyl generators", "Thermal foggers", "Air quality monitors", "HEPA air scrubbers"],
    commonCauses: ["Smoke damage", "Pet odors", "Mold/mildew", "Deceased animals", "Chemical spills"],
    insuranceTips: "Coverage depends on the odor source. Smoke odor from covered fires is typically included."
  },
  {
    name: "Sewage Cleanup Services",
    slug: "sewage-cleanup-services",
    description: "Emergency sewage backup cleanup and sanitization",
    keywords: ["sewage cleanup", "sewage backup", "waste removal", "sanitization"],
    icon: "🚰",
    image: "/images/wall-water-mold-damage.png",
    emergencyService: true,
    typicalDuration: "2-4 days",
    processSteps: [
      "Emergency extraction of sewage water",
      "Removal of contaminated materials",
      "Antimicrobial treatment of affected areas",
      "Structural drying with dehumidifiers",
      "Sanitization and deodorization",
      "Clearance testing"
    ],
    equipment: ["Extraction pumps", "PPE equipment", "Hospital-grade disinfectants", "Dehumidifiers", "Air scrubbers"],
    commonCauses: ["Sewer line backups", "Septic failures", "Flooding", "Drain clogs", "Tree root intrusion"],
    insuranceTips: "Sewage backup requires specific endorsement on most policies. Check your coverage for sewer/drain backup."
  },
  {
    name: "Steam Cleaning Services",
    slug: "steam-cleaning-services",
    description: "Professional steam cleaning for carpets and upholstery",
    keywords: ["steam cleaning", "carpet cleaning", "upholstery cleaning", "deep cleaning"],
    icon: "♨️",
    image: "/images/biohazard-cleanup-tech.png",
    emergencyService: false,
    typicalDuration: "1 day",
    processSteps: [
      "Pre-inspection and spot treatment",
      "Pre-vacuuming to remove loose dirt",
      "Hot water extraction cleaning",
      "Spot treatment for stubborn stains",
      "Speed drying with air movers"
    ],
    equipment: ["Truck-mounted steam cleaners", "Portable extractors", "Spot treatment tools", "Air movers"],
    commonCauses: ["Regular maintenance", "Pet stains", "High traffic areas", "Spills and spots", "Allergen removal"],
    insuranceTips: "Typically not covered unless part of restoration from covered damage."
  },
  {
    name: "Post Construction Cleaning",
    slug: "post-construction-cleaning",
    description: "Complete post-construction cleanup and detail cleaning",
    keywords: ["construction cleanup", "post renovation cleaning", "building cleanup", "debris removal"],
    icon: "🏗️",
    image: "/images/interior-painting-restoration.png",
    emergencyService: false,
    typicalDuration: "1-3 days",
    processSteps: [
      "Rough cleaning - debris and material removal",
      "Light fixture and vent cleaning",
      "Window and glass cleaning",
      "Floor cleaning and polishing",
      "Final detail cleaning and inspection"
    ],
    equipment: ["Industrial vacuums", "Floor scrubbers", "Window cleaning tools", "Detail cleaning supplies"],
    commonCauses: ["New construction", "Major renovations", "Commercial buildouts", "Remodeling projects"],
    insuranceTips: "Typically included in construction contracts, not homeowner insurance."
  },
  {
    name: "Furniture Cleaning Services",
    slug: "furniture-cleaning-services",
    description: "Professional furniture and upholstery cleaning",
    keywords: ["furniture cleaning", "upholstery cleaning", "sofa cleaning", "chair cleaning"],
    icon: "🛋️",
    image: "/images/home-renovation-project.png",
    emergencyService: false,
    typicalDuration: "1 day",
    processSteps: [
      "Fabric identification and testing",
      "Pre-treatment of stains",
      "Hot water extraction or dry cleaning",
      "Fabric protection application",
      "Speed drying"
    ],
    equipment: ["Upholstery extractors", "Dry cleaning systems", "Fabric protectors", "Stain removal chemicals"],
    commonCauses: ["Regular maintenance", "Stains and spills", "Pet damage", "Smoke damage", "Water damage restoration"],
    insuranceTips: "Covered when part of restoration claim. Document furniture condition before and after damage."
  },
  {
    name: "Carpet Cleaning Services",
    slug: "carpet-cleaning-services",
    description: "Deep carpet cleaning and stain removal services",
    keywords: ["carpet cleaning", "rug cleaning", "stain removal", "carpet restoration"],
    icon: "🧽",
    image: "/images/storm-damage-restoration.png",
    emergencyService: false,
    typicalDuration: "1 day",
    processSteps: [
      "Pre-inspection and fiber identification",
      "Pre-vacuuming and spot treatment",
      "Hot water extraction deep cleaning",
      "Post-cleaning grooming",
      "Speed drying"
    ],
    equipment: ["Truck-mounted extractors", "Portable units", "Rotary cleaners", "Air movers", "Deodorizers"],
    commonCauses: ["Regular maintenance", "Pet accidents", "Water damage", "High traffic wear", "Stain removal"],
    insuranceTips: "Covered as part of water or fire damage restoration claims."
  },
  {
    name: "Hardwood Floor Cleaning",
    slug: "hardwood-floor-cleaning",
    description: "Professional hardwood floor cleaning and restoration",
    keywords: ["hardwood cleaning", "floor cleaning", "wood floor restoration", "floor refinishing"],
    icon: "🪵",
    image: "/images/ceiling-water-damage.png",
    emergencyService: false,
    typicalDuration: "1-2 days",
    processSteps: [
      "Floor assessment and condition evaluation",
      "Deep cleaning with wood-safe products",
      "Scratch and scuff treatment",
      "Polish or sealant application",
      "Buff and finish"
    ],
    equipment: ["Floor buffers", "Wood-safe cleaners", "Polishing equipment", "Microfiber systems"],
    commonCauses: ["Regular maintenance", "Water damage restoration", "Scratch repair", "Dull finish renewal"],
    insuranceTips: "Refinishing covered when damage is from covered event. Document pre-existing condition."
  },
  {
    name: "Vinyl Floor Cleaning",
    slug: "vinyl-floor-cleaning",
    description: "Vinyl and laminate floor cleaning services",
    keywords: ["vinyl cleaning", "laminate cleaning", "floor cleaning", "vinyl restoration"],
    icon: "🔲",
    image: "/images/restoration-team-hero.png",
    emergencyService: false,
    typicalDuration: "1 day",
    processSteps: [
      "Floor type identification",
      "Debris removal and pre-cleaning",
      "Deep cleaning with appropriate solutions",
      "Rinse and extraction",
      "Sealant application if applicable"
    ],
    equipment: ["Auto scrubbers", "Mops and microfiber", "pH-neutral cleaners", "Sealants"],
    commonCauses: ["Regular maintenance", "Build-up removal", "Water damage", "Commercial cleaning needs"],
    insuranceTips: "Replacement typically covered if damaged beyond cleaning from covered events."
  },
  {
    name: "Crime Scene & Trauma Cleaning",
    slug: "crime-scene-trauma-cleaning",
    description: "Sensitive crime scene and trauma cleanup services",
    keywords: ["crime scene cleanup", "trauma cleaning", "biohazard removal", "blood cleanup"],
    icon: "🚨",
    image: "/images/remediation-team-work.png",
    emergencyService: false,
    typicalDuration: "1-3 days",
    processSteps: [
      "Scene assessment with sensitivity",
      "Biohazard removal and disposal",
      "Deep cleaning and disinfection",
      "Odor neutralization",
      "Property restoration",
      "Compassionate communication throughout"
    ],
    equipment: ["Full PPE", "Hospital-grade disinfectants", "Enzyme cleaners", "Odor neutralizers", "Biohazard containers"],
    commonCauses: ["Violent crimes", "Accidents", "Suicides", "Unattended deaths"],
    insuranceTips: "Often covered under homeowner policies. Victim compensation funds may also apply."
  },
  {
    name: "Mold Inspection Services",
    slug: "mold-inspection-services",
    description: "Professional mold testing and inspection services",
    keywords: ["mold inspection", "mold testing", "mold assessment", "air quality testing"],
    icon: "🔍",
    image: "/images/mold-damage-closeup.png",
    emergencyService: false,
    typicalDuration: "1 day",
    processSteps: [
      "Visual inspection of property",
      "Moisture mapping and readings",
      "Air quality sampling",
      "Surface sampling if needed",
      "Laboratory analysis",
      "Detailed report with recommendations"
    ],
    equipment: ["Moisture meters", "Thermal cameras", "Air sampling pumps", "Surface swabs", "Borescopes"],
    commonCauses: ["Pre-purchase inspections", "Post-remediation verification", "Health concerns", "Visible growth", "Musty odors"],
    insuranceTips: "Inspection costs may be reimbursed if mold is found and covered under your policy."
  }
];

export const LOCATIONS = [
  {
    name: "Grand Ledge",
    slug: "grand-ledge",
    state: "MI",
    county: "Eaton",
    population: "7,786",
    populationNum: 7786,
    keywords: ["Grand Ledge MI", "Grand Ledge Michigan", "Eaton County"],
    responseTime: "45 minutes",
    casesCompleted: 89,
    uniqueFact: "Known for its iconic sandstone ledges along the Grand River, Grand Ledge homes near the riverfront face unique moisture challenges.",
    landmarks: ["Fitzgerald Park", "Grand Ledge Opera House", "Island Park"],
    commonIssues: ["Basement flooding from Grand River proximity", "Foundation moisture in older downtown homes"],
    testimonial: { name: "Robert K.", text: "After our basement flooded during spring thaw, M&M had crews here within 40 minutes. Saved us thousands in damage.", rating: 5 }
  },
  {
    name: "Haslett",
    slug: "haslett",
    state: "MI",
    county: "Ingham",
    population: "19,220",
    populationNum: 19220,
    keywords: ["Haslett MI", "Haslett Michigan", "Ingham County"],
    responseTime: "35 minutes",
    casesCompleted: 156,
    uniqueFact: "Located on Lake Lansing, Haslett properties face lake-effect humidity and moisture issues common to waterfront communities.",
    landmarks: ["Lake Lansing Park North", "Lake Lansing Park South", "Haslett Community Church"],
    commonIssues: ["Lakefront property moisture damage", "Basement humidity issues", "Mold from lake-effect humidity"],
    testimonial: { name: "Jennifer M.", text: "Living near the lake means constant humidity battles. M&M installed a dehumidification system that finally solved our mold problem.", rating: 5 }
  },
  {
    name: "Holt",
    slug: "holt",
    state: "MI",
    county: "Ingham",
    population: "25,888",
    populationNum: 25888,
    keywords: ["Holt MI", "Holt Michigan", "Ingham County"],
    responseTime: "30 minutes",
    casesCompleted: 234,
    uniqueFact: "As one of the fastest-growing areas in the region, Holt has a mix of new construction and established neighborhoods, each with distinct restoration needs.",
    landmarks: ["Veterans Memorial Gardens", "Holt Junior High", "Sycamore Creek Park"],
    commonIssues: ["New construction moisture issues", "Sump pump failures", "Storm damage to newer roofing"],
    testimonial: { name: "Dave & Susan T.", text: "Our new build had unexpected moisture in the basement. M&M diagnosed and fixed it professionally. Highly recommend!", rating: 5 }
  },
  {
    name: "Lansing",
    slug: "lansing",
    state: "MI",
    county: "Ingham",
    population: "112,644",
    populationNum: 112644,
    keywords: ["Lansing MI", "Lansing Michigan", "State Capital"],
    responseTime: "25 minutes",
    casesCompleted: 847,
    uniqueFact: "As Michigan's capital city, Lansing features historic government buildings, century-old homes, and modern developments - each requiring specialized restoration expertise.",
    landmarks: ["Michigan State Capitol", "Potter Park Zoo", "Lansing River Trail", "Old Town"],
    commonIssues: ["Historic home water damage", "Commercial building restoration", "Urban flooding", "Aging infrastructure failures"],
    testimonial: { name: "Capital City Property Management", text: "M&M handles all our restoration needs across 50+ properties in Lansing. Reliable, professional, and always responsive.", rating: 5 }
  },
  {
    name: "Mason",
    slug: "mason",
    state: "MI",
    county: "Ingham",
    population: "8,359",
    populationNum: 8359,
    keywords: ["Mason MI", "Mason Michigan", "Ingham County"],
    responseTime: "40 minutes",
    casesCompleted: 98,
    uniqueFact: "The county seat of Ingham County, Mason's historic downtown features many buildings over 100 years old with unique restoration requirements.",
    landmarks: ["Ingham County Courthouse", "Mason Area Historical Museum", "Rayner Park"],
    commonIssues: ["Historic building moisture intrusion", "Basement flooding in older homes", "Storm damage to mature tree-lined properties"],
    testimonial: { name: "Historic Mason Inn", text: "Restoring water damage in our 1880s building required expertise. M&M understood the unique needs of historic structures.", rating: 5 }
  },
  {
    name: "Okemos",
    slug: "okemos",
    state: "MI",
    county: "Ingham",
    population: "25,349",
    populationNum: 25349,
    keywords: ["Okemos MI", "Okemos Michigan", "Ingham County"],
    responseTime: "30 minutes",
    casesCompleted: 312,
    uniqueFact: "An affluent suburb known for excellent schools, Okemos homes often feature finished basements and high-end finishes requiring careful restoration.",
    landmarks: ["Meridian Mall", "Okemos High School", "Central Park"],
    commonIssues: ["Finished basement water damage", "High-end material restoration", "HVAC-related water damage"],
    testimonial: { name: "The Patel Family", text: "Water damaged our finished basement with custom woodwork. M&M restored everything perfectly - you can't tell it ever happened.", rating: 5 }
  },
  {
    name: "Williamston",
    slug: "williamston",
    state: "MI",
    county: "Ingham",
    population: "4,197",
    populationNum: 4197,
    keywords: ["Williamston MI", "Williamston Michigan", "Ingham County"],
    responseTime: "45 minutes",
    casesCompleted: 67,
    uniqueFact: "This charming small town along the Red Cedar River is known for antique shops and historic buildings, many with basements prone to moisture issues.",
    landmarks: ["McCormick Park", "Red Cedar River", "Downtown Antique District"],
    commonIssues: ["River-proximity flooding", "Historic building restoration", "Crawl space moisture"],
    testimonial: { name: "Williamston Antique Co.", text: "When the Red Cedar flooded our shop, M&M saved thousands in irreplaceable inventory with their fast response.", rating: 5 }
  },
  {
    name: "Charlotte",
    slug: "charlotte",
    state: "MI",
    county: "Eaton",
    population: "9,351",
    populationNum: 9351,
    keywords: ["Charlotte MI", "Charlotte Michigan", "Eaton County"],
    responseTime: "50 minutes",
    casesCompleted: 112,
    uniqueFact: "The Eaton County seat and home of the county fairgrounds, Charlotte blends historic downtown buildings with rural properties on the outskirts.",
    landmarks: ["Eaton County Fairgrounds", "Courthouse Square", "Bennett Park"],
    commonIssues: ["Agricultural building restoration", "Historic downtown flooding", "Storm damage to rural properties"],
    testimonial: { name: "Charlotte Family Farms", text: "Storm destroyed our barn roof. M&M was there same day and handled the insurance process flawlessly.", rating: 5 }
  },
  {
    name: "East Lansing",
    slug: "east-lansing",
    state: "MI",
    county: "Ingham",
    population: "47,741",
    populationNum: 47741,
    keywords: ["East Lansing MI", "East Lansing Michigan", "MSU"],
    responseTime: "25 minutes",
    casesCompleted: 423,
    uniqueFact: "Home to Michigan State University, East Lansing properties range from student rentals to luxury faculty homes, plus university facilities.",
    landmarks: ["Michigan State University", "Hannah Administration Building", "Spartan Stadium", "The Rock"],
    commonIssues: ["Student rental water damage", "High-occupancy property restoration", "University building emergencies"],
    testimonial: { name: "MSU Faculty Housing", text: "M&M understands the unique needs of the university community. Fast, professional, and discrete when needed.", rating: 5 }
  },
  {
    name: "DeWitt",
    slug: "dewitt",
    state: "MI",
    county: "Clinton",
    population: "4,743",
    populationNum: 4743,
    keywords: ["DeWitt MI", "DeWitt Michigan", "Clinton County"],
    responseTime: "35 minutes",
    casesCompleted: 78,
    uniqueFact: "A growing community north of Lansing, DeWitt features newer subdivisions built on former farmland, which can present unique drainage challenges.",
    landmarks: ["DeWitt Township Hall", "Scott Road Park", "Looking Glass River"],
    commonIssues: ["New construction drainage problems", "Foundation settling moisture issues", "Rapid development flooding"],
    testimonial: { name: "DeWitt Community Schools", text: "When a pipe burst at the elementary school, M&M had it dried and classes resumed within 48 hours.", rating: 5 }
  },
  {
    name: "Bath",
    slug: "bath",
    state: "MI",
    county: "Clinton",
    population: "2,083",
    populationNum: 2083,
    keywords: ["Bath MI", "Bath Michigan", "Clinton County"],
    responseTime: "40 minutes",
    casesCompleted: 34,
    uniqueFact: "A small rural community with a tragic history, Bath today is a peaceful residential area with many properties on well and septic systems.",
    landmarks: ["Bath Township Park", "Park Lake", "Bath Charter Township Hall"],
    commonIssues: ["Septic system failures", "Well water contamination", "Rural property storm damage"],
    testimonial: { name: "The Henderson Family", text: "Septic backup is nobody's idea of fun. M&M cleaned and sanitized everything - no trace of what happened.", rating: 5 }
  },
  {
    name: "Eagle",
    slug: "eagle",
    state: "MI",
    county: "Clinton",
    population: "881",
    populationNum: 881,
    keywords: ["Eagle MI", "Eagle Michigan", "Clinton County"],
    responseTime: "55 minutes",
    casesCompleted: 12,
    uniqueFact: "One of the smallest communities we serve, Eagle's rural properties often lack quick access to services - making our guaranteed response times invaluable.",
    landmarks: ["Eagle Village Hall", "Looking Glass River"],
    commonIssues: ["Rural property flooding", "Agricultural building damage", "Extended outage damage"],
    testimonial: { name: "Eagle Township Resident", text: "Living rural, we worried no one would come quickly. M&M proved us wrong - here in under an hour.", rating: 5 }
  },
  {
    name: "Dimondale",
    slug: "dimondale",
    state: "MI",
    county: "Eaton",
    population: "1,234",
    populationNum: 1234,
    keywords: ["Dimondale MI", "Dimondale Michigan", "Eaton County"],
    responseTime: "35 minutes",
    casesCompleted: 23,
    uniqueFact: "A small village along the Grand River, Dimondale properties near the water face seasonal flooding risks during spring thaw.",
    landmarks: ["Dimondale Village Park", "Grand River", "Windsor Township Hall"],
    commonIssues: ["Seasonal river flooding", "Crawl space moisture", "Historic home water damage"],
    testimonial: { name: "Riverside Property Owner", text: "Spring flooding is annual here. M&M knows our property and responds immediately every time.", rating: 5 }
  },
  {
    name: "Potterville",
    slug: "potterville",
    state: "MI",
    county: "Eaton",
    population: "2,617",
    populationNum: 2617,
    keywords: ["Potterville MI", "Potterville Michigan", "Eaton County"],
    responseTime: "45 minutes",
    casesCompleted: 41,
    uniqueFact: "A growing community west of Lansing, Potterville offers affordable housing but many older homes require updated plumbing and drainage systems.",
    landmarks: ["Potterville Public Schools", "Veterans Park", "City Hall"],
    commonIssues: ["Aging plumbing failures", "Basement drainage issues", "Storm sewer backups"],
    testimonial: { name: "First-Time Homebuyer", text: "Our older home had hidden water damage. M&M found it, fixed it, and helped us understand prevention.", rating: 5 }
  },
  {
    name: "Vermontville",
    slug: "vermontville",
    state: "MI",
    county: "Eaton",
    population: "759",
    populationNum: 759,
    keywords: ["Vermontville MI", "Vermontville Michigan", "Eaton County"],
    responseTime: "55 minutes",
    casesCompleted: 8,
    uniqueFact: "Known for the annual Maple Syrup Festival, this small village has many historic homes and maple operations requiring specialized care.",
    landmarks: ["Vermontville Township Library", "Maple Syrup Festival Grounds"],
    commonIssues: ["Historic home moisture problems", "Seasonal humidity damage", "Agricultural building restoration"],
    testimonial: { name: "Maple Farm Owner", text: "Sugar house fire could have ended our business. M&M's rapid response saved the season.", rating: 5 }
  },
  {
    name: "Waverly",
    slug: "waverly",
    state: "MI",
    county: "Eaton",
    population: "23,925",
    populationNum: 23925,
    keywords: ["Waverly MI", "Waverly Michigan", "Eaton County"],
    responseTime: "30 minutes",
    casesCompleted: 187,
    uniqueFact: "A densely populated unincorporated area, Waverly features diverse housing stock from mid-century ranches to newer construction.",
    landmarks: ["Sharp Park", "Waverly Community Schools", "Lansing Mall area"],
    commonIssues: ["Mid-century home plumbing failures", "Commercial property damage", "Multi-family building restoration"],
    testimonial: { name: "Waverly Property Group", text: "Managing multiple rental properties means emergencies happen. M&M is our trusted partner for all restoration needs.", rating: 5 }
  },
  {
    name: "Eaton Rapids",
    slug: "eaton-rapids",
    state: "MI",
    county: "Eaton",
    population: "5,214",
    populationNum: 5214,
    keywords: ["Eaton Rapids MI", "Eaton Rapids Michigan", "Eaton County"],
    responseTime: "50 minutes",
    casesCompleted: 76,
    uniqueFact: "Situated where the Grand River flows through historic downtown, Eaton Rapids faces unique flooding challenges but also has thermal hot springs history.",
    landmarks: ["Island Park", "Grand River", "Historic Downtown", "Miller Farm"],
    commonIssues: ["River flooding damage", "Historic building restoration", "Bridge-area property damage"],
    testimonial: { name: "Downtown Business Owner", text: "The 2020 flooding devastated downtown. M&M helped rebuild multiple businesses including ours.", rating: 5 }
  },
  {
    name: "Perry",
    slug: "perry",
    state: "MI",
    county: "Shiawassee",
    population: "2,188",
    populationNum: 2188,
    keywords: ["Perry MI", "Perry Michigan", "Shiawassee County"],
    responseTime: "50 minutes",
    casesCompleted: 28,
    uniqueFact: "Located at the edge of our service area in Shiawassee County, Perry residents value our commitment to serving rural communities.",
    landmarks: ["Perry City Park", "Perry High School", "Shiawassee County border"],
    commonIssues: ["Rural property storm damage", "Agricultural building restoration", "Well and septic issues"],
    testimonial: { name: "Perry Area Farmer", text: "When the tornado hit our outbuildings, M&M drove 50 minutes to help us same day.", rating: 5 }
  },
  {
    name: "Olivet",
    slug: "olivet",
    state: "MI",
    county: "Eaton",
    population: "1,605",
    populationNum: 1605,
    keywords: ["Olivet MI", "Olivet Michigan", "Eaton County"],
    responseTime: "55 minutes",
    casesCompleted: 19,
    uniqueFact: "Home to Olivet College, this small town blends historic campus buildings with residential neighborhoods, each with distinct restoration needs.",
    landmarks: ["Olivet College", "Olivet Township Hall", "Downtown Olivet"],
    commonIssues: ["Historic campus building restoration", "Student housing water damage", "Older home plumbing failures"],
    testimonial: { name: "Olivet College Facilities", text: "Historic buildings need careful restoration. M&M respects the architecture while solving the problem.", rating: 5 }
  },
  {
    name: "Lake Odessa",
    slug: "lake-odessa",
    state: "MI",
    county: "Ionia",
    population: "2,018",
    populationNum: 2018,
    keywords: ["Lake Odessa MI", "Lake Odessa Michigan", "Ionia County"],
    responseTime: "55 minutes",
    casesCompleted: 24,
    uniqueFact: "Named after nearby Jordan Lake (originally Lake Odessa), this community features many lakefront and near-lake properties with moisture challenges.",
    landmarks: ["Jordan Lake", "Lake Odessa Village Park", "Historic Downtown"],
    commonIssues: ["Lakefront property moisture", "Seasonal cottage restoration", "Dock and waterfront damage"],
    testimonial: { name: "Lake Property Owner", text: "Our lake cottage had serious mold. M&M remediated it completely - air quality testing confirmed it's gone.", rating: 5 }
  },
  {
    name: "Webberville",
    slug: "webberville",
    state: "MI",
    county: "Ingham",
    population: "1,272",
    populationNum: 1272,
    keywords: ["Webberville MI", "Webberville Michigan", "Ingham County"],
    responseTime: "50 minutes",
    casesCompleted: 16,
    uniqueFact: "A small village in eastern Ingham County, Webberville serves as a bedroom community with many commuters to Lansing and Brighton.",
    landmarks: ["Webberville Village Park", "Railroad Crossing", "Downtown Webberville"],
    commonIssues: ["Older home water damage", "Commuter property management issues", "Storm damage"],
    testimonial: { name: "Webberville Resident", text: "Pipe burst while we were at work in Lansing. M&M met us there and had it under control within hours.", rating: 5 }
  },
  {
    name: "Stockbridge",
    slug: "stockbridge",
    state: "MI",
    county: "Ingham",
    population: "1,202",
    populationNum: 1202,
    keywords: ["Stockbridge MI", "Stockbridge Michigan", "Ingham County"],
    responseTime: "55 minutes",
    casesCompleted: 14,
    uniqueFact: "Nestled in the Irish Hills region, Stockbridge properties often feature older farmhouses and lake cottages with unique restoration needs.",
    landmarks: ["Stockbridge Town Square", "Waterloo Recreation Area nearby", "Historic District"],
    commonIssues: ["Farmhouse restoration", "Seasonal property damage", "Foundation moisture"],
    testimonial: { name: "Century Farm Owner", text: "Our 1890s farmhouse flooded. M&M dried it without damaging the original hardwood floors.", rating: 5 }
  },
  {
    name: "Laingsburg",
    slug: "laingsburg",
    state: "MI",
    county: "Shiawassee",
    population: "1,223",
    populationNum: 1223,
    keywords: ["Laingsburg MI", "Laingsburg Michigan", "Shiawassee County"],
    responseTime: "50 minutes",
    casesCompleted: 17,
    uniqueFact: "Located along the Looking Glass River in Shiawassee County, Laingsburg faces seasonal flooding but maintains its small-town charm.",
    landmarks: ["Looking Glass River", "Laingsburg City Park", "Downtown Laingsburg"],
    commonIssues: ["River flooding", "Historic home restoration", "Seasonal moisture damage"],
    testimonial: { name: "Looking Glass Riverfront Owner", text: "Annual flooding is part of river life. M&M has a plan ready and executes it perfectly every spring.", rating: 5 }
  },
  {
    name: "Delta Charter Township",
    slug: "delta-charter-township",
    state: "MI",
    county: "Eaton",
    population: "32,408",
    populationNum: 32408,
    keywords: ["Delta Township MI", "Delta Charter Township", "Eaton County"],
    responseTime: "25 minutes",
    casesCompleted: 398,
    uniqueFact: "One of the region's largest townships, Delta Charter Township includes major retail centers, business parks, and diverse residential areas.",
    landmarks: ["Delta Township District Library", "Sharp Park", "Saginaw Highway corridor"],
    commonIssues: ["Commercial property restoration", "Retail building damage", "Suburban residential flooding"],
    testimonial: { name: "Delta Township Business Park", text: "A sprinkler malfunction flooded three businesses. M&M coordinated all three restorations simultaneously.", rating: 5 }
  },
  {
    name: "Delhi Charter Township",
    slug: "delhi-charter-township",
    state: "MI",
    county: "Ingham",
    population: "25,877",
    populationNum: 25877,
    keywords: ["Delhi Township MI", "Delhi Charter Township", "Ingham County"],
    responseTime: "30 minutes",
    casesCompleted: 267,
    uniqueFact: "Located south of Lansing along the Grand River, Delhi Township blends suburban development with preserved natural areas.",
    landmarks: ["Delhi Metropark", "Grand River", "Holt area neighborhoods"],
    commonIssues: ["Grand River flooding", "Suburban water damage", "Storm drain backups"],
    testimonial: { name: "Delhi Township HOA", text: "After the 2019 floods, M&M helped 12 homes in our subdivision. Coordinated, efficient, and fair pricing.", rating: 5 }
  },
  {
    name: "Windsor Charter Township",
    slug: "windsor-charter-township",
    state: "MI",
    county: "Eaton",
    population: "9,234",
    populationNum: 9234,
    keywords: ["Windsor Township MI", "Windsor Charter Township", "Eaton County"],
    responseTime: "40 minutes",
    casesCompleted: 89,
    uniqueFact: "A rural township that includes parts of Dimondale, Windsor Charter Township features farms, forests, and rural residential properties.",
    landmarks: ["Grand River", "Windsor Township Hall", "Rural Eaton County"],
    commonIssues: ["Agricultural building damage", "Rural flooding", "Well and septic system failures"],
    testimonial: { name: "Windsor Township Farm", text: "Grain bin had fire damage. M&M knew exactly how to handle agricultural restoration.", rating: 5 }
  },
  {
    name: "Meridian Charter Township",
    slug: "meridian-charter-township",
    state: "MI",
    county: "Ingham",
    population: "39,688",
    populationNum: 39688,
    keywords: ["Meridian Township MI", "Meridian Charter Township", "Ingham County"],
    responseTime: "30 minutes",
    casesCompleted: 445,
    uniqueFact: "Encompassing Okemos and Haslett, Meridian Township is one of Michigan's most affluent communities with high property values and quality expectations.",
    landmarks: ["Meridian Mall", "MSU adjacent areas", "Lake Lansing", "Central Park"],
    commonIssues: ["High-end home restoration", "Finished basement flooding", "Lake-area moisture damage"],
    testimonial: { name: "Meridian Township Executive", text: "When you have high-end finishes, you need restoration pros who understand quality. M&M delivered.", rating: 5 }
  }
];

export const FAQ_GENERAL = [
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation estimates for all restoration services. Our certified technicians will assess the damage and provide you with a detailed estimate at no cost."
  },
  {
    question: "Do you work with my insurance company?",
    answer: "Absolutely! We work directly with all major insurance companies and handle the paperwork for you. We'll help maximize your claim and minimize your out-of-pocket expenses."
  },
  {
    question: "How fast can you get here?",
    answer: "We offer 24/7 emergency response and typically arrive within 60 minutes or less for emergency situations throughout the Greater Lansing Area."
  },
  {
    question: "How long does the restoration process take?",
    answer: "The timeline varies depending on the extent of damage. Water damage typically takes 3-5 days, while fire damage can take 1-2 weeks. We'll provide you with a clear timeline during our initial assessment."
  },
  {
    question: "Will the damage come back?",
    answer: "When properly restored by our IICRC certified technicians, the damage will not return. We guarantee our work and use professional-grade equipment to ensure complete restoration."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, M&M Restoration is fully licensed, bonded, and insured. Our technicians are IICRC certified and we maintain comprehensive liability insurance for your protection."
  }
];

export const SERVICE_FAQS: Record<string, Array<{question: string; answer: string}>> = {
  "water-damage-restoration": [
    { question: "What should I do first when I discover water damage?", answer: "Stop the water source if safe to do so, then call a restoration professional immediately - every hour of delay can increase damage by 30%. Don't use electrical appliances in wet areas. Take photos for insurance before any cleanup begins." },
    { question: "How much does water damage restoration cost?", answer: "Water damage restoration in Lansing typically costs $2,500-$7,500, depending on the affected area size and water category. Most homeowners pay around $4,000 after insurance. We provide free estimates and work directly with your insurance." },
    { question: "How long does water damage restoration take?", answer: "Most water damage restoration takes 3-5 days: Day 1 for water extraction, Days 2-4 for industrial drying with dehumidifiers and air movers, and Day 5 for final inspection. Larger floods may extend to 1-2 weeks." },
    { question: "Can I clean up water damage myself?", answer: "Small spills (under 10 sq ft of clean water) can be DIY. Call professionals for: water over 1 inch deep, water touching walls or cabinets, water from unknown sources, sewage involvement, or water sitting more than 24 hours (mold risk)." },
    { question: "Does homeowners insurance cover water damage?", answer: "Yes, most policies cover sudden water damage like burst pipes or appliance failures. They typically don't cover gradual leaks, flooding from outside, or neglected maintenance. We handle insurance claims directly and help maximize your coverage." },
    { question: "What are signs of hidden water damage?", answer: "Watch for: musty odors, peeling paint or wallpaper, warped floors, water stains on ceilings, unexplained high water bills, visible mold growth, and soft or spongy drywall. Hidden damage costs more to repair - early detection saves money." },
    { question: "Will mold grow after water damage?", answer: "Mold can start growing within 24-48 hours in wet conditions. That's why fast response is critical. Our industrial drying equipment and antimicrobial treatments prevent mold growth when we respond quickly." }
  ],
  "mold-remediation": [
    { question: "How do I know if I have mold in my house?", answer: "Common signs include: musty or earthy odors, visible dark spots on walls/ceilings, recent water damage, allergic symptoms (sneezing, runny nose, itchy eyes) that improve when you leave home, and condensation on windows. We offer professional mold testing to confirm." },
    { question: "How much does mold removal cost?", answer: "Mold remediation in Lansing typically costs $1,500-$6,000 depending on the colony size, location, and extent of damage. Small bathroom mold may cost $500-$1,500, while large infestations can exceed $6,000. We provide free inspections and estimates." },
    { question: "Is mold dangerous to my family's health?", answer: "Some molds produce mycotoxins that can cause respiratory issues, allergic reactions, and other health problems - especially for children, elderly, and those with compromised immune systems. Black mold (Stachybotrys) is particularly concerning. Professional removal protects your family." },
    { question: "Can I remove mold myself?", answer: "Small areas (under 10 sq ft) on hard surfaces can be DIY with proper protection. Call professionals for: mold larger than 10 sq ft, mold in HVAC systems, mold after flooding, black or toxic mold, or if occupants have health symptoms." },
    { question: "How long does mold remediation take?", answer: "Most mold remediation takes 3-7 days: Day 1-2 for containment and removal, Days 3-5 for treatment and drying, Days 6-7 for clearance testing and restoration. Complex cases with structural damage may take longer." },
    { question: "Does insurance cover mold removal?", answer: "Coverage varies significantly. Mold from a covered water damage event (like a burst pipe) is typically covered. Mold from long-term humidity or neglect usually isn't. We review your policy and help document the mold source for claims." },
    { question: "How do you prevent mold from coming back?", answer: "We address the moisture source (the root cause), apply antimicrobial treatments, improve ventilation, and may recommend dehumidifiers. Post-remediation air quality testing confirms complete removal. We also provide prevention tips specific to your home." }
  ],
  "fire-damage-cleanup": [
    { question: "What should I do after a fire in my house?", answer: "First, don't enter until the fire department clears it as safe. Then call your insurance company, document damage with photos, and contact a restoration company for emergency board-up and assessment. Don't attempt cleanup yourself - soot and smoke residue require specialized treatment." },
    { question: "How much does fire damage restoration cost?", answer: "Fire damage restoration typically costs $3,000-$15,000+ depending on severity. Small kitchen fires may cost $3,000-$5,000, while whole-room fires with smoke spread can exceed $15,000. Insurance typically covers fire damage fully. We provide free estimates." },
    { question: "How long does fire damage cleanup take?", answer: "Fire restoration typically takes 1-3 weeks: Days 1-3 for board-up, assessment, and water removal from firefighting. Week 1-2 for soot removal, cleaning, and odor treatment. Week 2-3 for repairs and reconstruction. Major fires may take longer." },
    { question: "Can fire-damaged items be saved?", answer: "Yes, many items can be professionally restored! Furniture, electronics, documents, photographs, and clothing often survive with proper cleaning. We assess each item using specialized techniques - ultrasonic cleaning, ozone treatment, and content restoration can save irreplaceable belongings." },
    { question: "How do you get smoke smell out of a house?", answer: "Complete smoke odor removal requires: cleaning all surfaces (soot is acidic and spreads), thermal fogging to neutralize odor molecules, ozone or hydroxyl treatment for deep penetration, and often HVAC cleaning. DIY methods only mask the smell temporarily." },
    { question: "Does insurance pay for fire damage?", answer: "Yes, fire damage is typically fully covered by homeowners insurance, including the structure, contents, and additional living expenses if you can't stay in your home. We work directly with your insurance and help document everything for maximum coverage." },
    { question: "Can I stay in my house after a fire?", answer: "It depends on the damage extent. Small, contained fires may allow occupancy after board-up. However, smoke inhalation risks, structural concerns, and soot contamination often require temporary relocation. Your insurance typically covers additional living expenses." }
  ],
  "storm-damage-restoration": [
    { question: "What should I do after storm damage to my house?", answer: "Document all damage with photos before touching anything (for insurance). Cover holes with tarps if safe. Don't enter if you suspect structural damage. Call your insurance company and a restoration professional for emergency board-up and water mitigation." },
    { question: "How much does storm damage repair cost?", answer: "Storm damage restoration typically costs $2,000-$10,000+ depending on the type and extent. Roof tarping and minor repairs may cost $1,000-$3,000, while significant wind or hail damage with water intrusion can exceed $10,000. Insurance usually covers storm damage." },
    { question: "Does homeowners insurance cover storm damage?", answer: "Most policies cover wind, hail, and lightning damage. Flood damage requires separate flood insurance. Check your policy for specific deductibles - some have separate wind/hail deductibles. We help document damage and work directly with adjusters." },
    { question: "How do I prevent more damage after a storm?", answer: "Emergency tarping and board-up are critical to prevent water intrusion. Don't wait for your insurance adjuster - they expect you to mitigate damage. We provide 24/7 emergency tarping and board-up services and document everything for your claim." }
  ],
  "biohazard-cleanup": [
    { question: "Who cleans up after a death in a home?", answer: "Professional biohazard cleanup companies handle death scenes - not regular cleaning services. We have OSHA-certified technicians, proper PPE, EPA-registered disinfectants, and legal disposal methods. This protects you legally and emotionally from handling traumatic scenes." },
    { question: "How much does biohazard cleanup cost?", answer: "Biohazard cleanup typically costs $2,000-$8,000 depending on the scene type, affected area, and contamination level. Insurance or victim assistance programs often cover these costs. We provide confidential, compassionate service and help navigate payment options." },
    { question: "Is biohazard cleanup covered by insurance?", answer: "Often yes. Homeowners insurance frequently covers biohazard cleanup. Crime victim assistance programs also provide coverage. We work with insurance companies and can help connect you with victim assistance resources." },
    { question: "How long does biohazard cleanup take?", answer: "Most biohazard cleanup takes 1-3 days depending on contamination extent. We work efficiently and discretely, understanding the emotional difficulty of these situations. Our goal is complete remediation so you can begin healing." }
  ],
  "sewage-cleanup-services": [
    { question: "Is sewage backup dangerous?", answer: "Yes, sewage contains harmful bacteria, viruses, and parasites that cause serious illness. Category 3 'black water' requires professional cleanup with proper PPE and disinfection. Don't attempt DIY cleanup - exposure risks include E. coli, hepatitis, and other pathogens." },
    { question: "How much does sewage cleanup cost?", answer: "Sewage cleanup typically costs $2,500-$7,000 depending on the amount and spread. Small backups contained to one room may cost $2,000-$3,500, while extensive contamination requiring structural drying exceeds $5,000. We provide free estimates." },
    { question: "Does insurance cover sewage backup?", answer: "Standard homeowners insurance typically doesn't cover sewage backup - it requires a separate 'sewer and drain backup' endorsement. Check your policy or call your agent. If you don't have coverage, consider adding it - it's usually inexpensive." },
    { question: "How do you clean up sewage backup?", answer: "Professional sewage cleanup includes: extracting contaminated water, removing affected porous materials (carpet, drywall), applying hospital-grade antimicrobial treatments, structural drying with dehumidifiers, and thorough sanitization. We also deodorize to eliminate lingering odors." }
  ]
};

// Keyword variations mapping to parent services for SEO
export const KEYWORD_VARIATIONS: Record<string, { parentService: string; title: string; description: string; h1: string }> = {
  "water-damage-repair": {
    parentService: "water-damage-restoration",
    title: "Water Damage Repair Services in Lansing, MI | M&M Restoration",
    description: "Professional water damage repair in Lansing, MI. 24/7 emergency response, IICRC certified technicians. Call 616-648-7775 for fast water damage repair.",
    h1: "Water Damage Repair Services"
  },
  "water-damage-cleanup": {
    parentService: "water-damage-restoration",
    title: "Water Damage Cleanup in Lansing, MI | Fast 24/7 Response",
    description: "Emergency water damage cleanup services in Greater Lansing. We extract water, dry structures, and prevent mold. Call 616-648-7775 now.",
    h1: "Water Damage Cleanup Services"
  },
  "water-damage-remediation": {
    parentService: "water-damage-restoration",
    title: "Water Damage Remediation Lansing MI | M&M Restoration",
    description: "Complete water damage remediation in Lansing. Professional water extraction, structural drying, and mold prevention. Free estimates.",
    h1: "Water Damage Remediation"
  },
  "water-damage-mitigation": {
    parentService: "water-damage-restoration",
    title: "Water Damage Mitigation Services | Lansing, MI",
    description: "Fast water damage mitigation to minimize property damage. 60-minute response time in Greater Lansing. Call 616-648-7775.",
    h1: "Water Damage Mitigation"
  },
  "flood-damage-restoration": {
    parentService: "water-damage-restoration",
    title: "Flood Damage Restoration Lansing MI | 24/7 Emergency",
    description: "Professional flood damage restoration in Lansing, MI. We restore flooded homes and businesses. Insurance accepted. Call 616-648-7775.",
    h1: "Flood Damage Restoration"
  },
  "flood-damage-cleanup": {
    parentService: "water-damage-restoration",
    title: "Flood Damage Cleanup Services | Greater Lansing Area",
    description: "Expert flood damage cleanup in Lansing and surrounding areas. Fast water extraction and complete restoration. Free estimates.",
    h1: "Flood Damage Cleanup"
  },
  "flood-damage-repair": {
    parentService: "water-damage-restoration",
    title: "Flood Damage Repair Lansing MI | M&M Restoration",
    description: "Complete flood damage repair services. We repair walls, floors, and structures damaged by flooding. IICRC certified.",
    h1: "Flood Damage Repair"
  },
  "storm-damage-repair": {
    parentService: "storm-damage-restoration",
    title: "Storm Damage Repair Lansing MI | Emergency Services",
    description: "Professional storm damage repair in Greater Lansing. Emergency tarping, board-up, and complete restoration. Call 616-648-7775.",
    h1: "Storm Damage Repair"
  },
  "storm-damage-cleanup": {
    parentService: "storm-damage-restoration",
    title: "Storm Damage Cleanup Services | Lansing, MI",
    description: "Fast storm damage cleanup and debris removal in Lansing. 24/7 emergency response. Insurance claims assistance.",
    h1: "Storm Damage Cleanup"
  },
  "tornado-damage-restoration": {
    parentService: "storm-damage-restoration",
    title: "Tornado Damage Restoration Lansing MI | M&M Restoration",
    description: "Complete tornado damage restoration services in Michigan. Emergency response, structural repairs, and insurance coordination.",
    h1: "Tornado Damage Restoration"
  },
  "tornado-damage-repair": {
    parentService: "storm-damage-restoration",
    title: "Tornado Damage Repair Services | Greater Lansing",
    description: "Professional tornado damage repair in Lansing area. We restore homes and businesses after tornado damage. Free estimates.",
    h1: "Tornado Damage Repair"
  },
  "mold-removal": {
    parentService: "mold-remediation",
    title: "Mold Removal Services Lansing MI | Safe & Complete",
    description: "Professional mold removal in Lansing, MI. IICRC certified technicians, safe containment, and clearance testing. Call 616-648-7775.",
    h1: "Mold Removal Services"
  },
  "mold-cleanup": {
    parentService: "mold-remediation",
    title: "Mold Cleanup Services | Greater Lansing Area",
    description: "Expert mold cleanup and remediation in Lansing. We eliminate mold safely and prevent regrowth. Free inspections.",
    h1: "Mold Cleanup Services"
  },
  "mold-testing": {
    parentService: "mold-inspection-services",
    title: "Mold Testing Lansing MI | Professional Air Quality Testing",
    description: "Professional mold testing and air quality assessment in Lansing. Accurate results, detailed reports. Schedule your test today.",
    h1: "Mold Testing Services"
  },
  "fire-damage-restoration": {
    parentService: "fire-damage-cleanup",
    title: "Fire Damage Restoration Lansing MI | Complete Recovery",
    description: "Full-service fire damage restoration in Lansing. Smoke cleanup, odor removal, and structural repairs. Insurance accepted.",
    h1: "Fire Damage Restoration"
  },
  "smoke-damage-cleanup": {
    parentService: "fire-damage-cleanup",
    title: "Smoke Damage Cleanup Services | Lansing, MI",
    description: "Professional smoke damage cleanup and odor elimination. We remove soot, clean surfaces, and restore air quality. Call now.",
    h1: "Smoke Damage Cleanup"
  },
  "smoke-damage-restoration": {
    parentService: "fire-damage-cleanup",
    title: "Smoke Damage Restoration Lansing MI | M&M Restoration",
    description: "Complete smoke damage restoration services. Soot removal, deodorization, and content cleaning. Free estimates.",
    h1: "Smoke Damage Restoration"
  },
  "soot-removal": {
    parentService: "fire-damage-cleanup",
    title: "Soot Removal Services Lansing MI | Professional Cleaning",
    description: "Expert soot removal from walls, ceilings, and contents. We use specialized techniques to prevent permanent staining.",
    h1: "Soot Removal Services"
  },
  "sewage-backup-cleanup": {
    parentService: "sewage-cleanup-services",
    title: "Sewage Backup Cleanup Lansing MI | 24/7 Emergency",
    description: "Emergency sewage backup cleanup in Lansing. Fast response, proper sanitization, and odor elimination. Call 616-648-7775.",
    h1: "Sewage Backup Cleanup"
  },
  "sewer-cleanup": {
    parentService: "sewage-cleanup-services",
    title: "Sewer Cleanup Services | Greater Lansing Area",
    description: "Professional sewer cleanup and sanitization. We safely remove contamination and restore your property. Free estimates.",
    h1: "Sewer Cleanup Services"
  }
};

// Cost data for pricing pages
export const COST_DATA: Record<string, { 
  serviceName: string;
  priceRange: string; 
  avgPrice: string;
  factors: string[];
  commonProjects: Array<{title: string; description: string}>;
  overview: string[];
  costTiers: Array<{name: string; range: string; description: string}>;
  similarServices: Array<{name: string; slug: string; description: string}>;
  localContext: string;
  faqs: Array<{question: string; answer: string}>;
}> = {
  "water-damage-restoration": {
    serviceName: "Water Damage Restoration",
    priceRange: "$1,500 - $10,000+",
    avgPrice: "$4,000 - $5,000",
    factors: [
      "Size of affected area (square footage)",
      "Water category (clean, gray, or black water)",
      "Duration water was present before extraction",
      "Materials affected (carpet, hardwood, drywall)",
      "Need for mold prevention treatments",
      "Structural repairs required"
    ],
    commonProjects: [
      { title: "Flooded Basement Cleanup", description: "Heavy rains, sump pump failures, or foundation cracks cause water to accumulate in basements throughout Lansing neighborhoods, requiring emergency extraction and structural drying." },
      { title: "Burst Pipe Repair & Cleanup", description: "Michigan winters cause pipes to freeze and burst, flooding walls, ceilings, and floors. Quick response prevents extensive drywall and flooring damage." },
      { title: "Appliance Leak Restoration", description: "Water heaters, washing machines, and dishwashers can fail suddenly, releasing gallons of water that seep under flooring and into walls." },
      { title: "Roof Leak Water Damage", description: "Storm damage or aging shingles allow water to penetrate ceilings and walls, causing stains, warping, and potential mold growth in attic spaces." },
      { title: "Sewage Backup Remediation", description: "Sewer line backups result in contaminated Category 3 water requiring specialized extraction, sanitization, and often material removal for safe restoration." }
    ],
    overview: [
      "Water damage restoration services address property damage caused by excess water intrusion from flooding, burst pipes, appliance failures, or storm damage. When water enters your home, it quickly seeps into walls, floors, and structural elements, causing immediate damage and creating conditions for mold growth within 24-48 hours. Professional restoration begins with emergency water extraction using truck-mounted systems capable of removing hundreds of gallons per hour, followed by industrial drying with commercial dehumidifiers and air movers.",
      "The restoration process involves several critical phases that determine the final cost and timeline. After water removal, technicians use moisture meters and thermal imaging cameras to map hidden moisture in walls, under floors, and in ceiling cavities. This moisture mapping ensures complete drying and prevents future mold problems. Affected materials like carpet padding, drywall, and insulation may need removal if saturation is severe or if the water was contaminated.",
      "Water damage is categorized into three types that significantly impact restoration approach and cost. Category 1 (clean water) from broken supply lines or rainwater is least expensive to address. Category 2 (gray water) from appliances or sump pumps contains contaminants requiring additional sanitization. Category 3 (black water) from sewage or flooding contains dangerous pathogens and requires the most extensive remediation, including removal of porous materials and thorough disinfection.",
      "Homeowners in the Greater Lansing area face water damage risks year-round: frozen pipes in winter, spring flooding from snowmelt and heavy rains, summer storms, and fall leaf-clogged gutters. Properties near the Grand River, Red Cedar River, and Lake Lansing face elevated flood risks. Older homes in Lansing and East Lansing with aging plumbing are particularly susceptible to pipe failures. Quick response from a local restoration company minimizes damage extent and reduces overall restoration costs."
    ],
    costTiers: [
      { name: "Minor Water Damage", range: "$1,500 - $3,000", description: "Small affected area (one room or less), clean water source, caught within 24 hours. Includes water extraction, drying equipment for 2-3 days, and antimicrobial treatment. No material removal needed." },
      { name: "Moderate Water Damage", range: "$3,000 - $7,000", description: "Multiple rooms affected, may involve gray water, some drywall or flooring removal required. Includes 4-5 days of industrial drying, carpet removal/replacement, and baseboards repair." },
      { name: "Extensive Water Damage", range: "$7,000 - $15,000", description: "Large area or entire floor affected, significant material removal, potential structural concerns. May include subfloor replacement, extensive drywall work, and mold prevention treatments." },
      { name: "Severe Flooding", range: "$15,000 - $30,000+", description: "Whole-home flooding, Category 3 water involvement, structural damage requiring reconstruction. Includes complete content pack-out, extensive demolition, and full rebuild of affected areas." }
    ],
    similarServices: [
      { name: "Mold Remediation", slug: "mold-remediation", description: "Often needed after water damage sits for 48+ hours, addressing mold growth in walls, ceilings, and HVAC systems." },
      { name: "Sewage Cleanup", slug: "sewage-cleanup-services", description: "Specialized Category 3 water restoration for sewer backups requiring contamination removal and sanitization." },
      { name: "Storm Damage Restoration", slug: "storm-damage-restoration", description: "Addresses water intrusion from roof damage, broken windows, and flooding caused by severe weather events." },
      { name: "Basement Waterproofing", slug: "water-damage-restoration", description: "Preventive service to stop future water intrusion through foundation cracks, failed sump pumps, or drainage issues." },
      { name: "Hardwood Floor Restoration", slug: "hardwood-floor-cleaning", description: "Specialized drying and refinishing for water-damaged hardwood floors to prevent warping and cupping." },
      { name: "Content Cleaning", slug: "furniture-cleaning-services", description: "Professional cleaning of furniture, documents, and belongings affected by water damage." }
    ],
    localContext: "Lansing area properties face unique water damage challenges due to Michigan's climate and geography. The region experiences an average of 32 inches of precipitation annually, with heavy spring rains coinciding with snowmelt creating peak flooding conditions in March through May. Properties in flood-prone areas near the Grand River corridor, including parts of Lansing, Delta Township, and Eaton Rapids, face elevated risks during these periods. Older neighborhoods in East Lansing and downtown Lansing have aging infrastructure with cast iron and galvanized pipes prone to failure during temperature extremes. M&M Restoration maintains rapid response capability throughout Ingham, Eaton, and Clinton counties, with average arrival times under 60 minutes for emergency water damage calls. Our local technicians understand the specific construction styles common in Greater Lansing homes, from century-old Victorian structures to modern subdivisions, enabling efficient and appropriate restoration approaches for each property type.",
    faqs: [
      { question: "How much does water damage restoration cost in Lansing?", answer: "Water damage restoration in Lansing typically costs between $1,500 and $10,000, with most homeowners paying $4,000-$5,000. Small water damage (one room, clean water) may cost $1,500-$3,000, while extensive flooding with contaminated water can exceed $15,000. We provide free estimates specific to your situation." },
      { question: "Does homeowners insurance cover water damage restoration?", answer: "Most homeowners insurance policies cover sudden water damage from burst pipes, appliance failures, and similar events. Gradual leaks, flood damage from outside sources, and neglected maintenance typically aren't covered. Flood insurance is separate and required for federally-backed mortgages in flood zones. We work directly with all major insurance companies and help document damage for maximum coverage." },
      { question: "How long does water damage restoration take?", answer: "Most water damage restoration takes 3-5 days for drying, plus additional time for repairs. Day 1 involves water extraction and equipment setup. Days 2-4 focus on industrial drying with daily moisture monitoring. Day 5 typically includes final inspection and equipment removal. Extensive damage requiring reconstruction may take 2-4 weeks total." },
      { question: "What should I do immediately after discovering water damage?", answer: "Stop the water source if safe (shut off main water valve for pipe breaks). Don't use electrical outlets or appliances in wet areas. Move valuables to dry areas. Take photos of all damage before cleanup for insurance. Call a restoration professional immediately - every hour of delay can increase damage and costs by 10-30%." },
      { question: "Can I handle water damage cleanup myself?", answer: "Small spills under 10 square feet of clean water on hard surfaces can be DIY. Call professionals for: standing water over 1 inch deep, water from unknown or contaminated sources, water affecting walls or multiple rooms, water sitting more than 24 hours, or any situation involving carpet, hardwood, or drywall." },
      { question: "Will water damage cause mold in my home?", answer: "Mold can begin growing within 24-48 hours in wet conditions with temperatures between 60-80°F. Professional water damage restoration includes antimicrobial treatments and thorough drying that prevents mold growth. If water sat for more than 48 hours before extraction, mold inspection and potential remediation may be needed." }
    ]
  },
  "mold-remediation": {
    serviceName: "Mold Remediation",
    priceRange: "$500 - $8,000+",
    avgPrice: "$2,000 - $4,000",
    factors: [
      "Size of mold colony (square footage)",
      "Location of mold (accessible vs behind walls)",
      "Type of mold present",
      "Extent of structural damage",
      "HVAC system involvement",
      "Required clearance testing"
    ],
    commonProjects: [
      { title: "Bathroom Mold Removal", description: "Chronic humidity in bathrooms leads to mold growth on grout, ceilings, and behind vanities, requiring thorough removal and ventilation improvements." },
      { title: "Basement Mold Remediation", description: "Damp basements with poor ventilation develop mold on walls, joists, and stored belongings, often requiring extensive treatment and moisture barriers." },
      { title: "Attic Mold Cleanup", description: "Roof leaks and inadequate ventilation cause mold growth on attic sheathing and insulation, requiring removal and proper ventilation installation." },
      { title: "HVAC Mold Treatment", description: "Mold in ductwork and air handlers spreads spores throughout the home, requiring specialized cleaning and UV treatment systems." },
      { title: "Post-Flood Mold Prevention", description: "After water damage, preventive mold treatment stops colonies before they establish, significantly reducing future remediation costs." }
    ],
    overview: [
      "Mold remediation is the process of identifying, containing, and removing mold growth from indoor environments while preventing future recurrence. Unlike simple cleaning, professional remediation addresses the root moisture cause, removes contaminated materials, and restores healthy indoor air quality. Mold poses health risks including respiratory issues, allergic reactions, and in some cases toxic exposure, making proper remediation essential for occupied properties.",
      "The remediation process begins with thorough inspection and testing to identify mold species, extent of contamination, and moisture sources. Technicians establish containment using plastic sheeting and negative air pressure to prevent spore spread during removal. HEPA air scrubbers filter microscopic spores from the air while workers in protective equipment remove affected materials. Remaining surfaces receive antimicrobial treatment to kill residual spores.",
      "Material removal decisions depend on the surface type and contamination level. Non-porous materials like metal, glass, and hard plastic can usually be cleaned and saved. Semi-porous materials like wood may be salvageable with aggressive treatment. Porous materials including drywall, carpet, insulation, and ceiling tiles typically require removal and replacement when mold penetration is significant. Professional judgment balances thoroughness with cost-effectiveness.",
      "Michigan's humid summers and temperature differentials create ideal mold growth conditions in many Lansing area homes. Basements with foundation moisture issues, bathrooms with poor ventilation, and areas affected by past water damage are common problem spots. Homes built before 1980 often lack adequate vapor barriers and ventilation, making them more susceptible. Professional remediation not only removes existing mold but identifies and addresses the underlying moisture problems to prevent recurrence."
    ],
    costTiers: [
      { name: "Small Area Treatment", range: "$500 - $1,500", description: "Visible mold under 10 square feet in accessible locations like bathroom tile or exposed basement walls. Includes HEPA vacuuming, antimicrobial treatment, and air scrubbing." },
      { name: "Moderate Remediation", range: "$1,500 - $4,000", description: "Mold affecting 10-50 square feet, may require some drywall or material removal. Includes containment setup, HEPA filtration, material disposal, and surface treatment." },
      { name: "Large Scale Remediation", range: "$4,000 - $8,000", description: "Extensive mold growth over 50 square feet, multiple rooms, or involving HVAC contamination. Includes full containment, significant material removal, and post-remediation testing." },
      { name: "Whole-Home Remediation", range: "$8,000 - $20,000+", description: "Severe infestation throughout home, structural involvement, or toxic black mold requiring extensive demolition. Includes complete HVAC cleaning, full clearance testing, and reconstruction." }
    ],
    similarServices: [
      { name: "Water Damage Restoration", slug: "water-damage-restoration", description: "Addresses the water intrusion that causes most mold problems, including extraction and drying." },
      { name: "Mold Inspection Services", slug: "mold-inspection-services", description: "Professional testing to identify mold presence, species, and contamination levels before remediation." },
      { name: "HVAC Cleaning", slug: "odor-removal-services", description: "Duct cleaning and air handler treatment to remove mold spores circulating through the ventilation system." },
      { name: "Basement Waterproofing", slug: "water-damage-restoration", description: "Preventive moisture control to stop the dampness that enables mold growth in below-grade spaces." },
      { name: "Crawl Space Encapsulation", slug: "water-damage-restoration", description: "Vapor barrier installation to control moisture in crawl spaces prone to mold growth." },
      { name: "Dehumidification Services", slug: "water-damage-restoration", description: "Commercial dehumidification to maintain humidity below 60% and prevent mold conditions." }
    ],
    localContext: "Greater Lansing's climate creates persistent mold challenges for homeowners. High summer humidity averaging 70-80% combined with air conditioning creates condensation on cold surfaces. Spring flooding along the Grand River and Red Cedar leaves many properties with lingering moisture problems. Older homes in established Lansing neighborhoods often have basement moisture issues from outdated waterproofing and drainage systems. M&M Restoration provides comprehensive mold inspection, testing, and remediation throughout Ingham, Eaton, and Clinton counties. Our IICRC-certified technicians use advanced moisture detection equipment to find hidden mold and address underlying moisture sources, ensuring complete remediation and preventing costly recurrence.",
    faqs: [
      { question: "How much does mold removal cost in Lansing?", answer: "Mold remediation in Lansing ranges from $500 for small, accessible areas to $8,000+ for large infestations. Most homeowners pay $2,000-$4,000. Factors include mold location, colony size, and whether structural materials need replacement. We provide free inspections and detailed estimates." },
      { question: "Is mold removal covered by insurance?", answer: "Coverage varies by policy. Mold resulting from a covered water damage event (like a burst pipe) is typically covered. Mold from humidity, gradual leaks, or neglect usually isn't covered. Some policies have mold coverage limits of $5,000-$10,000. We help document the mold source for insurance claims." },
      { question: "How do I know if I have mold in my house?", answer: "Common signs include: musty or earthy odors, visible dark spots on walls or ceilings, recent water damage or flooding, allergic symptoms that improve when you leave home, peeling paint or wallpaper, and condensation on windows. Professional testing can confirm mold presence and identify species." },
      { question: "Is black mold dangerous?", answer: "Several mold species appear black, and Stachybotrys chartarum (toxic black mold) can produce mycotoxins causing serious health effects. However, all mold should be treated seriously. Professional testing identifies the specific species and risk level. Don't attempt to disturb suspected toxic mold yourself." },
      { question: "How long does mold remediation take?", answer: "Most mold remediation projects take 3-7 days. Small bathroom mold may be completed in 1-2 days. Larger projects requiring containment, material removal, and testing typically take 4-5 days. Extensive remediation with reconstruction may take 2-3 weeks." },
      { question: "Will mold come back after remediation?", answer: "Professional remediation addresses both the mold and the moisture source, preventing recurrence. We identify why mold grew, fix the underlying issue, and apply antimicrobial treatments. Post-remediation testing verifies complete removal. If moisture problems aren't fixed, mold can return within weeks." }
    ]
  },
  "fire-damage-cleanup": {
    serviceName: "Fire Damage Cleanup",
    priceRange: "$3,000 - $50,000+",
    avgPrice: "$10,000 - $15,000",
    factors: [
      "Extent of fire damage",
      "Amount of smoke and soot spread",
      "Water damage from firefighting",
      "Structural repairs needed",
      "Content cleaning requirements",
      "Odor elimination complexity"
    ],
    commonProjects: [
      { title: "Kitchen Fire Restoration", description: "Grease fires and cooking accidents cause localized fire damage with extensive smoke spread throughout the home, requiring thorough cleaning of all surfaces and HVAC systems." },
      { title: "Electrical Fire Cleanup", description: "Wiring failures in walls and outlets cause fires that spread through wall cavities, requiring demolition to assess hidden damage and remove charred materials." },
      { title: "Smoke Damage Remediation", description: "Even small fires produce smoke that penetrates every room, leaving soot on surfaces and odors absorbed into soft materials and porous surfaces." },
      { title: "Water Damage from Firefighting", description: "Fire suppression efforts introduce hundreds of gallons of water that must be extracted before it causes secondary mold damage." },
      { title: "Content Pack-Out and Cleaning", description: "Removing, inventorying, and professionally cleaning smoke-affected furniture, clothing, electronics, and personal items for insurance documentation." }
    ],
    overview: [
      "Fire damage restoration encompasses far more than repairing burned structures. A typical house fire affects the entire property through smoke migration, soot deposits, water damage from firefighting, and lingering odors that penetrate every surface. Professional restoration addresses all these elements systematically, starting with emergency board-up and securing the property, then progressing through water extraction, soot removal, odor elimination, and finally structural repairs and reconstruction.",
      "Smoke and soot damage often exceeds the direct fire damage in terms of affected area and cleanup complexity. Smoke travels through HVAC systems and natural air currents, depositing acidic soot on surfaces throughout the home - even in rooms far from the fire origin. Different fire types produce different residues: protein fires from cooking leave invisible but pungent residues, synthetic material fires create sticky soot, and wood fires produce dry, powdery ash. Each requires specific cleaning approaches.",
      "The restoration timeline depends heavily on fire extent and insurance coordination. Emergency services (board-up, water extraction, content pack-out) happen within 24-48 hours. Soot and odor remediation typically takes 1-2 weeks. Structural repairs and reconstruction can extend the project to several months for significant fires. Throughout this process, detailed documentation supports insurance claims and ensures proper compensation for losses.",
      "Fire damage presents serious health hazards beyond obvious structural concerns. Smoke residue contains carcinogens and toxic chemicals from burned synthetic materials. Soot particles small enough to penetrate deep into lungs coat surfaces throughout affected properties. Water from firefighting creates mold risks if not properly extracted. Professional restoration teams use appropriate PPE and containment to protect both workers and occupants during cleanup."
    ],
    costTiers: [
      { name: "Small Contained Fire", range: "$3,000 - $7,500", description: "Fire limited to one room or area (stovetop fire, wastebasket fire). Includes emergency services, soot cleaning in affected room, smoke cleaning in adjacent areas, and odor treatment." },
      { name: "Room Fire with Smoke Spread", range: "$7,500 - $20,000", description: "Significant fire damage to one room with smoke affecting multiple rooms. Includes demolition of damaged materials, whole-home smoke cleaning, HVAC cleaning, and partial reconstruction." },
      { name: "Multi-Room Fire", range: "$20,000 - $50,000", description: "Fire affecting multiple rooms or floor, extensive smoke damage throughout. Includes major demolition, content pack-out and cleaning, complete odor elimination, and significant reconstruction." },
      { name: "Major Structural Fire", range: "$50,000 - $150,000+", description: "Severe fire with structural compromise, possible total loss considerations. Includes complete evaluation, extensive demolition, full reconstruction, and comprehensive content restoration or replacement." }
    ],
    similarServices: [
      { name: "Water Damage Restoration", slug: "water-damage-restoration", description: "Fire suppression efforts create significant water damage requiring extraction and drying before reconstruction." },
      { name: "Odor Removal Services", slug: "odor-removal-services", description: "Specialized smoke odor elimination using thermal fogging, ozone treatment, and hydroxyl generators." },
      { name: "Content Cleaning", slug: "furniture-cleaning-services", description: "Professional cleaning and restoration of smoke-affected furniture, clothing, and personal belongings." },
      { name: "Storm Damage Restoration", slug: "storm-damage-restoration", description: "Lightning strikes cause fires requiring both fire restoration and structural storm damage repairs." },
      { name: "Biohazard Cleanup", slug: "biohazard-cleanup", description: "Fire scenes may involve biohazard situations requiring specialized cleaning protocols." },
      { name: "Reconstruction Services", slug: "post-construction-cleaning", description: "Rebuilding fire-damaged structures including framing, drywall, electrical, and finishing work." }
    ],
    localContext: "Lansing area properties experience various fire types requiring professional restoration. Kitchen fires remain the most common, often caused by unattended cooking or grease ignition. Winter months see increased heating-related fires from space heaters, fireplaces, and furnace malfunctions. Older homes in established Lansing and East Lansing neighborhoods may have outdated electrical systems prone to failure. M&M Restoration provides 24/7 emergency fire damage response throughout Greater Lansing, beginning with securing the property and coordinating with insurance adjusters. Our IICRC-certified technicians handle complete restoration from initial assessment through final reconstruction, serving as a single point of contact throughout the recovery process.",
    faqs: [
      { question: "How much does fire damage restoration cost?", answer: "Fire damage restoration costs range from $3,000 for small, contained fires to $50,000+ for major structural damage. The average kitchen fire with smoke spread costs $10,000-$15,000. Costs depend on fire extent, smoke spread, water damage from firefighting, and reconstruction needs. Insurance typically covers fire damage fully." },
      { question: "Does homeowners insurance cover fire damage?", answer: "Yes, homeowners insurance typically covers fire damage comprehensively, including structure repair, content replacement, and Additional Living Expenses (ALE) if you can't stay in your home. Most policies cover fire regardless of cause, except intentional arson by the insured. We work directly with insurance adjusters and document all damage." },
      { question: "How long does fire damage restoration take?", answer: "Restoration timelines vary significantly: small fires take 1-2 weeks, moderate fires 2-4 weeks, and major fires 2-6 months or longer. Emergency board-up happens within hours. Soot and odor remediation typically takes 1-2 weeks. Reconstruction time depends on damage extent and permit requirements." },
      { question: "Can smoke-damaged items be saved?", answer: "Yes, many items can be professionally restored. Electronics, furniture, documents, photographs, and clothing are often salvageable with specialized cleaning techniques including ultrasonic cleaning, ozone treatment, and dry cleaning. We assess each item and provide honest recommendations about restoration versus replacement." },
      { question: "How do you remove smoke smell from a house?", answer: "Complete smoke odor removal requires multiple approaches: thorough cleaning of all surfaces to remove soot, thermal fogging to neutralize odors in porous materials, ozone or hydroxyl treatment for deep penetration, and often HVAC cleaning. DIY methods like air fresheners only mask odors temporarily." },
      { question: "Is it safe to stay in my house after a fire?", answer: "Usually not immediately. Even small fires can leave dangerous residues, compromise air quality, and create structural concerns. The fire department will indicate if the structure is safe to enter. For significant fires, most families stay elsewhere during restoration - insurance typically covers temporary housing costs." }
    ]
  },
  "storm-damage-restoration": {
    serviceName: "Storm Damage Restoration",
    priceRange: "$1,000 - $15,000+",
    avgPrice: "$3,000 - $7,000",
    factors: [
      "Type of storm damage (wind, hail, lightning)",
      "Extent of structural damage",
      "Water intrusion amount",
      "Roof damage severity",
      "Emergency tarping needs",
      "Debris removal requirements"
    ],
    commonProjects: [
      { title: "Roof Tarping and Repair", description: "High winds and hail damage shingles and create openings requiring emergency tarping to prevent water intrusion, followed by permanent roof repairs." },
      { title: "Fallen Tree Damage Cleanup", description: "Trees toppled by wind damage roofs, siding, and structures, requiring safe removal, debris cleanup, and structural repairs." },
      { title: "Wind Damage Restoration", description: "Strong winds tear off siding, damage windows, and compromise roof integrity, allowing water intrusion into wall cavities and attics." },
      { title: "Flooding and Water Extraction", description: "Heavy rains overwhelm drainage systems and cause basement flooding or ground-level water intrusion requiring emergency extraction." },
      { title: "Lightning Strike Repairs", description: "Lightning can cause fires, electrical system damage, and structural damage to roofs and walls, requiring comprehensive assessment and restoration." }
    ],
    overview: [
      "Storm damage restoration addresses property damage from severe weather events including thunderstorms, high winds, hail, tornadoes, and flooding. Michigan experiences all these weather threats, with severe thunderstorm season running from April through September. Storm damage often combines multiple issues: wind removes roofing materials, rain enters through openings, and debris causes additional structural damage. Effective restoration requires immediate response to prevent secondary damage from water intrusion.",
      "Emergency services form the critical first phase of storm damage restoration. Tarping exposed roofs, boarding damaged windows, and extracting standing water must happen within hours to prevent escalating damage. Every hour water sits in a structure increases damage extent and restoration costs. After emergency stabilization, thorough assessment documents all damage for insurance claims while identifying less obvious problems like water in wall cavities or damaged electrical systems.",
      "Michigan's position in the Great Lakes region creates unique storm patterns affecting the Lansing area. Lake-effect weather systems can intensify storms, and the flat terrain allows strong winds to build. Tornado warnings occur multiple times each spring and summer. Aging trees in established neighborhoods become hazards during wind events, while newer subdivisions may have drainage issues not yet apparent. Professional restoration companies understand these local factors and maintain resources for rapid response when storms strike.",
      "Insurance coverage for storm damage varies by event type and policy details. Standard homeowners insurance covers wind, hail, and lightning damage. However, many policies now have separate wind/hail deductibles of 1-2% of home value rather than flat dollar amounts. Flooding from outside sources requires separate flood insurance - a critical distinction when heavy rains cause basement flooding versus when roof damage allows rain inside. Understanding your coverage before storms strike helps set appropriate expectations."
    ],
    costTiers: [
      { name: "Minor Storm Damage", range: "$1,000 - $3,000", description: "Emergency tarping, minor roof repairs, small amounts of water extraction. Limited material replacement needed, no structural concerns." },
      { name: "Moderate Storm Damage", range: "$3,000 - $7,000", description: "Significant roof damage, multiple windows or siding sections affected, water intrusion requiring drying equipment. May include tree limb removal." },
      { name: "Major Storm Damage", range: "$7,000 - $15,000", description: "Substantial roof replacement, major water intrusion with drying and mold prevention, debris from large fallen trees, multiple structural repairs needed." },
      { name: "Severe Storm/Tornado", range: "$15,000 - $75,000+", description: "Catastrophic damage with major structural compromise, possible partial collapse, extensive reconstruction required. May approach total loss on smaller structures." }
    ],
    similarServices: [
      { name: "Water Damage Restoration", slug: "water-damage-restoration", description: "Storm-related water intrusion requires the same extraction and drying processes as other water damage sources." },
      { name: "Roof Repair Services", slug: "storm-damage-restoration", description: "Permanent roof repairs after emergency tarping, including shingle replacement and structural repairs." },
      { name: "Fire Damage Cleanup", slug: "fire-damage-cleanup", description: "Lightning strikes can cause fires requiring combined fire and storm damage restoration." },
      { name: "Mold Remediation", slug: "mold-remediation", description: "Water intrusion from storm damage can lead to mold growth if not properly dried within 48 hours." },
      { name: "Tree and Debris Removal", slug: "storm-damage-restoration", description: "Safe removal of fallen trees and storm debris from structures and property." },
      { name: "Siding and Window Repair", slug: "storm-damage-restoration", description: "Replacement of wind-damaged siding and broken windows to restore building envelope." }
    ],
    localContext: "Greater Lansing experiences severe weather throughout the year, with peak storm season from April through September. The region sees an average of 30-40 thunderstorm days annually, with several capable of producing damaging winds, large hail, and occasional tornadoes. Properties along the Grand River corridor face additional flood risks during spring snowmelt and heavy rain events. M&M Restoration maintains 24/7 emergency response capability throughout Ingham, Eaton, and Clinton counties, with crews and equipment ready to deploy when storms threaten. We coordinate with roofing contractors, tree services, and other specialists to provide comprehensive storm damage restoration from initial emergency response through final repairs.",
    faqs: [
      { question: "How much does storm damage repair cost?", answer: "Storm damage repair in Lansing typically costs $1,000-$15,000 depending on severity. Emergency tarping runs $500-$1,500. Roof repairs average $3,000-$7,000. Major wind damage with water intrusion can exceed $15,000. Tornado damage may reach $50,000+ for extensive repairs. Most costs are covered by homeowners insurance." },
      { question: "Does insurance cover storm damage?", answer: "Most homeowners policies cover wind, hail, and lightning damage. Important notes: many policies have separate wind/hail deductibles (often 1-2% of home value), flood damage from outside sources requires separate flood insurance, and you must mitigate damage promptly. We document everything for insurance claims." },
      { question: "How quickly should I address storm damage?", answer: "Immediately - within hours if possible. Water intrusion from storm damage causes mold growth within 24-48 hours. Emergency tarping and board-up should happen the same day. Don't wait for your insurance adjuster to authorize repairs - your policy requires you to mitigate damage, and waiting increases costs." },
      { question: "What should I do after storm damage to my house?", answer: "Stay safe - don't enter if structure appears compromised. Document all damage with photos and video before any cleanup. Cover openings with tarps if you can do so safely. Contact your insurance company to start a claim. Call a restoration company for emergency services. Save all receipts for temporary repairs." },
      { question: "Will insurance pay if I tarp my own roof?", answer: "Yes, reasonable emergency mitigation costs are reimbursable. However, professional tarping is recommended for safety and effectiveness. DIY tarps often fail in subsequent storms, leading to additional damage. Insurance expects you to mitigate damage - professional documentation of emergency repairs supports your claim." },
      { question: "How long does storm damage restoration take?", answer: "Emergency tarping and stabilization happens within 24 hours. Water extraction and drying take 3-5 days. Permanent repairs depend on damage extent and material availability: minor repairs take 1-2 weeks, moderate damage 2-4 weeks, and major reconstruction may take several months." }
    ]
  },
  "biohazard-cleanup": {
    serviceName: "Biohazard Cleanup",
    priceRange: "$1,500 - $10,000+",
    avgPrice: "$3,000 - $5,000",
    factors: [
      "Type of biohazard situation",
      "Size of affected area",
      "Level of contamination",
      "Materials requiring disposal",
      "Odor treatment needs",
      "Structural cleaning requirements"
    ],
    commonProjects: [
      { title: "Unattended Death Cleanup", description: "Decomposition creates serious biohazard contamination requiring professional remediation, decontamination, and odor elimination." },
      { title: "Crime Scene Cleanup", description: "Blood and biological materials from violent incidents require OSHA-compliant removal and thorough decontamination." },
      { title: "Suicide Cleanup", description: "Compassionate cleaning of trauma scenes with complete decontamination while respecting families during difficult times." },
      { title: "Hoarding Cleanup", description: "Severe hoarding situations involving biohazard materials including animal waste and unsanitary conditions." },
      { title: "Infectious Disease Decontamination", description: "Professional sanitization after illness outbreaks using hospital-grade disinfectants and proper protocols." }
    ],
    overview: [
      "Biohazard cleanup involves safe removal and decontamination of biological materials posing health risks. This includes blood, bodily fluids, human remains, infectious contamination, and hazardous waste. Professional remediation requires OSHA-compliant procedures, specialized PPE, EPA-registered disinfectants, and proper disposal through licensed medical waste facilities.",
      "The remediation process follows strict protocols. Technicians assess scenes in full PPE, establish work zones, and systematically remove contaminated materials. Blood penetrates deeply into carpet, padding, subfloor, and drywall, often requiring removal. Remaining surfaces receive multiple applications of hospital-grade disinfectants.",
      "Odor elimination is critical, particularly in decomposition cases. Professional remediation uses enzyme-based cleaners that break down organic compounds, followed by ozone or hydroxyl treatment. These methods neutralize odors that would otherwise persist for months.",
      "Families facing biohazard situations experience significant trauma. Professional cleanup provides discrete service allowing families to focus on healing. Insurance and victim assistance programs often cover costs, and experienced companies help navigate payment options."
    ],
    costTiers: [
      { name: "Small Area Decontamination", range: "$1,500 - $3,000", description: "Limited contamination, single room, minimal material removal. Full decontamination and proper disposal." },
      { name: "Moderate Biohazard Cleanup", range: "$3,000 - $5,000", description: "Larger area, some material removal required, moderate odor treatment. Standard for discoveries within days." },
      { name: "Extensive Contamination", range: "$5,000 - $10,000", description: "Significant material removal, multiple rooms, extensive odor treatment. Advanced decomposition or severe trauma." },
      { name: "Severe Cases", range: "$10,000 - $25,000+", description: "Whole-room reconstruction, extensive structural contamination, hoarding with biohazard involvement." }
    ],
    similarServices: [
      { name: "Odor Removal Services", slug: "odor-removal-services", description: "Specialized treatment for persistent decomposition or trauma odors using professional equipment." },
      { name: "Crime Scene Trauma Cleaning", slug: "crime-scene-trauma-cleaning", description: "Specialized cleanup for crime scenes with evidence preservation considerations." },
      { name: "Sewage Cleanup", slug: "sewage-cleanup-services", description: "Similar contamination protocols for Category 3 water containing pathogens." },
      { name: "Mold Remediation", slug: "mold-remediation", description: "Contamination cleanup requiring similar containment and PPE protocols." },
      { name: "Deep Cleaning Services", slug: "steam-cleaning-services", description: "Thorough sanitization for situations not reaching biohazard levels." },
      { name: "Hoarding Cleanup", slug: "biohazard-cleanup", description: "Comprehensive cleaning of hoarding situations with biohazard materials." }
    ],
    localContext: "M&M Restoration provides confidential, compassionate biohazard cleanup throughout Greater Lansing. Our OSHA-certified technicians respond with discretion, understanding the sensitive nature of these situations. We serve Ingham, Eaton, and Clinton counties with rapid response and coordinate with law enforcement, medical examiners, and insurance companies. We help families connect with victim assistance programs that may cover cleanup costs, ensuring complete decontamination and safe environments.",
    faqs: [
      { question: "How much does biohazard cleanup cost?", answer: "Biohazard cleanup typically costs $1,500-$10,000 depending on situation type and contamination extent. Unattended deaths average $3,000-$5,000 when discovered within days. Advanced decomposition or severe trauma can exceed $10,000. We provide confidential estimates." },
      { question: "Who pays for biohazard cleanup?", answer: "Several sources may apply: homeowners/renters insurance often covers biohazard cleanup, state victim assistance programs help crime victims' families, and some life insurance policies include coverage. We help with insurance claims and victim assistance applications." },
      { question: "Is biohazard cleanup covered by insurance?", answer: "Many homeowners policies cover biohazard cleanup. Renters insurance may apply. Michigan crime victim compensation funds help families of crime victims. We document situations properly for claims and guide you through the process." },
      { question: "Why can't I clean up myself?", answer: "Biohazard situations pose serious health risks including bloodborne pathogens (HIV, Hepatitis), bacterial infections, and psychological trauma. OSHA requires proper training, PPE, and disposal. DIY cleanup often misses contamination and creates ongoing risks." },
      { question: "How long does biohazard cleanup take?", answer: "Most cleanup takes 1-3 days. Small situations may complete in one day. Extensive contamination requiring material removal and odor treatment takes 3-5 days. We work efficiently while ensuring thoroughness." },
      { question: "Will neighbors know what happened?", answer: "We maintain complete discretion. Vehicles and equipment are unmarked, technicians arrive in plain clothes, and we schedule to minimize visibility. Your privacy is protected throughout the process." }
    ]
  },
  "sewage-cleanup-services": {
    serviceName: "Sewage Cleanup",
    priceRange: "$2,000 - $10,000+",
    avgPrice: "$3,500 - $5,000",
    factors: [
      "Amount of sewage contamination",
      "Affected area size",
      "Materials requiring removal",
      "Structural drying needs",
      "Sanitization requirements",
      "Odor treatment complexity"
    ],
    commonProjects: [
      { title: "Sewer Line Backup Cleanup", description: "Main sewer line blockages force contaminated water back through drains into basements and lower levels requiring emergency extraction." },
      { title: "Septic System Failure", description: "Failed septic tanks or drain fields cause sewage surfacing in yards and backing into homes, requiring professional remediation." },
      { title: "Toilet Overflow Remediation", description: "Severe toilet overflows with waste contamination spreading beyond bathrooms into adjacent rooms and flooring." },
      { title: "Floor Drain Backup", description: "Basement floor drains overflow during heavy rains or blockages, spreading contaminated water across finished spaces." },
      { title: "Commercial Sewage Cleanup", description: "Restaurant, retail, and office building sewage incidents requiring rapid response to minimize business interruption." }
    ],
    overview: [
      "Sewage cleanup addresses Category 3 'black water' contamination - the most hazardous water damage classification. Sewage contains dangerous bacteria, viruses, parasites, and other pathogens including E. coli, Hepatitis, and various intestinal diseases. Professional remediation requires specialized PPE, antimicrobial treatments, and often significant material removal to ensure safe living conditions.",
      "The cleanup process begins with emergency extraction using specialized equipment that contains contaminated water. Affected porous materials including carpet, padding, and drywall below the flood line typically require removal - these materials cannot be adequately sanitized. Remaining structural materials receive multiple applications of hospital-grade antimicrobial treatments.",
      "After contamination removal, structural drying with commercial dehumidifiers and air movers prevents secondary mold growth. The entire affected area requires thorough sanitization before reconstruction. Post-cleanup testing may verify that bacterial levels have returned to safe parameters.",
      "Sewage backups often result from aging infrastructure, tree root intrusion, or municipal system overloads during heavy rains. Lansing's older neighborhoods with clay pipe sewer lines face higher backup risks. Prevention measures including backwater valves and regular line maintenance can reduce future incidents."
    ],
    costTiers: [
      { name: "Small Backup", range: "$2,000 - $3,500", description: "Contained to single room (bathroom, small basement area). Extraction, sanitization, limited material removal, and drying." },
      { name: "Moderate Contamination", range: "$3,500 - $6,000", description: "Larger basement area or multiple rooms affected. Significant carpet/padding removal, extensive sanitization, structural drying." },
      { name: "Major Sewage Incident", range: "$6,000 - $10,000", description: "Extensive contamination, drywall removal required, finished basement affected. Complete remediation with odor treatment." },
      { name: "Severe Flooding", range: "$10,000 - $20,000+", description: "Whole-basement or multi-level sewage flooding, significant reconstruction needed, extended drying and treatment period." }
    ],
    similarServices: [
      { name: "Water Damage Restoration", slug: "water-damage-restoration", description: "General water extraction and drying services for Category 1 and 2 water damage." },
      { name: "Mold Remediation", slug: "mold-remediation", description: "Often necessary after sewage incidents if contamination sat more than 24-48 hours." },
      { name: "Biohazard Cleanup", slug: "biohazard-cleanup", description: "Similar contamination cleanup protocols for biological hazard situations." },
      { name: "Odor Removal Services", slug: "odor-removal-services", description: "Sewage odors penetrate materials and may require specialized treatment." },
      { name: "Basement Waterproofing", slug: "water-damage-restoration", description: "Prevention services including backwater valve installation to stop future backups." },
      { name: "Drain Cleaning", slug: "sewage-cleanup-services", description: "Preventive maintenance to keep sewer lines clear and functioning properly." }
    ],
    localContext: "Greater Lansing's aging sewer infrastructure creates ongoing backup risks, particularly in older neighborhoods with original clay pipe systems. Spring rains and snowmelt often overwhelm combined sewer systems, causing backups in low-lying areas. M&M Restoration provides 24/7 emergency sewage cleanup response throughout Ingham, Eaton, and Clinton counties. Our technicians understand the health risks of black water contamination and follow strict IICRC protocols for Category 3 water remediation, ensuring your home is safe and sanitary after a sewage incident.",
    faqs: [
      { question: "How much does sewage cleanup cost?", answer: "Sewage cleanup in Lansing typically costs $2,000-$10,000. Small backups contained to one room run $2,000-$3,500. Extensive contamination requiring significant material removal and structural drying can exceed $7,000-$10,000." },
      { question: "Does insurance cover sewage backup?", answer: "Standard homeowners insurance usually doesn't cover sewage backups. You need a separate 'sewer and drain backup' endorsement - typically $50-150/year for $5,000-$25,000 coverage. Check your policy or add this coverage; it's one of the most valuable endorsements available." },
      { question: "Is sewage backup dangerous?", answer: "Yes, very. Sewage is Category 3 'black water' containing E. coli, Hepatitis, parasites, and other dangerous pathogens. Never attempt DIY cleanup. Keep family and pets away from affected areas until professional remediation is complete." },
      { question: "What should I do when sewage backs up?", answer: "Stop using water fixtures immediately. Don't flush toilets or run drains. Turn off HVAC to prevent airborne contamination spread. Keep family and pets away from affected areas. Call a professional restoration company - time is critical for both health safety and damage limitation." },
      { question: "Can carpet be saved after sewage backup?", answer: "Generally no. Carpet and padding are porous materials that cannot be adequately sanitized after sewage contamination. Professional standards require removal of carpet, padding, and often drywall below the flood line. Attempting to save these materials creates ongoing health risks." },
      { question: "How long does sewage cleanup take?", answer: "Most sewage cleanups take 3-5 days. Day 1: emergency extraction and contamination removal. Days 2-4: antimicrobial treatment, structural drying, and sanitization. Day 5: final inspection and clearance. Reconstruction of removed materials adds additional time." }
    ]
  },
  "carpet-cleaning-services": {
    serviceName: "Carpet Cleaning",
    priceRange: "$100 - $500",
    avgPrice: "$200 - $300",
    factors: [
      "Square footage of carpet",
      "Level of soiling",
      "Stain treatment needs",
      "Carpet fiber type",
      "Furniture moving requirements",
      "Protective treatments requested"
    ],
    commonProjects: [
      { title: "Whole-Home Carpet Cleaning", description: "Deep cleaning of all carpeted areas in a home, typically performed annually for maintenance and air quality improvement." },
      { title: "Pet Stain and Odor Treatment", description: "Specialized enzyme treatments for pet urine that has penetrated carpet, padding, and subfloor to eliminate stains and odors." },
      { title: "High-Traffic Area Restoration", description: "Focused cleaning of worn pathways and heavily used areas to restore appearance and extend carpet life." },
      { title: "Move-In/Move-Out Cleaning", description: "Thorough carpet cleaning for rental properties or home sales, removing accumulated dirt and refreshing appearance." },
      { title: "Post-Restoration Cleaning", description: "Final carpet cleaning after water damage restoration or other remediation to remove any remaining residue." }
    ],
    overview: [
      "Professional carpet cleaning uses hot water extraction (steam cleaning) to remove deep-seated dirt, allergens, and stains that regular vacuuming cannot reach. The process injects hot water and cleaning solution deep into carpet fibers, then extracts the dirty water along with suspended soil. This method is recommended by most carpet manufacturers and the IICRC.",
      "The cleaning process begins with thorough pre-vacuuming to remove loose dirt, followed by pre-treatment of stains and high-traffic areas. The main cleaning uses truck-mounted or portable extraction equipment that heats water to optimal temperatures for sanitization and soil removal. Post-cleaning grooming helps carpet dry evenly and restores fiber orientation.",
      "Professional cleaning extends carpet life significantly by removing abrasive soil particles that wear fibers during foot traffic. Clean carpets also improve indoor air quality by removing trapped allergens, dust mites, and pollutants. For households with allergies, pets, or children, regular professional cleaning provides meaningful health benefits.",
      "Different carpet fibers and constructions require appropriate cleaning approaches. Wool carpets need lower temperatures and pH-neutral solutions. Synthetic carpets tolerate more aggressive cleaning. Berber and loop carpets require careful technique to prevent fuzzing. Professional technicians assess carpet type and condition to select optimal methods."
    ],
    costTiers: [
      { name: "Basic Room Cleaning", range: "$100 - $150", description: "1-3 rooms or up to 500 sq ft. Standard hot water extraction, spot treatment included. Ideal for maintenance cleaning." },
      { name: "Whole-Home Cleaning", range: "$150 - $300", description: "4-6 rooms or 500-1500 sq ft. Comprehensive cleaning of main living areas, pre-treatment, and deodorizing." },
      { name: "Deep Cleaning Package", range: "$300 - $400", description: "Whole-home cleaning plus furniture moving, heavy stain treatment, and carpet protector application." },
      { name: "Restoration Cleaning", range: "$400 - $600+", description: "Severely soiled carpets, extensive pet damage, or post-flood cleaning requiring multiple passes and specialized treatments." }
    ],
    similarServices: [
      { name: "Upholstery Cleaning", slug: "furniture-cleaning-services", description: "Same hot water extraction process adapted for furniture fabrics and cushions." },
      { name: "Area Rug Cleaning", slug: "carpet-cleaning-services", description: "Specialized cleaning for oriental, wool, and delicate area rugs requiring gentle handling." },
      { name: "Water Damage Restoration", slug: "water-damage-restoration", description: "Emergency carpet drying and cleaning after flooding or water damage incidents." },
      { name: "Odor Removal Services", slug: "odor-removal-services", description: "Specialized treatments for persistent odors embedded in carpet and padding." },
      { name: "Hardwood Floor Cleaning", slug: "hardwood-floor-cleaning", description: "Professional cleaning for hard surface flooring throughout your home." },
      { name: "Tile and Grout Cleaning", slug: "steam-cleaning-services", description: "Deep cleaning of tile surfaces and grout lines in kitchens and bathrooms." }
    ],
    localContext: "M&M Restoration provides professional carpet cleaning throughout Greater Lansing as part of our comprehensive cleaning and restoration services. Our truck-mounted equipment delivers consistent hot water temperatures for superior cleaning results. We serve homeowners in Lansing, East Lansing, Okemos, Holt, and surrounding communities. Whether you need routine maintenance cleaning or specialized treatment for pet stains and odors, our trained technicians deliver professional results that extend carpet life and improve indoor air quality.",
    faqs: [
      { question: "How much does carpet cleaning cost?", answer: "Professional carpet cleaning in Lansing costs $100-$500 for most homes. Pricing typically runs $0.25-$0.50 per square foot. A standard 3-bedroom home with 1,000-1,500 sq ft of carpet averages $200-$300. Add-ons like stain treatment, deodorizing, and protector increase costs." },
      { question: "How often should carpets be professionally cleaned?", answer: "Most manufacturers recommend professional cleaning every 12-18 months to maintain warranty. High-traffic homes, pet owners, allergy sufferers, and households with young children benefit from cleaning every 6-12 months. Visual soiling often indicates cleaning is overdue." },
      { question: "Is professional carpet cleaning worth it?", answer: "Yes. Professional hot water extraction removes deep dirt, allergens, dust mites, and bacteria that vacuuming misses. Regular professional cleaning extends carpet life by years, improves indoor air quality, and removes stubborn stains. The cost is minimal compared to premature carpet replacement." },
      { question: "How long does carpet take to dry after cleaning?", answer: "Carpets typically dry within 4-8 hours depending on humidity, airflow, and carpet thickness. We use powerful extraction to remove most moisture during cleaning. Opening windows, running fans, or using AC speeds drying. Walking on damp carpet with clean socks is fine." },
      { question: "Can you remove all stains?", answer: "Most stains respond well to professional treatment, but some are permanent. Bleach spots, dye transfers, and certain chemical stains alter carpet color permanently. Old, set stains are harder to remove than fresh ones. We assess stains honestly and set realistic expectations." },
      { question: "Do I need to move furniture?", answer: "We move light furniture (chairs, small tables) as part of standard cleaning. Heavy items (beds, dressers, large furniture) should stay in place - we clean around them and under accessible edges. For thorough cleaning, moving heavy furniture yourself before our arrival ensures best results." }
    ]
  },
  "hardwood-floor-cleaning": {
    serviceName: "Hardwood Floor Cleaning",
    priceRange: "$100 - $400",
    avgPrice: "$150 - $250",
    factors: [
      "Square footage of flooring",
      "Current floor condition",
      "Type of finish",
      "Scratch repair needs",
      "Polish or reseal requirements",
      "Furniture moving"
    ],
    commonProjects: [
      { title: "Deep Cleaning and Conditioning", description: "Removal of built-up residue and dirt followed by conditioning treatment to restore luster and protect the finish." },
      { title: "Scratch and Scuff Repair", description: "Treatment of surface scratches and scuff marks using specialized buffing and touch-up techniques." },
      { title: "Post-Water Damage Restoration", description: "Careful cleaning and treatment of hardwood floors after water damage to prevent warping and restore appearance." },
      { title: "Move-In/Move-Out Cleaning", description: "Thorough hardwood floor cleaning and conditioning for real estate transactions or rental turnover." },
      { title: "Commercial Floor Maintenance", description: "Regular professional cleaning programs for offices, retail spaces, and other commercial properties with hardwood flooring." }
    ],
    overview: [
      "Professional hardwood floor cleaning goes beyond daily sweeping and mopping to remove built-up residue, restore shine, and protect the wood finish. Over time, foot traffic, cleaning product residue, and environmental factors dull hardwood floors and can damage the finish. Professional cleaning removes this buildup while treating the wood appropriately for its finish type.",
      "The cleaning process varies by floor type and condition. Polyurethane-finished floors receive pH-neutral cleaning followed by buffing and optional polish application. Waxed floors require specialized cleaning that doesn't strip the wax, followed by fresh wax application and buffing. Oiled floors need cleaning with compatible products and may require oil refreshment.",
      "Professional cleaning can address minor scratches and wear patterns that accumulate between full refinishing projects. Screen and recoat services add a fresh protective layer without full sanding. For water-damaged floors, specialized drying techniques and treatments can often save floors that appear ruined.",
      "Michigan's climate creates challenges for hardwood floors - low winter humidity causes gaps between boards, while summer humidity can cause cupping. Professional cleaning includes assessment of floor condition and recommendations for humidity control that extends floor life and reduces future problems."
    ],
    costTiers: [
      { name: "Basic Cleaning", range: "$100 - $175", description: "Standard deep cleaning for floors in good condition. Includes residue removal, cleaning, and light buffing for up to 500 sq ft." },
      { name: "Clean and Polish", range: "$175 - $275", description: "Deep cleaning plus polish application to restore shine. Includes furniture pad replacement and light scratch treatment." },
      { name: "Restoration Cleaning", range: "$275 - $400", description: "Heavily soiled or damaged floors requiring multiple cleaning passes, significant scratch treatment, and conditioning." },
      { name: "Screen and Recoat", range: "$1.50 - $3.00/sq ft", description: "Light sanding (screening) of existing finish followed by new polyurethane coat. Extends time between full refinishing." }
    ],
    similarServices: [
      { name: "Water Damage Restoration", slug: "water-damage-restoration", description: "Emergency drying and treatment for water-damaged hardwood floors to prevent warping and cupping." },
      { name: "Carpet Cleaning", slug: "carpet-cleaning-services", description: "Professional cleaning for carpeted areas throughout your home." },
      { name: "Vinyl Floor Cleaning", slug: "vinyl-floor-cleaning", description: "Cleaning and maintenance for vinyl, laminate, and other resilient flooring." },
      { name: "Tile and Grout Cleaning", slug: "steam-cleaning-services", description: "Deep cleaning for tile flooring and grout lines in kitchens and bathrooms." },
      { name: "Post Construction Cleaning", slug: "post-construction-cleaning", description: "Removal of construction dust and debris from flooring after renovation projects." },
      { name: "Floor Refinishing", slug: "hardwood-floor-cleaning", description: "Complete sanding and refinishing for floors beyond cleaning and screen-and-recoat." }
    ],
    localContext: "M&M Restoration provides professional hardwood floor cleaning and care throughout the Greater Lansing area. Many Lansing-area homes feature beautiful hardwood floors that benefit from professional maintenance. Our technicians understand different wood types and finishes common in Michigan homes, from original oak floors in historic Lansing properties to newer engineered hardwood in modern construction. We serve homeowners throughout Ingham, Eaton, and Clinton counties with cleaning services that protect your flooring investment.",
    faqs: [
      { question: "How much does hardwood floor cleaning cost?", answer: "Professional hardwood floor cleaning in Lansing costs $100-$400 for most homes. Basic cleaning runs $0.20-$0.35 per square foot. Cleaning with polish or conditioning adds to cost. Screen and recoat services (light refinishing) cost $1.50-$3.00 per square foot." },
      { question: "How often should hardwood floors be professionally cleaned?", answer: "Professional deep cleaning is recommended every 1-2 years depending on traffic and lifestyle. Homes with pets, children, or high traffic benefit from annual professional cleaning. Regular maintenance between cleanings extends floor life significantly." },
      { question: "Can cleaning damage hardwood floors?", answer: "Not when done properly. We use wood-safe, pH-neutral cleaners appropriate for your floor's finish type. Improper DIY cleaning - using too much water, steam mops on certain finishes, or wrong cleaning products - causes more damage than professional cleaning." },
      { question: "What's the difference between cleaning and refinishing?", answer: "Cleaning removes dirt and residue from the floor surface. Refinishing involves sanding down to bare wood and applying new finish - needed every 7-10 years for worn floors. Screen and recoat (between cleaning and refinishing) adds a fresh finish layer without full sanding." },
      { question: "How long until I can walk on cleaned floors?", answer: "For standard cleaning, floors are walkable immediately with clean, dry feet. After polish application, wait 1-2 hours. Screen and recoat requires 24 hours before light traffic and 48-72 hours before furniture replacement and normal use." },
      { question: "Should I use Swiffer or steam mop on hardwood?", answer: "Swiffer-type dry mops are fine for dust. Wet Swiffer products may leave residue over time. Steam mops can damage some finishes and force moisture into wood - generally not recommended. Damp mopping with proper hardwood cleaner followed by immediate drying is safest for regular maintenance." }
    ]
  }
};

// County data for county-level SEO pages
export const COUNTIES = [
  {
    name: "Ingham County",
    slug: "ingham-county",
    state: "MI",
    population: "285,000",
    description: "Home to Michigan's capital city Lansing and Michigan State University, Ingham County is the most populous county in our service area.",
    cities: ["lansing", "east-lansing", "mason", "okemos", "haslett", "holt", "williamston", "webberville", "stockbridge", "delhi-charter-township", "meridian-charter-township"],
    majorCities: ["Lansing", "East Lansing", "Mason", "Okemos", "Haslett", "Holt"],
    landmarks: ["Michigan State Capitol", "Michigan State University", "Potter Park Zoo", "Lansing River Trail"],
    commonIssues: ["Urban flooding in older Lansing neighborhoods", "Student housing water damage near MSU", "Historic home restoration", "Commercial property damage"]
  },
  {
    name: "Eaton County",
    slug: "eaton-county",
    state: "MI", 
    population: "110,000",
    description: "Located west of Lansing, Eaton County features a mix of suburban communities and rural townships along the Grand River.",
    cities: ["charlotte", "grand-ledge", "eaton-rapids", "dimondale", "potterville", "vermontville", "olivet", "waverly", "delta-charter-township", "windsor-charter-township"],
    majorCities: ["Charlotte", "Grand Ledge", "Eaton Rapids", "Delta Township", "Waverly"],
    landmarks: ["Fitzgerald Park", "Eaton County Fairgrounds", "Grand River", "Island Park"],
    commonIssues: ["Grand River flooding", "Storm damage to rural properties", "Agricultural building restoration", "Older home plumbing failures"]
  },
  {
    name: "Clinton County",
    slug: "clinton-county",
    state: "MI",
    population: "79,000",
    description: "North of Lansing, Clinton County is a growing area with newer subdivisions and established rural communities.",
    cities: ["dewitt", "bath", "eagle"],
    majorCities: ["DeWitt", "Bath"],
    landmarks: ["Looking Glass River", "Sleepy Hollow State Park", "DeWitt Township Hall"],
    commonIssues: ["New construction drainage issues", "Septic system failures", "Rural property flooding", "Well water contamination"]
  }
];

// Blog posts are in a separate file for maintainability
export { BLOG_POSTS, type BlogPost } from './blog-posts';
