export default function Experience() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <div className="mb-4">
                <p className="text-lg font-bold">The University of Texas at Arlington</p>
                <p className="text-gray-600">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600">August 2021 - May 2025</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <div className="mb-4">
                <p className="text-lg font-bold">Web Developer</p>
                <p className="text-gray-600">Oncor Electric Delivery | Dallas, TX</p>
                <p className="text-gray-600">April 2024 - Present</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold">Software Engineer Intern</p>
                <p className="text-gray-600">HENNGE Inc. | Tokyo, Japan</p>
                <p className="text-gray-600">January 2024 - February 2024</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold">Customer Data Analytics Intern</p>
                <p className="text-gray-600">Oncor Electric Delivery | Dallas, TX</p>
                <p className="text-gray-600">June 2023 - August 2023</p>
              </div>
              <div>
                <p className="text-lg font-bold">AMS Data Analytics Intern</p>
                <p className="text-gray-600">Oncor Electric Delivery | Dallas, TX</p>
                <p className="text-gray-600">June 2022 - August 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }