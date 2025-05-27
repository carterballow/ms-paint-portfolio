export default function Resume() {
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">Resume</h2>
  
        <div className="border-2 border-[#808080] p-6 bg-[#efefef]">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Carter Ballo</h1>
            <a className="text-sm">Encinitas, CA • (760) 525-4955 • carterballow06@g.ucla.edu • carterballow.com • github.com/carterballow • linkedin.com/in/carterballow/</a>
          </div>
  
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EDUCATION</h2>
            <div className="flex justify-between">
              <div>
                <p className="font-bold">University of California, Los Angeles</p>
                <p>Bachelor of Science in Computer Science</p>
              </div>
              <p>June 2028</p>
            </div>
            <p className="text-sm mt-1">GPA: 3.83/4.0</>
          </div>
  
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EXPERIENCE</h2>

            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-bold">Student Intern</p>
                <p>March 2025 - May 2025</p>
              </div>
              <p className="italic">CalTeach, Los Angeles, CA</p>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Taught fundamental math concepts to elementary students, fostering problem-solving skills.</li>
                <li>Designed interactive lessons and activities to make learning math accessible for students.</li>
                <li>Provided individualized support for students to build arithmetic and logical skills.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-bold">AI Safety Fellow</p>
                <p>January 2025 - March 2025</p>
              </div>
              <p className="italic">AI Safety @ UCLA, Los Angeles</p>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Researched ethical and societal implications of AI and prospective AI brinkmanship.</li>
                <li>Explored strategies for leveraging AI through policy development, and ethical considerations.</li>
                <li>Advocated for ethical deployment and regulation through articles and word of mouth.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <p className="font-bold">Tech Counselor</p>
                <p>May 2022 - July 2022</p>
              </div>
              <p className="italic">CoLab Commons, Encinitas, California</p>
              <ul className="list-disc pl-5 mt-1 text-sm">
                <li>Instructed 3D printing, teaching design, prototyping, and additive manufacturing.</li>
                <li>Taught rendering techniques, and software development while guiding students in visualizing models.</li>
                <li>Coached fencing, improving students' technique, strategy, and performance.</li>
              </ul>
            </div>
          </div>
  
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">SKILLS</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Programming Languages:</p>
                <p className="text-sm">JavaScript, TypeScript, Python, Java, HTML/CSS, C++</p>
              </div>
              <div>
                <p className="font-bold">Frameworks & Libraries:</p>
                <p className="text-sm">React, Node.js, Vite, Next.js, TailwindCSS</p>
              </div>
              <div>
                <p className="font-bold">Tools & Technologies:</p>
                <p className="text-sm">Git, Docker, Vercel, MongoDB, SQL, GitHub</p>
              </div>
              <div>
                <p className="font-bold">Soft Skills:</p>
                <p className="text-sm">Problem Solving, Work Ethic, Communication, Leadership</p>
              </div>
            </div>
          </div>
  
          <div>
            <h2 className="text-lg font-bold border-b border-[#808080] mb-2">PROJECTS</h2>
  
            <div className="mb-2">
              <p className="font-bold">Hot Takes</p>
              <p className="text-sm">A full-stack social media platform for debaters using TypeScript, React, Tailwind, and MongoDB</p>
              <p className="text-sm">Won #1 Website at UCLA's competitive annual Hackathon: Hack on the Hill XII</p>
            </div>
  
            <div className="mb-2">
              <p className="font-bold">Weather Application</p>
              <p className="text-sm">Coming soon... weather application using OpenWeather API</p>
            </div>

            <div className="mb-2">
              <p className="font-bold">Basic Portfolio</p>
              <p className="text-sm">Basic HTML, CSS, JS Website hosted by GitHub Pages</p>
            </div>

            <div className="mb-2">
              <p className="font-bold">React Portfolio</p>
              <p className="text-sm">React/Vite Website hosted by GH Pages but using routing</p>
            </div>

            <div className="mb-2">
              <p className="font-bold">MS Paint Clone Portfolio</p>
              <p className="text-sm">MS Paint clone using Tailwind, TS, and HTML hosted by Vercel</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
