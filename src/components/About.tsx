import { Card } from "./ui/card";

export function About() {
  const experiences = [
    {
      company: "Tech Corp",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Leading development of microservices architecture, mentoring junior developers, and implementing CI/CD pipelines."
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2020 - 2022", 
      description: "Built scalable web applications using React, Node.js, and AWS. Reduced page load times by 40%."
    },
    {
      company: "Digital Agency",
      role: "Frontend Developer",
      period: "2019 - 2020",
      description: "Developed responsive websites and web applications for clients across various industries."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate software engineer with 5+ years of experience building 
                web applications and distributed systems. I love turning complex problems 
                into simple, beautiful solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding, you can find me contributing to open source projects, 
                reading about the latest tech trends, or exploring the outdoors.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Lifelong Learner
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl mb-4">Experience</h3>
              {experiences.map((exp, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm text-muted-foreground">{exp.role}</h4>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <h4 className="mb-2">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}