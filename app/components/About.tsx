export default function About() {
    console.log('Rendering About component');
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              I have experience working with a wide range of technologies,
              including React, Node.js, Python, AWS cloud services, and both SQL and NoSQL databases.
              I enjoy solving complex problems and creating efficient
              and scalable solutions.
            </p>
            <p className="text-lg mb-4">
              Recently I completed a Software Engineer internship in Tokyo, Japan, where I gained 
              valuable experience with AWS technologies including DynamoDB, S3, and EC2. Currently, 
              I'm working as a part-time web developer in Dallas, Texas, while pursuing my studies.
            </p>
            <p className="text-lg">
              Outside of programming, I enjoy reading sci-fi and fantasy novels, gaming, and 
              spending quality time with friends and my pets.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>C/C++</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>DynamoDB</li>
              <li>Git</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
