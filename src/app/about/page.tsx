export default function AboutPage() {
     return (
 <div className="max-w-5xl mx-auto px-4 py-12">
 <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
 <div className="space-y-4 text-gray-700">
 <p>
 Xin chào! Tôi là <strong>Nguyễn Hoàng Kiệt</strong>, sinh viên năm 4
 ngành Công nghệ Thông tin tại Đại học Đà Lạt.
 </p>
 <div className="bg-gray-50 rounded-lg p-4 space-y-2">
 <p>
 <strong>Họ và tên:</strong> Nguyễn Hoàng Kiệt
 </p>
 <p>
 <strong>Mã số sinh viên:</strong> 2212398
 </p>
 <p>
 <strong>Lớp:</strong> CTK46
 </p>
 <p>
 <strong>Định hướng:</strong> Phát triển ứng dụng Web kết hợp Machine Learning
 </p>
 </div>
 <p>
 Tôi yêu thích việc xây dựng sản phẩm có thể giải quyết bài toán thực tế,
 đặc biệt là các hệ thống hỗ trợ học tập và nhận diện hình ảnh trong nông nghiệp.
 </p>
 <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng</h2>
 <ul className="list-disc list-inside space-y-2">
 <li>JavaScript / TypeScript</li>
 <li>React & Next.js</li>
 <li>Tailwind CSS</li>
 <li>Python, FastAPI, PyTorch</li>
 <li>Git & GitHub</li>
 <li>SQL & PostgreSQL</li>
 </ul>
 <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn</h2>
 <div className="bg-gray-50 rounded-lg p-4">
 <p className="font-medium">Đại học Đà Lạt</p>
 <p className="text-gray-500">Cử nhân Công nghệ Thông tin (2021 -
2026)</p>
 </div>
 </div>
 </div>
 );
}