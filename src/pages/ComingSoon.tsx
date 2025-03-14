import React from 'react';
import { Brain, Activity, Sparkles, Dumbbell } from 'lucide-react';
import logo from '../logo.svg';
const ComingSoon: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-blue-200" />,
      text: "AI-Powered Workout Analysis",
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-200" />,
      text: "Real-time Performance Tracking",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-blue-200" />,
      text: "Personalized Fitness Journey",
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-blue-200" />,
      text: "Smart Exercise Recommendations",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="text-center max-w-4xl">
        <div className="flex justify-center mb-8">
          <img src={logo} className="h-20 w-20 text-blue-200" />
        </div>
        
        <h1 className="text-5xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent tracking-tight">
          Get Stronger A.i. & live coach powered
        </h1>
        
        <div className="space-y-6 mb-12">
          <p className="text-xl md:text-2xl text-blue-200 font-medium leading-relaxed max-w-3xl mx-auto">
            NASH uses artificial intelligence to Power your personalized health along with your real Coach. Based on millions of data points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center space-x-3">
                {feature.icon}
                <span className="text-blue-200 font-medium">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>

        <form className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:border-blue-200 font-medium"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-200 text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;