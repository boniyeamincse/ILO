import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  const quickLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/activities`, label: dict.nav.activities },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
    { href: `/${lang}/team`, label: dict.nav.team },
  ];

  const activityLinks = [
    dict.activities.items.education.title,
    dict.activities.items.healthcare.title,
    dict.activities.items.poverty.title,
    dict.activities.items.disaster.title,
    dict.activities.items.youth.title,
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-green-500">
                <Image
                  src="/brand/logo.jpg"
                  alt="ILF Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-tight block">ILF</span>
                <span className="text-green-400 text-xs">Impact Life Foundation</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {dict.footer.description}
            </p>
            <p className="text-xs text-green-400 font-semibold uppercase tracking-wider">
              {dict.footer.nonPolitical}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {dict.footer.activities}
            </h3>
            <ul className="space-y-2">
              {activityLinks.map((label) => (
                <li key={label}>
                  <Link
                    href={`/${lang}/activities`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {dict.footer.contactUs}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 text-green-400 shrink-0" />
                <span>{dict.contact.info.addressValue}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={15} className="text-green-400 shrink-0" />
                <a href={`mailto:${dict.contact.info.emailValue}`} className="hover:text-green-400 transition-colors">
                  {dict.contact.info.emailValue}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={15} className="text-green-400 shrink-0" />
                <a href={`tel:${dict.contact.info.phoneValue}`} className="hover:text-green-400 transition-colors">
                  {dict.contact.info.phoneValue}
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { letter: "f", href: "https://www.facebook.com/profile.php?id=61578327048000", label: "Facebook" },
                { letter: "𝕏", href: "#", label: "Twitter/X" },
                { letter: "in", href: "#", label: "Instagram" },
                { letter: "▶", href: "#", label: "YouTube" },
              ].map(({ letter, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 text-xs font-bold hover:bg-green-600 hover:text-white transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} ILF – Impact Life Foundation.{" "}
            {dict.footer.rights}
          </p>
          <p>
            {dict.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
