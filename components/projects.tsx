export default function Projects() {
    const projects = [
      {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
        image: "/placeholder.svg?height=150&width=250",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
      },
      {
        title: "Weather App",
        description: "Real-time weather application using OpenWeather API",
        image: "/placeholder.svg?height=150&width=250",
        technologies: ["JavaScript", "HTML/CSS", "REST API"],
      },
      {
        title: "Task Management System",
        description: "Collaborative task management tool with real-time updates",
        image: "/placeholder.svg?height=150&width=250",
        technologies: ["React", "Firebase", "Material UI"],
      },
    ]
  
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">My Projects</h2>
  
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="border-2 border-[#808080] bg-[#efefef] p-4">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-40 object-cover border border-[#808080]"
              />
              <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
              <p className="mt-1 text-sm">{project.description}</p>
              <div className="mt-2">
                <h4 className="text-sm font-bold">Technologies:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs bg-[#c0c0c0] border border-[#808080]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  