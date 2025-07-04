import React, { useState, useEffect } from 'react';
import { Gamepad2, Sparkles, Code, Zap, Rocket, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingIcons = [
    { Icon: Gamepad2, delay: 0, x: 10, y: 20 },
    { Icon: Sparkles, delay: 0.5, x: 85, y: 15 },
    { Icon: Code, delay: 1, x: 15, y: 75 },
    { Icon: Zap, delay: 1.5, x: 90, y: 80 },
    { Icon: Rocket, delay: 2, x: 50, y: 10 },
    { Icon: Star, delay: 2.5, x: 80, y: 50 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 opacity-40"></div>
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <div
            key={index}
            className={`absolute transform transition-all duration-1000 ${
              isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${delay}s`
            }}
          >
            <Icon 
              size={24} 
              className="text-purple-400 animate-pulse"
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              ENGINE ARCADE
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 leading-relaxed">
            Create Games With Just a Prompt
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Type a prompt, get a playable game instantly. No coding required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Get Early Access</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;