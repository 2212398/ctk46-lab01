const skills = [
 {
 category: "Frontend",
 items: ["HTML5", "CSS3", "TypeScript", "React", "Next.js", "Tailwind CSS"],
 },
 {
 category: "Backend",
 items: ["Node.js", "Express", "FastAPI", "REST API", "JWT", "Authentication"],
 },
 {
 category: "Database",
 items: ["PostgreSQL", "MongoDB", "SQL", "Database design"],
 },
 {
 category: "AI/ML",
 items: ["PyTorch", "OpenCV", "MobileNetV3", "Data preprocessing", "Model evaluation"],
 },
 {
 category: "Tools",
 items: ["Git", "GitHub", "VS Code", "Postman"],
 },
];

export default function SkillsPage() {
 return (
 <div className="max-w-5xl mx-auto px-4 py-12">
 <h1 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h1>
 <div className="grid gap-5 sm:grid-cols-2">
 {skills.map((group) => (
 <section key={group.category} className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-900">
 <h2 className="text-xl font-semibold mb-3 text-emerald-700 dark:text-emerald-400">{group.category}</h2>
 <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
 {group.items.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </section>
 ))}
 </div>
 </div>
 );
}

