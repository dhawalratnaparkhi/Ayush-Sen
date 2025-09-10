interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isPrimary: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: "Backend Developer",
    company: "Tech Company, Bengaluru",
    period: "2022 - Present",
    description: "Developed and maintained REST APIs using Java and Spring Boot. Optimized database queries and implemented microservices architecture. Collaborated with frontend teams to deliver scalable web applications.",
    technologies: ["Java", "Spring Boot", "MySQL", "AWS"],
    isPrimary: true
  },
  {
    title: "Junior Backend Developer",
    company: "Startup Company, Bengaluru", 
    period: "2021 - 2022",
    description: "Built RESTful APIs and worked on database design. Gained experience with Spring Boot framework and learned best practices for backend development. Participated in code reviews and agile development processes.",
    technologies: ["Java", "Spring Boot", "SQL Server"],
    isPrimary: false
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
