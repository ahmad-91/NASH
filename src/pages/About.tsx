import React from 'react';
import { Brain, Dumbbell, Sparkles, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Analysis',
      description:
        'Our advanced AI algorithms analyze your form and progress in real-time.',
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'Personalized Workouts',
      description:
        'Get custom workout plans tailored to your goals and fitness level.',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Real-time Feedback',
      description:
        'Receive instant feedback on your form and technique during workouts.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Support',
      description:
        'Join a community of fitness enthusiasts and share your progress.',
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            Revolutionizing Fitness with AI
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We're building the future of personal fitness by combining cutting-edge
            artificial intelligence with proven exercise science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-transform"
            >
              <div className="text-blue-200 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-blue-200 mb-4">
              We believe that everyone deserves access to professional-quality
              fitness guidance. Our AI-powered platform makes this possible by
              providing personalized workout plans, real-time form correction, and
              progress tracking.
            </p>
            <p className="text-blue-200">
              By combining computer vision, machine learning, and exercise science,
              we're creating a future where your phone is all you need for a
              perfect workout.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1594882645126-14020914d58d"
              alt="AI and Fitness"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg" />
          </div>
        </div>
      </div>

      <footer className="border-t border-white/20 backdrop-blur-sm text-blue-200 py-8 px-4 text-center">
        <p className="mb-2">COMPANY NACEUR SALMANE AL-OTAYBI FOR ARTIFICIAL INTELLIGENCE</p>
        <p>D-U-N-S Number is 986459489</p>
      </footer>
    </div>
  );
};

export default About;