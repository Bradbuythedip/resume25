interface Skill {
  category: string;
  items: string;
}

const skills: Skill[] = [
  {
    category: "Mechanical Engineering",
    items: "New Product Introduction, 3D Printing, Rapid Prototyping, Process Optimization"
  },
  {
    category: "Design & CAD",
    items: "CSWA Certified, Creo, Windchill, AutoCAD, Advanced CAD Proficiency"
  },
  {
    category: "Manufacturing",
    items: "Process Optimization, Cost Reduction, Quality Control, ISO Standards"
  },
  {
    category: "Programming Languages",
    items: "Python, Rust, Java, Solidity"
  },
  {
    category: "Software Development",
    items: "Full-stack Development, Version Control (Git), CI/CD, Testing"
  },
  {
    category: "Web Technologies",
    items: "React, Node.js, RESTful APIs, Blockchain Development"
  },
  {
    category: "Project Management",
    items: "SCRUM, Agile, Six Sigma, Cross-functional Team Leadership"
  },
  {
    category: "Quality & Compliance",
    items: "IQ/OQ/PQ, ISO Standards, Testing Protocols, Documentation"
  }
];

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className="font-bold text-gray-800 mb-1">{skill.category}</div>
            <div className="text-gray-600">{skill.items}</div>
          </div>
        ))}
      </div>
    </section>
  )
}