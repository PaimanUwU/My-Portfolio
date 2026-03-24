import { calculateAge } from "../../utils/date";

export const aboutData = {
  name: "Vehicle Type Recognition",
  date: "2023",
  sortDate: "2023-08-01",
  stack: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
  description: "A machine learning project that uses a Convolutional Neural Network to classify vehicle types from images.",
  bio: "Built to explore the capabilities of computer vision. This model was trained on thousands of images to accurately distinguish between cars, trucks, and motorcycles. I spend my time balancing clean, scalable code with the beautiful chaos of modern web design.",
  role: "ML Developer",
  experience: "Personal Project",
  location: "Malaysia",
  age: calculateAge("2003-04-17"),
}

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
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
