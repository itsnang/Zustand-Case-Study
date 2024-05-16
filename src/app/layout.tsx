import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CounterStoreProvider } from "@/providers/counter-store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`max-w-4xl mx-auto mb-8 min-h-screen lg:px-10 md:px-8 px-4 bg-gray-50 ${inter.className}`}
      >
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </body>
    </html>
  );
}
