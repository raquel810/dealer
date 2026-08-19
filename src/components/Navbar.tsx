import { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Standards', href: '#differentiators' },
  { label: 'Yield', href: '#calculator' },
  { label: 'Compare', href: '#comparison' },
  { label: 'OptiFit', href: '#optifit' },
  { label: 'Profiles', href: '#door-styles' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Literature', href: '#downloads' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand marks */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/logos/HC-Logo_2025-greybrown-0.png"
                alt="Harris Cabinetry"
                className="h-9 sm:h-10 w-auto"
              />
            </a>
            <span className="text-zinc-300 hidden sm:inline">|</span>
            <a
              href="https://hingecabinets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2"
            >
              <img
                src="/images/hinge/hinge22.png"
                alt="Hinge Cabinets"
                className="h-7 sm:h-8 w-auto"
              />
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Spec Sheets
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[28rem] border-t border-zinc-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-white">
          <a
            href="https://hingecabinets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-hinge-sans text-zinc-600 hover:text-hinge-accent transition-colors"
          >
            <img
              src="/images/hinge/hinge22.png"
              alt="Hinge Cabinets"
              className="h-6 w-auto"
            />
            <ExternalLink className="w-3.5 h-3.5 opacity-50" />
          </a>
          <div className="border-t border-zinc-100 pt-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#downloads"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Spec Sheets
          </a>
        </div>
      </div>
    </nav>
  );
}
