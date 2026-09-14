import { Product } from '../types';
import { UPLOADED_EQUIPMENT_PRODUCTS } from './uploadedProducts';

const BASE_PRODUCTS: Product[] = [
  {
    id: 'ke-cook-01',
    sku: 'KE-RNG-6B-01',
    name: 'Heavy-Duty 6-Burner Commercial Gas Cooking Range with Convection Oven',
    category: 'cooking',
    subcategory: 'Cooking Ranges',
    brand: 'KE Engineered (Pakistan)',
    shortDesc: 'Heavy-gauge AISI 304 cooking range with 6 open high-output cast iron burners and integrated GN 2/1 gastro gas oven.',
    description: 'Engineered specifically for demanding Pakistani hotel and restaurant kitchens. Features six individual 28,000 BTU brass flower flame burners with heavy-duty cast iron pan supports, safety thermocouple flame failure protection, and a spacious insulated baking chamber accommodating standard GN 2/1 pans.',
    keyFeatures: [
      'Heavy 1.5mm AISI 304 stainless steel monobloc construction',
      'High-output cast iron burners: 3 × 7.5 kW + 3 × 5.5 kW',
      'Removable drip trays underneath burners for effortless cleaning',
      'Integrated static gas oven with piezometric ignition and 100°C–320°C thermostat',
      'Reinforced adjustable stainless steel tubular bullet feet (+50mm)'
    ],
    specs: {
      dimensions: '1200 × 900 × 850 (+120 splashback) mm',
      capacity: 'GN 2/1 × 4 shelves chamber',
      power: '39 kW (Gas thermal rating)',
      voltage: 'N/A (Self-generating thermocouple)',
      material: 'AISI 304 Scotch-Brite Finish Stainless Steel',
      fuelType: 'Natural Gas / LPG',
      origin: 'KE Engineered (Pakistan)',
      warranty: '2 Years Commercial Warranty on Structure & Burners',
      weight: '165 kg'
    },
    applications: ['Fine Dining Restaurants', 'Hotel Banquets', 'Cloud Kitchens', 'Bistros', 'Café Hot Lines'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=900&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=900&auto=format&fit=crop'
    ],
    featured: true,
    popular: true,
    leadTime: 'In Stock / Custom built in 5 days'
  },
  {
    id: 'ke-cook-02',
    sku: 'KE-FRY-2T-28L',
    name: 'Commercial Dual-Tank Open-Pot High-Recovery Fryer',
    category: 'cooking',
    subcategory: 'Fryers',
    brand: 'Frymaster / KE',
    shortDesc: 'Twin 14L oil wells with high-efficiency infrared burners, millivolt thermostat and sediment cold zone.',
    description: 'Designed for fast-paced QSR, fried chicken and burger operations. Deep cold zone prevents crumbs from burning and preserves oil life by up to 35%. Independent tank thermostats allow simultaneous frying of fish and fries without flavor transfer.',
    keyFeatures: [
      'Dual 14-liter oil tanks with individual thermostat controls',
      'Infrared heat exchange tubes inside frypot for rapid temperature recovery',
      'Precision temperature dial 90°C – 195°C with safety limit shutoff',
      'Supplied with 4 heavy chrome-plated wire mesh baskets with heat-resistant grips',
      'Full-port front drain valve for rapid hot oil filtering'
    ],
    specs: {
      dimensions: '800 × 750 × 1100 mm',
      capacity: '2 × 14 Liters (28L Total)',
      power: '24 kW (Gas) or 18 kW (Electric optional)',
      voltage: '220V / 50Hz (for electric control)',
      material: 'AISI 304 Food-Grade Stainless Steel',
      fuelType: 'Natural Gas / LPG',
      origin: 'USA / Assembled KE',
      warranty: '1 Year Comprehensive + 5 Years Pot Guarantee',
      weight: '98 kg'
    },
    applications: ['Fast Food Chains', 'Burger Joints', 'Fried Chicken Franchises', 'Cafeterias'],
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=900&auto=format&fit=crop',
    featured: true,
    popular: true,
    leadTime: 'Ready for Dispatch'
  },
  {
    id: 'ke-refrig-01',
    sku: 'KE-REF-2D-1400',
    name: 'Heavy-Duty 2-Door Reach-In Commercial Upright Chiller (Tropicalized +43°C)',
    category: 'refrigeration',
    subcategory: 'Upright Refrigerators',
    brand: 'True / KE Coldline',
    shortDesc: '1400L double solid door upright refrigerator with ventilated cooling and Embraco compressor.',
    description: 'Tough, high-ambient tropicalized cooling system engineered specifically for Pakistani kitchen summers reaching ambient +43°C. Features digital Dixell/Carel microprocessors, automatic hot gas defrost, magnetic balloon gaskets, and food-grade stainless interior.',
    keyFeatures: [
      'Heavy-duty Embraco / Secop tropicalized compressor (+43°C ambient)',
      'Digital microcomputer temperature controller with LED display (-2°C to +8°C)',
      '6 adjustable heavy-gauge PVC coated wire shelves with GN 2/1 spacing',
      'Self-closing doors with 90° dwell stay-open position for bulk loading',
      'Eco-friendly R290 refrigerant with zero ODP and low GWP'
    ],
    specs: {
      dimensions: '1400 × 820 × 2050 mm',
      capacity: '1400 Liters gross volume',
      power: '580 Watts',
      voltage: '220V - 240V / 50Hz Single Phase',
      material: 'AISI 304 Stainless Interior & Exterior',
      fuelType: 'Electric',
      origin: 'KE Coldline (Pakistan)',
      warranty: '3 Years Compressor / 1 Year Electrical',
      weight: '190 kg'
    },
    applications: ['Central Restaurant Kitchens', 'Hotel Buffets', 'Butcheries', 'Hospital Kitchens'],
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=900&auto=format&fit=crop',
    featured: true,
    popular: true,
    leadTime: 'In Stock'
  },
  {
    id: 'ke-refrig-02',
    sku: 'KE-PREP-3D-SALAD',
    name: '3-Door Commercial Pizza & Salad Preparation Counter with GN Pan Well',
    category: 'refrigeration',
    subcategory: 'Prep Counters',
    brand: 'KE Coldline',
    shortDesc: 'Refrigerated sandwich and salad preparation table with food pan rail and food-grade poly cutting board.',
    description: 'A complete work station that keeps chopped toppings, pizza cheeses, and prep items chilled under +4°C during intense service while providing a durable preparation counter.',
    keyFeatures: [
      'Insulated stainless steel roll-top cover for overnight pan preservation',
      'Holds up to 9 × GN 1/3 gastronorm containers in refrigerated upper rail',
      'Under-counter 3 self-closing door refrigeration for bulk dough & prep pans',
      'Heavy-duty 4-inch swivel locking castors for easy back-wall sanitation'
    ],
    specs: {
      dimensions: '1800 × 750 × 850 (+250 hood) mm',
      capacity: '480 Liters internal storage + 9 × GN 1/3 wells',
      power: '450 Watts',
      voltage: '220V / 50Hz',
      material: 'AISI 304 Stainless Steel & High Density Polyethylene Board',
      fuelType: 'Electric',
      origin: 'KE Engineered (Pakistan)',
      warranty: '2 Years Comprehensive',
      weight: '142 kg'
    },
    applications: ['Pizza Parlors', 'Sub & Sandwich Shops', 'Shawarma Counters', 'Salad Bars'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: true,
    leadTime: '3-5 Days'
  },
  {
    id: 'ke-bake-01',
    sku: 'KE-OVEN-PIZZA-2D',
    name: 'Dual-Deck Refractory Stone Commercial Pizza Deck Oven',
    category: 'bakery',
    subcategory: 'Pizza Ovens',
    brand: 'KE Bakery Systems',
    shortDesc: 'Twin chamber stone deck pizza oven with dual analog heat regulators up to 450°C and halogen inspection lighting.',
    description: 'Designed to deliver authentic crispy Neapolitan and New York crusts. Thick volcanic refractory stone slabs retain radiant heat, allowing non-stop service even during dinner rush hour.',
    keyFeatures: [
      'Heavy 20mm thick food-grade cordierite refractory stone floor',
      'Independent top and bottom heating elements per chamber',
      'Chamber internal temperature capable of 50°C to 450°C',
      'Tempered double-glass inspection doors with cool-touch ergonomic handles',
      'Capacity: 8 × 14-inch pizzas or 4 × 18-inch jumbo family pizzas simultaneously'
    ],
    specs: {
      dimensions: '1250 × 1050 × 780 mm',
      capacity: '8 × 14" Pizzas or 4 × 18" Pizzas',
      power: '12.8 kW (Electric) or Gas variant available',
      voltage: '380V / 3-Phase / 50Hz',
      material: 'Stainless Steel Facade & Heavy Aluminized Chamber',
      fuelType: 'Electric',
      origin: 'Italy / Assembled KE',
      warranty: '2 Years Commercial Warranty',
      weight: '175 kg'
    },
    applications: ['Pizzerias', 'Italian Restaurants', 'Cafes', 'Bakeries', 'Bistros'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop',
    featured: true,
    popular: true,
    leadTime: 'In Stock'
  },
  {
    id: 'ke-bake-02',
    sku: 'KE-MIX-SPIRAL-40',
    name: '40-Liter Industrial Dual-Speed Spiral Dough Mixer',
    category: 'bakery',
    subcategory: 'Spiral Mixers',
    brand: 'KE Bakery Systems',
    shortDesc: 'Heavy-duty spiral dough mixer with dual timers, safety guard shutoff, and reinforced breaker bar.',
    description: 'Built for high-hydration sourdough, artisan baguettes, roti and pizza doughs. The synchronized bowl and spiral rotation ensures even gluten development without overheating delicate doughs.',
    keyFeatures: [
      'Dual-speed spiral hook with dual electric timers for automated shift from slow to fast mix',
      'Heavy stainless steel safety wire cage with micro-switch auto-stop',
      'High-torque belt drive system engineered for zero-slip under heavy dough load',
      'Flour capacity: 25 kg dry flour / 38 kg finished dough batch'
    ],
    specs: {
      dimensions: '530 × 850 × 1020 mm',
      capacity: '40 Liters bowl volume (25kg flour)',
      power: '2.4 kW Dual Speed Motor',
      voltage: '380V / 3-Phase / 50Hz (220V optional)',
      material: 'AISI 304 Stainless Bowl, Spiral Tool & Central Column',
      fuelType: 'Electric',
      origin: 'KE Engineered (Pakistan)',
      warranty: '2 Years Gearbox & Motor Warranty',
      weight: '145 kg'
    },
    applications: ['Commercial Bakeries', 'Pizza Chains', 'Naan & Flatbread Production', 'Pastry Shops'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: true,
    leadTime: 'Ready to Ship'
  },
  {
    id: 'ke-coffee-01',
    sku: 'KE-ESP-2GRP-PID',
    name: 'Dual-Boiler 2-Group Commercial Espresso Machine with PID & Volumetric Dosing',
    category: 'coffee',
    subcategory: 'Espresso Machines',
    brand: 'La Marzocco / KE Barista Pro',
    shortDesc: 'Commercial cafe espresso machine with saturated groups, dual insulated boilers, and cool-touch steam wands.',
    description: 'The centerpiece for specialty cafes and hotel beverage bars. Provides pinpoint ±0.5°C thermal stability even under back-to-back shot extraction, with dual barista high-output steam wands that texture silky microfoam in seconds.',
    keyFeatures: [
      'Dual insulated stainless steel boilers (Coffee: 3.4L, Steam: 7L)',
      'Digital PID temperature management with OLED barista interface',
      '4 programmable volumetric dose buttons per group + manual continuous flow',
      'Dual cool-touch multi-directional steam wands with precision 4-hole tips',
      'Integrated shot timer display for every group head'
    ],
    specs: {
      dimensions: '780 × 580 × 510 mm',
      capacity: 'Serving capacity up to 300 cups/hour',
      power: '4.6 kW',
      voltage: '220V - 240V / 50Hz Single Phase (32A)',
      material: 'Polished Stainless Steel & Deep Charcoal Frame',
      fuelType: 'Electric',
      origin: 'Florence, Italy',
      warranty: '2 Years Authorized Distributor Warranty & Service',
      weight: '72 kg'
    },
    applications: ['Specialty Coffee Shops', 'Fine Dining Restaurants', 'Hotel Executive Lounges', 'Bistros'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop',
    featured: true,
    popular: true,
    leadTime: 'In Stock - White Glove Installation Included'
  },
  {
    id: 'ke-prep-01',
    sku: 'KE-BLND-PRO-2L',
    name: 'Commercial Heavy-Duty Sound-Enclosure Bar & Kitchen Blender',
    category: 'preparation',
    subcategory: 'Blenders',
    brand: 'KE Barista Pro',
    shortDesc: '2200W peak motor with acoustic sound shield, Japanese titanium blades and variable speed programs.',
    description: 'Engineered for smooth smoothie bars, cocktail lounges and culinary purees. The sound dampening enclosure reduces motor decibels by 60%, allowing front-of-house blending without disturbing patrons.',
    keyFeatures: [
      '3.0 Peak Horsepower industrial copper motor (32,000 RPM)',
      'Acoustic sound reduction polycarbonate enclosure with magnetic seal',
      'Tough 2-Liter BPA-free Tritan pitcher with laser-cut hardened blades',
      '5 one-touch automated pulse programs + 10-step variable dial'
    ],
    specs: {
      dimensions: '240 × 280 × 480 mm',
      capacity: '2.0 Liters Jar',
      power: '2200 Watts peak',
      voltage: '220V / 50Hz',
      material: 'Die-cast aluminum base & food-grade Tritan',
      fuelType: 'Electric',
      origin: 'Taiwan / KE QA',
      warranty: '1 Year Commercial Warranty',
      weight: '9.2 kg'
    },
    applications: ['Cafes', 'Smoothie & Juice Bars', 'Cocktail Lounges', 'Commercial Kitchen Prep'],
    image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: true,
    leadTime: 'Same Day Dispatch'
  },
  {
    id: 'ke-fab-01',
    sku: 'KE-TAB-SS-1800',
    name: 'Heavy-Duty AISI 304 Stainless Steel Central Work Table with Undershelf',
    category: 'fabrication',
    subcategory: 'Work Tables',
    brand: 'KE Fabrications',
    shortDesc: 'Custom fabricated 1.5mm stainless steel preparation table with welded boxed edging and marine sound-deadening.',
    description: 'Precision manufactured in our Karachi fabrication facility. 1.5mm AISI 304 food-grade stainless steel top reinforced with waterproof sound-dampening marine core substrate to eliminate drumming during meat pounding and prep work.',
    keyFeatures: [
      'Top sheet: 1.5mm (16 gauge) prime AISI 304 food-grade stainless steel',
      'Reinforced box section channels underneath with sound deadening',
      'Adjustable 1.2mm stainless steel lower shelf with 300kg weight rating',
      '38mm diameter tubular stainless legs with heavy-duty leveling bullet feet',
      'Available with rear splashback, drawers or knife racks upon request'
    ],
    specs: {
      dimensions: '1800 × 750 × 850 mm (Custom dimensions available)',
      capacity: '450 kg distributed load capacity',
      power: 'N/A',
      voltage: 'N/A',
      material: 'AISI 304 Satin Finish Stainless Steel (1.5mm)',
      fuelType: 'N/A',
      origin: 'Fabricated in Karachi, Pakistan',
      warranty: '10 Years Structural Craftsmanship Guarantee',
      weight: '58 kg'
    },
    applications: ['All Commercial Kitchens', 'Butcheries', 'Bakeries', 'Hospitality', 'Catering'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop',
    featured: true,
    popular: true,
    leadTime: 'Fabricated to order in 3-5 days'
  },
  {
    id: 'ke-fab-02',
    sku: 'KE-SNK-2B-1800',
    name: 'Commercial Double-Bowl Deep Pot Wash Sink with Left Drainboard',
    category: 'fabrication',
    subcategory: 'Sinks',
    brand: 'KE Fabrications',
    shortDesc: 'Deep 400mm pressed pot washing bowls with anti-drip rim, rear high splashback and heavy tubular legs.',
    description: 'Fabricated specifically for washing large commercial pots, stock pots, and GN pans. Rounded internal bowl corners prevent food trap accumulation, with an anti-splash rear upstand to keep wall drywall pristine.',
    keyFeatures: [
      'Two oversized deep bowls (500 × 500 × 400mm each) for giant cooking vessels',
      'Sloped grooved drainboard on left for rapid runoff drying',
      '150mm rear wall splashback with pre-drilled tap centers',
      'Complete with heavy brass waste couplings, overflow pipes and strainer baskets'
    ],
    specs: {
      dimensions: '1800 × 700 × 850 (+150 splashback) mm',
      capacity: '2 × 100 Liter deep pot wash bowls',
      power: 'N/A',
      voltage: 'N/A',
      material: 'AISI 304 Stainless Steel (1.5mm top, 1.2mm bowls)',
      fuelType: 'N/A',
      origin: 'Fabricated in Karachi, Pakistan',
      warranty: '5 Years Leak & Rust-Free Guarantee',
      weight: '64 kg'
    },
    applications: ['Pot Wash Sculleries', 'Central Kitchens', 'Hotels', 'Banquets', 'Butcheries'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: true,
    leadTime: '4 Days'
  },
  {
    id: 'ke-vent-01',
    sku: 'KE-HOOD-ISL-3000',
    name: 'Engineered Commercial Kitchen Exhaust Hood with Stainless Baffle Filters',
    category: 'ventilation',
    subcategory: 'Exhaust Hoods',
    brand: 'KE Air Engineering',
    shortDesc: 'Full stainless steel aerodynamic canopy hood with internal grease trough, drain tap and vapor-proof LED lights.',
    description: 'Designed according to NFPA 96 ventilation parameters. Extracts high-heat grease laden vapors efficiently, preventing thermal ceiling pockets and fire hazards in commercial cooking lines.',
    keyFeatures: [
      'Full AISI 304 seamless welded grease-tight perimeter construction',
      'Aerodynamic UL-standard stainless steel baffle grease extractors (95% grease capture)',
      'Continuous perimeter grease gutter with removable drain tap reservoir',
      'Factory installed heat-resistant IP65 recessed LED illumination'
    ],
    specs: {
      dimensions: '3000 × 1200 × 550 mm (Custom lengths up to 12 meters)',
      capacity: 'Airflow capture: 4500 to 6000 CFM',
      power: '60W (Vapor-proof LED strip)',
      voltage: '220V / 50Hz for lighting',
      material: 'AISI 304 Brush Finished Stainless Steel (1.2mm)',
      fuelType: 'N/A',
      origin: 'KE Air Engineering (Pakistan)',
      warranty: '5 Years Structural & Leakage Warranty',
      weight: '130 kg'
    },
    applications: ['Restaurant Hot Lines', 'Hotel Kitchens', 'Wok Ranges', 'Fryer Banks', 'Oven Lines'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop',
    featured: true,
    popular: true,
    leadTime: 'Custom engineered per kitchen layout'
  },
  {
    id: 'ke-vent-02',
    sku: 'KE-BLW-DIDW-5HP',
    name: 'High-Static Centrifugal Exhaust Blower with VFD Control System',
    category: 'ventilation',
    subcategory: 'Exhaust Fans',
    brand: 'KE Air Engineering',
    shortDesc: 'Backward-curved high-pressure kitchen exhaust blower with dynamic balance impeller and weather-tight motor housing.',
    description: 'The powerhouse behind grease exhaust ducting. Backward-curved self-cleaning blades resist grease buildup, while the variable frequency drive (VFD) optimizes electricity consumption during non-peak hours.',
    keyFeatures: [
      'Heavy-gauge galvanized steel housing with grease drain plug',
      'Dynamically balanced backward-curved steel impeller',
      'Class F insulation, IP55 weatherproof induction motor',
      'Included Schneider/ABB VFD wall controller with kitchen speed potentiometer'
    ],
    specs: {
      dimensions: '950 × 900 × 1100 mm',
      capacity: '5500 CFM at 500 Pa static pressure',
      power: '5.5 HP (4.0 kW)',
      voltage: '380V / 3-Phase / 50Hz',
      material: 'Heavy Galvanized Steel & Epoxy Coating',
      fuelType: 'Electric',
      origin: 'Germany Motor / Assembled KE Air',
      warranty: '2 Years Comprehensive Motor & Inverter Guarantee',
      weight: '115 kg'
    },
    applications: ['Rooftop Exhaust Systems', 'Multi-Floor Kitchen Duct Runs', 'Commercial Plazas'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: true,
    leadTime: 'In Stock'
  },
  {
    id: 'ke-pos-01',
    sku: 'KE-POS-DUAL-15',
    name: 'Commercial Kitchen All-in-One Dual Touchscreen POS with KDS Integration',
    category: 'pos-tech',
    subcategory: 'POS Systems',
    brand: 'KE Technology',
    shortDesc: 'Heavy-duty water/grease resistant 15.6" capacitive touchscreen POS with 11.6" customer display and thermal order printer.',
    description: 'Engineered specifically for hot, grease-heavy restaurant counter and kitchen environments. Aluminum die-cast body dissipates heat without noisy vents, and features seamless Ethernet/Wi-Fi kitchen display system integration.',
    keyFeatures: [
      '15.6" True-Flat PCAP multi-touch main screen (IP54 spill proof)',
      '11.6" Customer display for order confirmation and promotional videos',
      'Intel Core i5 industrial low-power processor with 8GB RAM + 128GB SSD',
      'Includes 80mm heavy-duty auto-cutter high-speed thermal receipt printer'
    ],
    specs: {
      dimensions: '380 × 260 × 390 mm',
      capacity: 'Multi-Terminal Network Support',
      power: '65 Watts external adapter',
      voltage: '100V - 240V Auto-Switching',
      material: 'Die-cast Aluminum Chassis with Scratch-Proof Bezel',
      fuelType: 'Electric',
      origin: 'Taiwan / Configured Pakistan',
      warranty: '2 Years Replacement Warranty',
      weight: '7.8 kg'
    },
    applications: ['QSR Cash Desks', 'Table-Service Restaurants', 'Bakery Counters', 'Cafes'],
    image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: false,
    leadTime: 'In Stock'
  },
  {
    id: 'ke-ice-01',
    sku: 'KE-ICE-150KG',
    name: 'Commercial Gourmet Crystal Ice Machine (150kg/24h) with 80kg Bin',
    category: 'refrigeration',
    subcategory: 'Ice Machines',
    brand: 'Scotsman / KE Coldline',
    shortDesc: 'Automated crystal cube ice generator with front airflow, spray-system evaporator and antimicrobial storage.',
    description: 'Produces crystal-clear, ultra-dense gourmet ice cubes that melt 40% slower in drinks. Perfect for busy Pakistani cafes, bars, and catering operations with hard water filtration compatibility.',
    keyFeatures: [
      'High capacity output: 150 kg crystal ice cubes every 24 hours',
      'Integrated 80 kg polyurethane insulated ice storage bin',
      'AgION antimicrobial protection inside water distribution parts',
      'Removable air filter on front condenser for convenient maintenance'
    ],
    specs: {
      dimensions: '760 × 820 × 1650 mm',
      capacity: '150 kg/day production + 80 kg storage bin',
      power: '1200 Watts',
      voltage: '220V - 240V / 50Hz',
      material: 'AISI 304 Stainless Steel Exterior',
      fuelType: 'Electric',
      origin: 'Scotsman Partner / KE',
      warranty: '2 Years Comprehensive & Compressor',
      weight: '102 kg'
    },
    applications: ['Cafes & Juice Bars', 'Fine Dining', 'Hotel Banquet Halls', 'Beverage Counters'],
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: true,
    leadTime: 'In Stock'
  },
  {
    id: 'ke-small-01',
    sku: 'KE-GN-SET-304',
    name: 'Complete Heavy-Gauge AISI 304 Gastronorm (GN) Pan System with Lids',
    category: 'smallware',
    subcategory: 'GN Containers',
    brand: 'KE Smallware',
    shortDesc: 'Commercial grade deep-drawn anti-jam stainless steel gastronorm containers GN 1/1, 1/2, 1/3, 1/6.',
    description: 'Standardized European EN 631 gastronorm pans made from electrolytic polished 0.8mm AISI 304 stainless steel. Features anti-jam stacking shoulders, reinforced corner profiles and tight seal silicone covers.',
    keyFeatures: [
      'Resistant from -40°C deep blast freezing up to +300°C combi oven baking',
      'Reinforced corners protect against drops and dents',
      'Stackable without jamming due to perimeter nesting ridges',
      'Complete range of depths: 65mm, 100mm, 150mm and 200mm'
    ],
    specs: {
      dimensions: 'GN 1/1 (530×325mm), GN 1/2 (325×265mm), GN 1/3, 1/6',
      capacity: 'Up to 28 Liters per pan',
      power: 'N/A',
      voltage: 'N/A',
      material: 'Electropolished AISI 304 Food-Safe Stainless Steel',
      fuelType: 'N/A',
      origin: 'KE Engineered Quality',
      warranty: 'Lifetime structural guarantee against warping',
      weight: 'Various'
    },
    applications: ['Buffets', 'Bain Maries', 'Prep Counters', 'Food Storage', 'Oven Baking'],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop',
    featured: false,
    popular: false,
    leadTime: 'In Stock - Bulk Packs Available'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  ...UPLOADED_EQUIPMENT_PRODUCTS,
  ...BASE_PRODUCTS
];

