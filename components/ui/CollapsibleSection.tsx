"use client";

import React, { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden bg-white shadow-sm">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 cursor-pointer flex justify-between items-center transition-colors duration-200 select-none hover:bg-gray-50 ${
          isOpen ? 'bg-gray-50' : 'bg-white'
        }`}
      >
        <h3 className="text-lg font-medium text-gray-800 m-0">{title}</h3>
        <span className={`transition-transform duration-300 text-gray-600 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}>
          ▼
        </span>
      </div>

      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="p-5 border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

