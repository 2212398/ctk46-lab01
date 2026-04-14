import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
 params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
 const { id } = await params;
 const project = getProjectById(id);

 if (!project) {
 notFound();
 }

 return (
 <div className="max-w-5xl mx-auto px-4 py-12">
 <Link
 href="/projects"
 className="text-blue-600 hover:underline text-sm mb-6 inline-block"
 >
 Quay lại danh sách dự án
 </Link>

 <article className="border rounded-lg p-6">
 <p className="text-sm text-gray-400 mb-2">{project.date}</p>
 <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
 <p className="text-gray-600 mb-5">{project.description}</p>
 <div className="prose max-w-none text-gray-700 whitespace-pre-line mb-6">
 {project.content}
 </div>
 <div className="flex flex-wrap gap-2">
 {project.tech.map((item) => (
 <span
 key={item}
 className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
 >
 {item}
 </span>
 ))}
 </div>
 </article>
 </div>
 );
}

export async function generateStaticParams() {
 return projects.map((project) => ({
 id: project.id,
 }));
}
