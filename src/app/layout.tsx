import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
 title: "Portfolio — Nguyễn Hoàng Kiệt",
 description: "Website portfolio cá nhân — CTK46",
};
export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="vi" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
 <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
 <Navbar />
 <main className="flex-1">{children}</main>
 <Footer />
 </body>
 </html>
 );
}