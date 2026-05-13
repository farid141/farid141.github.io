import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import { skillCategories } from "../content";
import { Logo } from "./Logo";
import { LogoAnim, SkillCardAnim, StaggerContainer } from "./animations/StaggeredSections";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted min-h-screen">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>

        <StaggerContainer>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(([category, skills], i) => (
              <SkillCardAnim key={category}>
                <div
                  key={category}
                  className={`
                    bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300`}
                    >
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2 align-center">
                    {skills.map((tech, i) => (
                      <LogoAnim key={i}>
                        <Logo src={tech} key={i}/>
                      </LogoAnim>
                    ))}
                  </div>
                </div>
              </SkillCardAnim>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};
