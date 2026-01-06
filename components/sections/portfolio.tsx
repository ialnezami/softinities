'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Catalogue E-commerce',
    description: 'Modern e-commerce product catalog platform with elegant design. Full-stack application showcasing contemporary product management.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    image: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/ialnezami/catalogue',
  },
  {
    title: 'Easy Restaurant',
    description: 'Complete restaurant management system with ordering, menu management, and staff coordination.',
    technologies: ['TypeScript', 'Node.js', 'React'],
    image: '/projects/restaurant.jpg',
    githubUrl: 'https://github.com/ialnezami/easy-restaurant',
  },
  {
    title: 'Easy School',
    description: 'School management platform with student records, attendance tracking, and academic management.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    image: '/projects/school.jpg',
    githubUrl: 'https://github.com/ialnezami/easy-school',
  },
  {
    title: 'Easy Car',
    description: 'Car rental and management platform with booking system, fleet management, and customer portal.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    image: '/projects/car.jpg',
    githubUrl: 'https://github.com/ialnezami/easy-car',
  },
  {
    title: 'DTF Application',
    description: 'Modern application built with TypeScript and React for streamlined workflow management.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    image: '/projects/dtf.jpg',
    githubUrl: 'https://github.com/ialnezami/dtf',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce solution with shopping cart, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '/projects/ecommerce2.jpg',
    githubUrl: 'https://github.com/ialnezami',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Showcasing our best work and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View Project
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


