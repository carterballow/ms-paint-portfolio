export default function HighSchoolArchive() {
    const achievements = [
      {
        title: "California Boys and Girls State Delegate",
        year: "2023",
        description: "Federalist Campaign Committee Manager and City Treasurer.",
      },
      {
        title: "Debate Team Secretary",
        year: "2023-2023",
        description: "Nationals competitor and team secratary, creating lesson plans and teaching novices.",
      },
      {
        title: "Pokemon Club & Pickleball Club Founder",
        year: "2023-2024",
        description: "Founded and led the school's first Pokemon and Pickleball club with over 150 members combined.",
      },
      {
        title: "Silver Key Scholastic Artist",
        year: "2022",
        description: "Won the Scholastic Art and Writing Award for submission of 'Burried in a book', an image I took.",
      },
    ]
  
    const projects = [
      {
        title: "Grossmont Sharp Scholarship Recipient",
        class: "$5,000",
        description: "Merit scholarship awarded through academic excellence and community involvement.",
      },
      {
        title: "Joe W. Chavez Scholarship Recipient",
        class: "$1,000",
        description: "Scholarship for academic dedication and leadership from highly selective process.",
      },
      {
        title: "HSF Scholarship Recipient",
        class: "TBD",
        description: "Largest scholarship organization for Latinx students in the United States. 8% selection rate",
      },
    ]
  
    const activities = [
      {
        title: "Basketball Team",
        years: "2020-2022",
        description: "Varsity player for three years, team captain in senior year.",
      },
      {
        title: "Track/XC",
        years: "2022-2024",
        description: "Varsity runner for both years, and league qualifier in Track and Field.",
      },
      {
        title: "Miracle League",
        years: "2018-2024",
        description: "Over 200 hours of community service at local accessible baseball association.",
      },
      {
        title: "Ballow Fruit Company",
        years: "2015-2024",
        description: "Founded non-profit serving the food insecure in the greater San Diego area.",
      },
      {
        title: "Encinitas Youth Commission",
        years: "2022-2024",
        description: "Chairman of the Encinitas Youth Commission serving over 60,000 citizens",
      },
      {
        title: "Tech Tutor",
        years: "2022",
        description: "Taught rendering techniques, and software development to elementary schoolers.",
      },
    ]
  
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">High School Archive</h2>
  
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
            <h3 className="text-lg font-bold mb-4">Academic Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="border border-[#808080] p-3 bg-white">
                  <div className="flex justify-between">
                    <h4 className="font-bold">{achievement.title}</h4>
                    <span className="text-sm">{achievement.year}</span>
                  </div>
                  <p className="text-sm mt-1">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
            <h3 className="text-lg font-bold mb-4">Scholarships</h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border border-[#808080] p-3 bg-white">
                  <h4 className="font-bold">{project.title}</h4>
                  <p className="text-sm italic">{project.class}</p>
                  <p className="text-sm mt-1">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
          <h3 className="text-lg font-bold mb-4">Extracurricular Activities</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {activities.map((activity, index) => (
              <div key={index} className="border border-[#808080] p-3 bg-white">
                <h4 className="font-bold">{activity.title}</h4>
                <p className="text-sm">{activity.years}</p>
                <p className="text-sm mt-1">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
          <h3 className="text-lg font-bold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border border-[#808080] p-1 bg-white">
                <img
                  src={`/imgs${item}.JPG`}
                  alt={`High School Memory ${item}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  