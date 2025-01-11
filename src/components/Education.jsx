import React from 'react';
import { SectionTitle } from './common/SectionTitle';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">
                  Electronic Engineering Polytechnic Institute of Surabaya
                </h3>
                <p className="text-blue-400">Bachelor of Applied Engineering, Computer Engineering</p>
              </div>
              <div className="text-gray-400">2019 – 2023</div>
            </div>
            <p className="text-gray-300">GPA: 3.67/4.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};