import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  subsets: ["latin"],
  weight: ['400','500','700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "YourTour",
  description: "Идеальные путешествия существуют",
  keywords: "путешествия, туры, туризм, отдых"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
