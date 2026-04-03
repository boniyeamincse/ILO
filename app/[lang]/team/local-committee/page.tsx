import type { Metadata } from "next";
import TeamSubPage from "@/components/TeamSubPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "bn" ? "স্থানীয় কমিটি" : "Local Committee" };
}

export default async function LocalCommitteePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const title = lang === "bn" ? "স্থানীয় কমিটি" : "Local Committee";
  const subtitle =
    lang === "bn"
      ? "এলাকাভিত্তিক কার্যক্রম পরিচালনা ও সমন্বয়ের দায়িত্বপ্রাপ্ত সদস্যবৃন্দ।"
      : "Area-based committee members coordinating local operations and outreach.";
  const items =
    lang === "bn"
      ? ["ঢাকা ইউনিট কমিটি", "চট্টগ্রাম ইউনিট কমিটি", "রাজশাহী ইউনিট কমিটি", "খুলনা ইউনিট কমিটি", "সিলেট ইউনিট কমিটি"]
      : ["Dhaka Unit Committee", "Chattogram Unit Committee", "Rajshahi Unit Committee", "Khulna Unit Committee", "Sylhet Unit Committee"];

  return <TeamSubPage lang={lang} title={title} subtitle={subtitle} items={items} />;
}
