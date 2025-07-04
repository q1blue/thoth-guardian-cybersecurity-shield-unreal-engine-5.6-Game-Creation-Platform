import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Gamepad2 size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">ENGINE ARCADE</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2025 Engine Arcade. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            We are cooking something new, please stay tuned...
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;