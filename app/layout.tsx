import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Chris Kalafatis | Designer",
  description: "Multi-disciplinary designer focusing on creating memorable web experiences, products, and brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-satoshi antialiased bg-[#F2F2F2] text-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
