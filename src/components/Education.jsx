import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { educations } from "../content";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 space-y-8">
        <SectionTitle>Educations</SectionTitle>
        {educations.map((education) => (
          <div className="max-w-4xl mx-auto ">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300 flex gap-4">
              <img src={education.logo} alt="" className="size-12 rounded-lg" />
              <div className="w-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="max-w-[80%]">
                    <h3 className="text-xl font-semibold text-gray-100">
                      {education.name}
                    </h3>
                    <p className="text-blue-400">{education.title}</p>
                    <p>{education.description}</p>
                  </div>
                  <div className="text-gray-400">{education.date}</div>
                </div>
                <p className="text-gray-300">{education.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
