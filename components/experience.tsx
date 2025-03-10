export default function Experience() {
    const experiences = [
      {
        company: "CalTeach",
        position: "Student Intern",
        period: "2025 - Present",
        description:
          "Taught fundamental math concepts to elementary students, fostering problem-solving skills.\n" + 
          "Designed interactive lessons and activities to make learning math accessible for students.\n" +
          "Provided individualized support for students to build arithmetic and logical skills.",
      },
      {
        company: "AI Safety @ UCLA",
        position: "AI Safety Fellow",
        period: "2025",
        description:
          "Researched ethical and societal implications of AI and prospective AI brinkmanship. Explored strategies for leveraging AI through policy development, and ethical considerations. Advocated for ethical deployment and regulation through articles and word of mouth.",
      },
      {
        company: "CoLab Commons",
        position: "Tech Counselor",
        period: "2022",
        description:
          "Instructed 3D printing, teaching design, prototyping, and additive manufacturing. Taught rendering techniques, and software development while guiding students in visualizing models. Coached fencing, improving students' technique, strategy, and performance.",
      },
    ]
  
    const education = [
      {
        institution: "University of California: Los Angeles",
        degree: "Bachelor of Science: Computer Science",
        period: "2022 - 2026",
      },
      {
        institution: "San Dieguito High School Academy",
        degree: "High School Diploma",
        period: "2018 - 2022",
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
  