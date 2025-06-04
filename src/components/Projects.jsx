import React from "react";
import { ExternalLink } from "lucide-react";
import { SectionTitle } from "./common/SectionTitle";
import { Tag } from "./common/Tag";
import { YouTubeEmbed } from "./common/YoutubeEmbed";

export const Projects = () => {
  const projects = [
    {
      title: "Laravel product transaction API with queued email notification",
      description:
        "API for product transaction application. The created transaction will adjust product stock accordingly and process send email in queue background",
      tech: "Laravel",
      link: "",
      videoId: "Z0hPXZZcNyk",
    },
    {
      title: "Laravel Todo App",
      description:
        "Advanced Todo application showcasing Laravel ORM relationships with modern front-end stack.",
      tech: "Laravel, Vue.js, Tailwind CSS, Inertia",
      link: "https://github.com/farid141/todo-app-laravel-vue-inertia",
      videoId: "9p2p_zbVtKY",
    },
    {
      title: "React Product Cart",
      description:
        "E-commerce cart functionality with Redux Toolkit and Firebase integration.",
      tech: "React, Redux Toolkit, Firebase",
      link: "https://github.com/farid141/react-redux-firebase",
      videoId: "6wsEmp4Np94",
    },
    {
      title: "Admin Panel with Dynamic Menu and Permission",
      description:
        "Admin panel website with dynamic menu and submenu generated from database. Provide user role-permission feature to limit user access from accessing route and display available menu for authenticated user.",
      tech: "Laravel 11, jQuery, Bootstrap5, MySQL",
      link: null,
      videoId: "E8kqYNTjM3Y",
    },
    {
      title: "Automated Bike Gear System",
      description:
        "Gathers some sensor data attached the bike such velocity, tilt angle, GPS Coordinate with Arduino to Raspberry Pi webserver. The controller will automatically set bike gear using servo based on the collected data",
      tech: "MySQL, PHP, Python, C, Arduino, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      videoId: "UtObGMDVDgQ",
    },
    {
      title: "Hybrid Power Management System",
      description:
        "This project using Arduino Mega 2560 as the main controller to control the power source of household electricity. When the battery in discharge mode, it will be powered up inverter using battery as main power. Else, the battery will be charged by wind turbine and PLN will be used as main power.",
      tech: "C, Arduino, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      videoId: "vYOIzDr80R0",
    },
    {
      title: "3-Phase Voltage Unbalance Alert System",
      description:
        "The main controller gathers and display data from 3 voltage sensors placed on each line and calculate VRMS and unbalance value. When the unbalance value exceeds the threshold value, the controller will send the warning message contains VRMS, unbalance value and GPS coordinate information via GSM.",
      tech: "C, STM32 Cortex-M4, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      videoId: "UtObGMDVDgQ",
    },
    {
      title: "Jobstreet Scrapper",
      description:
        "Scrape all jobs posted on jobstreet. Creating CSV file that consist of company name, region, description, keywords to make job scanning easiter.",
      tech: "Python, selenium, pandas",
      link: "https://github.com/farid141/jobstreet-scrapper",
      videoId: "q32RDOZiAWk",
    },
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
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow line-clamp-2 hover:line-clamp-none">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech, i) => (
                      <Tag key={i}>{tech}</Tag>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
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
