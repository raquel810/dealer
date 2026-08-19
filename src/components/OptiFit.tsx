import { Crosshair, Box, PaintBucket, Cpu, ScanLine, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Crosshair,
    title: 'Defeating Tolerance Drift',
    description:
      'Every component is machined to a strict 1/16\u2033 micro-tolerance, ensuring appliance reveals perfectly match custom door lines.',
  },
  {
    icon: Box,
    title: 'Appliance-Grade Rigidity',
    description:
      'Full-depth 3/4\u2033 plywood boxes provide a rock-solid foundation engineered to support heavy 300lb+ refrigeration columns without box deflection.',
  },
  {
    icon: PaintBucket,
    title: '3-1/2\u2033 Finished Returns',
    description:
      'Pre-engineered, color-matched interior pockets conceal raw cabinet structures and metal casings when appliance doors are swung open.',
  },
  {
    icon: Cpu,
    title: 'Factory CNC Bypasses',
    description:
      'Milled ventilation paths and utility tracks are routed directly at the factory, preserving box integrity and eliminating hours of site modification.',
  },
];

export default function OptiFit() {
  return (
    <section id="optifit" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Available Exclusively on Harris & Hinge
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif mb-2">
            OptiFit<span className="text-harris-accent">&trade;</span>{' '}
            <span className="text-zinc-400 font-normal">|</span>{' '}
            Precision Appliance Integration
          </h2>
          <p className="text-lg text-zinc-500 italic">
            Defeating Tolerance Drift on the Job Site
          </p>
        </div>

        {/* Intro copy */}
        <p className="text-center text-zinc-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Custom cabinetry is an investment in long-term property equity. While luxury millwork
          flawlessly shapes the footprint of a room, integrating high-end appliances can introduce
          unpredictable job site variables. The OptiFit program applies our signature 1/16&quot;
          engineering precision to your appliance specifications, eliminating on-site guesswork and
          maximizing every inch of space.
        </p>

        {/* 4-card grid */}
        <div className="grid gap-6 sm:grid-cols-2 mb-14">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-harris-accent/10 flex items-center justify-center shrink-0">
                  <pillar.icon className="w-5 h-5 text-harris-accent" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OptiFit+ Premium Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-[#1c1917] p-8 sm:p-12">
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative">
            {/* Premium badge */}
            <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-5">
              Premium Add-On
            </span>

            {/* OptiFit+ branding */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              OPTIFIT<span className="text-amber-400">+</span>
            </h3>

            {/* Feature */}
            <div className="flex items-start gap-4 mt-6">
              <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
                <ScanLine className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Laser-Accurate Site Surveys
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                  A factory-certified technician maps precise wall plumbness, floor slopes, and
                  mechanical utility coordinates prior to manufacturing&mdash;ensuring absolute
                  dimensional fidelity between your plans and the finished installation.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:bob@cabinettreestudio.com?subject=OptiFit%2B%20Inquiry&body=I%27d%20like%20to%20learn%20more%20about%20OptiFit%2B%20precision%20site%20surveys."
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-amber-400 text-zinc-900 text-sm font-bold hover:bg-amber-300 transition-colors duration-200"
            >
              Inquire About OptiFit+
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
