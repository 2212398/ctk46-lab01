const projects = [
 {
 title: "Hệ thống nhận diện bệnh lá cây",
 description:
 "Đồ án cá nhân sử dụng mô hình MobileNetV3 để nhận diện cây trồng và bệnh trên lá, triển khai API bằng FastAPI.",
 tech: ["Python", "FastAPI", "PyTorch", "OpenCV", "MobileNetV3"],
 },
 {
 title: "Website Portfolio cá nhân",
 description:
 "Website portfolio học phần Các công nghệ mới trong PTPM, xây dựng bằng Next.js App Router và Tailwind CSS.",
 tech: ["Next.js", "TypeScript", "Tailwind CSS"],
 },
 {
 title: "Ứng dụng quản lý công việc nhóm",
 description:
 "Ứng dụng hỗ trợ theo dõi tiến độ công việc theo nhóm với chức năng giao việc, cập nhật trạng thái và thống kê cơ bản.",
 tech: ["React", "Node.js", "Express", "PostgreSQL"],
 },
 {
 title: "API quản lý thư viện mini",
 description:
 "Xây dựng REST API cho bài tập môn học, quản lý sách, độc giả và lịch sử mượn trả với xác thực JWT.",
 tech: ["Node.js", "Express", "JWT", "MongoDB"],
 },
];
export default function ProjectsPage() {
 return (
 <div className="max-w-5xl mx-auto px-4 py-12">
 <h1 className="text-3xl font-bold mb-6">Dự án</h1>
 <div className="grid gap-6">
 {projects.map((project, index) => (
    <div
 key={index}
 className="border rounded-lg p-6 hover:shadow-md transition-shadow"
 >
 <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
 <p className="text-gray-600 mb-4">{project.description}</p>
 <div className="flex gap-2">
 {project.tech.map((t) => (
 <span
 key={t}
 className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>
 );
}