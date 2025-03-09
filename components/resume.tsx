export default function Resume() {
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">Resume</h2>
  
        <div className="border-2 border-[#808080] p-6 bg-[#efefef]">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Carter Ballow</h1>
            <p className="text-sm">San Francisco, CA • (123) 456-7890 • carter.ballow@example.com</p>
            <p className="text-sm">www.carterballow.com • github.com/carterballow • linkedin.com/in/carterballow</p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EDUCATION</h2>
            <div className="flex justify-between">
              <div>
                <p className="font-bold">University of Technology</p>
                <p>Bachelor of Science in Computer Science</p>
              </div>
              <p>2018 - 2022</p>
            </div>
            <p className="text-sm mt-1">GPA: 3.8/4.0</p>
            <p className="text-sm">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EXPERIENCE</h2>
  
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-bold">Software Engineer</p>
                <p>June 2022 - Present</p>
              </div>
              <p className="italic">Tech Innovations Inc., San Francisco, CA</p>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                <li>Implemented responsive designs and improved website performance by 40%</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
              </ul>
            </div>
  
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-bold">Web Development Intern</p>
                <p>May 2021 - August 2021</p>
              </div>
              <p className="italic">Digital Solutions LLC, San Jose, CA</p>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Assisted in developing client websites using HTML, CSS, and JavaScript</li>
                <li>Created responsive layouts and implemented interactive features</li>
                <li>Participated in code reviews and team meetings</li>
              </ul>
            </div>
          </div>
  
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">SKILLS</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Programming Languages:</p>
                <p className="text-sm">JavaScript, TypeScript, Python, Java, HTML/CSS</p>
              </div>
              <div>
                <p className="font-bold">Frameworks & Libraries:</p>
                <p className="text-sm">React, Node.js, Express, Next.js, TailwindCSS</p>
              </div>
              <div>
                <p className="font-bold">Tools & Technologies:</p>
                <p className="text-sm">Git, Docker, AWS, MongoDB, PostgreSQL</p>
              </div>
              <div>
                <p className="font-bold">Soft Skills:</p>
                <p className="text-sm">Problem Solving, Team Collaboration, Communication</p>
              </div>
            </div>
          </div>
  
          <div>
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">PROJECTS</h2>
  
            <div className="mb-2">
              <p className="font-bold">E-commerce Platform</p>
              <p className="text-sm">A full-stack e-commerce solution with React, Node.js, and MongoDB</p>
            </div>
  
            <div className="mb-2">
              <p className="font-bold">Weather Application</p>
              <p className="text-sm">Real-time weather application using OpenWeather API</p>
            </div>
  
            <div>
              <p className="font-bold">Task Management System</p>
              <p className="text-sm">Collaborative task management tool with real-time updates</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  