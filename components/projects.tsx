export default function Projects() {
    const projects = [
      {
        title: "Hot Takes",
        description: "A full-stack social media platform built using with React, Node, TypeScript, Tailwind, and MongoDB. Relevant for debaters or casual social media users looking to share their thoughts without censorship.",
        image: "/hothleft.jpg?height=150&width=250",
        technologies: ["React", "Node.js", "MongoB"],
      },
      {
        title: "Basic Portfolio",
        description: "First attempt at a personal portfolio website built using fundamental web technologies: HTML, CSS, and JavaScript. Features sections for my skills, projects, and contact information.",
        image: "/portfolio1.png?height=150&width=250",
        technologies: ["JavaScript", "HTML", "CSS"],
      },
      {
        title: "React Portfolio",
        description: "Built a portfolio website to learn how to incorporate React for better front end development and enhanced user interface and routes rather than one static page.",
        image: "/portfolio2.png?height=150&width=250",
        technologies: ["React", "JavaScript", "Figma"],
      },
      {
        title: "MS Paint Clone",
        description: "Created a portfolio using tailwind, typescript and vercel for deployment to clone MS Paint and showcase my accomplishments.",
        image: "/portfolio3.png?height=150&width=250",
        technologies: ["TypeScript", "Vercel", "Tailwind"],
      },
      {
        title: "La Hacks Project",
        description: "COMING SOON...",
        image: "/lahacks.png?height=150&width=250",
        technologies: ["tbd", "tbd", "tbd"],
      },
      {
        title: "Weather App",
        description: "COMING SOON...",
        image: "/weatherapp.png?height=150&width=250",
        technologies: ["tbd", "tbd", "some api"],
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
  
