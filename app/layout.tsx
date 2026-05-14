
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "After Work Escape - Ctrl Life Journal",
    template: "%s | After Work Escape - Ctrl Life Journal",
  },

  description:
    "記錄潛水旅行、新竹生活、AI 工具、副業實驗與生活風格的個人網站。",

  keywords: [
    "潛水",
    "小琉球",
    "OW",
    "自由潛水",
    "新竹酒吧",
    "AI工具",
    "旅遊",
    "副業",
    "Vercel",
    "Next.js",
  ],

  authors: [
    {
      name: "Wen",
    },
  ],

  creator: "Wen",

  openGraph: {
    title: "After Work Escape - Ctrl Life Journal",
    description:
      "記錄潛水旅行、新竹生活、AI 工具、副業實驗與生活風格。",
    url: "https://my-blog-chi-blue.vercel.app/",
    siteName: "After Work Escape - Ctrl Life Journal",
    locale: "zh_TW",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "After Work Escape - Ctrl Life Journal",
    description:
      "記錄潛水旅行、新竹生活、AI 工具、副業實驗與生活風格。",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6CGEKY29D2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6CGEKY29D2');
          `}
        </Script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6375877304346058"
          crossOrigin="anonymous"></script>

        <meta name="agd-partner-manuak-verification" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}