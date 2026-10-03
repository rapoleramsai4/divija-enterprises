import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divija Enterprises | Eco-Friendly Construction & Infrastructure",
  description:
    "Divija Enterprises, founded and led by M. Sudharshan. Leading sustainable civil works, eco-friendly materials, machinery, and modern green construction solutions.",
  keywords: [
    "Divija Enterprises",
    "M. Sudharshan",
    "Eco-Friendly Construction",
    "Civil works",
    "Sustainable building materials",
    "Green construction",
    "Road works",
    "Machinery procurement",
  ],
  authors: [{ name: "M. Sudharshan" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#fbfdfa] text-[#1c261e] selection:bg-emerald-200 selection:text-emerald-950">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
