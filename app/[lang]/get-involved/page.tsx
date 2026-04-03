import type { Metadata } from "next";
import { Heart } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import VolunteerForm from "@/components/VolunteerForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.nav.getInvolved };
}

export default async function GetInvolvedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const gi = dict.getInvolved;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{gi.title}</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">{gi.subtitle}</p>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left — Info */}
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                {gi.volunteer.title}
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 mb-4">
                {gi.volunteer.subtitle}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {lang === "bn"
                  ? "স্বেচ্ছাসেবী কাজ শুধু অন্যদের সাহায্য করে না — এটি আপনাকেও গড়ে তোলে। আমাদের নেটওয়ার্কে যোগ দিন এবং একটি সুন্দর বাংলাদেশ গড়ার অংশ হন।"
                  : "Volunteering isn't just about helping others — it builds you too. Join our network and be part of creating meaningful, lasting change across Bangladesh."}
              </p>

              {/* Why volunteer */}
              <div className="space-y-3">
                {(lang === "bn"
                  ? ["অভিজ্ঞতা ও দক্ষতা অর্জন করুন", "বাস্তব পরিবর্তনে অবদান রাখুন", "একটি অনুপ্রাণিত সম্প্রদায়ের অংশ হন", "সারা বাংলাদেশে নেটওয়ার্ক তৈরি করুন"]
                  : ["Gain real-world skills and experience", "Make a tangible difference in people's lives", "Be part of an inspired, supportive community", "Build a meaningful network across Bangladesh"]
                ).map((point) => (
                  <div key={point} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs flex items-center justify-center font-bold shrink-0">✓</span>
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <VolunteerForm dict={dict} />
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Heart size={28} className="text-green-600" />
            </div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              {gi.donate.title}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {gi.donate.subtitle}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
              {gi.donate.description}
            </p>

            {/* Donation amount buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {gi.donate.amounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className="px-6 py-3 rounded-full border-2 border-green-600 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>

            <a
              href={`mailto:${dict.contact.info.emailValue}?subject=Donation+Inquiry`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors text-lg"
            >
              <Heart size={18} />
              {gi.donate.cta}
            </a>

            <p className="mt-6 text-sm text-gray-500">{gi.donate.contact}</p>
          </div>
        </div>
      </section>
    </>
  );
}
