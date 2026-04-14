export default function Footer() {
 return (
 <footer className="bg-gray-50 border-t border-gray-200 mt-auto dark:bg-gray-950 dark:border-gray-800">
 <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400 text-sm space-y-2">
 <p>
 © 2026 — Nguyễn Hoàng Kiệt | CTK46 — Các công nghệ mới trong PTPM
 </p>
 <p className="flex items-center justify-center gap-3">
 <a
 href="https://github.com/2212398"
 target="_blank"
 rel="noopener noreferrer"
 className="text-emerald-600 hover:underline dark:text-emerald-400"
 >
 GitHub
 </a>
 <span className="text-gray-400 dark:text-gray-600">|</span>
 <a
 href="mailto:nguuyenben2004@gmail.com"
 className="text-emerald-600 hover:underline dark:text-emerald-400"
 >
 nguuyenben2004@gmail.com
 </a>
 </p>
 </div>
 </footer>
 );
}
