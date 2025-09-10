import { User, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-[10%] w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-32 right-[15%] w-40 h-40 bg-gradient-to-br from-accent/25 to-primary/25 rounded-full animate-float blur-sm" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 left-[5%] w-20 h-20 bg-gradient-to-br from-primary/35 to-transparent rounded-full animate-float blur-sm" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bottom-1/4 left-[20%] w-16 h-16 bg-gradient-to-br from-accent/40 to-transparent rounded-full animate-float blur-sm" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/4 right-[25%] w-28 h-28 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-float blur-sm" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
