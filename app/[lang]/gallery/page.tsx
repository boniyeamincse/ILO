import type { Metadata } from "next";
import {
  BookOpen, HeartPulse, HandHeart, AlertTriangle, Leaf,
  Scale, Zap, Music, Star, Monitor, Users, CalendarDays,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.nav.gallery };
}

const galleryItems = [
  { key: "education" as const, icon: BookOpen, color: "from-blue-400 to-blue-600" },
  { key: "healthcare" as const, icon: HeartPulse, color: "from-red-400 to-red-600" },
  { key: "poverty" as const, icon: HandHeart, color: "from-orange-400 to-orange-600" },
  { key: "disaster" as const, icon: AlertTriangle, color: "from-yellow-400 to-amber-600" },
  { key: "environment" as const, icon: Leaf, color: "from-green-400 to-green-700" },
  { key: "rights" as const, icon: Scale, color: "from-purple-400 to-purple-700" },
  { key: "youth" as const, icon: Zap, color: "from-indigo-400 to-indigo-700" },
  { key: "culture" as const, icon: Music, color: "from-pink-400 to-pink-700" },
  { key: "moral" as const, icon: Star, color: "from-emerald-400 to-emerald-700" },
  { key: "digital" as const, icon: Monitor, color: "from-cyan-400 to-cyan-700" },
  { key: "volunteer" as const, icon: Users, color: "from-teal-400 to-teal-700" },
  { key: "community" as const, icon: CalendarDays, color: "from-lime-500 to-green-600" },
] as const;

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const g = dict.gallery;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{g.title}</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">{g.subtitle}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map(({ key, icon: Icon, color }) => {
              const label = g[key];
              return (
                <div
                  key={key}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Gradient background (placeholder for real photo) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />

                  {/* Icon centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="text-white text-xs font-semibold text-center px-2 leading-tight">
                      {label}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm font-semibold">{label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            {lang === "bn"
              ? "আরো ছবি শীঘ্রই আসছে। আমাদের সোশ্যাল মিডিয়া ফলো করুন।"
              : "More photos coming soon. Follow us on social media for the latest updates."}
          </p>
        </div>
      </section>
    </>
  );
}
