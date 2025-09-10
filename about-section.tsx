import { Code, Database, Inbox, Phone, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Back End Developer with industry experience building web applications. I specialize in Java and Spring Boot, and I have professional experience working with RESTful APIs, JPA/Hibernate, and SQL Server / MySQL. I focus on reliable server-side architecture and performance tuning.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <Code className="text-primary mr-3 h-5 w-5" />
                    <h3 className="font-semibold">Backend Expertise</h3>
                  </div>
                  <p className="text-muted-foreground">Specialized in Java, Spring Boot, and microservices architecture</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
