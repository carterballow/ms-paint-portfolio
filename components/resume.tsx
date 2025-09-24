export default function Resume() {
    return (
        <div className="space-y-8">
            <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">Resume</h2>

            <div className="border-2 border-[#808080] p-6 bg-[#efefef]">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold">Carter Ballow</h1>
                    <a className="text-sm">Encinitas, CA • (760) 525-4955 • carterballow06@g.ucla.edu • carterballow.com • github.com/carterballow • linkedin.com/in/carterballow/</a>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EDUCATION</h2>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-bold">University of California, Los Angeles</p>
                            <p>Bachelor of Science in Math of Computation</p>
                        </div>
                        <p>June 2027</p>
                    </div>
                    <p className="text-sm mt-1">Major GPA: 4.00 | Cumulative GPA: 3.86</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EXPERIENCE</h2>
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <p className="font-bold">Area Manager Intern</p>
                            <p>June 2025 - Aug. 2025</p>
                        </div>
                        <p className="italic">Amazon, Rialto, CA</p>
                        <ul className="list-disc pl-5 mt-1 text-sm">
                            <li>Designed software for Amazon internal middle mile distribution (ie. fulfillment and sort centers).</li>
                            <li>Developed internal data analysis application in Python/Pandas to parse Amazon idle times on RedShift and send site wide automated blasts.</li>
                            <li>Wrote scripts to amend internal associates’ Android devices to display live idle time.</li>
                            <li>Created and rolled out a workflow to display canceled yard hostler moves from external to internal warehouse teams.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between">
                            <p className="font-bold">Research Intern</p>
                            <p>April 2025 - Current</p>
                        </div>
                        <p className="italic">Effective Altruism @ UCLA, Los Angeles, CA</p>
                        <ul className="list-disc pl-5 mt-1 text-sm">
                            <li>Explored the role of AI safety, global health, and existential risk through Effective Altruism’s core missions.</li>
                            <li>Gained a deeper understanding of ethical prioritization, learning to evaluate trade-offs of artificial intelligence.</li>
                            <li>Attended conventions and seminars to influence and be influenced by thousands of devoted EAs.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between">
                            <p className="font-bold">Teaching Assistant Intern</p>
                            <p>Jan. 2025 - Mar. 2025</p>
                        </div>
                        <p className="italic">CalTeach, Los Angeles, CA</p>
                        <ul className="list-disc pl-5 mt-1 text-sm">
                            <li>Taught mathematical concepts by providing targeted tutoring and facilitating student problem-solving in classrooms.</li>
                            <li>Collaborated with local teachers implementing lesson plans designed to enhance students’ quantitative skills.</li>
                            <li>Planned and executed countless lessons, and reviewed and gave constructive criticism to other instructors.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between">
                            <p className="font-bold">Research Intern</p>
                            <p>Jan. 2025 - Mar. 2025</p>
                        </div>
                        <p className="italic">AI Safety @ UCLA, Los Angeles, CA</p>
                        <ul className="list-disc pl-5 mt-1 text-sm">
                            <li>Conducted research on the risks of AI policy levers, and the role of AI in government.</li>
                            <li>Led research on deep learning and the impacts of it on the future of computer science and the world at large.</li>
                            <li>Created well researched timelines for artificial existential threat and power seeking tendencies using precedence and scale.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">SKILLS</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-bold">Languages:</p>
                            <p className="text-sm">Java, Python, C/C++, SQL (Postgres), JS/TS, HTML/CSS</p>
                        </div>
                        <div>
                            <p className="font-bold">Frameworks & Runtimes:</p>
                            <p className="text-sm">React, Next.js, Vue, Material-UI, Tailwind, FastAPI, Node.js</p>
                        </div>
                        <div>
                            <p className="font-bold">Developer Tools & IDEs:</p>
                            <p className="text-sm">Git, Docker, GitHub, VS Code, Visual Studio, PyCharm, Eclipse</p>
                        </div>
                        <div>
                            <p className="font-bold">Cloud & Infrastructure:</p>
                            <p className="text-sm">Google Cloud Platform, AWS Lambda, AWS EC2, CloudWatch, Vercel</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">PROJECTS</h2>

                    <div className="mb-2">
                        <p className="font-bold">Hot Takes | React, MongoDB, Node.js, Next.js, Google Gemini API, JavaScript, Tailwind</p>
                        <ul className="list-disc pl-5 mt-1 text-sm">
                            <li>Ranked 1st in Web category at annual UCLA hackathon Hack on the Hill.</li>
                            <li>Created a full-stack debate platform enabling users to engage in real-time discussions on controversial topics.</li>
                            <li>Leveraged Google’s Gemini API to provide AI-driven feedback on arguments, detecting 100+ types of logical fallacies.</li>
                        </ul>
                    </div>

                    <div className="mb-2">
                        <p className="font-bold">Ballow Fruit Co | HTML, TypeScript, React, Git, Redux, Tailwind, Postgres</p>
                         <ul className="list-disc pl-5 mt-1 text-sm">
                            <li>Architected and developed the website’s back-end, creating a secure system for taking online orders for my local non-profit.</li>
                            <li>Built and deployed a responsive, user-friendly front-end to effectively showcase the non-profit's mission and products.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}