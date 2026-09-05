/**
 * ACE INTERNATIONAL - Product & Category Data Store
 * Contains technical specifications, compatible OEMs, tooling types,
 * and certified client partner datasets.
 */

export const CATEGORY_DETAILS = {
  'tablet-press': {
    title: 'Rotary Tablet Press & Spares (ACE-II, ACE-III, ACE-IV)',
    subtitle: 'Single and double-sided square cGMP rotary presses up to 2,16,000 tablets/hr.',
    specs: [
      { label: 'ACE Models', value: 'ACE-II (Bolus 5, 8, 10 Stn), ACE-III (16, 20, 23 Stn), ACE-IV (Double Sided 27, 35, 45 Stn)' },
      { label: 'Compatible OEMs', value: 'Cadmach, Fette Compacting, Korsch, GEA Courtoy, Romaco, Sejong, Kilian, Bosch' },
      { label: 'Tooling Types', value: 'Euro "B", "D", "BB", "DB", TSM Standards & Fette Segment Dies' },
      { label: 'Key Spare Parts', value: 'Turret Segments, Upper/Lower Cams, Feed Frames, Scraper Blades, Pressure Rollers, Worm Gears' },
      { label: 'Material Grade', value: 'SS 316L Contact Parts, High-Hardness Tool Steel, Hard Chrome / TiN Plated' },
      { label: 'Output Capacity', value: '13,200 up to 2,16,000 Tablets / Hour depending on station count and tooling' }
    ]
  },
  'capsule-filling': {
    title: 'Capsule Filling Machines & Change Parts',
    subtitle: 'Automatic, semi-automatic, and 300-hole manual encapsulation systems.',
    specs: [
      { label: 'Machine Scope', value: 'Manual 300-Hole Fillers, Auto Capsule Loaders, Auto Liquid Capsule Fillers & Band Sealers' },
      { label: 'Change Parts OEM', value: 'ACG, Pam Pac, Bosch, Harro Höfliger, IMA, Capsugel, Sejong' },
      { label: 'Capsule Sizes', value: 'Size 000, 00, 0, 1, 2, 3, 4, 5 and DB (Double Blind)' },
      { label: 'Key Spare Parts', value: 'Tamping Pins, Dosing Discs, Segment Blocks, Capsule Alignment Bushings, Vacuum Sorting Heads' },
      { label: 'Line Accessories', value: 'De-Blistering Machines, Tablet/Capsule Dedusters, Inline Metal Detectors, Capsule Polishers' },
      { label: 'Material Grade', value: 'SS 316L Contact Parts, Medical Grade PEEK / Delrin, Hard Anodized Alloy' }
    ]
  },
  'rmg': {
    title: 'Rapid Mixer Granulator (HSMG / RMG)',
    subtitle: 'High-shear wet granulation from lab models to 1200L production scale.',
    specs: [
      { label: 'Vessel Capacities', value: 'Lab Models (5L, 10L) to Production Models (50L up to 1200 Liters)' },
      { label: 'Impeller Design', value: 'Unique 4-arm mixing impeller with blade angle pushing product radially outward' },
      { label: 'Chopper System', value: 'Dual-speed chopper blades engineered to break lumps and create uniform granules' },
      { label: 'Shaft Sealing', value: 'Air-purged dual mechanical seals for main impeller and chopper shafts' },
      { label: 'Discharge System', value: 'Electro-pneumatically operated flush fitting discharge plug with limit switches' },
      { label: 'Material Grade', value: 'All contact parts AISI 316 / 316L, non-contact AISI 304, cGMP compliant' }
    ]
  },
  'fbd': {
    title: 'Fluid Bed Dryer (FBD) & Fluidized Bed Coaters',
    subtitle: 'Batch drying and Wurster coating systems with pneumatic inflatable sealing.',
    specs: [
      { label: 'Batch Sizes', value: '30 kg to 500 kg batch capacity' },
      { label: 'Key Spare Parts', value: 'Dutch Weave Sieve Mesh, Inflatable Silicon Rubber Gaskets, Perforated Distribution Plates' },
      { label: 'Filtration & Bags', value: 'Washable FDA approved filter media, auto pneumatic shaking, anti-static carbon yarn' },
      { label: 'Air Handling', value: 'Micro & HEPA filtration, dynamic balanced blower, steam/electric heat exchangers' },
      { label: 'Safety Systems', value: 'Built-in explosion relief flaps, product bowl interlocking, auto temperature control' },
      { label: 'Material Grade', value: 'Contact parts AISI 316, Non-contact AISI 304' }
    ]
  },
  'blister': {
    title: 'Blister Packaging Machine Tooling & Spares',
    subtitle: 'Rotary & flat-bed blister form-fill-seal spare parts and recovery systems.',
    specs: [
      { label: 'Compatible OEMs', value: 'Elmach, Uhlmann, Romaco, Mediseal, IMA Blister Lines' },
      { label: 'Tooling Scope', value: 'Forming Dies, Sealing Rollers, Guide Plates, Cartridge Heaters, Cutting & Punching Tools' },
      { label: 'Packaging Types', value: 'PVC/PVDC/Alu, Alu-Alu Cold Forming, Tropical Blister packs' },
      { label: 'Recovery Units', value: 'Semi-Automatic De-blistering machines for non-destructive product reclamation' },
      { label: 'Tooling Steel', value: 'High Carbon High Chrome D2 / D3 with Non-Stick Teflon Coatings' }
    ]
  },
  'vibro': {
    title: 'Vibro Sifter & Size Reduction Screening',
    subtitle: 'Sanitary compact sieving and grading systems with lead-free bonded sieves.',
    specs: [
      { label: 'Available Sizes', value: '20", 30", 36", 48" Single Deck and Double Decker arrangements' },
      { label: 'Filter Mesh Range', value: '8 Mesh to 500 Mesh with ultrasonic deblinding options' },
      { label: 'Key Spare Parts', value: 'Silicon-moulded screens, quick-release clamp rings, vibro motor eccentric weights' },
      { label: 'Sanitary Design', value: 'Lead-free and silicone seal sieves, noiseless gyratory vibration, cGMP' },
      { label: 'Output Capacity', value: '200 to 500 kg/hr depending on product density and mesh specification' }
    ]
  },
  'tooling': {
    title: 'Die & Punch Compression Tooling (Since 1987)',
    subtitle: 'Three decades of tooling technology with advanced tool steels and PVD coatings.',
    specs: [
      { label: 'Tooling Types', value: 'EURO "B", "D", "BB", "DB", TSM Standards, Multi-Tip (Cup & Monoblock), Micro-Tip, 3D Tip' },
      { label: 'Tool Steels', value: 'O1, S7 (Shock-Resistant), D2, D3 (High Wear), 440C, S1 Tungsten, K340, PK5, N690 Cobalt' },
      { label: 'PVD / CVD Coatings', value: 'HCP+ (Hard Chrome), TiN (Golden), CrN+, CRX+ (Triple Layer), SPN+ (Anti-Stick), DLC' },
      { label: 'Anti-Stick Solutions', value: 'SPN+ and CRX+ coatings engineered specifically to eliminate formulation sticking & picking' },
      { label: 'Compatible Presses', value: 'Cadmach, Fette, Korsch, GEA Courtoy, Romaco, Sejong, PTK, CCS, IMA, Bosch' },
      { label: 'Inspection', value: 'Optical profilometry and CMM dimensional inspection certificate with each set' }
    ]
  },
  'spare-parts': {
    title: 'Custom Pharmaceutical Machine Components & Spares',
    subtitle: 'In-house CNC turned and milled replacement spares for all pharma processing lines.',
    specs: [
      { label: 'Component Scope', value: 'Drive Shafts, Bronze Worm Gears, Timing Pulleys, Bushings, Sanitary Clamps, Cam Tracks' },
      { label: 'Milling Spares', value: 'ACE-50 Multi Mill 8-piece knife/impact beaters and scraper blades (up to 2800 RPM)' },
      { label: 'Sanitary Elastomers', value: 'FDA Approved White Silicone, EPDM, Viton gaskets and inflatable seals' },
      { label: 'Turnaround Time', value: 'Standard emergency spares dispatched in 24 to 48 hours for breakdown assistance' },
      { label: 'Precision Guarantee', value: 'Reverse-engineered to exact OEM drawing tolerances and metallurgy certification' }
    ]
  }
};

