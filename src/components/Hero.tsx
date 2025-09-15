import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="/alex.jpg"
            alt="Alexandru Lupusoru"
            className="mx-auto mb-8 w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
          />

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8">
            Hi, I'm <span className="text-primary">Alex</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Full-Stack Software Engineer passionate about building scalable
            applications and solving complex problems with clean, efficient
            code.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-3 text-lg px-8 py-6"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Engineer_Alexandru_Lupusoru.pdf";
                link.download = "Engineer Alexandru Lupusoru.pdf";
                link.click();
              }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/alexandervonwl"
              className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandru-lupusoru/"
              className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:me@alexprodev.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
