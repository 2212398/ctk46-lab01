"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
 { href: "/", label: "Trang chủ" },
 { href: "/about", label: "Giới thiệu" },
 { href: "/blog", label: "Blog" },
 { href: "/projects", label: "Dự án" },
 { href: "/skills", label: "Kỹ năng" },
 { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 useEffect(() => {
 const savedTheme = localStorage.getItem("theme");
 const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
 const enabled = savedTheme ? savedTheme === "dark" : prefersDark;

 document.documentElement.classList.toggle("dark", enabled);
 }, []);

 const toggleTheme = () => {
 const root = document.documentElement;
 const next = !root.classList.contains("dark");
 root.classList.toggle("dark", next);
 localStorage.setItem("theme", next ? "dark" : "light");
 };

 return (
 <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
 <div className="max-w-6xl mx-auto px-4">
 <div className="flex items-center justify-between py-4">
 <Link href="/" className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
 Nguyễn Hoàng Kiệt
 </Link>

 <div className="hidden md:flex md:items-center md:gap-6">
 {navItems.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
 >
 {item.label}
 </Link>
 ))}
 <button
 type="button"
 onClick={toggleTheme}
 className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
 aria-label="Bật tắt dark mode"
 >
 Đổi giao diện
 </button>
 </div>

 <div className="flex items-center gap-2 md:hidden">
 <button
 type="button"
 onClick={toggleTheme}
 className="rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
 aria-label="Bật tắt dark mode"
 >
 Theme
 </button>
 <button
 type="button"
 onClick={() => setIsMenuOpen((prev) => !prev)}
 className="rounded-lg border border-gray-300 p-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
 aria-label="Mở menu điều hướng"
 >
 <svg
 className="h-5 w-5"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 >
 {isMenuOpen ? (
 <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
 ) : (
 <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
 )}
 </svg>
 </button>
 </div>
 </div>

 {isMenuOpen ? (
 <div className="border-t border-gray-200 py-3 md:hidden dark:border-gray-800">
 <div className="flex flex-col gap-2">
 {navItems.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 onClick={() => setIsMenuOpen(false)}
 className="rounded-lg px-2 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-emerald-400 transition-colors"
 >
 {item.label}
 </Link>
 ))}
 </div>
 </div>
 ) : null}
 </div>
 </nav>
 );
}
