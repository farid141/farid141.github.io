import iotera_logo from "./assets/iotera_logo.webp";
import pilarmedia_logo from "./assets/pilarmedia_logo.webp";
import behaestex_logo from "./assets/behaestex_logo.webp";
import dentech_logo from "./assets/dentech_logo.webp";
import clown_logo from "./assets/clown_logo.webp";
import vktr_logo from "./assets/vktr_logo.webp";
import telpro_logo from "./assets/telpro_logo.webp";
import pens_logo from "./assets/PENS.webp";
import sman15_logo from "./assets/sman15.webp";

export const experiences = [
  {
    company: "PT Iotera Sinergi Digital",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Full Stack Developer",
    date: "Feb 2025 – present",
    description: "",
    bulletPoints: [
      "Participated in BSI (Bank Syariah Indonesia) Smart Vault project as a Fullstack Developer.",
      "Converted 20+ figma UI design into web pages and its reactivity using React Context.",
      "Wrapped web-based React app into desktop-based app using Electron JS.",
      "Developed REST API using FastAPI with repository-pattern and SQLModel as ORM and data validatior.",
      "Implemented caching strategy using Redis to minimize database call and heavy computation process.",
    ],
    tech: "Python, FastAPI, Redis, Javascript, Electron, React, ANT Design, Typescript, Oracle, SQLite",
    image: iotera_logo,
  },
  {
    company: "CV Pilarmedia Indonesia (Software House)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Full Stack Developer",
    date: "Sept 2024 – Nov 2024",
    description: "",
    bulletPoints: [
      "Customized existing ERP modules (Sales Order, Warehousing, Inventory) to align with client needs.",
      "Implemented web features (PDF generation, role-permissions, and barcode generation) for POS apps.",
      "Integrate Firebase Cloud Messaging (FCM) OAuth2 API with Laravel app to send mobile push notification.",
      "Provide API to mobile dev for Warehouse Management System (WMS) apps.",
    ],
    tech: "Laravel, AngularJS, VueJS, Bootstrap, jQuery, MySQL",
    image: pilarmedia_logo,
  },
  {
    company: "PT Behaestex (Textile Manufacture)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Full Stack Web Developer",
    date: "Jan 2024 – Aug 2024",
    description: "",
    bulletPoints: [
      "Integrated 3rd party API “MyJurnal” SaaS data with proper sync mechanism to internal system.",
      "Created 6 comprehensive Excel reports, improving the efficiency of reporting across the organization.",
      "Conducted daily meeting and weekly sprints to align product with end-user requirements.",
      "Responsible for ongoing maintenance and enhancements of internal website in the codebase.",
    ],
    tech: "Laravel, Code Igniter, Bootstrap, jQuery, MySQL",
    image: behaestex_logo,
  },
  {
    company: "Dentech Corp ID (Education Technology)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "STM32 Guest Speaker",
    date: "Sept 2023 – March 2024",
    description: "",
    bulletPoints: [
      "Delivered 4 comprehensive presentation about STM32 microcontrollers features and specifications.",
      "Demonstrated practical examples with real device in live during the event.",
      "Offered insights and hands-on experience about embedded system to participants.",
    ],
    tech: "C++, C, STM32, Power Point.",
    image: dentech_logo,
  },
  {
    company: "Clown Technology (IT Consulting & Project)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "IoT Engineer (Firmware)",
    date: "May 2022 - Jan 2024",
    description: "",
    bulletPoints: [
      "Completed 15+ projects, mainly programming Microcontroller (Arduino, ESP32, STM32), Mini-PC, AI, web.",
      "Doing research and development for used sensors-actuators and algorithm in projects.",
      "Collaborated with mechanical and electrical engineers for system integration process.",
      "Provided post-project, ensuring client’s comprehensive understanding and satisfaction with deliverables.",
    ],
    tech: "C, C++, Python, Arduino, Eagle PCB design, Linux, GCP",
    image: clown_logo,
  },
  {
    company: "PT VKTR Mobilitas (Transportation System Electrification)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Navigation Systems Researcher",
    date: "Aug 2022 - Feb 2023",
    description: "",
    bulletPoints: [
      "Analysed diverse GPS modules and Cell-tower positioning performance in various weather and environment.",
      "Developed Python script to use multi-threading for collecting data from GPS, surrounding cell tower RSSI, Google Geolocation API and Google Distance Matrix API.",
      "Improved positioning accuracy with Kalman Filter and map-matching algorithm, ensuring the vehicle remains aligned with the road network.",
      "Integrated Google “Distance Matrix API” to the system for time arrival estimation to the next destination.",
    ],
    tech: "Raspberry Pi, Linux, Python, NumPy, Pandas.",
    image: vktr_logo,
  },
  {
    company: "PT Graha Sarana Duta (Telkom Property)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Internship - Full Stack Web Developer",
    date: "Jan 2022 - Apr 2022",
    description: "",
    bulletPoints: [
      "Developed web apps for file management.",
      "Implemented a role-based access control system and post and file ownership features to limit user capability.",
      "Deployed and maintained website on hosting platform, ensuring online accessibility.",
    ],
    tech: "Laravel, Bootstrap, jQuery, MySQL",
    image: telpro_logo,
  },
];

