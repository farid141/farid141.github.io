import React from 'react';
import { Calendar } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';
import { Tag } from './common/Tag';

export const Experience = () => {
  const experiences = [
    {
      company: 'CV Pilarmedia Indonesia',
      role: 'Full Stack Developer',
      date: 'Sept 2024 – Nov 2024',
      description: 'Customized complex transaction ERP modules and implemented various features including PDF generation and Firebase integration.',
      tech: 'Laravel, AngularJS, VueJS, Bootstrap, jQuery, MySQL'
    },
    {
      company: 'PT Behaestex',
      role: 'Full Stack Web Developer',
      date: 'Jan 2024 – Aug 2024',
      description: 'Integrated 3rd party data and created comprehensive Excel reports while maintaining website codebase.',
      tech: 'Laravel, Code Igniter, Bootstrap, jQuery, MySQL'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100">{exp.company}</h3>
                  <p className="text-blue-400">{exp.role}</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  {exp.date}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.split(', ').map((tech, i) => (
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
