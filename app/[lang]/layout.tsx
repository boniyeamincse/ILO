import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      languages: {
        en: "/en",
        bn: "/bn",
      },
    },
    other: { "content-language": lang },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