export const CLIENT_LOGOS = [
  { "name": "Aarti Drugs Ltd", "category": "pharma", "desc": "Active Pharmaceutical Ingredients (API)", "src": "assets/images/clients/client-aarti-drugs.png" },
  { "name": "Aarti Industries Limited", "category": "pharma", "desc": "Global Specialty Chemical & Pharma", "src": "assets/images/clients/client-aarti-industries.png" },
  { "name": "Aastrid Life Sciences", "category": "pharma", "desc": "Custom Synthesis & Fine Chemicals", "src": "assets/images/clients/client-aastrid.png" },
  { "name": "Adani Wilmar Ltd", "category": "pharma", "desc": "Industrial Processing & Formulations", "src": "assets/images/clients/client-adani-wilmar.png" },
  { "name": "Aditya Birla Hindalco", "category": "pharma", "desc": "Diversified Multinational Conglomerate", "src": "assets/images/clients/client-aditya-birla.png" },
  { "name": "Alkem Laboratories", "category": "pharma", "desc": "Leading Indian Formulations & Generics", "src": "assets/images/clients/client-alkem.png" },
  { "name": "Aplab Limited", "category": "pharma", "desc": "Precision Testing & Power Control", "src": "assets/images/clients/client-aplab.png" },
  { "name": "Apple Field International", "category": "pharma", "desc": "International Healthcare & Export", "src": "assets/images/clients/client-apple-field.png" },
  { "name": "Calyx Pharma", "category": "pharma", "desc": "Bulk Active Ingredients & Formulations", "src": "assets/images/clients/client-calyx-pharma.png" },
  { "name": "CCIPL Pharma", "category": "pharma", "desc": "Coastal Chemicals & Active Ingredients", "src": "assets/images/clients/client-ccipl.png" },
  { "name": "Doshion Water & Resource", "category": "pharma", "desc": "Pharmaceutical Water & Process Systems", "src": "assets/images/clients/client-doshion.png" },
  { "name": "Eurotek Environmental", "category": "pharma", "desc": "Water Treatment & Sanitary Systems", "src": "assets/images/clients/client-eurotek.png" },
  { "name": "Fresenius Kabi", "category": "pharma", "desc": "Global Healthcare & Infusion Therapy", "src": "assets/images/clients/client-fresenius-kabi.png" },
  { "name": "Helios Pharmaceuticals", "category": "pharma", "desc": "Dermatology & Sterile Dosage Formulations", "src": "assets/images/clients/client-helios.png" },
  { "name": "Jaysynth Dyestuff", "category": "pharma", "desc": "Colorants, Inks & Specialty Formulations", "src": "assets/images/clients/client-jaysynth.png" },
  { "name": "June Enterprises", "category": "pharma", "desc": "Cleanroom Consumables & Lab Supplies", "src": "assets/images/clients/client-june.png" },
  { "name": "Kitten Enterprises", "category": "pharma", "desc": "Packaging Solutions & Machinery", "src": "assets/images/clients/client-kitten.png" },
  { "name": "Laboratoires Griffon", "category": "pharma", "desc": "Sterile Injections & Ophthalmic Formulations", "src": "assets/images/clients/client-laboratoires-griffon.png" },
  { "name": "Lupin Limited", "category": "pharma", "desc": "Global Pharmaceutical Major", "src": "assets/images/clients/client-lupin.png" },
  { "name": "Macleods Pharmaceuticals", "category": "pharma", "desc": "Anti-Infectives & Cardiovascular Generics", "src": "assets/images/clients/client-macleods.png" },
  { "name": "Manan Healthcare", "category": "pharma", "desc": "Solid Dosage Tablets & Capsules", "src": "assets/images/clients/client-manan-healthcare.png" },
  { "name": "Mangalam Drugs & Organics", "category": "pharma", "desc": "Antimalarial APIs & Intermediates", "src": "assets/images/clients/client-mangalam-drugs.png" },
  { "name": "National Technical Services", "category": "pharma", "desc": "Calibration & Validation Services", "src": "assets/images/clients/client-national-tech-services.png" },
  { "name": "Naturex", "category": "pharma", "desc": "Natural Plant Extracts & Ingredients", "src": "assets/images/clients/client-naturex.png" },
  { "name": "Nitin Lifesciences", "category": "pharma", "desc": "Injectables & Lyophilized Formulations", "src": "assets/images/clients/client-nitin-lifesciences.png" },
  { "name": "NPCIL", "category": "pharma", "desc": "Nuclear Power Corporation of India", "src": "assets/images/clients/client-npcil.png" },
  { "name": "Pall Corporation", "category": "pharma", "desc": "High-Efficiency Filtration & Purification", "src": "assets/images/clients/client-pall.png" },
  { "name": "Parenteral Drugs (India)", "category": "pharma", "desc": "Large & Small Volume Parenterals", "src": "assets/images/clients/client-parenteral-drugs.png" },
  { "name": "Pioneer Asia", "category": "pharma", "desc": "Industrial Machinery & Automation", "src": "assets/images/clients/client-pioneer-asia.png" },
  { "name": "Piramal Healthcare", "category": "pharma", "desc": "Contract Development & Manufacturing", "src": "assets/images/clients/client-piramal.png" },
  { "name": "Pratiksha Filters", "category": "pharma", "desc": "Industrial & Laboratory Filtration Media", "src": "assets/images/clients/client-pratiksha-filters.png" },
  { "name": "Sarvani Sweets", "category": "pharma", "desc": "Nutraceutical Confectionery Processing", "src": "assets/images/clients/client-sarvani-sweets.png" },
  { "name": "Sterling Biotech Limited", "category": "pharma", "desc": "Pharmaceutical Gelatin & Bulk APIs", "src": "assets/images/clients/client-sterling-biotech.png" },
  { "name": "Trichem Laboratories", "category": "pharma", "desc": "Specialty Research Chemicals", "src": "assets/images/clients/client-trichem.png" },
  { "name": "Vedant Dyestuffs", "category": "pharma", "desc": "Industrial Chemicals & Color Formulations", "src": "assets/images/clients/client-vedant-dyestuffs.png" },
  { "name": "Vidit Healthcare", "category": "pharma", "desc": "Generics & Ayurvedic Formulations", "src": "assets/images/clients/client-vidit-healthcare.png" },
  { "name": "Vine Engineer", "category": "pharma", "desc": "Heavy Precision Tooling Components", "src": "assets/images/clients/client-vineengineer.png" },
  { "name": "Bosch Packaging", "category": "oem", "desc": "Syntegon \u2022 Processing & Encapsulation Lines", "src": "assets/images/clients/logo-bosch.png" },
  { "name": "Cadmach Machinery", "category": "oem", "desc": "Rotary Tablet Presses \u2022 Tooling & Spares", "src": "assets/images/clients/logo-cadmach.png" },
  { "name": "Chitra Clean Concept (CCS)", "category": "oem", "desc": "Solid Dosage Processing Equipment", "src": "assets/images/clients/logo-ccs.png" },
  { "name": "Fette Compacting", "category": "oem", "desc": "High-Yield Rotary Tablet Presses", "src": "assets/images/clients/logo-fette-compacting.png" },
  { "name": "GEA Courtoy", "category": "oem", "desc": "Rotary Tablet Compression & Coating", "src": "assets/images/clients/logo-gea-courtoy.png" },
  { "name": "IMA Life & Solid", "category": "oem", "desc": "Encapsulation, Sifters & Blister Packing", "src": "assets/images/clients/logo-ima.png" },
  { "name": "KBIS Kilbeg", "category": "oem", "desc": "Cleanroom & Containment Systems", "src": "assets/images/clients/logo-kbis-kilbeg.png" },
  { "name": "Korsch AG", "category": "oem", "desc": "Specialist in Tablet Press Technology", "src": "assets/images/clients/logo-korsch.png" },
  { "name": "PTK GB", "category": "oem", "desc": "High-Efficiency Pharmaceutical Tablet Presses", "src": "assets/images/clients/logo-ptk-gb.png" },
  { "name": "Romaco Group", "category": "oem", "desc": "Beyond Technology \u2022 Blister & Tablet Presses", "src": "assets/images/clients/logo-romaco.png" },
  { "name": "Sejong Pharmatech", "category": "oem", "desc": "Automatic Capsule Fillers & Presses", "src": "assets/images/clients/logo-sejong.png" }
];
