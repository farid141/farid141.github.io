import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import photo_profile from "../assets/photo_profile.webp";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 justify-self-center rounded-full">
            <img
              src={photo_profile}
              alt=""
              className="items-center rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Farid Nubaili
          </h1>
          <h2 className="text-3xl mb-6 text-gray-300">
            Full Stack Developer & IoT Engineer
          </h2>
          <p className="text-xl mb-8 text-gray-400">
            Computer Engineering graduate with 2+ years of experience in
            software engineering and IoT development. Passionate about technical
            programming, especially DSA.
          </p>
          <div className="flex gap-6">
            <a
              target="_blank"
              href="https://github.com/farid141"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={24} /> GitHub
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/farid-nubaili"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
            <a
              target="_blank"
              href="mailto:faridnubaili@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={24} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
