import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectData {
  name: string;
  date: string;
  location?: string;
  description: string;
  stack: string[];
  role?: string;
  experience?: string;
  bio?: string;
}

interface Project {
  slug: string;
  data: ProjectData;
  url: string;
}

export default function WorksList({ projects }: { projects: Project[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, _url: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="relative border-l border-gray-800 ml-4 md:ml-20 space-y-12 pb-20">
      {projects.map((project: Project) => {
        const isExpanded = expandedId === project.slug;
        const data = project.data;

        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className={`relative pl-8 transition-all duration-500 ${isExpanded ? 'bg-gray-900/40 py-8 rounded-r-lg shadow-2xl' : 'hover:bg-white/5 py-4 rounded-r-lg'}`}
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[5px] top-6 w-2 h-2 rounded-full border border-black z-10 transition-colors duration-300 ${isExpanded ? 'bg-white scale-150' : 'bg-gray-600'}`} />

            <header className="mb-4 cursor-pointer group" onClick={() => toggleExpand(project.slug, project.url)}>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest transition-colors group-hover:text-gray-300">
                {data.date} {data.location && <span className="mx-2 text-gray-700">★</span>} {data.location}
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform inline-block">
                {data.name}
              </h2>
            </header>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 max-w-2xl px-1">
                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2">
                  {data.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {data.stack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-400 text-[10px] rounded-full font-mono uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-800 pt-6 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="text-xs font-mono text-gray-500 uppercase mb-2">Role</h4>
                            <p className="text-white">{data.role}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-mono text-gray-500 uppercase mb-2">Experience</h4>
                            <p className="text-white">{data.experience}</p>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="text-xs font-mono text-gray-500 uppercase mb-2">Details</h4>
                          <p className="text-gray-300 leading-relaxed italic border-l-2 border-gray-700 pl-4">
                            "{data.bio}"
                          </p>
                        </div>

                        <a
                          href={project.url}
                          className="inline-flex items-center gap-4 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all font-mono text-sm font-bold group"
                        >
                          View Full Project
                          <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isExpanded && (
                  <button
                    onClick={() => toggleExpand(project.slug, project.url)}
                    className="inline-block font-mono text-xs text-blue-500 hover:text-white transition-colors py-2"
                  >
                    View Details //
                  </button>
                )}
              </div>

              {/* Image Placeholder on the Right - Always visible now */}
              <div className="w-full md:w-64 h-40 flex-none rounded-lg overflow-hidden border border-gray-800 bg-gray-900 relative group flex">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-gray-700">PREVIEW //</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
