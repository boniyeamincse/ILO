"use client";

import { useRouter, usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  lang: string;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLang: string) {
    if (newLang === lang) return;
    // Replace the current locale segment with the new one
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/") || "/");
  }

  return (
    <div
      className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5"
      role="group"
      aria-label="Language switcher"
    >
      <button
        onClick={() => switchLocale("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
          lang === "en"
            ? "bg-green-600 text-white shadow-sm"
            : "text-gray-600 hover:text-green-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("bn")}
        aria-pressed={lang === "bn"}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
          lang === "bn"
            ? "bg-green-600 text-white shadow-sm"
            : "text-gray-600 hover:text-green-700"
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}
