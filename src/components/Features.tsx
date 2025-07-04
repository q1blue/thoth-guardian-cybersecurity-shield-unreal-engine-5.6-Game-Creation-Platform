import React from 'react';
import { MessageCircle, Code, Play, Zap, Sparkles, Rocket } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Chat to Create',
      description: 'Simply describe your game idea in natural language and watch it come to life',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'No Coding Required',
      description: 'Create complex games without writing a single line of code',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Play,
      title: 'Instantly Playable',
      description: 'Get a working game in seconds that you can play and share immediately',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const additionalFeatures = [
    { icon: Sparkles, text: 'AI-Powered Game Generation' },
    { icon: Zap, text: 'Real-time Customization' },
    { icon: Rocket, text: 'Instant Publishing' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">And Much More</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600 hover:border-purple-500 transition-all duration-300"
              >
                <feature.icon size={20} className="text-purple-400" />
                <span className="text-gray-300 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;