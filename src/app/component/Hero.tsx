"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <section className="text-gray-600   body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font space-y-4 sm:text-4xl text-5xl mb-4  sapace-y-4 font-bold text-purple-800">
            I am a<br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI-UX Designer",
                  "Python Programmer",
                  "Mathematican",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-purple-700"></div>
          <p className="mb-8 pt-4 leading-relaxed text-purple-500">
            Neha Ayaz is a passionate web developer and UI/UX designer with a
            Masters degree in Applied Mathematics. With a strong foundation in
            both design and development, Neha specializes in creating responsive
            and visually engaging websites using technologies like HTML, CSS,
            Tailwind CSS, and Next.js. Proficient in Python, Neha has the
            ability to integrate complex functionalities while ensuring a
            seamless and intuitive user experience. With a deep understanding of
            UI/UX principles, Neha focuses on building designs that are not only
            aesthetically pleasing but also highly functional and user-friendly.
            Always eager to learn and adapt, Neha combines technical expertise
            with creativity to deliver high-quality solutions in every project.
          </p>
          <Link href="/Contact">
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </div>
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/hero.png"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
