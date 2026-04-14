"use client";

import { useState } from "react";

export default function ThemeToggle() {
 const [isDark, setIsDark] = useState(false);

 return (
 <button
 type="button"
 onClick={() => setIsDark((prev) => !prev)}
 className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
 >
 {isDark ? "🌙 Chế độ tối" : "☀️ Chế độ sáng"}
 </button>
 );
}
