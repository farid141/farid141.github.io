import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { Tag } from "./common/Tag";

export const Skills = () => {
  const skillCategories = {
    "Programming Languages": [
      "C",
      "C++",
      "Python",
      "PHP",
      "SQL",
      "JavaScript",
      "Typescript",
    ],
    Backend: ["Laravel", "CI", "FastAPI"],
    FrontEnd: ["Bootstrap", "Tailwind", "jQuery", "Inertia", "ReactJS", "VueJS", "AngularJS"],
    Tools: [
      "VSCode",
      "Visual Studio",
      "Git",
      "Docker",
      "DBeaver",
      "Postman",
    ],
    IoT: [
      "Arduino IDE",
      "STM32Cube IDE",
      "Eagle",
    ],
    Databases: ["MySQL", "PostgreSQL", "Oracle", "SQLite", "MongoDB", "Redis"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <Tag key={i}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
