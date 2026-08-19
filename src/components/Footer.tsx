import { ExternalLink, MapPin, Phone, Mail, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-500 pt-16 pb-8 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-zinc-200">
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Studio Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <User className="w-4 h-4 shrink-0 text-zinc-400" />
                <span className="font-semibold text-zinc-700">Bob Harris</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-zinc-400" />
                Harris Cabinetry &middot; Plainfield, IL
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-zinc-400" />
                <a href="tel:8722227411" className="hover:text-zinc-800 transition-colors">
                  872-222-7411
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-zinc-400" />
                <a href="mailto:bob@cabinettreestudio.com" className="hover:text-zinc-800 transition-colors">
                  bob@cabinettreestudio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Harris */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logos/HC-Logo_2025-greybrown-0.png"
                alt="Harris Cabinetry"
                className="h-8 w-auto"
              />
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-zinc-400" />
                12515 Rhea Dr, Plainfield, IL 60585
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-zinc-400" />
                815.234.1000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-zinc-400" />
                info@harriscrafted.com
              </li>
            </ul>
          </div>

          {/* Hinge */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/hinge/hinge22.png"
                alt="Hinge Cabinets"
                className="h-7 w-auto"
              />
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-zinc-400" />
                info@hingecabinets.com
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 shrink-0 text-zinc-400" />
                <a
                  href="https://hingecabinets.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-800 transition-colors"
                >
                  hingecabinets.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#comparison" className="hover:text-zinc-800 transition-colors">
                  Line Comparison
                </a>
              </li>
              <li>
                <a href="#differentiators" className="hover:text-zinc-800 transition-colors">
                  Competitive Edge
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-zinc-800 transition-colors">
                  Margin Calculator
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-zinc-800 transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} Harris Cabinetry & Hinge Cabinets. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
