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
  bio: "I’m a Full Stack Developer based in Malaysia with a weird habit of overthinking UI/UX until it’s perfect. I spend my time balancing clean, scalable code with the beautiful chaos of modern web design",
  socials: [
    { name: "GitHub", url: "https://github.com/PaimanUwU", icon: "Github" },
    { name: "LinkedIn", url: "#", icon: "Linkedin" },
    { name: "Instagram", url: "#", icon: "Instagram" },
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
    'Node.js', 
    'Laravel',
    'PHP',
  ],
  services: [
    'UI/UX Design',
    'Full Stack Development',
    'Frontend Development',
    'API Integration'
  ],
  stats: [
    { label: "Years of Experience", value: "1+" },
    { label: "Projects Completed", value: "5+" },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
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
