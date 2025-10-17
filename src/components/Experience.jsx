import React from "react";
import { Calendar } from "lucide-react";
import { SectionTitle } from "./common/SectionTitle";
import { Tag } from "./common/Tag";
import { experiences } from "../content";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300 block"
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
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-primary">{exp.role}</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar size={16} className="mr-2" />
                  {exp.date}
                </div>
              </div>
              <div>
                <p className="text-card-foreground mb-4">{exp.description}</p>
                <ul className="text-card-foreground mb-4 list-disc list-inside">
                  {exp.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.tech.split(", ").map((tech, i) => (
                  <Tag key={i}>{tech}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
