export default function Experience() {
    const experiences = [
        {
            company: "Amazon",
            position: "Area Manager Intern",
            period: "Jun. 2025 - Aug. 2025",
            description:
                "Designed software for Amazon internal middle mile distribution (ie. fulfillment and sort centers).\n" +
                "Developed internal data analysis application in Python/Pandas to parse Amazon idle times on RedShift and send site wide automated blasts.\n" +
                "Wrote scripts to amend internal associates’ Android devices to display live idle time.",
        },
        {
            company: "Effective Altruism @ UCLA",
            position: "Research Intern",
            period: "Apr. 2025 - Current",
            description:
                "Explored the role of AI safety, global health, and existential risk through Effective Altruism’s core missions of utilitarianism, longtermism and altruism.\n" +
                "Gained a deeper understanding of ethical prioritization, learning to evaluate trade-offs of artificial intelligence.",
        },
        {
            company: "CalTeach",
            position: "Teaching Assistant Intern",
            period: "Jan. 2025 - Mar. 2025",
            description:
                "Taught mathematical concepts by providing targeted tutoring and facilitating student problem-solving in classrooms. Tutored over 100 students in over 5 elementary grades.\n" +
                "Collaborated with local teachers implementing lesson plans designed to enhance students’ quantitative skills.",
        },
        {
            company: "AI Safety @ UCLA",
            position: "Research Intern",
            period: "Jan. 2025 - Mar. 2025",
            description:
                "Conducted research on the risks of AI policy levers, and the role of AI in government.\n" +
                "Led research on deep learning and its impacts on the future of computer science and the world at large.",
        },
    ]

    const education = [
        {
            institution: "University of California, Los Angeles",
            degree: "Bachelor of Science: Math of Computation",
            period: "2024 - 2027",
        },
        {
            institution: "San Dieguito High School Academy",
            degree: "High School Diploma",
            period: "2020 - 2024",
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
                            <p className="mt-2 text-sm whitespace-pre-line">{exp.description}</p>
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