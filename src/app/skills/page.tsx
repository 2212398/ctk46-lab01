const skills = [
 {
 category: "Frontend",
 items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
 },
 {
 category: "Backend",
 items: ["Node.js", "Express", "FastAPI", "REST API", "JWT"],
 },
 {
 category: "Database",
 items: ["PostgreSQL", "MongoDB", "SQL"],
 },
 {
 category: "AI/ML",
 items: ["PyTorch", "OpenCV", "MobileNetV3", "Data preprocessing"],
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
 <section key={group.category} className="border rounded-lg p-5 bg-white">
 <h2 className="text-xl font-semibold mb-3 text-blue-700">{group.category}</h2>
 <ul className="list-disc list-inside space-y-1 text-gray-700">
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
