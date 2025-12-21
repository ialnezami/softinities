import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { TechStack } from '@/components/sections/tech-stack';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

