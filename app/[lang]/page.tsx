import Link from "next/link";
import {
  BookOpen, HeartPulse, HandHeart, AlertTriangle, Leaf,
  Scale, Zap, Music, Star, Monitor,
  Users, Globe, CheckCircle, ArrowRight,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

const activityIcons = {
  education: BookOpen,
  healthcare: HeartPulse,
  poverty: HandHeart,
  disaster: AlertTriangle,
  environment: Leaf,
  rights: Scale,
  youth: Zap,
  culture: Music,
  moral: Star,
  digital: Monitor,
} as const;

const activityColors = [
  "bg-blue-50 text-blue-700 border-blue-100",
  "bg-red-50 text-red-600 border-red-100",
  "bg-orange-50 text-orange-600 border-orange-100",
  "bg-yellow-50 text-yellow-600 border-yellow-100",
  "bg-green-50 text-green-700 border-green-100",
  "bg-purple-50 text-purple-700 border-purple-100",
  "bg-indigo-50 text-indigo-700 border-indigo-100",
  "bg-pink-50 text-pink-600 border-pink-100",
  "bg-emerald-50 text-emerald-700 border-emerald-100",
  "bg-cyan-50 text-cyan-700 border-cyan-100",
];

const stats = [
  { key: "volunteers" as const, value: "500+", icon: Users },
  { key: "communities" as const, value: "80+", icon: Globe },
  { key: "projects" as const, value: "120+", icon: CheckCircle },
  { key: "beneficiaries" as const, value: "50K+", icon: HeartPulse },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const featuredActivities = (
    Object.keys(activityIcons) as (keyof typeof activityIcons)[]
  ).slice(0, 6);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white">
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 right-1/4 w-80 h-80 rounded-full bg-white/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest bg-white/15 border border-white/25 rounded-full text-green-100">
              {dict.footer.nonPolitical}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
              {dict.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-green-100 leading-relaxed mb-10 max-w-2xl">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${lang}/get-involved`}
                className="inline-flex items-center px-7 py-3.5 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors text-sm sm:text-base shadow-lg"
              >
                {dict.hero.joinUs}
              </Link>
              <Link
                href={`/${lang}/get-involved`}
                className="inline-flex items-center px-7 py-3.5 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 transition-colors text-sm sm:text-base border border-white/20"
              >
                {dict.hero.donate}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                {dict.hero.learnMore}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden>
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" height="60">
            <path fill="#ffffff" d="M0,32L60,26.7C120,21,240,11,360,16C480,21,600,43,720,48C840,53,960,43,1080,37.3C1200,32,1320,32,1380,32L1440,32L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z" />
          </svg>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ key, value, icon: Icon }) => (
              <div
                key={key}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-green-50 border border-green-100"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-3">
                  <Icon className="text-green-700" size={22} />
                </div>
                <span className="text-3xl font-bold text-green-700">{value}</span>
                <span className="text-sm text-gray-500 mt-1 font-medium">{dict.stats[key]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About preview ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                {dict.about.title}
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {dict.about.subtitle}
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                {dict.about.overview.description}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {dict.about.why.description}
              </p>
              <Link
                href={`/${lang}/about`}
                className="mt-7 inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all"
              >
                {dict.common.learnMore} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: dict.about.mission.title, desc: dict.about.mission.description, color: "bg-green-600" },
                { title: dict.about.vision.title, desc: dict.about.vision.description, color: "bg-green-700" },
                { title: dict.about.values.integrity, desc: dict.about.values.integrityDesc, color: "bg-emerald-600" },
                { title: dict.about.values.impact, desc: dict.about.values.impactDesc, color: "bg-teal-600" },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`${card.color} text-white rounded-2xl p-5 flex flex-col gap-2`}
                >
                  <h3 className="font-bold text-base">{card.title}</h3>
                  <p className="text-xs text-white/80 leading-relaxed line-clamp-3">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Activities ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              {dict.nav.activities}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              {dict.activities.title}
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{dict.activities.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredActivities.map((key, idx) => {
              const Icon = activityIcons[key];
              const item = dict.activities.items[key];
              const colorClass = activityColors[idx];
              return (
                <div
                  key={key}
                  className={`rounded-2xl border p-6 flex flex-col gap-3 hover:shadow-md transition-shadow ${colorClass}`}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/70">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-base">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={`/${lang}/activities`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              {dict.common.viewAll} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{dict.hero.title}</h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">{dict.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${lang}/get-involved`}
              className="px-8 py-3.5 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors"
            >
              {dict.common.joinUs}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="px-8 py-3.5 border border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
