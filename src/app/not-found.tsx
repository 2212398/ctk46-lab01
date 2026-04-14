import Link from "next/link";

export default function NotFound() {
 return (
 <div className="max-w-5xl mx-auto px-4 py-20 text-center">
 <div className="relative mx-auto mb-8 h-44 w-44">
 <div className="absolute inset-0 rounded-full bg-emerald-100 dark:bg-emerald-500/20 blur-2xl animate-pulse" />
 <div className="relative flex h-full w-full items-center justify-center rounded-full border border-emerald-200 dark:border-emerald-500/30 bg-white dark:bg-gray-900 shadow-lg">
 <svg
 viewBox="0 0 100 100"
 className="h-24 w-24 text-emerald-500 dark:text-emerald-400 animate-bounce"
 fill="none"
 stroke="currentColor"
 strokeWidth="5"
 >
 <circle cx="45" cy="45" r="26" />
 <line x1="63" y1="63" x2="85" y2="85" strokeLinecap="round" />
 <line x1="35" y1="40" x2="55" y2="40" strokeLinecap="round" />
 <line x1="35" y1="50" x2="55" y2="50" strokeLinecap="round" />
 </svg>
 </div>
 </div>

 <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-2">404</h1>
 <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
 <p className="text-gray-600 dark:text-gray-300 mb-8">
 Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
 </p>
 <Link
 href="/"
 className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
 >
 Về trang chủ
 </Link>
 </div>
 );
}
