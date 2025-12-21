'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Target, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Rocket,
    title: 'Fast Development',
    description: 'Efficient development cycles without sacrificing architecture or quality. We deliver results quickly while maintaining high standards.',
  },
  {
    icon: Target,
    title: 'Quality Focused',
    description: 'Production-ready code that scales. We write clean, maintainable code following best practices and industry standards.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.',
  },
  {
    icon: Award,
    title: 'Continuous Learning',
    description: 'We stay at the forefront of technology, continuously learning and adopting new frameworks and best practices.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Softinities</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Passionate developers building modern, scalable applications with cutting-edge technologies.
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We are experienced full-stack developers delivering production-ready code with modern technologies. 
            Focused on architecture, quality, and scalability. Ready to ship features in days, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <value.icon className="h-10 w-10 mb-4 text-purple-400" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

