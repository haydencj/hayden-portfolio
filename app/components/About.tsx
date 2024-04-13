export default function About() {
  console.log('Rendering About component');
  return (
    <section className="text-licorice">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">ABOUT</h2>
            <p className="text-lg bg-snow shadow-xl border-2 border-black rounded-xl p-3 mb-4">
              I have experience working with a wide range of technologies,
              including React, Node.js, Python, AWS cloud services, and both SQL
              and NoSQL databases. I enjoy solving complex problems and creating
              efficient and scalable solutions.
            </p>
            <p className="text-lg bg-snow shadow-xl border-2 border-black rounded-xl p-3 mb-4">
              Recently I completed a Software Engineer internship in Tokyo,
              Japan, where I gained valuable experience with AWS technologies
              including DynamoDB, S3, and EC2. Currently, I'm working as a
              part-time web developer in Dallas, Texas, while pursuing my
              studies.
            </p>
            <p className="text-lg bg-snow shadow-xl border-2 border-black rounded-xl p-3">
              Outside of programming, I enjoy reading sci-fi and fantasy novels,
              gaming, and spending quality time with friends and my pets.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">SKILLS</h3>
            <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-fit">
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>JavaScript</span>
                <img
                  src="/icons/js.svg"
                  alt="Javascript logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>TypeScript</span>
                <img
                  src="/icons/ts.svg"
                  alt="Typescript logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>Python</span>
                <img
                  src="/icons/python.svg"
                  alt="Python logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>Java</span>
                <img
                  src="/icons/java.svg"
                  alt="Java logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>C/C++</span>
                <img
                  src="/icons/c.svg"
                  alt="C/C++ logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>React</span>
                <img
                  src="/icons/react.svg"
                  alt="React logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>Next.js</span>
                <img
                  src="/icons/next.svg"
                  alt="Next.js logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>Tailwind</span>
                <img
                  src="/icons/tailwind.svg"
                  alt="Tailwind logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>MySQL</span>
                <img
                  src="/icons/mysql.svg"
                  alt="MySQL logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>MongoDB</span>
                <img
                  src="/icons/mongodb.svg"
                  alt="MongoDB logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>DynamoDB</span>
                <img
                  src="/icons/dynamodb.png"
                  alt="DynamoDB logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>Git</span>
                <img
                  src="/icons/git.svg"
                  alt="Git logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>AWS</span>
                <img
                  src="/icons/aws.svg"
                  alt="AWS logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>Docker</span>
                <img
                  src="/icons/docker.svg"
                  alt="Docker logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li className="bg-snow shadow-md border-2 border-black rounded-xl p-3 flex justify-center items-center">
                <span>Terraform</span>
                <img
                  src="/icons/terraform.svg"
                  alt="Terraform logo"
                  className="w-7 h-7 ml-2 transition-transform duration-300 hover:scale-110"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
