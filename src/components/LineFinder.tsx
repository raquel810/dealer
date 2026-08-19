import { useState } from 'react';
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';
import type { ProductLine } from '@/data/lines';
import { productLines } from '@/data/lines';

interface Step {
  question: string;
  options: { label: string; value: string }[];
}

const steps: Step[] = [
  {
    question: 'What architectural direction does the client favor?',
    options: [
      { label: 'Traditional / Transitional', value: 'traditional' },
      { label: 'Modern / Contemporary', value: 'modern' },
    ],
  },
  {
    question: 'What level of customization is required?',
    options: [
      { label: 'Fully bespoke sizing, profiles & species', value: 'full' },
      { label: 'Streamlined, curated selections', value: 'streamlined' },
    ],
  },
  {
    question: 'Primary project priority\u2014flexibility or schedule?',
    options: [
      { label: 'Maximum specification options & bespoke sizing', value: 'flexibility' },
      { label: 'Expedited delivery with efficient build', value: 'speed' },
    ],
  },
];

function getRecommendation(answers: string[]): ProductLine {
  if (answers[0] === 'traditional') return productLines[0];
  if (answers[1] === 'full') return productLines[1];
  if (answers[2] === 'flexibility') return productLines[1];
  return productLines[2];
}

export default function LineFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<ProductLine | null>(null);

  function handleSelect(value: string) {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setResult(getRecommendation(newAnswers));
    }
  }

  function handleBack() {
    if (result) {
      setResult(null);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  }

  function handleReset() {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  }

  const progress = result ? 100 : ((currentStep) / steps.length) * 100;

  return (
    <section id="line-finder" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Specification Navigator
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Line Alignment
          </h2>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto">
            Three questions to identify the optimal construction line for your current project.
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-zinc-200 rounded-full mb-10 overflow-hidden">
          <div
            className="h-full bg-zinc-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question or Result */}
        <div className="min-h-[280px] flex items-center justify-center">
          {result ? (
            <div className="w-full animate-fade-in">
              <div className={`border-l-4 ${result.accentBorder} bg-zinc-50 rounded-r-xl p-8 shadow-sm`}>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className={`w-5 h-5 ${result.accentText}`} />
                  <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Recommended Specification
                  </p>
                </div>
                <h3 className={`text-3xl font-bold ${result.accentText} ${result.fontClass} mb-2`}>
                  {result.name}
                </h3>
                <p className="text-zinc-500 mb-1">{result.style} &middot; {result.leadTime}</p>
                <p className="text-zinc-600 text-sm mb-6">{result.tagline}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#comparison"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white ${result.accentBg} hover:opacity-90 transition-opacity`}
                  >
                    View Full Comparison <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-600 bg-zinc-200 hover:bg-zinc-300 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full animate-fade-in">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                Step {currentStep + 1} of {steps.length}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-8">
                {steps[currentStep].question}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {steps[currentStep].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className="group relative p-6 rounded-xl border-2 border-zinc-200 bg-zinc-50 text-left hover:border-zinc-400 hover:shadow-md transition-all duration-200"
                  >
                    <span className="text-base font-semibold text-zinc-700 group-hover:text-zinc-900">
                      {opt.label}
                    </span>
                    <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300 group-hover:text-zinc-600 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back button */}
        {(currentStep > 0 || result) && (
          <button
            onClick={handleBack}
            className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
      </div>
    </section>
  );
}