export const skillCategories = {
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
  FrontEnd: [
    "Bootstrap",
    "Tailwind",
    "jQuery",
    "Inertia",
    "ReactJS",
    "VueJS",
    "AngularJS",
  ],
  Tools: ["VSCode", "Visual Studio", "Git", "Docker", "DBeaver", "Postman"],
  IoT: ["Arduino IDE", "STM32Cube IDE", "Eagle"],
  Databases: ["MySQL", "PostgreSQL", "Oracle", "SQLite", "MongoDB", "Redis"],
};

export const projects = {
  web_dev: [
    {
      title: "Laravel product transaction API with queued email notification",
      description:
        "API for product transaction application. The created transaction will adjust product stock accordingly and process send email in queue background",
      tech: "Laravel",
      link: "",
      media: [{ type: "youtube", src: "Z0hPXZZcNyk" }],
      mediaPath: "/product_transactions",
    },
    {
      title: "Laravel Todo App",
      description:
        "Advanced Todo application showcasing Laravel ORM relationships with modern front-end stack.",
      tech: "Laravel, Vue.js, Tailwind CSS, Inertia",
      link: "https://github.com/farid141/todo-app-laravel-vue-inertia",
      media: [{ type: "youtube", src: "9p2p_zbVtKY" }],
      mediaPath: "/todo_apps",
    },
    {
      title: "React Product Cart",
      description:
        "E-commerce cart functionality with Redux Toolkit and Firebase integration.",
      tech: "React, Redux Toolkit, Firebase",
      link: "https://github.com/farid141/react-redux-firebase",
      media: [{ type: "youtube", src: "6wsEmp4Np94" }],
      mediaPath: "/product_cart",
    },
    {
      title: "Admin Panel with Dynamic Menu and Permission",
      description:
        "Admin panel website with dynamic menu and submenu generated from database. Provide user role-permission feature to limit user access from accessing route and display available menu for authenticated user.",
      tech: "Laravel 11, jQuery, Bootstrap5, MySQL",
      link: null,
      media: [{ type: "youtube", src: "E8kqYNTjM3Y" }],
      mediaPath: "/admin_panel",
    },
  ],
  iot: [
    {
      title: "Automated Bike Gear System",
      description:
        "Gathers some sensor data attached the bike such velocity, tilt angle, GPS Coordinate with Arduino to Raspberry Pi webserver. The controller will automatically set bike gear using servo based on the collected data",
      tech: "MySQL, PHP, Python, C, Arduino, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      media: [{ type: "youtube", src: "UtObGMDVDgQ" }],
      mediaPath: "/automated_gear",
    },
    {
      title: "Hybrid Power Management System",
      description:
        "This project using Arduino Mega 2560 as the main controller to control the power source of household electricity. When the battery in discharge mode, it will be powered up inverter using battery as main power. Else, the battery will be charged by wind turbine and PLN will be used as main power.",
      tech: "C, Arduino, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      media: [{ type: "youtube", src: "vYOIzDr80R0" }],
      mediaPath: "/hybrid_power",
    },
    {
      title: "3-Phase Voltage Unbalance Alert System",
      description:
        "The main controller gathers and display data from 3 voltage sensors placed on each line and calculate VRMS and unbalance value. When the unbalance value exceeds the threshold value, the controller will send the warning message contains VRMS, unbalance value and GPS coordinate information via GSM.",
      tech: "C, STM32 Cortex-M4, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      media: [{ type: "youtube", src: "UtObGMDVDgQ" }],
      mediaPath: "/3_phase",
    },
  ],
  web_scrap: [
    {
      title: "Jobstreet Scrapper",
      description:
        "Scrape all jobs posted on jobstreet. Creating CSV file that consist of company name, region, description, keywords to make job scanning easiter.",
      tech: "Python, selenium, pandas",
      link: "https://github.com/farid141/jobstreet-scrapper",
      media: [{ type: "youtube", src: "q32RDOZiAWk" }],
      mediaPath: "/jobstreet_scrapper",
    },
  ],
};

export const educations = [
  {
    name: "Electronic Engineering Polytechnic Institute of Surabaya",
    title: "Bachelor of Applied Engineering, Computer Engineering",
    logo: pens_logo,
    description: `
      Completed two internship programs at Graha Sarana Duta (3 months) and PT VKTR Teknologi Mobilitas (6 months). 
      Final project focused on developing a navigation system for electric buses, integrating GNSS and geolocation-based positioning with real-time arrival estimation for the next stop.
    `,
    date: "2019 – 2023",
    grade: "GPA: 3.67/4.0",
  },
  {
    name: "Surabaya Public High School 15",
    title: "Natural Science Major",
    logo: sman15_logo,
    description: `
      Developed soft skills in confidence and leadership, serving as class leader in the final year. 
      Represented the school in futsal competitions.
    `,
    date: "2016 – 2019",
    grade: "GPA: 86/100",
  },
];
