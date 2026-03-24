import { calculateAge } from "../../utils/date";

export const aboutData = {
  name: "InkTreeCo",
  date: "2024",
  sortDate: "2024-06-01",
  stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  description: "A creative frontend platform focusing on high-quality visuals and smooth user interactions.",
  bio: "Developed with a focus on visual excellence. This project showcases my ability to create modern, responsive interfaces that maintain performance while utilizing complex animations. I spend my time balancing clean, scalable code with the beautiful chaos of modern web design.",
  role: "Frontend Developer",
  experience: "1+ Years",
  location: "Malaysia",
  age: calculateAge("2003-04-17"),
}

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
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
