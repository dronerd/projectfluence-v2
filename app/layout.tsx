import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Fluence",
  description: "効率的に英語を学び、世界で活躍する力を身につける。Project Fluenceはそんな学びを応援する個人プロジェクトです。 あなたの未来に、英語の力を。",
  keywords: ["英語学習", "英単語アプリ", "Note", "英語教育", "VocabStream", "SpeakwiseGPT", "Project Fluence", "Yuto Kuroki", "TOEFL", "TOEIC",],
  authors: [{ name: "黒木 勇人", url: "https://projectfluence.vercel.app",}],
  openGraph: {
    title: "ProjectFluence ～あなたの未来に、英語の力を～",
    description: "効率的に英語を学び、世界で活躍する力を身につける。Project Fluenceはそんな学びを応援する個人プロジェクトです。",
    url: "https://projectfluence.vercel.app",
    siteName: "Project Fluence",
    images: [
      {
        url: "https://projectfluence.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ProjectFluence",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectFluence ～あなたの未来に、英語の力を～",
    description: "効率的に英語を学び、世界で活躍する力を身につける。Project Fluenceはそんな学びを応援する個人プロジェクトです。",
    images: ["https://projectfluence.vercel.app/images/logo.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics /> {/* 👈 added here */}
      </body>
    </html>
  );
}
