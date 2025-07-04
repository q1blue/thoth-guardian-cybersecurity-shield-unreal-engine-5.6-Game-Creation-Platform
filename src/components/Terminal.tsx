import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const steps = [
    'create-game Make a space shooter with neon graphics',
    '✨ Generating game assets...',
    '🎮 Creating game logic...',
    '🚀 Optimizing for web...',
    '🎉 Game ready! Play now or customize'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setIsTyping(true);
        typeText(steps[currentStep], () => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, 1000);
        });
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentStep(0);
          setDisplayText('');
        }, 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStep]);

  const typeText = (text: string, callback: () => void) => {
    setDisplayText('');
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(typeInterval);
        callback();
      }
    }, 50);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-6 py-4 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <TerminalIcon size={18} />
              <span className="text-sm font-mono">engine-arcade-terminal</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 bg-gray-900 font-mono text-sm">
            <div className="text-green-400 mb-4">
              <span className="text-purple-400">$</span> {displayText}
              {isTyping && (
                <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
              )}
            </div>
            
            {currentStep > 0 && (
              <div className="space-y-2">
                {steps.slice(1, currentStep + 1).map((step, index) => (
                  <div key={index} className="text-gray-300">
                    {step}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;