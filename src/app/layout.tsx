import type { Metadata } from "next";
import { Fira_Mono, Poppins } from "next/font/google";
import SectionLink from "./components/link-section";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const fira_mono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuan Nghia - An enthusiasm coder",
  description:
    "Tuan Nghia is Web Developer passionate about creating efficient and user-friendly websites.",
  keywords: ["web developer", "coder", "portfolio", "tuan nghia", "enthusiasm"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-slate-900 antialiased relative`}
      >
        <div className="fixed bottom-10 right-10 z-10">
          <SectionLink
            title="nghiadt22.work@gmail.com"
            href="mailto:nghiadt22.work@gmail.com"
            direction="vertical"
            className={
              "text-sm lowercase tracking-widest font-normal " +
              fira_mono.className
            }
          />
        </div>
        {children}
      </body>
    </html>
  );
}
