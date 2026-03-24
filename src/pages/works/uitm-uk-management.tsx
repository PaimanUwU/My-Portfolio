import { calculateAge } from "../../utils/date";

export const aboutData = {
  name: "UiTM UK Management System",
  date: "2024",
  sortDate: "2024-03-01",
  stack: ["Laravel", "PHP", "Oracle 26ai", "Tailwind CSS"],
  description: "A comprehensive management system built for UiTM UK using Oracle 26ai as the primary database.",
  bio: "This was my CS degree project for ICT502. I had to architect a system that could handle complex data relationships using the cutting-edge Oracle 26ai database. I spend my time balancing clean, scalable code with the beautiful chaos of modern web design.",
  role: "Full Stack Developer",
  experience: "Degree Project",
  location: "Malaysia",
  age: calculateAge("2003-04-17"),
}

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
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
