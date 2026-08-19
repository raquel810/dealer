export interface ProductLine {
  id: 'harris' | 'hinge' | 'hingepro';
  name: string;
  tagline: string;
  style: string;
  leadTime: string;
  vibe: string;
  fontClass: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  accentRing: string;
  highlights: string[];
  heroImage: string;
  semiCustomRank: number;
  localShopRank: number;
}

export const productLines: ProductLine[] = [
  {
    id: 'harris',
    name: 'HARRIS',
    tagline: 'Framed construction with full overlay or inset profiles. Fully customizable dimensions, hand-crafted detail, and bespoke finishes.',
    style: 'Full Custom Framed & Inset',
    leadTime: '8–10 wks',
    vibe: 'Traditional / Transitional',
    fontClass: 'font-harris-serif',
    accentBg: 'bg-harris-accent',
    accentBorder: 'border-harris-accent',
    accentText: 'text-harris-accent',
    accentRing: 'ring-harris-accent',
    highlights: [
      'Full custom framed & inset construction',
      '1/16\u2033 precision sizing on every cabinet',
      '12+ door profiles with The Studio bespoke design',
      'ColorDrop custom color matching',
      'OptiFit precision appliance integration',
    ],
    heroImage: '/images/harris/Harris-Cabinetry_view.jpg',
    semiCustomRank: 3,
    localShopRank: 1,
  },
  {
    id: 'hinge',
    name: 'HINGE',
    tagline: 'Frameless European full-access cabinetry engineered with American 3/4\u2033 plywood strength.',
    style: 'Full Custom Frameless',
    leadTime: '6–7 wks',
    vibe: 'Modern / Contemporary',
    fontClass: 'font-hinge-sans',
    accentBg: 'bg-hinge-accent',
    accentBorder: 'border-hinge-accent',
    accentText: 'text-hinge-accent',
    accentRing: 'ring-hinge-accent',
    highlights: [
      'Full custom frameless construction',
      'Flush decorative finished ends',
      '10 door profiles with full species selection',
      'ColorDrop custom color matching',
      'OptiFit precision appliance integration',
    ],
    heroImage: '/images/hingecustom-iverson_photo_0.jpg',
    semiCustomRank: 2,
    localShopRank: 2,
  },
  {
    id: 'hingepro',
    name: 'HINGE SELECT',
    tagline: 'Precision frameless cabinetry optimized for expedited delivery and fast-track projects.',
    style: 'Semi-Custom Frameless',
    leadTime: '3–4 wks',
    vibe: 'Modern / Contemporary',
    fontClass: 'font-hinge-sans',
    accentBg: 'bg-select-accent',
    accentBorder: 'border-select-accent',
    accentText: 'text-select-accent',
    accentRing: 'ring-select-accent',
    highlights: [
      'Semi-custom frameless construction',
      'Duncan door profile',
      'Full painted or stain finish availability',
      'High-efficiency streamlined build process',
      'Expedited delivery for fast-track specifications',
    ],
    heroImage: '/images/hinge/hinge22.png',
    semiCustomRank: 1,
    localShopRank: 3,
  },
];

export interface ComparisonRow {
  category: string;
  harris: string;
  hinge: string;
  hingepro: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    category: 'Construction',
    harris: 'Full Custom Framed & Inset',
    hinge: 'Full Custom Frameless',
    hingepro: 'Semi-Custom Frameless',
  },
  {
    category: 'Lead Time',
    harris: '8–10 weeks',
    hinge: '6–7 weeks',
    hingepro: '3–4 weeks',
  },
  {
    category: 'Box Material',
    harris: '3/4\u2033 Plywood',
    hinge: '3/4\u2033 Plywood',
    hingepro: '3/4\u2033 Plywood',
  },
  {
    category: 'Door Profiles',
    harris: '12+ profiles including Sanders, Duncan, James, Payton, Taylor, Malone, Jordan, Jackson, Bryant, Russell, Erving, Iverson',
    hinge: '10 profiles: Erving, Iverson, Sanders, Taylor, Duncan, James, Payton, Jordan, Bryant, Russell',
    hingepro: 'Duncan',
  },
  {
    category: 'Bespoke Door Design',
    harris: 'The Studio\u2014fully custom profiles',
    hinge: '\u2014',
    hingepro: '\u2014',
  },
  {
    category: 'Wood Species',
    harris: 'Maple, Oak, Hickory, Cherry, Walnut, Alder',
    hinge: 'Maple, Oak, Hickory, Cherry, Walnut, Alder',
    hingepro: 'Curated selection',
  },
  {
    category: 'Paint Finishes',
    harris: 'Polar, Arctic, Moonlight, Stone, Slate, Sage, Basil, Drift, Harbor, Navy, Nyx + ColorDrop',
    hinge: 'Polar, Arctic, Moonlight, Stone, Slate, Sage, Harbor, Navy, Onyx + ColorDrop',
    hingepro: 'Full painted finish availability',
  },
  {
    category: 'Stain Finishes',
    harris: 'Oat, Honey, Fawn, Rye, Reed, Cask, Alcove, Pumice, Shale, Graphite, Port',
    hinge: 'Oat, Honey, Fawn, Rye, Reed, Cask, Alcove, Pumice, Shale, Graphite, Port',
    hingepro: 'Full stain finish availability',
  },
  {
    category: 'ColorDrop Program',
    harris: 'Yes\u2014any color matched',
    hinge: 'Yes\u2014any color matched',
    hingepro: '\u2014',
  },
  {
    category: 'Hardware',
    harris: 'Blum soft-close hinges, dovetailed drawers',
    hinge: 'Blum soft-close hinges, dovetailed drawers',
    hingepro: 'Blum soft-close hinges',
  },
  {
    category: 'Finished Ends',
    harris: 'Integrated End Panels (IEPS)',
    hinge: 'Flush decorative finished ends',
    hingepro: 'Standard',
  },
  {
    category: 'Sizing Precision',
    harris: '1/16\u2033 increments',
    hinge: '1/16\u2033 increments',
    hingepro: 'Standard sizing',
  },
  {
    category: 'OptiFit Integration',
    harris: 'Yes',
    hinge: 'Yes',
    hingepro: '\u2014',
  },
  {
    category: 'Ideal Specification',
    harris: 'Luxury traditional or transitional full renovation',
    hinge: 'High-end modern European architecture',
    hingepro: 'Expedited modern or multi-unit projects',
  },
];
