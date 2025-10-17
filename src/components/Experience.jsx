import React from "react";
import { Calendar } from "lucide-react";
import { SectionTitle } from "./common/SectionTitle";
import { Tag } from "./common/Tag";
import { experiences } from "../content";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300 block"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 items-center">
                  <img src={exp.image} alt="" className="size-12 rounded-lg" />
                  <div>
                    <a
                      href={exp.companyWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-xl font-semibold text-gray-100">
                        {exp.company}
                      </h3>
                      <p className="text-blue-400">{exp.role}</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  {exp.date}
                </div>
              </div>
              <div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="text-gray-300 mb-4 list-disc list-inside">
                  {exp.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 align-center">
                <span className="font-bold self-center">Tech Stack</span>
                {exp.tech.split(", ").map((tech, i) => (
                  <i class={`ci ci-${tech} ci-2x`} title={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
