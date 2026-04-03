import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.nav.contact };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const c = dict.contact;

  const infoItems = [
    { icon: MapPin, label: c.info.address, value: c.info.addressValue, href: null },
    { icon: Mail, label: c.info.email, value: c.info.emailValue, href: `mailto:${c.info.emailValue}` },
    { icon: Phone, label: c.info.phone, value: c.info.phoneValue, href: `tel:${c.info.phoneValue}` },
    { icon: Clock, label: c.info.hours, value: c.info.hoursValue, href: null },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{c.title}</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">{c.subtitle}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left — Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {lang === "bn" ? "আমাদের সাথে যোগাযোগের তথ্য" : "Get in Touch"}
              </h2>

              <div className="space-y-5 mb-10">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-green-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-800 font-medium hover:text-green-700 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">{c.social}</p>
                <div className="flex gap-3">
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
                      className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold hover:bg-green-600 hover:text-white transition-colors"
                    >
                      {letter}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
