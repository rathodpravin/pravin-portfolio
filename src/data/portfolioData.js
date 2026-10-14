/**
 * PORTFOLIO CONFIGURATION DATA - PRAVIN RATHOD
 * Full-Stack Java Developer Portfolio Data
 */

const emailSubject = encodeURIComponent("Portfolio Contact – Let's Connect");
const emailBody = encodeURIComponent(
`Hello Pravin,

I came across your portfolio and would like to connect with you.

Name:
Company:
Purpose:
Message:

Regards,`
);

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
  resumeUrl: "/assets/resume/Pravin_Rathod_Resume.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "prathod8806@gmail.com",
    emailUrl: `mailto:prathod8806@gmail.com?subject=${emailSubject}&body=${emailBody}`,
    gmailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=prathod8806@gmail.com&su=${emailSubject}&body=${emailBody}`
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

export const featuredProjects = [
  {
    id: "ai-job-portal",
    number: "01",
    name: "AI-Powered Job Portal & Resume Analyzer",
    badge: "AI + Full-Stack",
    accentColor: "violet",
    shortDescription: "A smart recruitment platform connecting job seekers and recruiters with AI-driven resume analysis and intelligent job matching.",
    technologies: [
      "Java", "Spring Boot", "React.js", "MySQL",
      "Spring Security", "JWT", "REST APIs"
    ],
    keyFeatures: [
      "Job seeker and recruiter authentication with role-based access",
      "Job posting, browsing, and application management",
      "Resume upload with automated skill extraction",
      "AI-powered resume analysis and smart job matching",
      "Admin dashboard with analytics and platform management"
    ],
    whyChoose: "Demonstrates full-stack development, secure APIs, file handling, and AI integration — a complete, recruiter-facing product.",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "banking-transaction-system",
    number: "02",
    name: "Banking & Financial Transaction Management System",
    badge: "Enterprise Backend",
    accentColor: "emerald",
    shortDescription: "A secure, enterprise-grade banking backend handling accounts, fund transfers, transaction consistency, and real-time fraud alerting.",
    technologies: [
      "Java", "Spring Boot", "Spring Security", "Spring Data JPA",
      "Hibernate", "MySQL", "JWT", "Kafka", "Docker"
    ],
    keyFeatures: [
      "Secure JWT authentication and role-based authorization",
      "Bank account creation and full transaction management",
      "Fund transfers with ACID-compliant transaction consistency",
      "Transaction history with downloadable PDF statements",
      "Audit logs and real-time suspicious-transaction alerts via Kafka"
    ],
    whyChoose: "Demonstrates Core Java mastery, database transactions, enterprise security, event-driven architecture with Kafka, and Docker containerization.",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "ecommerce-order-management",
    number: "03",
    name: "E-Commerce & Order Management System",
    badge: "Scalable Full-Stack",
    accentColor: "cyan",
    shortDescription: "A high-performance e-commerce platform with product catalog, cart, inventory, payment gateway, and real-time order notifications.",
    technologies: [
      "Java", "Spring Boot", "React.js", "MySQL",
      "Spring Security", "JWT", "Redis", "Kafka", "Docker"
    ],
    keyFeatures: [
      "Dynamic product catalog with advanced search and filtering",
      "Shopping cart, checkout, and payment gateway integration",
      "Inventory and order lifecycle management",
      "Real-time order status notifications via Kafka",
      "Admin dashboard with sales analytics and product management"
    ],
    whyChoose: "Demonstrates REST API design, complex database relationships, business logic, caching with Redis, and scalable application architecture.",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  }
];

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
  },
  {
    id: "logistics-delivery-platform",
    name: "Real-Time Logistics & Delivery Platform",
    category: "Backend Enterprise API",
    shortDescription: "Logistics management backend with JWT authentication, role-based authorization, and end-to-end delivery lifecycle management.",
    image: "/assets/projects/logistics-platform.webp",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "Spring Data JPA",
      "MySQL",
      "REST APIs",
      "Maven",
      "Postman",
      "Swagger/OpenAPI"
    ],
    keyFeatures: [
      "JWT-based authentication & role-based authorization for secure access control",
      "Driver management with profile, assignment, and availability tracking",
      "Delivery lifecycle management — from creation to completion",
      "Real-time delivery tracking and address management modules",
      "Payment management with status handling and transaction records",
      "Fully documented REST APIs via Swagger/OpenAPI"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "income-tax-application",
    name: "Income Tax Application",
    category: "Full-Stack Web App",
    shortDescription: "User-friendly income tax filing app with multi-step form, client-side validation, and Spring Boot REST API integration.",
    image: "/assets/projects/income-tax-app.webp",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Hibernate",
      "Spring Data JPA"
    ],
    keyFeatures: [
      "Multi-step form covering personal, contact, income, bank & document details",
      "Robust client-side validation for error-free data submission",
      "Spring Boot REST API backend with MySQL persistence via Hibernate/JPA",
      "Responsive React.js frontend with clean and intuitive UX"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "hospital-management-system",
    name: "Hospital Management System",
    category: "Microservices Architecture",
    shortDescription: "Microservices-based hospital platform with separate services for auth, patients, doctors, and appointments.",
    image: "/assets/projects/hospital-management.webp",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Microservices",
      "Spring Cloud Gateway",
      "Eureka Server",
      "Spring Security",
      "JWT",
      "React.js",
      "MySQL",
      "Hibernate",
      "Spring Data JPA",
      "REST APIs"
    ],
    keyFeatures: [
      "Microservices architecture: Auth, Patient, Doctor & Appointment services",
      "JWT-based authentication with Spring Security across all services",
      "Spring Cloud Gateway for centralized API routing and filtering",
      "Eureka Server for dynamic service discovery and load balancing",
      "React.js frontend integrated with microservices REST APIs"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  }
];

export const builtProjects = [
  {
    id: "logistics-delivery-platform",
    name: "Real-Time Logistics & Delivery Platform",
    category: "Backend Enterprise API",
    accentColor: "indigo",
    shortDescription: "Logistics management backend with JWT authentication, role-based authorization, and end-to-end delivery lifecycle management.",
    image: "/assets/projects/logistics-platform.webp",
    technologies: [
      "Java", "Spring Boot", "Spring Security", "JWT",
      "Hibernate", "Spring Data JPA", "MySQL",
      "REST APIs", "Maven", "Postman", "Swagger/OpenAPI"
    ],
    keyFeatures: [
      "JWT-based authentication & role-based authorization for secure access control",
      "Driver management with profile, assignment, and availability tracking",
      "Delivery lifecycle management — from creation to completion",
      "Real-time delivery tracking and address management modules",
      "Payment management with status handling and transaction records",
      "Fully documented REST APIs via Swagger/OpenAPI"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "income-tax-application",
    name: "Income Tax Application",
    category: "Full-Stack Web App",
    accentColor: "cyan",
    shortDescription: "User-friendly income tax filing app with multi-step form, client-side validation, and Spring Boot REST API integration.",
    image: "/assets/projects/income-tax-app.webp",
    technologies: [
      "HTML", "CSS", "JavaScript", "React.js",
      "Java", "Spring Boot", "REST APIs",
      "MySQL", "Hibernate", "Spring Data JPA"
    ],
    keyFeatures: [
      "Multi-step form covering personal, contact, income, bank & document details",
      "Robust client-side validation for error-free data submission",
      "Spring Boot REST API backend with MySQL persistence via Hibernate/JPA",
      "Responsive React.js frontend with clean and intuitive UX"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "hospital-management-system",
    name: "Hospital Management System",
    category: "Microservices Architecture",
    accentColor: "violet",
    shortDescription: "Microservices-based hospital platform with separate services for auth, patients, doctors, and appointments.",
    image: "/assets/projects/hospital-management.webp",
    technologies: [
      "Java 21", "Spring Boot", "Spring Microservices",
      "Spring Cloud Gateway", "Eureka Server",
      "Spring Security", "JWT", "React.js",
      "MySQL", "Hibernate", "Spring Data JPA", "REST APIs"
    ],
    keyFeatures: [
      "Microservices architecture: Auth, Patient, Doctor & Appointment services",
      "JWT-based authentication with Spring Security across all services",
      "Spring Cloud Gateway for centralized API routing and filtering",
      "Eureka Server for dynamic service discovery and load balancing",
      "React.js frontend integrated with microservices REST APIs"
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
