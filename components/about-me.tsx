export default function AboutMe() {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">About Me</h2>
  
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <div className="border-2 border-[#808080] p-2 bg-[#efefef]">
              <img src="/aboutme.jpg?height=300&width=300" alt="Profile" className="w-full border border-[#808080]" />
            </div>
          </div>
  
          <div className="w-full md:w-2/3 space-y-4">
            <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
              <h3 className="text-lg font-bold">Hello, I'm Carter!</h3>
              <p className="mt-2">
                I'm a passionate web developer with expertise in building modern, responsive, and user-friendly
                applications. With a strong foundation in both frontend and backend technologies, I enjoy creating
                seamless digital experiences. I'm also very passionate about LLMs and Public Policy and want to find
                ways to improve the management of technology in government.
              </p>
              <p className="mt-2">
                When I'm not coding, you can find me reading, watching jeopardy, playing Brawl Stars or Clash of Clans, eating greek yogurt, listening to music, being clumsy, starting passion projects and lurking around.
              </p>
            </div>
  
            <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
              <h3 className="text-lg font-bold">Skills</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <SkillBar skill="JavaScript" percentage={90} />
                <SkillBar skill="React" percentage={85} />
                <SkillBar skill="Node.js" percentage={100} />
                <SkillBar skill="HTML/CSS" percentage={100} />
                <SkillBar skill="TypeScript" percentage={90} />
                <SkillBar skill="UI/UX Design" percentage={95} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
    return (
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>{skill}</span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full h-4 bg-white border border-[#808080]">
          <div className="h-full bg-[#000080]" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    )
  }
  