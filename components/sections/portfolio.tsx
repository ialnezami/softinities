'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with full shopping cart, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '/projects/ecommerce.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with real-time transactions and biometric authentication.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    image: '/projects/banking.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Comprehensive SaaS dashboard with analytics, user management, and subscription handling.',
    technologies: ['Vue.js', 'NestJS', 'PostgreSQL', 'AWS'],
    image: '/projects/saas.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Food Delivery App',
    description: 'Full-featured food delivery platform with real-time tracking and restaurant management.',
    technologies: ['Flutter', 'Node.js', 'Firebase'],
    image: '/projects/food.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Healthcare Management System',
    description: 'Enterprise healthcare system with patient records, appointments, and telemedicine features.',
    technologies: ['React', 'Laravel', 'MySQL', 'Azure'],
    image: '/projects/healthcare.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with virtual tours, advanced search, and CRM integration.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    image: '/projects/realestate.jpg',
    liveUrl: '#',
    githubUrl: '#',
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
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
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

