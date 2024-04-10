export default function About() {
  console.log('Rendering About component');
  return (
    <section className="py-6 text-licorice">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl text-snow font-bold mb-4">ABOUT</h2>
            <p className="text-lg bg-snow rounded-xl p-3 mb-4">
              I have experience working with a wide range of technologies,
              including React, Node.js, Python, AWS cloud services, and both SQL
              and NoSQL databases. I enjoy solving complex problems and creating
              efficient and scalable solutions.
            </p>
            <p className="text-lg bg-snow rounded-xl p-3 mb-4">
              Recently I completed a Software Engineer internship in Tokyo,
              Japan, where I gained valuable experience with AWS technologies
              including DynamoDB, S3, and EC2. Currently, I'm working as a
              part-time web developer in Dallas, Texas, while pursuing my
              studies.
            </p>
            <p className="text-lg bg-snow rounded-xl p-3">
              Outside of programming, I enjoy reading sci-fi and fantasy novels,
              gaming, and spending quality time with friends and my pets.
            </p>
          </div>
          <div>
            <h3 className="text-3xl text-snow font-bold mb-4">SKILLS</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <li className="bg-snow rounded-xl p-3">JavaScript</li>
              <li className="bg-snow rounded-xl p-3">React</li>
              <li className="bg-snow rounded-xl p-3">Node.js</li>
              <li className="bg-snow rounded-xl p-3">Python</li>
              <li className="bg-snow rounded-xl p-3">C/C++</li>
              <li className="bg-snow rounded-xl p-3">MySQL</li>
              <li className="bg-snow rounded-xl p-3">MongoDB</li>
              <li className="bg-snow rounded-xl p-3">DynamoDB</li>
              <li className="bg-snow rounded-xl p-3">Git</li>
              <li className="bg-snow rounded-xl p-3">AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
