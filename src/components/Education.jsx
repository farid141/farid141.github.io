import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { educations } from "../content";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 space-y-8">
        <SectionTitle>Educations</SectionTitle>
        {educations.map((education, i) => (
          <div className="max-w-4xl mx-auto" key={i}>
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300 flex gap-4">
              <img src={education.logo} alt="" className="size-12 rounded-lg" />
              <div className="w-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="max-w-[80%]">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {education.name}
                    </h3>
                    <p className="text-primary">{education.title}</p>
                    <p>{education.description}</p>
                  </div>
                  <div className="text-muted-foreground">{education.date}</div>
                </div>
                <p className="text-card-foreground">{education.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
