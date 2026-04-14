"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RootError({
 error,
 reset,
}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
 useEffect(() => {
 console.error(error);
 }, [error]);

 return (
 <div className="max-w-5xl mx-auto px-4 py-20 text-center">
 <h1 className="text-3xl font-bold text-red-600 mb-4">Đã xảy ra lỗi ngoài ý muốn</h1>
 <p className="text-gray-600 dark:text-gray-300 mb-8">
 Hệ thống gặp sự cố khi tải trang. Bạn có thể thử lại hoặc quay về trang chủ.
 </p>
 <div className="flex justify-center gap-3">
 <button
 onClick={() => reset()}
 className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
 >
 Thử lại
 </button>
 <Link
 href="/"
 className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
 >
 Về trang chủ
 </Link>
 </div>
 </div>
 );
}

