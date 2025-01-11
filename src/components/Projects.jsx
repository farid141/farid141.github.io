import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';
import { Tag } from './common/Tag';
import { YouTubeEmbed } from './common/YouTubeEmbed';

export const Projects = () => {
  const projects = [
    {
      title: 'Laravel Todo App',
      description: 'Advanced Todo application showcasing Laravel ORM relationships with modern front-end stack.',
      tech: 'Laravel, Vue.js, Tailwind CSS, Inertia',
      link: 'https://github.com/farid141/todo-app-laravel-vue-inertia',
      videoId: '9p2p_zbVtKY'
    },
    {
      title: 'React Product Cart',
      description: 'E-commerce cart functionality with Redux Toolkit and Firebase integration.',
      tech: 'React, Redux Toolkit, Firebase',
      link: 'https://github.com/farid141/react-redux-firebase',
      videoId: '6wsEmp4Np94'
    },
    {
      title: 'Automated Bike Gear System',
      description: 'IoT project for automated gear shifting based on various sensor inputs.',
      tech: 'Arduino, Python, PHP, MySQL',
      link: 'https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System',
      videoId: 'UtObGMDVDgQ'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-colors duration-300"
            >
              <div className="w-full">
                <YouTubeEmbed videoId={project.videoId} />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, i) => (
                      <Tag key={i}>{tech}</Tag>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target='_blank'
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} /> View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};