import type { Metadata } from "next";
import TeamSubPage from "@/components/TeamSubPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "bn" ? "সদস্য তালিকা" : "Members List" };
}

export default async function MembersListPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const title = lang === "bn" ? "সদস্য তালিকা" : "Members List";
  const subtitle =
    lang === "bn"
      ? "আইএলএফ-এর নিবন্ধিত সদস্যদের বিভাগভিত্তিক তালিকা।"
      : "Category-wise list of registered ILF members.";
  const items =
    lang === "bn"
      ? ["লাইফ মেম্বার", "জেনারেল মেম্বার", "এক্টিভ মেম্বার", "সমর্থক সদস্য", "শিক্ষার্থী সদস্য"]
      : ["Life Members", "General Members", "Active Members", "Supporting Members", "Student Members"];

  return <TeamSubPage lang={lang} title={title} subtitle={subtitle} items={items} />;
}
