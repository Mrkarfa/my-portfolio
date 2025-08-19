import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Lunexa | AI Crypto Trading",
  description: "Automate your crypto trading with Lunexa's powerful AI assistant. Connect your wallet, set your strategy, and let our AI handle the rest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter font-light antialiased bg-background text-primary`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
