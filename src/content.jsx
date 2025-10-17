import iotera_logo from "./assets/iotera_logo.webp";
import pilarmedia_logo from "./assets/pilarmedia_logo.webp";
import behaestex_logo from "./assets/behaestex_logo.webp";
import dentech_logo from "./assets/dentech_logo.webp";
import clown_logo from "./assets/clown_logo.webp";
import vktr_logo from "./assets/vktr_logo.webp";
import telpro_logo from "./assets/telpro_logo.webp";
import pens_logo from "./assets/PENS.webp";
import sman15_logo from "./assets/sman15.webp";

import product_transactions_1 from "@/assets/projects/product_transactions/create_product.png"
import product_transactions_2 from "@/assets/projects/product_transactions/create_transaction.png"
import product_transactions_3 from "@/assets/projects/product_transactions/mailtrap.png"

import automated_gear_1 from "@/assets/projects/automated_gear/Screenshot_1.png"
import automated_gear_2 from "@/assets/projects/automated_gear/Screenshot_2.png"
import automated_gear_3 from "@/assets/projects/automated_gear/Screenshot_3.png"

export const experiences = [
  {
    company: "PT Iotera Sinergi Digital",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Full Stack Developer",
    date: "Feb 2025 – present",
    bulletPoints: [
      "Converted 20+ figma UI design into web pages and its reactivity using Context API.",
      "Integrated devices to the web apps (Smart Scale, webcam, and RFID reader) for Gold linking process.",
      "Implemented cookie-based JWT auth with per-page token & role checks. ",
      "Apply AES Encryption on client side for all content of HTTP request and reseponse.",
      "Built 20+ server-side paginated, filterable, and sortable tables.",
      "Built polling mechanism with interval-based updates to display RFID scan results in 4 different pages.",
      "Developed FastAPI and Redis Backend with repository-pattern and SQLModel as ORM and data validatior",
    ],
    tech: "javascript, typescript, react, antdesign, python, fastapi, redis, oracle, sqlite",
    image: iotera_logo,
  },
  {
    company: "CV Pilarmedia Indonesia (Software House)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Full Stack Developer",
    date: "Sept 2024 – Nov 2024",
    bulletPoints: [
      "Customized existing ERP modules (Sales Order, Warehousing, Inventory) to align with client needs.",
      "Implemented web features (PDF generation, role-permissions, and barcode generation) for POS apps.",
      "Integrate Firebase Cloud Messaging (FCM) OAuth2 API with Laravel app to send mobile push notification.",
      "Provide API to mobile dev for Warehouse Management System (WMS) apps.",
    ],
    tech: "laravel, mysql, angular, vuejs, bootstrap, jquery",
    image: pilarmedia_logo,
  },
  {
    company: "PT Behaestex (Textile Manufacture)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Full Stack Web Developer",
    date: "Jan 2024 – Aug 2024",
    bulletPoints: [
      "Integrated 3rd party API “MyJurnal” SaaS data with proper sync mechanism to internal system.",
      "Created 6 comprehensive Excel reports, improving the efficiency of reporting across the organization.",
      "Responsible for ongoing maintenance and enhancements of internal website in the codebase.",
    ],
    tech: "laravel, codeigniter, mysql, bootstrap, jquery",
    image: behaestex_logo,
  },
  {
    company: "Dentech Corp ID (Education Technology)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "STM32 Guest Speaker",
    date: "Sept 2023 – March 2024",
    bulletPoints: [
      "Delivered 4 comprehensive presentation about STM32 microcontrollers features and specifications.",
      "Demonstrated practical examples with real device in live during the event.",
      "Offered insights and hands-on experience about embedded system to participants.",
    ],
    tech: "cpp, c, arduino, powerpoint",
    image: dentech_logo,
  },
  {
    company: "Clown Technology (IT Consulting & Project)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "IoT Engineer (Firmware)",
    date: "May 2022 - Jan 2024",
    bulletPoints: [
      "Completed 15+ projects, mainly programming Microcontroller (Arduino, ESP32, STM32), Mini-PC, AI, web.",
      "Doing research and development for used sensors-actuators and algorithm in projects.",
      "Collaborated with mechanical and electrical engineers for system integration process.",
      "Provided post-project, ensuring client’s comprehensive understanding and satisfaction with deliverables.",
    ],
    tech: "cpp, c, python, arduino, linux, google, GCP, Eagle PCB",
    image: clown_logo,
  },
  {
    company: "PT VKTR Mobilitas (Transportation System Electrification)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Navigation Systems Researcher",
    date: "Aug 2022 - Feb 2023",
    bulletPoints: [
      "Analysed diverse GPS modules and Cell-tower positioning performance in various weather and environment.",
      "Developed Python script to use multi-threading for collecting data from GPS, surrounding cell tower RSSI, Google Geolocation API and Google Distance Matrix API.",
      "Improved positioning accuracy with Kalman Filter and map-matching algorithm, ensuring the vehicle remains aligned with the road network.",
      "Integrated Google “Distance Matrix API” to the system for time arrival estimation to the next destination.",
    ],
    tech: "raspberrypi, linux, python, numpy, pandas",
    image: vktr_logo,
  },
  {
    company: "PT Graha Sarana Duta (Telkom Property)",
    companyWeb: "https://www.linkedin.com/company/clown-technology/about/",
    role: "Internship - Full Stack Web Developer",
    date: "Jan 2022 - Apr 2022",
    bulletPoints: [
      "Developed web apps for file management.",
      "Implemented a role-based access control system and post and file ownership features to limit user capability.",
      "Deployed and maintained website on hosting platform, ensuring online accessibility.",
    ],
    tech: "laravel, mysql, bootstrap, jquery",
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
      title: "Laravel Product Transaction API with Queued Email Notification",
      description: `This application provides CRUD APIs for products and transactions. 
        Each product includes details such as price, stock, and images. 
        Transactions can contain multiple products with quantities and customer information. 
        After a transaction is successfully created, an email notification job is dispatched to a queue to prevent blocking the response process. 
        The email is then captured in Mailtrap for testing purposes.`,
      tech: "Laravel",
      link: "",
      media: [
        {type: "youtube", src: "Z0hPXZZcNyk"},
        {type: "image", src: product_transactions_1},
        {type: "image", src: product_transactions_2},
        {type: "image", src: product_transactions_3},
      ],
      mediaPath: "/product_transactions",
    },
    {
      title: "Laravel Todo App",
      description: `I enhanced my full-stack development skills through this project by implementing various model relationships 
        (hasManyThrough, morphMany, oneToMany, manyToMany, etc.) and integrating Laravel Breeze Authentication with Vue.js and Inertia. 
        Users can create and edit tasks, each containing multiple users with assigned roles, as well as multiple subtasks with tags.`,
      tech: "Laravel, Vue.js, Tailwind CSS, Inertia",
      link: "https://github.com/farid141/todo-app-laravel-vue-inertia",
      media: [{ type: "youtube", src: "9p2p_zbVtKY" }],
      mediaPath: "/todo_apps",
    },
    {
      title: "React Product Cart",
      description: `An e-commerce cart system built with Redux Toolkit for deep component-level state management. 
        Firebase Realtime Database is used as persistent storage, ensuring that data remains intact even after page reloads.`,
      tech: "React, Redux Toolkit, Firebase",
      link: "https://github.com/farid141/react-redux-firebase",
      media: [{ type: "youtube", src: "6wsEmp4Np94" }],
      mediaPath: "/product_cart",
    },
    {
      title: "Admin Panel with Dynamic Menu and Permission",
      description: `A boilerplate admin dashboard where sidebar menus and submenus are dynamically generated from the database. 
        New menus or submenus can be created directly from the interface. 
        It also implements role-based access control on both frontend and backend.`,
      tech: "Laravel 11, jQuery, Bootstrap 5, MySQL",
      link: null,
      media: [{ type: "youtube", src: "E8kqYNTjM3Y" }],
      mediaPath: "/admin_panel",
    },
  ],
  iot: [
    {
      title: "Automated Bike Gear System",
      description: `Collects sensor data from a bike — including velocity (encoder-based), tilt angle, and GPS coordinates — using Arduino. 
        The data is sent to a Raspberry Pi via USB, where it is stored in a local database using a Python script. 
        These parameters are also used to control a servo motor, with control signals sent back to the Arduino. 
        The processed data is displayed on a local web server.`,
      tech: "MySQL, PHP, Python, C, Arduino, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      media: [
        { type: "youtube", src: "UtObGMDVDgQ" },
        { type: "image", src: automated_gear_1 },
        { type: "image", src: automated_gear_2 },
        { type: "image", src: automated_gear_3 },
      ],
      mediaPath: "/automated_gear",
    },
    {
      title: "Hybrid Power Management System",
      description: (
        <>
          This project demonstrates a hybrid power source system combining a
          battery with AC inverter and grid power (PLN). The modified power
          supply simulates a turbine. The system handles three operating
          conditions:
          <ul className="list-disc">
            <li>
              When PLN is unavailable, the battery is low, and turbine power is
              sufficient, the battery is charged in Constant Voltage (CV) mode.
            </li>
            <li>
              Once the battery is charged, it becomes the main power source,
              supplying energy through the inverter.
            </li>
            <li>
              If PLN is available and the battery is insufficient, the system
              switches to PLN as the power source.
            </li>
          </ul>
        </>
      ),
      tech: "C, Arduino, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      media: [{ type: "youtube", src: "vYOIzDr80R0" }],
      mediaPath: "/hybrid_power",
    },
    {
      title: "3-Phase Voltage Unbalance Alert System",
      description: `The main controller collects and displays voltage data from three sensors, one for each phase, and calculates VRMS values from analog readings. 
        It then computes the voltage unbalance percentage across the three phases. 
        When the unbalance exceeds a predefined threshold, an SMS alert is sent containing VRMS values, unbalance ratio, and GPS coordinates via a GSM module.`,
      tech: "C, STM32 Cortex-M4, sensors, actuators",
      link: "https://github.com/farid141/3-Phase-Voltage-Unbalance-Alert-System",
      media: [],
      mediaPath: "/3_phase",
    },
  ],
  web_scrap: [
    {
      title: "Jobstreet Scraper",
      description: `A Python-based web scraper that automatically collects job postings from Jobstreet across multiple pages based on a given keyword. 
        The scraped data is saved into a CSV file containing company name, location, description, and keywords to simplify job search and analysis.`,
      tech: "Python, Selenium, Pandas",
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
      The final project focused on developing a navigation system for electric buses, integrating GNSS and geolocation-based positioning 
      with real-time arrival estimation for the next stop.`,
    date: "2019 – 2023",
    grade: "GPA: 3.67/4.0",
  },
  {
    name: "Surabaya Public High School 15",
    title: "Natural Science Major",
    logo: sman15_logo,
    description: `
      Developed soft skills such as confidence and leadership by serving as class leader in the final year. 
      Represented the school in futsal competitions.`,
    date: "2016 – 2019",
    grade: "GPA: 86/100",
  },
];
