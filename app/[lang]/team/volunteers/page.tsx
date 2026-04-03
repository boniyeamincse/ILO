import type { Metadata } from "next";
import TeamSubPage from "@/components/TeamSubPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "bn" ? "স্বেচ্ছাসেবক" : "Volunteers" };
}

export default async function VolunteersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const title = lang === "bn" ? "স্বেচ্ছাসেবক" : "Volunteers";
  const subtitle =
    lang === "bn"
      ? "আমাদের মাঠপর্যায়ের কার্যক্রমের প্রাণশক্তি যারা, সেই নিবেদিত স্বেচ্ছাসেবকদের তালিকা।"
      : "The dedicated volunteer force powering ILF field activities and outreach.";
  const items =
    lang === "bn"
      ? ["ইভেন্ট ভলান্টিয়ার", "ফিল্ড সাপোর্ট ভলান্টিয়ার", "মেডিকেল ক্যাম্প ভলান্টিয়ার", "এডুকেশন সাপোর্ট ভলান্টিয়ার", "ডিজিটাল ক্যাম্পেইন ভলান্টিয়ার"]
      : ["Event Volunteers", "Field Support Volunteers", "Medical Camp Volunteers", "Education Support Volunteers", "Digital Campaign Volunteers"];

  return <TeamSubPage lang={lang} title={title} subtitle={subtitle} items={items} />;
}
