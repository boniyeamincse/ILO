"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface NavbarProps {
  dict: Dictionary;
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/activities`, label: dict.nav.activities },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
    { href: `/${lang}/team`, label: dict.nav.team },
    { href: `/${lang}/get-involved`, label: dict.nav.getInvolved },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-green-200">
              <Image
                src="/brand/logo.jpg"
                alt="ILF Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-green-700 font-bold text-lg leading-tight block">ILF</span>
              <span className="text-gray-500 text-xs leading-none">Impact Life Foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Language Switcher + Donate (desktop) + Hamburger */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <Link
              href={`/${lang}/get-involved`}
              className="hidden md:inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              {dict.common.donateNow}
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-green-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/get-involved`}
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full text-center hover:bg-green-700 transition-colors"
            >
              {dict.common.donateNow}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
