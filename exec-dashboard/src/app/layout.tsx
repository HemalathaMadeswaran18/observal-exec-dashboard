import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Observal — Executive Dashboard",
  description: "AI metrics for leadership",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <div className="fixed inset-0 bg-surface-0 bg-noise" />
        <div className="relative flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-[260px] min-h-screen">
            <div className="max-w-[1400px] mx-auto p-6 md:p-8 lg:p-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
