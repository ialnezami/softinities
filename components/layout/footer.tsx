import Link from 'next/link';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Softinities</h3>
            <p className="text-white/70 text-sm">
              Building modern applications with cutting-edge technology.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/70 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/110894017/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1GDVM3cZND/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/softinities"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@softinities.com"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>&copy; 2025 Softinities. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

