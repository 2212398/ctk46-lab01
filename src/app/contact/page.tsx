export default function ContactPage() {
 return (
 <div className="max-w-5xl mx-auto px-4 py-12">
 <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
 <div className="space-y-4 text-gray-700 dark:text-gray-200">
 <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3">
 <p>
 <strong>Email:</strong>{" "}
 <a
 href="mailto:nguyenhoangkiet@sv.dlu.edu.vn"
 className="text-emerald-600 dark:text-emerald-400 hover:underline"
 >
 nguyenhoangkiet@sv.dlu.edu.vn
 </a>
    </p>
    <p>
 <strong>GitHub:</strong>{" "}
 <a
 href="https://github.com/2212398"
 target="_blank"
 rel="noopener noreferrer"
 className="text-emerald-600 dark:text-emerald-400 hover:underline"
 >
 github.com/2212398
 </a>
 </p>
 <p>
 <strong>Trường:</strong> Đại học Đà Lạt - Khoa Công nghệ Thông tin
 </p>
 <p>
 <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
 </p>
 </div>
 </div>
 </div>
 );
}

