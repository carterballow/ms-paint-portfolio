export default function Experience() {
    const experiences = [
      {
        company: "Tech Innovations Inc.",
        position: "Senior Frontend Developer",
        period: "2020 - Present",
        description:
          "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
      },
      {
        company: "Digital Solutions LLC",
        position: "Web Developer",
        period: "2018 - 2020",
        description:
          "Developed and maintained multiple client websites. Collaborated with designers to implement responsive designs and interactive features.",
      },
      {
        company: "StartUp Ventures",
        position: "Junior Developer",
        period: "2016 - 2018",
        description:
          "Assisted in building web applications from scratch. Gained experience in full-stack development and agile methodologies.",
      },
    ]
  
    const education = [
      {
        institution: "Tech University",
        degree: "Master of Computer Science",
        period: "2014 - 2016",
      },
      {
        institution: "State College",
        degree: "Bachelor of Science in Web Development",
        period: "2010 - 2014",
      },
    ]
  
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">Experience</h2>
  
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Work History</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="border-2 border-[#808080] p-4 bg-[#efefef]">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h4 className="font-bold">{exp.position}</h4>
                  <span className="text-sm">{exp.period}</span>
                </div>
                <div className="text-sm font-medium mt-1">{exp.company}</div>
                <p className="mt-2 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-2 border-[#808080] p-4 bg-[#efefef]">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h4 className="font-bold">{edu.degree}</h4>
                  <span className="text-sm">{edu.period}</span>
                </div>
                <div className="text-sm font-medium mt-1">{edu.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  