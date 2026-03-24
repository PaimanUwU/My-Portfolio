import { calculateAge } from "../../utils/date";

export const aboutData = {
  name: "Personal Portfolio",
  date: "Jan 2024",
  sortDate: "2024-01-01",
  stack: ["Astro", "React", "Framer Motion", "Tailwind CSS"],
  description: "A minimal, high-performance portfolio website built with Astro and styled with Tailwind CSS.",
  bio: "This project is built with the goal of visual excellence and performance. I spend my time balancing clean, scalable code with the beautiful chaos of modern web design.",
  role: "Full Stack Developer",
  experience: "1+ Years",
  location: "Malaysia",
  age: calculateAge("2003-04-17"),
}

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
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
