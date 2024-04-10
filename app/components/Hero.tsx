export default function Hero() {
  console.log('Rendering hero component');
  return (
    <section className="bg-cal_poly_green text-snow py-12 ">
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
          <div className="flex space-x-4">
            <a
              href="public/downloads/Hayden-Johnson-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between space-x-2 bg-redwood-500 hover:bg-redwood-400 font-bold mt-5 py-2 px-6 rounded"
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
