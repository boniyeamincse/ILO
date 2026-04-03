import type { Metadata } from "next";
import TeamSubPage from "@/components/TeamSubPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "bn" ? "নির্বাহী কমিটি" : "Executive Committee" };
}

export default async function ExecutiveCommitteePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const title = lang === "bn" ? "নির্বাহী কমিটি" : "Executive Committee";
  const subtitle =
    lang === "bn"
      ? "সংগঠনের পরিকল্পনা, তদারকি ও বাস্তবায়নে নেতৃত্বদানকারী টিম।"
      : "Leadership team responsible for planning, supervision, and execution.";
  const items =
    lang === "bn"
      ? ["সভাপতি", "সহ-সভাপতি", "সাধারণ সম্পাদক", "যুগ্ম সম্পাদক", "সাংগঠনিক সম্পাদক", "কোষাধ্যক্ষ"]
      : ["President", "Vice President", "General Secretary", "Joint Secretary", "Organizing Secretary", "Treasurer"];

  return <TeamSubPage lang={lang} title={title} subtitle={subtitle} items={items} />;
}
