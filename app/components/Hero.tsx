export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <img
            src="/images/pfp.jpeg"
            alt="Hayden Johnson"
            className="w-32 h-32 rounded-full mr-6"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">Hayden Johnson</h1>
            <p className="text-xl">Software Engineer | Data Scientist</p>
          </div>
          <p className="text-lg mb-8">
            A passionate computer science student with experience in full-stack
            development, data analytics, and web automation.
          </p>
          <div className="flex space-x-4">
            <a
              href="/projects"
              className="flex items-center justify-between space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            >
              <span>Projects</span>
              <img
                src="/icons/keyboard.svg"
                alt="Projects Icon"
                className="w-5 h-5"
              />
            </a>
            <a
              href="public/downloads/Hayden-Johnson-Resume.pdf"
              download
              className="flex items-center justify-between space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            >
              <span>Resume</span>
              <img
                src="/icons/document.svg"
                alt="Resume Icon"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
