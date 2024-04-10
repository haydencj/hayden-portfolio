export default function Experience() {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <div className="mb-4">
                <p className="text-lg font-bold">The University of Texas at Arlington</p>
                <p>Bachelor of Science in Computer Science</p>
                <p>August 2021 - May 2025</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <div className="mb-4">
                <p className="text-lg font-bold">Web Developer</p>
                <p>Oncor Electric Delivery | Dallas, TX</p>
                <p>April 2024 - Present</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold">Software Engineer Intern</p>
                <p>HENNGE Inc. | Tokyo, Japan</p>
                <p>January 2024 - February 2024</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold">Customer Data Analytics Intern</p>
                <p>Oncor Electric Delivery | Dallas, TX</p>
                <p>June 2023 - August 2023</p>
              </div>
              <div>
                <p className="text-lg font-bold">AMS Data Analytics Intern</p>
                <p>Oncor Electric Delivery | Dallas, TX</p>
                <p>June 2022 - August 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }