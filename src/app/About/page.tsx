import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-coverobject-center rounded"
              alt="hero"
              src="/images/hero.png"
              height={300}
              width={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-8xl mb-4 font-bold text-purple-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-purple-500">
              I completed my early education through the Sindh Board of Karachi,
              where I successfully passed my 9th and 10th-grade exams with an A1
              grade. Afterward, I pursued my intermediate education, earning a B
              grade. This foundation led me to further my studies at Karachi
              University, where I completed my Master’s in Applied Mathematics.
              During my time at university, I focused on Software Engineering as
              an optional subject and gained a deep understanding of
              programming, particularly Python. My passion for technology drove
              me to explore the fields of Data Science and Machine Learning. I
              attended seminars on these topics and earned certificates that
              further fueled my interest. Recently, I also participated in
              several hackathons, where I was able to apply my knowledge in
              practical, real-world scenarios. In addition to my academic
              journey, I took the opportunity to expand my skill set through
              various web development courses. I gained hands-on experience in
              HTML, CSS, TypeScript, Next.js, Tailwind CSS, and Node.js at
              GIAIC, where I also earned valuable insights into modern web
              technologies. My learning journey continues as I aim to enhance my
              skills and contribute to the ever-evolving tech industry.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
