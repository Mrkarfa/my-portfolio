import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
