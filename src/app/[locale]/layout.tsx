import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuan Nghia - An enthusiasm coder",
  description:
    "Tuan Nghia is Web Developer passionate about creating efficient and user-friendly websites.",
  keywords: [
    "nghiacangao",
    "ncn",
    "nacana22",
    "tuan nghia",
    "do tuan nghia",
    "web developer",
    "coder",
    "portfolio",
  ],
  openGraph: {
    title: "Tuan Nghia - An enthusiasm coder",
    description:
      "Tuan Nghia is Web Developer passionate about creating efficient and user-friendly websites.",
    images: "https://avatars.githubusercontent.com/u/69780921?v=4",
    type: "website",
    url: "http://nghiacangao.io.vn",
    locale: "vi_VN",
    siteName: "Tuan Nghia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuan Nghia - An enthusiasm coder",
    description:
      "Tuan Nghia is Web Developer passionate about creating efficient and user-friendly websites.",
    site: "http://nghiacangao.io.vn",
    images: "https://avatars.githubusercontent.com/u/69780921?v=4",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface ILayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function Layout({ children, params }: ILayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${poppins.className} bg-slate-900 antialiased relative`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
