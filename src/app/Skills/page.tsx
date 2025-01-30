import React from "react";
import { FaSquareCheck } from "react-icons/fa6";

const Skills = () => {
  return (
    <section className="text-purple-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
            skills
          </h2>
          <h1 className="sm:text-3xl text-5xl font-medium title-font text-purple-900">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-purple-800 flex-shrink-0">
                  <FaSquareCheck className="bg-white" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  HTML
                </h2>
              </div>
              <div className="flex-grow pt-6 ">
                <div className="relative h-1 w-full bg-gray-300 rounded-full">
                  <div className="absolute bg-purple-600 h-1 rounded w-[100%]"></div>
                </div>
                <p className="text-purple-600 text-right">100%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-purple-800 flex-shrink-0">
                  <FaSquareCheck className="bg-white" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  CSS
                </h2>
              </div>
              <div className="flex-grow pt-6 ">
                <div className="relative h-1 w-full bg-gray-300 rounded-full">
                  <div className="absolute bg-purple-600 h-1 rounded w-[100%]"></div>
                </div>
                <p className="text-purple-600 text-right">100%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-purple-800 flex-shrink-0">
                  <FaSquareCheck className="bg-white" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Next.js
                </h2>
              </div>
              <div className="flex-grow pt-6 ">
                <div className="relative h-1 w-full bg-gray-300 rounded-full">
                  <div className="absolute bg-purple-600 h-1 rounded w-[99%]"></div>
                </div>
                <p className="text-purple-600 text-right">99%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-purple-800 flex-shrink-0">
                  <FaSquareCheck className="bg-white" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Tailwind CSS
                </h2>
              </div>
              <div className="flex-grow pt-6 ">
                <div className="relative h-1 w-full bg-gray-300 rounded-full">
                  <div className="absolute bg-purple-600 h-1 rounded w-[95%]"></div>
                </div>
                <p className="text-purple-600 text-right">95%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-purple-800 flex-shrink-0">
                  <FaSquareCheck className="bg-white" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Typscript/Javascript
                </h2>
              </div>
              <div className="flex-grow pt-6 ">
                <div className="relative h-1 w-full bg-gray-300 rounded-full">
                  <div className="absolute bg-purple-600 h-1 rounded w-[85%]"></div>
                </div>
                <p className="text-purple-600 text-right">85%</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-800 text-purple-800 flex-shrink-0">
                  <FaSquareCheck className="bg-white" />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Python
                </h2>
              </div>
              <div className="flex-grow pt-6 ">
                <div className="relative h-1 w-full bg-gray-300 rounded-full">
                  <div className="absolute bg-purple-600 h-1 rounded w-[80%]"></div>
                </div>
                <p className="text-purple-600 text-right">80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
