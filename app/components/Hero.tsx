export default function Hero() {
    return (
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Hayden Johnson</h1>
          <p className="text-xl mb-8">Software Engineer | Data Analyst</p>
          <p className="text-lg mb-8">
            A passionate computer science student with experience in full-stack development, data analytics, and web automation.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Projects
            </button>
            <a href="public/downloads/Hayden-Johnson-Resume.pdf" download className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <img src="/icons/document.svg" alt="Resume Icon" className="w-6 h-6" />
            <span>Resume</span>
          </a>

          </div>
        </div>
      </section>
    );
  }