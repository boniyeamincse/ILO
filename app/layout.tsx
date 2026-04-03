import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ILF – Impact Life Foundation",
    template: "%s | ILF – Impact Life Foundation",
  },
  description:
    "ILF (Impact Life Foundation) is a non-political social organization dedicated to building a better society through education, healthcare, and sustainable development.",
  keywords: ["ILF", "Impact Life Foundation", "NGO", "Bangladesh", "social organization", "non-political"],
  openGraph: {
    siteName: "ILF – Impact Life Foundation",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const h = await headers();
  const locale = h.get("x-locale") ?? "en";

  return (
    <html lang={locale} className={geistSans.variable}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
