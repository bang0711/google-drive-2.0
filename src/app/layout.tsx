import type { Metadata } from "next";

import "./globals.css";

import { Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";

import { ViewTransitions } from "next-view-transitions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt - The only storage solution you'll ever need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${poppins.variable} font-poppins antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}
