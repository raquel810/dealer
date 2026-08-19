import { useState } from 'react';
import { Crown, LayoutGrid, Zap, DollarSign, Wrench, Palette, Trophy, Box, Columns3, Clock, ListChecks, Repeat, Hammer, GitCompareArrows, Award, Droplets, TrendingUp, Ruler, Download } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type BuyingMode = null | 'semi-custom' | 'local-shop';

interface DealerBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LineCard {
  id: string;
  name: string;
  style: string;
  leadTime: string;
  icon: LucideIcon;
  fontClass: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  headline: string;
  valueProp: string;
  benefits: DealerBenefit[];
  semiCustomRank: number;
  localShopRank: number;
}

const lineCards: LineCard[] = [
  {
    id: 'harris',
    name: 'HARRIS',
    style: 'Full Custom Framed & Inset',
    leadTime: '8\u201310 wks',
    icon: Crown,
    fontClass: 'font-harris-serif',
    accentBg: 'bg-harris-accent',
    accentBorder: 'border-harris-accent',
    accentText: 'text-harris-accent',
    headline: 'The High-Margin Luxury Anchor.',
    valueProp:
      'Purpose-built for discerning residential clients who demand traditional craftsmanship, inset joinery, and premium hardwood construction throughout.',
    benefits: [
      {
        icon: DollarSign,
        title: 'Elevated Ticket Value',
        description: 'Inset cabinetry commands premium pricing with substantial retained margins.',
      },
      {
        icon: Wrench,
        title: 'Precision-Engineered Tolerances',
        description:
          'OptiFit engineering to 1/16\u2033 eliminates costly field modifications and scheduling delays.',
      },
      {
        icon: Palette,
        title: 'Limitless Finish Specification',
        description:
          'ColorDrop bespoke color matching enables any specification without custom shop overhead.',
      },
    ],
    semiCustomRank: 3,
    localShopRank: 1,
  },
  {
    id: 'hinge',
    name: 'HINGE',
    style: 'Full Custom Frameless',
    leadTime: '6\u20137 wks',
    icon: LayoutGrid,
    fontClass: 'font-hinge-sans',
    accentBg: 'bg-hinge-accent',
    accentBorder: 'border-hinge-accent',
    accentText: 'text-hinge-accent',
    headline: 'Uncompromising Modern Precision.',
    valueProp:
      'Ultra-clean European frameless architecture engineered with American 3/4\u2033 plywood strength and micro-tolerance sizing throughout.',
    benefits: [
      {
        icon: Trophy,
        title: 'Wins Contemporary Architecture',
        description:
          'Complete freedom for sleek, handleless, or integrated appliance compositions.',
      },
      {
        icon: Box,
        title: 'Furniture-Grade Construction',
        description:
          'Flush decorative finished ends and 3.5\u2033 finished returns ensure immaculate open-door presentation.',
      },
      {
        icon: Columns3,
        title: 'Structural Integrity',
        description: 'Heavy 300lb+ refrigeration column support without box deflection.',
      },
    ],
    semiCustomRank: 2,
    localShopRank: 2,
  },
  {
    id: 'hingepro',
    name: 'HINGE SELECT',
    style: 'Semi-Custom Frameless',
    leadTime: '3\u20134 wks',
    icon: Zap,
    fontClass: 'font-hinge-sans',
    accentBg: 'bg-select-accent',
    accentBorder: 'border-select-accent',
    accentText: 'text-select-accent',
    headline: 'High-Efficiency Precision Frameless.',
    valueProp:
      'Streamlined specification built on one universally refined door profile\u2014offering full finish availability with expedited order-to-install delivery.',
    benefits: [
      {
        icon: Clock,
        title: 'Captures Time-Sensitive Projects',
        description:
          'Retains frameless specifications in-house when clients require modern aesthetics without full custom timelines.',
      },
      {
        icon: ListChecks,
        title: 'Accelerated Specification Process',
        description:
          'Eliminates selection complexity with one core profile and comprehensive finish availability.',
      },
      {
        icon: Repeat,
        title: 'Consistent Repeat Volume',
        description: 'Ideal for multi-unit specifications, expedited schedules, or secondary residence projects.',
      },
    ],
    semiCustomRank: 1,
    localShopRank: 3,
  },
];

function getSortedCards(mode: BuyingMode) {
  if (!mode) return lineCards;
  const sorted = [...lineCards];
  sorted.sort((a, b) =>
    mode === 'semi-custom'
      ? a.semiCustomRank - b.semiCustomRank
      : a.localShopRank - b.localShopRank
  );
  return sorted;
}

