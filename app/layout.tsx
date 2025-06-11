import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Seeking You 2",
  description:
    "Seeking You is a next-generation social and business networking platform designed to help you discover new friends, connect with like-minded professionals, and grow your community—all in one place. Whether you're looking to expand your business network, find collaborators, or simply meet new people nearby, Seeking You offers verified profiles, live streaming, business tools, and local discovery features to empower authentic, meaningful connections. Join a vibrant, secure, and modern community where you can thrive both personally and professionally.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {children}
      </div>
      </body>
    </html>
  );
}
