import "@/app/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/app/_components/providers";
import { Header } from "@/app/_components/header/header";
import { ReactNode } from "react";
import { Footer } from "@/app/_components/footer";
import { RightsReserved } from "./(landing)/_sections/reserved";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Starter Kit",
  description: "The Project Planner AI Next Starter Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <Toaster />
          <div className="flex flex-col w-full">
            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
