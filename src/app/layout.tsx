import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
