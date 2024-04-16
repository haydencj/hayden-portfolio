import { Link } from '@remix-run/react';

export default function Experience() {
  return (
    <section className="text-licorice py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="container w-fit">
            <h2 className="text-3xl font-bold mb-4">EDU</h2>
            <div className="flex items-center bg-snow shadow-lg border-2 border-black rounded-xl p-3 mb-4">
              <Link to="https://www.linkedin.com/school/university-of-texas-at-arlington/">
                <img
                  src="/icons/uta_logo.jpeg"
                  alt="Hayden Johnson"
                  className="w-16 h-16 rounded-full mr-3 mb-6 sm:mb-0 transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div>
                <p className="text-lg font-bold">
                  The University of Texas at Arlington
                </p>
                <p>Bachelor of Science in Computer Science</p>
                <p>August 2021 - May 2025</p>
              </div>
            </div>
            <div className="flex items-center bg-snow shadow-lg border-2 border-black rounded-xl p-3 mb-4">
              <Link to="https://www.linkedin.com/school/navarro-college/">
                <img
                  src="/icons/navarro_logo.png"
                  alt="Hayden Johnson"
                  className="w-16 h-16 rounded-full mr-3 mb-6 sm:mb-0 transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div>
                <p className="text-lg font-bold">Navarro College</p>
                <p>Associate of Science</p>
                <p>August 2017 - December 2019</p>
              </div>
            </div>
          </div>
          <div className="container w-fit">
            <h2 className="text-3xl font-bold mb-4">WORK</h2>
            <div className="flex items-center bg-snow shadow-lg border-2 border-black rounded-xl p-3 mb-4">
              <Link to="https://www.linkedin.com/company/oncor-electric-delivery/">
                <img
                  src="/icons/oncor_logo.jpeg"
                  alt="Hayden Johnson"
                  className="w-16 h-16 rounded-full mr-3 mb-6 sm:mb-0 transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div>
                <p className="text-lg font-bold">Web Developer</p>
                <p>Oncor Electric Delivery | Dallas, TX</p>
                <p>April 2024 - Present</p>
              </div>
            </div>
            <div className="flex items-center bg-snow shadow-lg border-2 border-black rounded-xl p-3 mb-4">
              <Link to="https://www.linkedin.com/company/hennge/">
                <img
                  src="/icons/hennge_logo.jpeg"
                  alt="Hayden Johnson"
                  className="w-16 h-16 rounded-full mr-3 mb-6 sm:mb-0 transition-transform duration-300 hover:scale-110"
                />
              </Link>

              <div>
                <p className="text-lg font-bold">Software Engineer Intern</p>
                <p>HENNGE Inc. | Tokyo, Japan</p>
                <p>January 2024 - February 2024</p>
              </div>
            </div>
            <div className="flex items-center bg-snow shadow-lg border-2 border-black rounded-xl p-3 mb-4">
              <Link to="https://www.linkedin.com/company/oncor-electric-delivery/">
                <img
                  src="/icons/oncor_logo.jpeg"
                  alt="Hayden Johnson"
                  className="w-16 h-16 rounded-full mr-3 mb-6 sm:mb-0 transition-transform duration-300 hover:scale-110"
                />
              </Link>

              <div>
                <p className="text-lg font-bold">
                  Customer Data Analytics Intern
                </p>
                <p>Oncor Electric Delivery | Dallas, TX</p>
                <p>June 2023 - August 2023</p>
              </div>
            </div>
            <div className="flex items-center bg-snow shadow-lg border-2 border-black rounded-xl p-3">
              <Link to="https://www.linkedin.com/company/oncor-electric-delivery/">
                <img
                  src="/icons/oncor_logo.jpeg"
                  alt="Hayden Johnson"
                  className="w-16 h-16 rounded-full mr-3 mb-6 sm:mb-0 transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div>
                <p className="text-lg font-bold">AMS Data Analytics Intern</p>
                <p>Oncor Electric Delivery | Dallas, TX</p>
                <p>June 2022 - August 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
