export default function HighSchoolArchive() {
    const achievements = [
      {
        title: "Science Fair Winner",
        year: "2017",
        description: "First place in the regional science fair for innovative renewable energy project",
      },
      {
        title: "Debate Team Captain",
        year: "2016-2018",
        description: "Led the debate team to state finals two years in a row",
      },
      {
        title: "Programming Club Founder",
        year: "2017",
        description: "Founded and led the school's first programming club with over 25 members",
      },
      {
        title: "Honor Roll",
        year: "2015-2018",
        description: "Maintained a GPA of 3.9 or higher throughout high school",
      },
    ]
  
    const projects = [
      {
        title: "Interactive School Map",
        class: "Computer Science",
        description: "Developed an interactive map of the school campus to help new students navigate",
      },
      {
        title: "Environmental Impact Study",
        class: "Environmental Science",
        description: "Conducted a study on the environmental impact of the school's waste management system",
      },
      {
        title: "Literary Magazine",
        class: "English",
        description: "Served as editor for the school's literary magazine, curating student submissions",
      },
    ]
  
    const activities = [
      {
        title: "Basketball Team",
        years: "2015-2018",
        description: "Varsity player for three years, team captain in senior year",
      },
      {
        title: "Student Government",
        years: "2016-2018",
        description: "Class representative for two years, organized multiple school events",
      },
      {
        title: "Volunteer Work",
        years: "2015-2018",
        description: "Over 200 hours of community service at local food bank and animal shelter",
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
            <h3 className="text-lg font-bold mb-4">Notable Projects</h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border border-[#808080] p-3 bg-white">
                  <h4 className="font-bold">{project.title}</h4>
                  <p className="text-sm italic">{project.class} Class</p>
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
                  src={`/placeholder.svg?height=150&width=200`}
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
  