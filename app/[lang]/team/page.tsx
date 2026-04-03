import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.nav.team };
}

const avatarColors = [
  "bg-green-600",
  "bg-emerald-600",
  "bg-teal-600",
  "bg-green-700",
  "bg-emerald-700",
  "bg-teal-700",
  "bg-green-500",
  "bg-emerald-500",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.team;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {t.members.map((member, idx) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold ${avatarColors[idx % avatarColors.length]} group-hover:scale-105 transition-transform`}
                >
                  {getInitials(member.name)}
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">{member.name}</h3>
                <p className="text-green-600 text-sm font-medium mt-1">{member.role}</p>

                {/* Decorative underline */}
                <div className="mt-4 h-0.5 w-12 bg-green-200 mx-auto rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {lang === "bn" ? "আমাদের দলে যোগ দিন" : "Join Our Team"}
          </h2>
          <p className="text-gray-600 mb-6">
            {lang === "bn"
              ? "আমরা সর্বদা নিবেদিত স্বেচ্ছাসেবক ও কর্মীদের স্বাগত জানাই।"
              : "We are always welcoming dedicated volunteers and staff who share our mission."}
          </p>
          <a
            href={`/${lang}/get-involved`}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
          >
            {dict.common.joinUs}
          </a>
        </div>
      </section>
    </>
  );
}
