import { Card } from "./ui/card";

export function About() {
  const experiences = [
    {
      company: "MassMutual",
      role: "Senior Software Engineer",
      period: "Feb 2024 - Present",
      description:
        "Rebuild an entire solution on cloud infrastructure using microservices and a serverless approach. Develop an Identity and Access Management (IAM) module from scratch, implement OIDC and OAuth between Auth0 and Okta, define an ABAC evaluation system using OPA's rego expressions and ensure partial evaluaton capabilities.",
    },
    {
      company: "Levi9",
      role: "Software Developer Engineer",
      period: "Jul 2021 - Jan 2024",
      description:
        "Develop and maintain AWS infrastructure using Serverless Framework, write clean code and think about implementations to serve customer needs.",
    },
    {
      company: "Technical University of Iasi 'Gh.Ascahi'",
      role: "BSc Computer Science",
      period: "2018 - 2022",
      description:
        "Learned about programming, data structures and algorithms, design patterns, machine learning, computer language structure, web & mobile programming.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate software engineer with 5+ years of experience
                building web applications and distributed systems. I love
                turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding, you can find me contributing to open source
                projects, reading about different things, exploring the outdoors
                or playing around with electronics, soldering parts and having
                fun.
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
                    <h4 className="text-sm text-muted-foreground">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="mb-2">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
