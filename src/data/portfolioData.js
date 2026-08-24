/**
 * PORTFOLIO CONFIGURATION DATA - PRAVIN RATHOD
 * Full-Stack Java Developer Portfolio Data
 */

export const personalBrand = {
  name: "Pravin Rathod", 
  title: "Full-Stack Java Developer",
  status: "Open to Opportunities",
  location: "India / Remote",
  
  heroGreeting: "Hello, I'm",
  heroDescription: "I build secure, enterprise-grade, and scalable web applications using Java, Spring Boot, React.js, REST APIs, and modern cloud database technologies.",
  
  aboutHeading: "About Me",
  aboutParagraphs: [
    "I am Pravin Rathod, a Full-Stack Java Developer with deep expertise in designing high-performance enterprise systems. My core stack centers on Java, Spring Boot, Spring Security, Hibernate/JPA, and building dynamic, responsive user interfaces with React.js.",
    "I specialize in end-to-end software application development—ranging from architecting robust RESTful microservices and securing endpoints to optimizing complex MySQL database queries and delivering clean, intuitive web applications.",
    "Passionate about writing scalable, self-documenting code following SOLID principles, design patterns, continuous integration, and modern security protocols."
  ],

  profileImage: "/assets/profile/profile.webp",
  resumeUrl: "/assets/resume/resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "prathod8806@gmail.com",
    emailUrl: "mailto:prathod8806@gmail.com"
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Backend Frameworks",
    icon: "Server",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "REST APIs"]
  },
  {
    category: "Frontend Stack",
    icon: "Layout",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI"]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "Oracle DB"]
  },
  {
    category: "Developer Tools & DevOps",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Maven", "STS", "IntelliJ IDEA", "Postman"]
  }
];

export const featuredProject = {
  id: "online-shopping-website",
  name: "ONLINE SHOPPING WEBSITE",
  badge: "Featured E-Commerce Solution",
  shortDescription: "Full-stack e-commerce application built using React.js, Spring Boot and MySQL.",
  fullDescription: "An enterprise-grade e-commerce application engineered by Pravin Rathod featuring secure JWT authentication with Spring Security, dynamic product browsing and cart management, transaction processing, and responsive React frontend integration.",
  image: "/assets/projects/online-shopping.webp",
  technologies: [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "REST API",
    "Spring Security",
    "JWT",
    "Git",
    "GitHub"
  ],
  keyFeatures: [
    "User authentication & authorization via Spring Security & JWT",
    "Product catalog with instant search, category filtering, and inventory status",
    "Shopping cart state management with real-time total calculations",
    "Secure order placement, status management, and transaction handling",
    "RESTful API integration with relational MySQL persistence",
    "Hardened backend security with CORS control, BCrypt hashing, and validation"
  ],
  githubUrl: "https://github.com",
  demoUrl: "https://demo.example.com"
};

export const secondaryProjects = [
  {
    id: "microservices-banking-api",
    name: "Microservices Financial Engine",
    category: "Backend Microservices",
    shortDescription: "Resilient banking microservices engine engineered with Spring Boot, Spring Cloud, and PostgreSQL.",
    image: "/assets/projects/microservices-banking.webp",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "REST API", "Docker", "Git"],
    keyFeatures: [
      "Distributed microservices with Spring Cloud Eureka Gateway",
      "OAuth2 authorization & token-based session tracking",
      "Resilience4j circuit breakers for zero-downtime fault tolerance",
      "Containerized deployment configuration with Docker"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "task-inventory-management",
    name: "Enterprise Inventory & Task Tracker",
    category: "Full-Stack Web App",
    shortDescription: "Management dashboard featuring role-based access control, auditing, and analytics.",
    image: "/assets/projects/task-management.webp",
    technologies: ["Java", "Spring Boot", "React.js", "Hibernate", "MySQL", "Postman", "CSS3"],
    keyFeatures: [
      "Interactive React Kanban board with drag-and-drop workflow",
      "Optimized Spring Data JPA repositories with indexed queries",
      "Automated stock alerts and exportable transaction reports",
      "Clean dark-mode interface optimized for mobile and desktop"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  }
];

export const experienceMeta = {
  sectionTitle: "Internship Experience",
  subtitle: "Hands-on experience building responsive web interfaces and full-stack enterprise solutions using modern Java and web technologies.",
  statBadge: "2 Virtual Internships Completed"
};

export const experienceData = [
  {
    id: "codsoft",
    company: "CodSoft",
    role: "Web Development Intern",
    type: "Virtual Internship",
    location: "Virtual / Indonesia",
    duration: "April 2024 – May 2024",
    status: "Completed",
    focusBadge: "Frontend Web Development",
    isFullStackSpotlight: false,
    shortSummary: "Practical experience in frontend web development, responsive design, and interactive web interfaces using HTML5, CSS3, and JavaScript.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Git",
      "GitHub"
    ],
    responsibilities: [
      "Engineered responsive web interfaces using HTML5, CSS3, and modern JavaScript.",
      "Crafted fluid frontend layouts optimized for mobile, tablet, and desktop viewports.",
      "Implemented dynamic DOM interactions and resolved cross-browser rendering issues.",
      "Managed task repositories and code versioning using Git and GitHub workflows."
    ],
    certificateUrl: null,
    githubUrl: null
  },
  {
    id: "prodigy-infotech",
    company: "Prodigy InfoTech",
    role: "Java Full Stack Developer Intern",
    type: "Remote / Virtual Internship",
    location: "Remote",
    duration: "June 2024 – June 2024",
    status: "Completed",
    spotlightBadge: "Full-Stack Java Development",
    focusBadge: "Java Full Stack Development",
    isFullStackSpotlight: true,
    shortSummary: "Hands-on experience developing web applications using Java, Spring Boot, React.js, REST APIs, Hibernate/JPA, and MySQL.",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "REST API",
      "Hibernate",
      "JPA",
      "MySQL",
      "Git",
      "GitHub",
      "Postman"
    ],
    architectureFlow: [
      "React.js",
      "REST API",
      "Spring Boot",
      "Java",
      "Hibernate / JPA",
      "MySQL"
    ],
    architectureCaption: "Full-Stack Application Development",
    architectureSubcaption: "End-to-end flow across React frontend, Spring Boot API, and MySQL persistence.",
    responsibilities: [
      "Architected full-stack web applications integrating React.js frontends with Java & Spring Boot backends.",
      "Designed RESTful API endpoints for seamless JSON data exchange and frontend-backend communication.",
      "Implemented Controller-Service-Repository backend layers with Hibernate/JPA object-relational mapping.",
      "Executed relational MySQL database queries and API endpoint validation using Postman and Git control."
    ],
    certificateUrl: null,
    githubUrl: null
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Swami Ramanand Teerth Marathwada University, Nanded (SRTMUN)",
    year: "2023 - 2025",
    specialization: "Enterprise Software Engineering & Full-Stack Architecture",
    description: "Advanced Studies: Enterprise Java & Spring Frameworks, Distributed Systems, Relational Database Management Systems (MySQL/PostgreSQL), Software Architecture, RESTful Web APIs, and Information Security."
  }
];

export const certificationsData = [
  {
    id: 1,
    name: "Oracle Certified Associate, Java SE Programmer",
    issuer: "Oracle",
    date: "2024",
    credentialId: "OCA-JAV-892104",
    verificationUrl: "https://oracle.com/verify"
  },
  {
    id: 2,
    name: "Spring Certified Professional",
    issuer: "VMware / Spring",
    date: "2024",
    credentialId: "SCP-2024-55198",
    verificationUrl: "https://spring.io/certifications"
  }
];
