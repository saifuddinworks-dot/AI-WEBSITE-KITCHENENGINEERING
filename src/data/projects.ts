import { ProjectCaseStudy } from '../types';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'proj-karachi-bistro',
    title: 'The Artisan Hearth Brasserie & Grill',
    category: 'restaurant',
    client: 'Artisan Hospitality Group',
    location: 'Clifton Block 4, Karachi',
    completedYear: '2025',
    areaSqFt: 3200,
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
    ],
    overview: 'A full-scale turnkey engineering and fabrication project for a high-volume 180-cover contemporary Mediterranean grill. We engineered the line for 22-minute ticket times during peak weekend services.',
    clientRequirement: 'The client required an open architectural display kitchen featuring heavy-gauge stainless steel with seamless joints, low acoustic noise, and an ultra-efficient grease extraction canopy with zero odor leak into the dining hall.',
    kitchenDesign: 'Zoned HACCP workflow separating incoming cold storage receiving, raw meat/poultry preparation sculleries, hot line pass, pastry corner, and an isolated dishwashing scullery with automatic hood dishwasher.',
    equipmentSupplied: [
      'Custom 6-Burner heavy commercial gas ranges with dual ovens',
      'Dual-well infrared high-recovery fryers with sediment filtration',
      'Custom charcoal lava rock charbroiler with hydraulic height adjustment',
      'Tropicalized 2-door reach-in chillers and undercounter prep line',
      'Flight-type hood dishwasher with heat recovery'
    ],
    customFabricationDetails: '14 meters of continuous seamless 1.5mm AISI 304 food-grade stainless steel chef counters, recessed hot well bain-maries, custom sound-dampened pot wash sinks, and wall shelves with integrated LED task lighting.',
    ventilationSpec: '6500 CFM dual island canopy hood with removable UL stainless baffle grease filters, fire-rated ducting, 7.5 HP backward curved centrifugal blower with Schneider VFD speed optimization.',
    installationTimeline: '28 working days from empty shell structure to gas line pressure testing, cold room temperature calibration, and final handover.',
    finalResult: 'Kitchen handles up to 450 covers daily with pristine kitchen temperature comfort (+24°C in chef zones despite high-heat grills) and zero kitchen grease odors in the guest dining area.'
  },
  {
    id: 'proj-lahore-cafe',
    title: 'Monolith Specialty Roasters & Espresso Lab',
    category: 'cafe',
    client: 'Monolith Coffee Lab',
    location: 'Gulberg III, Lahore',
    completedYear: '2025',
    areaSqFt: 1850,
    coverImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop'
    ],
    overview: 'Complete front-of-house architectural barista bar design, plumbing loop, and back-of-house dessert kitchen for Lahore premier third-wave coffee roastery.',
    clientRequirement: 'High-speed speed-rail coffee workflow accommodating 4 baristas simultaneously during morning rushes, built-in pitch rinsers, knock boxes, and custom stainless brushed finish.',
    kitchenDesign: 'Ergonomic linear barista bar with sunken drip trays, underneath multi-stage reverse osmosis water mineralizer, and modular undercounter refrigeration drawers.',
    equipmentSupplied: [
      'La Marzocco Linea PB 2-Group customized in matte charcoal',
      '2 × Mythos One on-demand commercial espresso grinders',
      'Under-counter Scotsman gourmet crystal ice cube machine (150kg/day)',
      'Acoustic sound enclosure commercial blenders',
      'Convection pastry oven and bakery display chiller'
    ],
    customFabricationDetails: 'Custom architectural brushed stainless steel counter fascia, recessed knock boxes, built-in dual pitcher rinsers with pressurized booster pumps, and bespoke pastry display case.',
    ventilationSpec: 'Quiet in-line acoustic exhaust for back-of-house bakery deck oven and micro roaster with carbon filter secondary scrubbers.',
    installationTimeline: '14 calendar days.',
    finalResult: 'Awarded top specialty café layout in Punjab with an average drink dispensing speed of 45 seconds per specialty coffee.'
  },
  {
    id: 'proj-islamabad-cloud',
    title: 'District Cloud Kitchens Multi-Brand Facility',
    category: 'cloud-kitchen',
    client: 'District Kitchen Networks',
    location: 'I-9 Industrial Zone, Islamabad',
    completedYear: '2024',
    areaSqFt: 6500,
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
    ],
    overview: 'Engineered a multi-tenant 8-pod commercial ghost kitchen infrastructure capable of servicing 14 digital delivery food brands with shared bulk walk-in refrigeration and dishwashing.',
    clientRequirement: 'Maximum modularity, individual gas/electric metering for each brand pod, heavy-duty ventilation with independent VFD zoning, and centralized food-grade cold rooms.',
    kitchenDesign: 'Central dual corridor spine with 8 self-contained 400 sq ft production pods, shared receiving dock, dry storage, and centralized chemical dish sanitizing room.',
    equipmentSupplied: [
      '16 × Heavy-duty commercial ranges and wok stations',
      '8 × Multi-tier deck ovens and convection suites',
      'Walk-in Cold Room (2500 cu ft, -20°C freezer + 3500 cu ft +2°C chiller)',
      '8 × Dedicated Kitchen Display System (KDS) stations'
    ],
    customFabricationDetails: 'Over 60 linear meters of heavy stainless steel tables, mobile dough trolleys, speed racks, wall cladding, and anti-spill scullery troughs.',
    ventilationSpec: 'Massive 28,000 CFM balanced air system with 4 independent roof-mounted centrifugal blowers and 100% conditioned fresh air make-up to maintain neutral building pressure.',
    installationTimeline: '45 days turnkey execution.',
    finalResult: 'Facility currently powers 1,800+ online orders every evening across Islamabad and Rawalpindi without electrical or thermal disruptions.'
  },
  {
    id: 'proj-murree-hotel',
    title: 'Highland Crest Mountain Resort Banquet Kitchen',
    category: 'hotel',
    client: 'Highland Hospitality Ltd',
    location: 'Bhurban / Murree, Punjab',
    completedYear: '2024',
    areaSqFt: 4800,
    coverImage: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1000&auto=format&fit=crop'
    ],
    overview: 'Full turnkey design, fabrication, and installation of a 600-person banquet and hotel culinary facility with specialized high-altitude burner calibration.',
    clientRequirement: 'Heavy-duty buffet catering capacity, specialized LPG pressure regulators calibrated for mountain atmospheric conditions, and heated mobile banquet food warming carts.',
    kitchenDesign: 'Separated hot preparation, cold salad/butchery, bakery, and plate-up banquet line with overhead infrared heat warmers.',
    equipmentSupplied: [
      'High-altitude calibrated gas ranges and tandoor stations',
      'RATIONAL Combi Steamer suites (2 × 20-grid units)',
      'Walk-in modular refrigeration with twin standby compressors',
      'Heated mobile banquet food holding cabinets'
    ],
    customFabricationDetails: 'Bespoke heavy stainless steel hot banquet plating conveyors, deep triple pot wash sinks, and custom heavy-duty mobile shelving.',
    ventilationSpec: '12,000 CFM double-skin insulated hood system with cold-climate air intake heaters to prevent freezing intake drafts.',
    installationTimeline: '35 working days.',
    finalResult: 'Smooth execution of luxury weddings and diplomatic banquets up to 800 guests with flawless hot food service timing.'
  },
  {
    id: 'proj-karachi-bakery',
    title: 'Levain Artisan European Sourdough Bakery',
    category: 'bakery',
    client: 'Levain Artisan Bakes',
    location: 'DHA Phase 6, Karachi',
    completedYear: '2025',
    areaSqFt: 2100,
    coverImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop'
    ],
    overview: 'A boutique commercial artisan bakery kitchen engineered with temperature and humidity controlled proofing environments and volcanic stone baking suites.',
    clientRequirement: 'Controlled humidity dough proofing rooms, heavy spiral mixers for high hydration sourdoughs, and granite-topped stainless preparation counters.',
    kitchenDesign: 'Temperature-zoned bakery floor: +18°C pastry lamination room with chilled granite counters and +28°C proofer zone.',
    equipmentSupplied: [
      '4-Deck European stone hearth steam-injection bakery oven',
      '60L Dual-speed spiral mixer with forward/reverse bowl',
      'Floor-standing reversible dough sheeter (650mm belt)',
      'Retarder proofer cabinet with digital humidity programming'
    ],
    customFabricationDetails: 'Granite-topped AISI 304 pastry tables, mobile aluminum flour bins, 20-tier stainless bakery cooling speed racks, and ingredient bins.',
    ventilationSpec: 'Dedicated steam exhaust canopy for deck oven steam releases and bakery room positive air pressure filtration.',
    installationTimeline: '21 days.',
    finalResult: 'Producing over 1,200 loaves of crusty sourdough bread, croissants, and artisan baguettes daily with 100% crust consistency.'
  }
];
