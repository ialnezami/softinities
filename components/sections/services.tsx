'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Cloud, Wrench } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern web applications with React.js, Next.js, Nuxt.js, and Vue.js. Scalable Node.js and NestJS backends. PHP and Laravel solutions for enterprise needs.',
    technologies: ['React.js', 'Next.js', 'Nuxt.js', 'Vue.js', 'Node.js', 'NestJS', 'Laravel'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native and Flutter. Native iOS and Android solutions. Fast, responsive, and user-friendly mobile experiences.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'AWS and Azure cloud solutions. CI/CD pipeline setup. Infrastructure as Code. Scalable, secure, and reliable cloud infrastructure.',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Enterprise software development. API development and integration. Legacy system modernization. Tailored solutions for your unique business needs.',
    technologies: ['Enterprise APIs', 'System Integration', 'Legacy Migration'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-4 text-purple-400" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
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

