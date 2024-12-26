interface Job {
  company: string;
  title: string;
  period: string;
  achievements: string[];
}

const jobs: Job[] = [
  {
    company: "Nuvera Fuel Cells",
    title: "Electromechanical Design Engineer",
    period: "2023 – 2024",
    achievements: [
      "Led research on insulation resistance and Dielectric Withstand Voltage (DWV), improving company safety metrics and understanding of environmental effects on fuel cells.",
      "Pioneered novel methodologies for high-voltage compliance testing, reducing field failures.",
      "Developed detailed work instructions and process maps, ensuring compliance with ISO standards.",
      "Collaborated between production and mechanical teams to optimize assembly processes.",
      "Conducted IQ/OQ/PQ protocols for new equipment installations and process validations."
    ]
  },
  {
    company: "Aved Electronics",
    title: "Electromechanical Engineer",
    period: "2022 – 2023",
    achievements: [
      "Spearheaded the design and deployment of automation, robotics, and vision inspection systems, reducing manual labor costs by over $100K annually.",
      "Designed and refactored assembly jigs and fixtures, enhancing production efficiency and reducing assembly time.",
      "Created and updated work instructions and mechanical drawings for the production team.",
      "Acted as liaison between production and mechanical engineering teams, fostering effective communication.",
      "Implemented Six Sigma methodologies to identify and eliminate process inefficiencies."
    ]
  },
  {
    company: "Desktop Metal",
    title: "Contract Engineer",
    period: "2021 – 2022",
    achievements: [
      "Collaborated with cross-functional teams to refine additive manufacturing processes, reducing prototype development time and costs.",
      "Assisted in optimizing manufacturing workflows, contributing to overall production efficiency improvements.",
      "Interpreted mechanical drawings and provided feedback for design enhancements.",
      "Developed automated solutions for manufacturing process optimization and quality control.",
      "Implemented data-driven approaches to improve production efficiency and reduce waste."
    ]
  },
  {
    company: "ASM NEXX",
    title: "Mechanical Engineer III",
    period: "2019 – 2020",
    achievements: [
      "Managed the additive manufacturing lab, leading to significant cost reductions in complex geometry parts production.",
      "Streamlined mechanical design processes and scaled 3D-printed parts for the P500 platform.",
      "Developed process maps to improve manufacturing workflows and reduce production time.",
      "Led implementation of automation solutions for manufacturing processes.",
      "Collaborated with cross-functional teams to optimize production efficiency."
    ]
  },
  {
    company: "Amphenol TCS",
    title: "Product Engineer",
    period: "2013 – 2018",
    achievements: [
      "Led end-to-end product development from concept to high-volume production on Xcede, Xcede+, and X2 high-speed differential pair connector platforms.",
      "Designed and improved stamping presses, two-shot injection molds, and pneumatic presses, increasing production efficiency.",
      "Created detailed mechanical drawings and work instructions for manufacturing teams.",
      "Traveled extensively to optimize production scalability in cost-effective regions.",
      "Conducted rigorous qualification and compliance testing (IQ/OQ/PQ) to ensure adherence to industry standards and ISO regulations."
    ]
  }
];

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="section-title">Professional Experience</h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="hover:bg-gray-50 p-4 rounded-lg transition-colors">
            <div className="job-header">
              <div>
                <span className="company">{job.company}</span>,{" "}
                <span className="job-title">{job.title}</span>
              </div>
              <div className="period">{job.period}</div>
            </div>
            <ul className="achievements">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}