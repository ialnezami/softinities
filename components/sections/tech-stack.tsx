'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { 
  Code, 
  Zap, 
  Layers, 
  Globe, 
  Database, 
  Cloud, 
  Smartphone,
  Server,
  Box,
  FileCode,
  CircleDot,
} from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'TypeScript', icon: Code, color: 'text-blue-400', emoji: '⚡' },
      { name: 'JavaScript', icon: FileCode, color: 'text-yellow-400', emoji: '📜' },
      { name: 'React', icon: Layers, color: 'text-cyan-400', emoji: '⚛️' },
      { name: 'Next.js', icon: Globe, color: 'text-white', emoji: '▲' },
      { name: 'Vue.js', icon: CircleDot, color: 'text-green-400', emoji: '💚' },
      { name: 'Tailwind CSS', icon: Zap, color: 'text-cyan-500', emoji: '🎨' },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      { name: 'Node.js', icon: Server, color: 'text-green-500', emoji: '🟢' },
      { name: 'NestJS', icon: Box, color: 'text-red-500', emoji: '🐈' },
      { name: 'Express', icon: Server, color: 'text-white', emoji: '🚂' },
      { name: 'Laravel', icon: Code, color: 'text-red-400', emoji: '🐘' },
    ],
  },
  {
    title: 'Mobile',
    technologies: [
      { name: 'React Native', icon: Smartphone, color: 'text-cyan-400', emoji: '📱' },
      { name: 'Flutter', icon: Smartphone, color: 'text-blue-400', emoji: '🦋' },
    ],
  },
  {
    title: 'Cloud & Database',
    technologies: [
      { name: 'AWS', icon: Cloud, color: 'text-orange-400', emoji: '☁️' },
      { name: 'Azure', icon: Cloud, color: 'text-blue-400', emoji: '🔷' },
      { name: 'Firebase', icon: Cloud, color: 'text-yellow-400', emoji: '🔥' },
      { name: 'PostgreSQL', icon: Database, color: 'text-blue-500', emoji: '🐘' },
      { name: 'MongoDB', icon: Database, color: 'text-green-500', emoji: '🍃' },
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-[#0a0a0a]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Modern technologies we use to build exceptional applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white/90">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="glass-card text-center p-4 cursor-pointer group"
                    >
                      <div className="text-3xl mb-3">{tech.emoji}</div>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">
                        {tech.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

