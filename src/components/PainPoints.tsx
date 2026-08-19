import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PainItem {
  question: string;
  answer: string;
}

const painItems: PainItem[] = [
  {
    question: 'Still waiting on a price while the client shops you?',
    answer:
      'Priced in two days. Design in 2020 or send us the layout. Dealer portal for pricing, quoting, order status.',
  },
  {
    question: 'Did the delivery date move on you again?',
    answer:
      'Three lead times you can put in a contract: 8\u201310 / 6\u20137 / 3\u20134 weeks. Three price points from one supplier.',
  },
  {
    question: 'Waiting weeks on one replacement door?',
    answer:
      'We\u2019re fifteen minutes away. Warranty parts picked up, not waited on. Same-day pickup for rush and color matches. Limited lifetime warranty in writing\u2014most small shops give one year.',
  },
  {
    question: 'Who eats it when the appliance doesn\u2019t fit?',
    answer:
      'We do. Opti-Fit: send model numbers, and sizing, fillers, clearances and the parts list become our responsibility. Cabinets ganged together for faster install.',
  },
  {
    question: 'Charging your client extra for a finished end?',
    answer:
      'IEPs standard on every exposed end, no upcharge. 3/4\u2033 plywood throughout, hand-sanded dovetail boxes, Blum hardware, Sherwin-Williams finishes.',
  },
  {
    question: 'Handing out a brochure with someone else\u2019s name on it?',
    answer:
      'White-label program: the literature carries their company name. Doors, drawers and pull-outs built in-house, so refacing becomes a line they can quote.',
  },
];

export default function PainPoints() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="pain-points" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif leading-tight">
            Which of these cost you money last month?
          </h2>
        </div>

        <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {painItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group"
                >
                  <span className="text-base sm:text-lg font-semibold text-zinc-800 group-hover:text-zinc-600 transition-colors leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 sm:pb-6 text-sm sm:text-base text-zinc-500 leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
