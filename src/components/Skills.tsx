import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "IAM",
      skills: ["OPA", "Auth0", "Okta", "OIDC", "OAuth", "SAML"],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "GraphQL APIs",
        "Microservices",
        "Java",
        "C#",
      ],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "Kafka",
        "CI/CD",
        "GitHub Actions",
        "Gitlab Pipelines",
        "Terraform",
      ],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Vitest"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
