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
 className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm mb-6 inline-block"
 >
 Quay lại danh sách dự án
 </Link>

 <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900">
 <p className="text-sm text-gray-400 mb-2">{project.date}</p>
 <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
 <p className="text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>
 <div className="prose max-w-none text-gray-700 dark:text-gray-200 whitespace-pre-line mb-6">
 {project.content}
 </div>
 <div className="flex flex-wrap gap-2">
 {project.tech.map((item) => (
 <span
 key={item}
 className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full"
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

