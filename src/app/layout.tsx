import type { Metadata } from "next";
import '@/app/globals.css';
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "trasvelo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
