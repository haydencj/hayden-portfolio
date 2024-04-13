import { Link } from '@remix-run/react';

export default function Hero() {
  console.log('Rendering hero component');
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-8">
          <img
            src="/images/pfp.jpeg"
            alt="Hayden Johnson"
            className="w-32 h-32 rounded-full mb-6 sm:mb-0"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-2">HAYDEN JOHNSON</h1>
            <p className="text-xl">Software Engineer, Data Scientist</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-6 my-3">
          <a
            href="/downloads/Hayden-Johnson-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/document.svg"
              alt="Resume Icon"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://github.com/haydencj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/github.svg"
              alt="Github Icon"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/haydencj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/linkedin.svg"
              alt="Linkedin Icon"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
