import type { Metadata } from "next";
import TeamSubPage from "@/components/TeamSubPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "bn" ? "নেতৃত্ব" : "Leadership" };
}

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const title = lang === "bn" ? "নেতৃত্ব" : "Leadership";
  const subtitle =
    lang === "bn"
      ? "সংগঠনের দূরদর্শী নেতৃত্ব ও দিকনির্দেশনায় কাজ করা প্রধান দায়িত্বশীলরা।"
      : "Core leaders guiding ILF with vision, accountability, and service values.";
  const items =
    lang === "bn"
      ? ["ফাউন্ডার ও চেয়ারম্যান", "এক্সিকিউটিভ ডিরেক্টর", "প্রোগ্রাম কোঅর্ডিনেটর", "ফিন্যান্স ম্যানেজার", "কমিউনিকেশনস লিড"]
      : ["Founder & Chairman", "Executive Director", "Program Coordinator", "Finance Manager", "Communications Lead"];

  return <TeamSubPage lang={lang} title={title} subtitle={subtitle} items={items} />;
}
