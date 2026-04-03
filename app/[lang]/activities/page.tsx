import type { Metadata } from "next";
import {
  BookOpen, HeartPulse, HandHeart, AlertTriangle, Leaf,
  Scale, Zap, Music, Star, Monitor,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.nav.activities };
}

const activities = [
  { key: "education" as const, icon: BookOpen, gradient: "from-blue-500 to-blue-600", light: "bg-blue-50 border-blue-100 text-blue-700" },
  { key: "healthcare" as const, icon: HeartPulse, gradient: "from-red-500 to-red-600", light: "bg-red-50 border-red-100 text-red-700" },
  { key: "poverty" as const, icon: HandHeart, gradient: "from-orange-500 to-orange-600", light: "bg-orange-50 border-orange-100 text-orange-700" },
  { key: "disaster" as const, icon: AlertTriangle, gradient: "from-yellow-500 to-amber-600", light: "bg-yellow-50 border-yellow-100 text-yellow-700" },
  { key: "environment" as const, icon: Leaf, gradient: "from-green-500 to-green-600", light: "bg-green-50 border-green-100 text-green-700" },
  { key: "rights" as const, icon: Scale, gradient: "from-purple-500 to-purple-600", light: "bg-purple-50 border-purple-100 text-purple-700" },
  { key: "youth" as const, icon: Zap, gradient: "from-indigo-500 to-indigo-600", light: "bg-indigo-50 border-indigo-100 text-indigo-700" },
  { key: "culture" as const, icon: Music, gradient: "from-pink-500 to-pink-600", light: "bg-pink-50 border-pink-100 text-pink-700" },
  { key: "moral" as const, icon: Star, gradient: "from-emerald-500 to-emerald-600", light: "bg-emerald-50 border-emerald-100 text-emerald-700" },
  { key: "digital" as const, icon: Monitor, gradient: "from-cyan-500 to-cyan-600", light: "bg-cyan-50 border-cyan-100 text-cyan-700" },
];

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const act = dict.activities;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{act.title}</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">{act.subtitle}</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {activities.map(({ key, icon: Icon, gradient, light }) => {
              const item = act.items[key];
              return (
                <div
                  key={key}
                  className="group rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card top gradient band */}
                  <div className={`bg-gradient-to-r ${gradient} p-6`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {/* Hover accent bar */}
                  <div className={`mx-6 mb-6 px-3 py-2 rounded-xl border text-xs font-semibold ${light} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-green-800 leading-relaxed">
            &ldquo;{dict.hero.title}&rdquo;
          </p>
          <p className="mt-4 text-gray-600">— ILF, Impact Life Foundation</p>
        </div>
      </section>
    </>
  );
}
