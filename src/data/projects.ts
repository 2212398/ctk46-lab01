export interface Project {
 id: string;
 title: string;
 description: string;
 content: string;
 date: string;
 tech: string[];
}

export const projects: Project[] = [
 {
 id: "he-thong-nhan-dien-benh-la-cay",
 title: "Hệ thống nhận diện bệnh lá cây",
 description:
 "Đồ án cá nhân sử dụng mô hình MobileNetV3 để nhận diện cây trồng và bệnh trên lá, triển khai API bằng FastAPI.",
 content: `Dự án tập trung vào bài toán nhận diện bệnh cây từ ảnh lá trong điều kiện thực tế.
 Quy trình gồm 3 bước chính:
 - Tiền xử lý và chuẩn hóa dữ liệu ảnh
 - Huấn luyện mô hình nhận diện loại cây
 - Huấn luyện mô hình nhận diện bệnh theo từng nhóm cây
 Kết quả cho thấy cách tiếp cận hai bước giúp cải thiện độ chính xác tổng thể và giảm nhầm lẫn giữa các nhóm bệnh gần giống nhau.`,
 date: "2025-03-10",
 tech: ["Python", "FastAPI", "PyTorch", "OpenCV", "MobileNetV3"],
 },
 {
 id: "website-portfolio-ca-nhan",
 title: "Website Portfolio cá nhân",
 description:
 "Website portfolio học phần Các công nghệ mới trong PTPM, xây dựng bằng Next.js App Router và Tailwind CSS.",
 content: `Website giúp mình trình bày thông tin cá nhân, dự án và bài viết kỹ thuật.
 Trong quá trình thực hiện, mình luyện tập tốt hơn về:
 - Tổ chức routing với App Router
 - Tách dữ liệu dùng chung cho nhiều trang
 - Thiết kế giao diện responsive bằng utility classes`,
 date: "2025-04-02",
 tech: ["Next.js", "TypeScript", "Tailwind CSS"],
 },
 {
 id: "ung-dung-quan-ly-cong-viec-nhom",
 title: "Ứng dụng quản lý công việc nhóm",
 description:
 "Ứng dụng hỗ trợ theo dõi tiến độ công việc theo nhóm với chức năng giao việc, cập nhật trạng thái và thống kê cơ bản.",
 content: `Đây là bài tập nhóm mô phỏng quy trình quản lý task trong một đội phát triển nhỏ.
 Các tính năng chính:
 - Tạo công việc và gán người phụ trách
 - Theo dõi trạng thái theo từng giai đoạn
 - Thống kê số lượng task theo mức độ hoàn thành
 Dự án giúp nhóm cải thiện cách thiết kế API và làm việc cộng tác với Git.`,
 date: "2024-12-18",
 tech: ["React", "Node.js", "Express", "PostgreSQL"],
 },
 {
 id: "api-quan-ly-thu-vien-mini",
 title: "API quản lý thư viện mini",
 description:
 "Xây dựng REST API cho bài tập môn học, quản lý sách, độc giả và lịch sử mượn trả với xác thực JWT.",
 content: `API được thiết kế theo chuẩn REST với phân tách rõ controller/service/repository.
 Mục tiêu chính là đảm bảo tính mở rộng và dễ kiểm thử.
 Các phần mình tập trung:
 - Thiết kế luồng xác thực JWT
 - Quản lý quan hệ dữ liệu mượn trả
 - Chuẩn hóa thông báo lỗi và mã trạng thái HTTP`,
 date: "2024-10-27",
 tech: ["Node.js", "Express", "JWT", "MongoDB"],
 },
];

export function getProjectById(id: string): Project | undefined {
 return projects.find((project) => project.id === id);
}
