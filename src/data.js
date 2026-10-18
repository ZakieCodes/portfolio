export const personalInfo = {
  name: "Fariha Rahman",
  title: "Computer Science & Engineering Student",
  location: "Sylhet, Bangladesh",
  about: "Student, Builder and full time question asker. Building AI that knows when it might be wrong, especially when it’s reading medical images.",
  email: "zakifariharahman@gmail.com",
  
  socials: {
    facebook: "https://www.facebook.com/fariyat.jahra",
    instagram: "https://www.instagram.com/wrong__cha", 
    github: "https://github.com/ZakieCodes" 
  }
};

export const projects = [
  {
    id: 1,
    title: "BayMax",
    desc: "A pneumonia detector that looks at two kinds of evidence, the way a doctor would: a chest X-ray read by ResNet50V2, and the patient’s blood count read by a Random Forest. It reaches 83% accuracy on the test set and runs inside a simple Gradio interface.",
    tags: ["Python", "ResNet50V2", "Machine Learning"],
    githubLink: "https://github.com/ZakieCodes/Baymax_Project" 
  },
  {
    id: 2,
    title: "MUConnect",
    desc: "A web portal for the CSE Department at Metropolitan University, with a student portal, an academic dashboard, and a peer-tutoring matchmaker. We planned it with use-case and sequence diagrams first. I built the React front end; my teammate built the Django backend behind the token-based login and role-based access.",
    tags: ["React", "Django", "MySQL", "Tailwind"],
    githubLink: "https://github.com/ZakieCodes/muconnect" 
  },
  {
    id: 3,
    title: "Prezence",
    desc: "Made for university faculty who take attendance every day. Teachers mark it from their phones, import student lists from Excel, and export a report of students who haven’t met the exam-eligibility threshold.",
    tags: ["React", "Tailwind CSS", "Web Dev"],
    githubLink: "https://github.com/ZakieCodes/attendance-app", 
    liveLink: "https://attendance-app-ten-pink.vercel.app/login" 
  },
  {
    id: 4,
    title: "Mini C Compiler",
    desc: "Most people only ever see a compiler’s final output. This one lets you watch it think. It takes a small C-like language through six phases (lexing, parsing, semantic checks, AST, symbol table, three-address code), and a web UI shows what each phase produces.",
    tags: ["C", "Flex", "Bison", "System Software"],
    githubLink: "https://github.com/ZakieCodes/new_mutants" 
  },
  {
    id: 5,
    title: "House Rental System",
    desc: "A database project that tracks the full rental story: the properties on offer, the tenants who rent them, and the transactions in between.",
    tags: ["MySQL", "Database Management", "SQL"],
    githubLink: "https://github.com/ZakieCodes/house_rental_system" 
  }
];