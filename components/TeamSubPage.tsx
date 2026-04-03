import Link from "next/link";
import { ArrowLeft, BadgeCheck } from "lucide-react";

interface TeamSubPageProps {
  lang: string;
  title: string;
  subtitle: string;
  items: string[];
}

function splitItem(item: string) {
  const parts = item.split("—");
  if (parts.length < 2) {
    return { name: item.trim(), role: "" };
  }

  const name = parts[0].trim();
  const role = parts.slice(1).join("—").trim();
  return { name, role };
}

export default function TeamSubPage({ lang, title, subtitle, items }: TeamSubPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-emerald-600 text-white py-24">
        <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-white/10" aria-hidden />
        <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <BadgeCheck size={14} />
            {lang === "bn" ? "টিম বিভাগ" : "Team Section"}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold mb-4 text-balance">{title}</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-green-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {lang === "bn" ? "নাম ও পদবি তালিকা" : "Name & Designation List"}
            </h2>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
              {items.length} {lang === "bn" ? "জন" : "Members"}
            </span>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {items.map((item, idx) => {
              const parsed = splitItem(item);
              return (
                <li
                  key={item}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 leading-snug">{parsed.name}</p>
                      {parsed.role ? (
                        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{parsed.role}</p>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="text-center mt-8">
            <Link
              href={`/${lang}/team`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              <ArrowLeft size={16} />
              {lang === "bn" ? "টিম পেইজে ফিরে যান" : "Back to Team"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
