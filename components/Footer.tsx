// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#404287] text-gray-100 py-8">
      <div className="container mx-auto flex justify-between items-center py-8">
        <div>
          <img src="/logo.jpeg" alt="Logo" className="h-8" /> 
        </div>
        <div>
          <p>&copy; 2024 Blog Post. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
