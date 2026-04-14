import Link from "next/link";

export default function HomePage() {
 return (
 <div className="max-w-5xl mx-auto px-4 py-16">
 {/* Hero section */}
 <div className="text-center mb-16">
 <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
 <span className="text-4xl text-emerald-700 dark:text-emerald-300">K</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
 Xin chào! Tôi là{" "}
 <span className="text-emerald-600 dark:text-emerald-400">Nguyễn Hoàng Kiệt</span>
 </h1>
 <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 max-w-2xl mx-auto">
 Sinh viên năm 4 ngành Công nghệ Thông tin tại Đại học Đà Lạt.
 </p>
 <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
 Lớp CTK46 | MSSV 2212398 | Định hướng Full-stack Web và AI ứng dụng.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Link
 href="/projects"
 className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
 >
 Xem dự án
 </Link>
 <Link
 href="/contact"
 className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
 >
 Liên hệ
 </Link>
 </div>
 </div>

 {/* Skills section */}
 <div className="mb-16">
 <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng thực tế</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 "TypeScript",
 "Next.js App Router",
 "React",
 "Tailwind CSS",
 "Node.js & Express",
 "Python & FastAPI",
 "PyTorch & OpenCV",
 "PostgreSQL & MongoDB",
 ].map((skill) => (
 <div
 key={skill}
 className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
 >
 {skill}
 </div>
 ))}
 </div>
 </div>

 {/* CTA section */}
 <div className="bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl p-8 text-center border border-emerald-100 dark:border-emerald-500/20">
 <h2 className="text-2xl font-bold mb-3">Đọc Blog của tôi</h2>
 <p className="text-gray-600 dark:text-gray-300 mb-4">
 Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ.
 </p>
 <Link href="/blog" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
 Xem blog →
 </Link>
 </div>
 </div>
 );
}
