export const strings = {
  menu_home: "Home",
  menu_cv: "Resume", 
  cv_desc: "About me...",
  menu_projects: "Projects",
  hero_title: "Felipe Betancourt Figueroa",
  hero_sub: "Backend Software Engineer | Python Backend & Data Engineer",
  hero_cta_cv: "View Resume",
  hero_cta_projects: "Browse projects",
  section_profile: "Professional Summary",
  section_experience: "Experience",
  section_education: "Education",
  section_skills: "Core Skills",
  section_competencies: "Engineering Competencies",
  section_soft_skills: "Soft Skills",
  projects_title: "Projects",
  cat_programming: "Programming", 
  programming_desc: "Engineering and programming",
  cat_literature: "Literature",
  literature_desc: "Stories and texts...",
  cat_music: "Music",
  music_desc: "My recomendations..."
};

export const data = {
  palette: {
    mint: "#b2d2ad",
    teal1: "#628e88",
    teal2: "#4f787a",
    teal3: "#336d65",
    teal4: "#34785d",
    teal5: "#144d40",
    slate1: "#454869",
    lilac1: "#aca9c8",
    lilac2: "#797188",
    white: "#fbffff",
    aqua: "#6af9ff",
    navy1: "#212660",
    navy2: "#192656",
    navy3: "#172c47",
    black: "#000000",
    ink: "#051022",
    rose: "#e4889f",
  },
  profile: {
    name: "Felipe Betancourt Figueroa",
    role: "Backend Software Engineer | Python Backend & Data Engineer",
    contactMeForMore: "Contact me for more information.",
    email: "Felipe.Bet@hotmail.com",
    github: "https://github.com/PhillBet",
    website: "https://PhillBet.com",
    linkedIn: "https://www.linkedin.com/in/felipe-betancourt-72779b2b0",
  },
  summary: [
    "Software Engineer specialized in Python, with more than 5 years of experience designing and maintaining high-impact backend systems and ETL pipelines, focused on automation, integration, and efficient data processing in scientific and enterprise environments.",
    "Experience working with production systems, leading and refactoring solutions that optimize execution times, reduce operational load, and improve maintainability, including the integration and consumption of GraphQL APIs.",
    "Comfortable working with backend stacks based on Python (FastAPI, Biopython, Pandas) and Java (Spring Boot), in collaboration with multidisciplinary teams.",
  ],
  experience: [
    {
      org: "Programa de Genómica Computacional, UNAM",
      role: "Software Engineer / Backend & Data Engineer on the RegulonDB project",
      period: "2021 — 2025",
      bullets: [
        "Design and maintenance of Python-based ETL pipelines for the integration of genomic data from multiple scientific sources into internal databases and specialized datamarts.",
        "Development of the HT ETL, a high-performance pipeline for high-throughput datasets, optimized to process 8.5 million gene expression records, reducing execution time from 14 hours to approximately 40 minutes.",
        "Development of automated biological data extraction tools from systems such as EcoCyc, transforming them into structured formats for analysis and publication.",
        "Collaboration on backend services and APIs for genomic data queries, integrated with frontend applications through GraphQL.",
        "Design of multigenomic data models oriented toward efficient querying in backend systems and web services.",
        "Refactoring of a legacy project in Perl (Gensor Units), migrating its logic to Python and improving maintainability, integration, and data flow consistency.",
        "Automation of the complete backend data workflow, reducing a manual process from 2–3 days to automated executions of approximately 8 hours, with minimal human intervention.",
        "Automation of the data release generation process, including validation, versioning, dump generation, and reproducible packaging.",
        "Integration of multiple ETL modules into a reproducible, versioned data workflow, used across different RegulonDB releases.",
        "Maintenance and refactoring of legacy systems, applying design principles and improving code maintainability.",
      ],
    },
  ],
  education: [
    {
      title: "B.Eng. in Computer Systems Engineering",
      place: "Tecnológico Nacional de México — Campus Zacatepec",
      period: "2015 — 2021",
    },
    {
      title: "Course: Introduction to MongoDB",
      place: "University Software & Databases Collaboration Network (UNAM)",
      period: "May — June 2023",
    },
  ],
  skills: [
    { label: "Python", value: "Backend development, FastAPI, ETL pipelines, Data processing, Biopython" },
    { label: "Java", value: "Backend, Spring Boot, Maintenance and service development" },
    { label: "Programming", value: "Python, Java, C#, C++" },
    { label: "Databases", value: "MongoDB, PostgreSQL, OracleDB, SQLite, MySQL" },
    { label: "DevOps & tools", value: "Docker, Linux, Bash scripting, Git, Automation, Snakemake" },
    { label: "Operating systems", value: "Linux, macOS, Windows" },
    { label: "Languages", value: "Spanish (native), English (B2)" },
  ],
  competencies: [
    "Software architecture", "SOLID principles", "Performance optimization", "Log analysis", "Process diagramming", "Design patterns"
  ],
  soft_skills: [
    "Structured thinking", "Attention to detail", "Problem solving", "Collaboration", "Continuous learning", "Technical ownership"
  ]
};