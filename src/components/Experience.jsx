import React from "react";
import { Calendar } from "lucide-react";
import { SectionTitle } from "./common/SectionTitle";
import { Tag } from "./common/Tag";

import iotera_logo from "../assets/iotera_logo.webp";
import pilarmedia_logo from "../assets/pilarmedia_logo.webp";
import behaestex_logo from "../assets/behaestex_logo.webp";
import dentech_logo from "../assets/dentech_logo.webp";
import clown_logo from "../assets/clown_logo.webp";
import vktr_logo from "../assets/vktr_logo.webp";
import telpro_logo from "../assets/telpro_logo.webp";

const experiences = [
  {
    company: "PT Iotera Sinergi Digital",
    role: "Full Stack Developer",
    date: "Feb 2025 – present",
    description: "",
    bulletPoints: [
      "Participated in BSI (Bank Syariah Indonesia) Smart Vault project as a Fullstack Developer.",
      "Sliced 10+ figma UI design into web pages and its reactivity using ReactJS, TypeScript and ANTDesign.",
      "Wrapped web-based React app into desktop-based app using Electron JS.",
      "Developed REST API using FastAPI with repository-pattern and SQLModel as ORM and data validation.",
      "Implemented data caching strategy using Redis to minimize database call and increase performance.",
    ],
    tech: "Python, FastAPI, Redis, Javascript, Electron, React, ANT Design, Typescript, Oracle, SQLite",
    image: iotera_logo,
  },
  {
    company: "CV Pilarmedia Indonesia (Software House)",
    role: "Full Stack Developer",
    date: "Sept 2024 – Nov 2024",
    description: "",
    bulletPoints: [
      "Customized complex transaction ERP main module (Sales Order, Warehousing, Inventory) as client needs.",
      "Implemented PDF generation, role-based permissions, and barcode generation features in web development.",
      "Collaborated with developer team with proper Git workflow and project management tools in daily basis.",
      "Integrate Firebase Cloud Messaging (FCM) OAuth2 API with Laravel app to send mobile push notification.",
      "Provide API for Warehouse Management System (WMS) mobile application.",
    ],
    tech: "Laravel, AngularJS, VueJS, Bootstrap, jQuery, MySQL",
    image: pilarmedia_logo,
  },
  {
    company: "PT Behaestex (Manufacture)",
    role: "Full Stack Web Developer",
    date: "Jan 2024 – Aug 2024",
    description: "",
    bulletPoints: [
      "Integrated 3rd party data and designed database schema from SaaS to the internal database via REST API.",
      "Created 6 comprehensive Excel reports, improving the efficiency of reporting across the organization.",
      "Conducted daily meeting and weekly sprints to align product with end-user requirements.",
      "Responsible for ongoing maintenance and enhancements of website in the codebase.",
    ],
    tech: "Laravel, Code Igniter, Bootstrap, jQuery, MySQL",
    image: behaestex_logo,
  },
  {
    company: "Dentech Corp ID (Education Technology)",
    role: "STM32 Guest Speaker",
    date: "Sept 2023 – March 2024",
    description: "",
    bulletPoints: [
      "Delivered 4 comprehensive presentation on STM32, introducing specialized material of STM32 feature.",
      "Demonstrated practical examples in live projects and engaging demos with electrical device during the event.",
      "Offered insights and hands-on experience about embedded system to participants.",
    ],
    tech: "STM32, STM32CubeIDE, Electronics",
    image: dentech_logo,
  },
  {
    company: "Clown Technology (IT Consulting & Project)",
    role: "IoT Engineer (Firmware)",
    date: "May 2022 - Jan 2024",
    description: "",
    bulletPoints: [
      "Completed over 15 projects, programming Microcontrollers (Arduino, ESP32, STM32), Mini-PC, AI, web.",
      "Collaborated with mechanical and electrical engineers for sensors and actuators integration to the system.",
      "Provide post-project teaching to client, ensure understanding and satisfaction on the final system.",
    ],
    tech: "C, C++, Python, Arduino, Eagle PCB design, Linux, GCP",
    image: clown_logo,
  },
  {
    company: "PT VKTR Mobilitas (Transportation System Electrification)",
    role: "Navigation Systems Researcher",
    date: "Aug 2022 - Feb 2023",
    description: "",
    bulletPoints: [
      "Analysed diverse GNSS modules and Geolocation performance from Raspberry Pi.",
      "Enhanced positioning accuracy of the sensor by integrating Kalman Filter and map-matching algorithm utilizing Pandas and NumPy, Python module.",
      "Integrated Distance Matrix API using HTTP to provide arrival estimation for the next stop.",
    ],
    tech: "Python, NumPy, Pandas, GNSS",
    image: vktr_logo,
  },
  {
    company: "PT Graha Sarana Duta (Telkom Property)",
    role: "Internship - Full Stack Web Developer",
    date: "Jan 2022 - Apr 2022",
    description: "",
    bulletPoints: [
      "Developed web application based Laravel with file, post and user management capabilities.",
      "Implemented a role-based access control system and post and file ownership features.",
      "Deployed and maintained website on hosting platform, ensuring online accessibility.",
    ],
    tech: "Laravel, Bootstrap, jQuery, MySQL",
    image: telpro_logo,
  },
];

export const Experience = () => {
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
                <div className="flex gap-2 items-center">
                  <img src={exp.image} alt="" className="size-12 rounded-lg" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">
                      {exp.company}
                    </h3>
                    <p className="text-blue-400">{exp.role}</p>
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
                  {exp.bulletPoints.map((point) => (
                    <li>{point}</li>
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
