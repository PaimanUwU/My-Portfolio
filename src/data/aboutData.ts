const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  // If we haven't reached the birth month yet, or if it's the birth month 
  // but the day hasn't passed, subtract a year.
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const aboutData = {
  name: "Adi Putra",
  age: calculateAge("2003-04-17"), 
  location: "Malaysia",
  role: "Full Stack Developer",
  experience: "1+ Years",
  bio: "Full Stack Developer by day, UI/UX obsessive by heart. Based in Malaysia, I specialize in balancing the logic of scalable backends with the precision of high-fidelity design. I don't just ship features; I craft digital experiences where every pixel has a purpose.",
  socials: [
    { name: "GitHub", url: "https://github.com/PaimanUwU", icon: "Github" },
    { name: "LinkedIn", url: "#", icon: "Linkedin" },
    { name: "Email", url: "mailto:your@email.com", icon: "Mail" }
  ],
  techStack: [
    "Laravel", "TypeScript", "React", "Astro", "TailwindCSS",
    "Neovim", "MacOS", "Arch Linux", "Docker", "TypeScript", "PHP", 
    "Framer Motion", "Zsh", "Tmux", "Git", "Node.js"
  ],
  skills: [
    'React', 
    'TypeScript', 
    'Astro', 
    'TailwindCSS', 
    'Laravel',
    'PHP',
  ],
  services: [
    'Full Stack Development',
    'UI/UX Design',
  ],
  stats: [
    { label: "Code and Design Experience", value: "3+ years" },
    { label: "Projects Completed", value: "2" },
  ],
  education: [
    {
      degree: "Bachelor in Computer Science (Honours)",
      institution: "UiTM Shah Alam",
      duration: "3 Years",
      year: "2025 - 2027",
      status: "Degree"
    },
    {
      degree: "Diploma in Computer Science",
      institution: "UiTM Segamat",
      duration: "2.5 Years",
      year: "2020 - 2023",
      status: "Diploma"
    }
  ],
  work: [
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "3 Months",
      year: "2025",
      description: "Developed custom web applications using Laravel and PostgreSQL."
    },
    {
      role: "Software Engineer Intern",
      company: "MOSTI (Ministry of Science, Technology and Innovation)",
      duration: "6 Months",
      year: "2024 - 2025",
      description: "Contributed to internal systems and digital initiative projects."
    }
  ]
};
