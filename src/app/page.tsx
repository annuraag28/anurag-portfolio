import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Projects } from '@/components/Projects/Projects';
import { Experience } from '@/components/Experience/Experience';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