export default function Hero() {
  const [mode, setMode] = useState<BuyingMode>(null);
  const sorted = getSortedCards(mode);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />

      {/* Hero banner with video background */}
      <div className="relative overflow-hidden">
        {/* Video / fallback image background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/harris/Screenshot_2026-08-18_163410.png"
          >
            <source src="/Untitled_-_August_19,_2026_at_00.27.18.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 pt-32 w-full">
          <div className="max-w-3xl">
            <p
              className="text-sm font-medium uppercase tracking-widest text-white/80 mb-4"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
            >
              Portfolio Alignment
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span
                className="font-harris-serif"
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
              >
                Know Your Lines.
              </span>
              <br />
              <span
                className="font-hinge-sans text-white/80"
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
              >
                Specify with Confidence.
              </span>
            </h1>
            <p
              className="text-lg text-white/90 max-w-2xl"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
              Three construction methods. Two distinguished brands. One resource to compare
              structure, customization, finishes, and ideal project alignment.
            </p>
            <a
              href="#pain-points"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold hover:bg-white/25 transition-all duration-200"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
            >
              See what your old lines are costing you
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Quick-nav tiles */}
      <div className="relative py-6 sm:py-8 border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {[
              { label: 'Construction', icon: Hammer, href: '#why-carry' },
              { label: 'Compare', icon: GitCompareArrows, href: '#comparison' },
              { label: 'Standards', icon: Award, href: '#differentiators' },
              { label: 'ColorDrop', icon: Droplets, href: '#stains' },
              { label: 'Revenue', icon: TrendingUp, href: '#margin-calculator' },
              { label: 'OptiFit', icon: Ruler, href: '#optifit' },
              { label: 'Downloads', icon: Download, href: '#downloads' },
            ].map((tile) => (
              <a
                key={tile.label}
                href={tile.href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-200 shrink-0 group"
              >
                <tile.icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-800 transition-colors whitespace-nowrap">
                  {tile.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Specification requirement selector */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">
            Select Your Core Specification Requirement
          </p>
          <p className="text-sm text-zinc-500 mb-4">
            Filter product lines based on your current project baseline to identify the optimal construction method.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setMode(mode === 'semi-custom' ? null : 'semi-custom')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                mode === 'semi-custom'
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              Replacing Semi-Custom Lines
            </button>
            <button
              onClick={() => setMode(mode === 'local-shop' ? null : 'local-shop')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                mode === 'local-shop'
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              Replacing Local Custom Workshops
            </button>
          </div>
          {mode && (
            <p className="mt-3 text-xs text-zinc-400">
              {mode === 'semi-custom'
                ? 'Ranked by optimal semi-custom replacement\u2014expedited delivery first.'
                : 'Ranked by optimal custom workshop replacement\u2014highest customization first.'}
            </p>
          )}
        </div>

        {/* Three value prop cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {sorted.map((card, i) => (
            <div
              key={card.id}
              className={`rounded-2xl border border-zinc-200 border-t-4 ${card.accentBorder} bg-white p-6 sm:p-7 hover:shadow-lg transition-all duration-500 flex flex-col ${
                mode && i === 0 ? 'ring-2 ring-zinc-900/10 shadow-md' : ''
              }`}
            >
              {/* Rank badge when mode active */}
              {mode && (
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white ${
                    i === 0 ? 'bg-zinc-900' : i === 1 ? 'bg-zinc-500' : 'bg-zinc-300'
                  }`}>
                    {i + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
                    {i === 0 ? 'Optimal alignment' : i === 1 ? 'Strong specification' : 'Available option'}
                  </span>
                </div>
              )}

              {/* Icon + name */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${card.accentBg} flex items-center justify-center shrink-0`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className={`text-lg font-bold text-zinc-900 ${card.fontClass} leading-tight`}>
                    {card.name}
                  </h2>
                  <p className="text-xs font-medium text-zinc-400 mt-0.5">
                    {card.style} &middot; {card.leadTime}
                  </p>
                </div>
              </div>

              {/* Dealer headline */}
              <p className={`text-base font-bold ${card.accentText} mb-3`}>
                {card.headline}
              </p>

              {/* Core value prop */}
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                {card.valueProp}
              </p>

              {/* Why dealers care */}
              <div className="mt-auto">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-3">
                  Specification Advantages
                </p>
                <ul className="space-y-4">
                  {card.benefits.map((b) => (
                    <li key={b.title} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-md bg-zinc-50 flex items-center justify-center shrink-0 mt-0.5">
                        <b.icon className={`w-3.5 h-3.5 ${card.accentText}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-800">{b.title}</p>
                        <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">
                          {b.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
