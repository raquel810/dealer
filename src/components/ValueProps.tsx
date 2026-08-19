import { Shield, Palette, Ruler, Truck, Users, Award } from 'lucide-react';

const sharedBenefits = [
  {
    icon: Shield,
    title: '3/4\u2033 Plywood Construction',
    description: 'Every box across all three lines is built with 3/4\u2033 plywood\u2014no particleboard, no exceptions.',
  },
  {
    icon: Palette,
    title: 'ColorDrop Bespoke Matching',
    description: 'Any color your client specifies, matched precisely. Available on HARRIS and HINGE lines.',
  },
  {
    icon: Ruler,
    title: '1/16\u2033 Precision Sizing',
    description: 'Custom dimensioning to 1/16\u2033 on HARRIS and HINGE eliminates fillers and delivers cleaner installations.',
  },
  {
    icon: Truck,
    title: 'Domestically Manufactured',
    description: 'All three lines produced in the United States. Consistent quality, reliable lead times.',
  },
  {
    icon: Users,
    title: 'One Relationship, Three Price Points',
    description: 'Luxury custom, high-end modern, and expedited frameless\u2014specified through a single partnership.',
  },
  {
    icon: Award,
    title: 'Blum Hinges Standard',
    description: 'Soft-close Blum hinges included as standard across every construction line. Dovetailed drawer systems standard on HARRIS and HINGE.',
  },
];

export default function ValueProps() {
  return (
    <section id="why-carry" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Platform Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Shared Construction Standards
          </h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
            Regardless of specification, every line delivers the same core material
            and engineering standards. These are non-negotiable fundamentals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sharedBenefits.map((b) => (
            <div
              key={b.title}
              className="group p-6 rounded-xl bg-zinc-50 hover:bg-white hover:shadow-md border border-transparent hover:border-zinc-200 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-200 group-hover:bg-harris-100 flex items-center justify-center mb-4 transition-colors">
                <b.icon className="w-5 h-5 text-zinc-600 group-hover:text-harris-accent transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2">{b.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
