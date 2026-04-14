export interface Post {
 slug: string;
 title: string;
 excerpt: string;
 content: string;
 date: string;
 category: string;
 author: string;
}
export const posts: Post[] = [
 {
 slug: "gioi-thieu-nextjs",
 title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
 excerpt:
 "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
 content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
 Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR),
 Static Site Generation (SSG), và App Router.
 Một số ưu điểm nổi bật của Next.JS:
 - Routing tự động dựa trên cấu trúc thư mục
 - Hỗ trợ Server Components và Client Components
 - Tối ưu hóa hình ảnh, font, và scripts tự động
 - API Routes tích hợp
 - Hỗ trợ TypeScript sẵn có`,
 date: "2025-01-15",
 category: "Công nghệ",
 author: "Nguyễn Hoàng Kiệt",
 },
 {
 slug: "hoc-tailwind-css",
 title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
 excerpt:
 "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
 content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì
viết
 CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.
 Ví dụ, thay vì viết:
 .card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px
rgba(0,0,0,0.1); }
 Bạn viết trực tiếp trong HTML:
 <div class="p-4 rounded-lg shadow-md">...</div>
 Ưu điểm:
 - Không cần đặt tên class
 - Không cần chuyển qua lại giữa file HTML và CSS
 - File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
 date: "2025-01-20",
 category: "Công nghệ",
 author: "Nguyễn Hoàng Kiệt",
 },
 {
 slug: "kinh-nghiem-hoc-lap-trinh",
 title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
 excerpt:
 "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
 content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh
 nghiệm quan trọng:
 1. Thực hành nhiều hơn đọc lý thuyết
 Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%,
 70% còn lại là viết code.
 2. Xây dựng dự án thực tế
 Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
 Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.
 3. Tham gia cộng đồng
 Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
 date: "2025-02-01",
 category: "Học tập",
 author: "Nguyễn Hoàng Kiệt",
 },
 {
 slug: "xay-dung-api-fastapi",
 title: "Xây dựng REST API với FastAPI cho người mới bắt đầu",
 excerpt:
 "Ghi chú nhanh về cách tổ chức project FastAPI, tách router/service và xử lý validation hiệu quả.",
 content: `FastAPI là framework Python hiện đại, hiệu năng cao, rất phù hợp để xây dựng API cho đồ án.
 Khi bắt đầu, bạn nên tách project thành các phần:
 - routers: định nghĩa endpoint
 - services: xử lý nghiệp vụ
 - schemas: định nghĩa dữ liệu vào/ra với Pydantic
 - models: ánh xạ dữ liệu database
 Một số kinh nghiệm thực tế:
 - Luôn validate dữ liệu đầu vào để giảm lỗi runtime
 - Chuẩn hóa response để frontend dễ tích hợp
 - Viết tài liệu API bằng OpenAPI/Swagger ngay từ đầu`,
 date: "2025-02-12",
 category: "Công nghệ",
 author: "Nguyễn Hoàng Kiệt",
 },
 {
 slug: "nhat-ky-lam-do-an-ml",
 title: "Nhật ký làm đồ án nhận diện bệnh lá cây",
 excerpt:
 "Tổng hợp các bước mình đã làm từ tiền xử lý dữ liệu đến huấn luyện và đánh giá mô hình MobileNetV3.",
 content: `Đồ án nhận diện bệnh lá cây được triển khai theo hai giai đoạn:
 1. Nhận diện loại cây
 2. Nhận diện bệnh trong nhóm cây đã xác định
 Trong quá trình làm, mình rút ra các bài học quan trọng:
 - Tiền xử lý dữ liệu ảnh ảnh hưởng trực tiếp đến kết quả học
 - Cần cân bằng dữ liệu theo từng nhóm cây thay vì ép toàn bộ lớp về cùng số lượng
 - Nên tách pipeline huấn luyện và đánh giá để dễ theo dõi lỗi
 Mục tiêu tiếp theo là cải thiện tốc độ suy luận để triển khai realtime tốt hơn.`,
 date: "2025-02-25",
 category: "Dự án cá nhân",
 author: "Nguyễn Hoàng Kiệt",
 },
];
export function getPostBySlug(slug: string): Post | undefined {
 return posts.find((post) => post.slug === slug);
}