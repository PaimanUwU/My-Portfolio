import { calculateAge } from "../../utils/date";

export const aboutData = {
  name: "Infrastructure Reporting System",
  date: "2023",
  sortDate: "2023-01-01",
  stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  description: "A reporting platform to streamline identifying and fixing infrastructure damages at UITMPG.",
  bio: "Developed during my studies to solve real-world problems on campus. The system allows students and staff to report damages, which are then tracked and managed by the infrastructure team. I spend my time balancing clean, scalable code with the beautiful chaos of modern web design.",
  role: "Lead Developer",
  experience: "Student Project",
  location: "Malaysia",
  age: calculateAge("2003-04-17"),
}

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
        {aboutData.name}
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
        {aboutData.bio}
      </p>
      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {aboutData.stack.map(tech => (
          <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full font-mono text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
