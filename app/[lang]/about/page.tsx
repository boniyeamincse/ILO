import type { Metadata } from "next";
import { Target, Eye, Info, HelpCircle, ShieldCheck, Heart, Users2, Zap } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.nav.about };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const a = dict.about;

  const values = [
    { icon: ShieldCheck, title: a.values.integrity, desc: a.values.integrityDesc, color: "text-blue-600 bg-blue-50" },
    { icon: Heart, title: a.values.compassion, desc: a.values.compassionDesc, color: "text-rose-600 bg-rose-50" },
    { icon: Users2, title: a.values.inclusion, desc: a.values.inclusionDesc, color: "text-purple-600 bg-purple-50" },
    { icon: Zap, title: a.values.impact, desc: a.values.impactDesc, color: "text-amber-600 bg-amber-50" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{a.title}</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">{a.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                  <Target size={20} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{a.mission.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{a.mission.description}</p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                  <Eye size={20} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{a.vision.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{a.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
                  <Info size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{a.overview.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{a.overview.description}</p>
            </div>
            {/* Visual placeholder */}
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xl aspect-square flex items-center justify-center text-2xl font-bold text-white ${
                    ["bg-green-500", "bg-green-600", "bg-green-700", "bg-emerald-500", "bg-teal-500", "bg-green-800"][i]
                  }`}
                >
                  ILF
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ILF */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <HelpCircle size={24} className="text-amber-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{a.why.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{a.why.description}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{a.values.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${v.color}`}>
                  <v.icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
