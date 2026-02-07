import { Mountain, Instagram, Twitter, Linkedin } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`transition-colors ${
        darkMode
          ? "bg-linear-to-br from-gray-900 to-gray-800 text-white"
          : "bg-linear-to-br from-teal-700 to-teal-600 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8" />
              <span className="text-2xl font-bold">India Vibes</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your personal guide to {15}+ beautiful Indian destinations.
              Discover hidden gems, plan perfect trips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Contact
                </button>
              </li>
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Popular States */}
          <div>
            <h3 className="font-semibold mb-4">Popular States</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Maharashtra
                </button>
              </li>
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Kerala
                </button>
              </li>
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Himachal Pradesh
                </button>
              </li>
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Rajasthan
                </button>
              </li>
              <li>
                <button className="hover:text-white/80 transition-colors text-left">
                  Goa
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Made With Love */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <button
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-white/80">
              Built with ❤️ by Manali
              <br />
              Pune, Maharashtra
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2026 India Vibes • Portfolio Project</p>
            <p>Powered by React, Tailwind & Passion for India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
