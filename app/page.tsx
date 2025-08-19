import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import MissionStatement from "@/components/MissionStatement";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import PageLayout from '@/components/PageLayout';

// Footer is now handled by PageLayout
// const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Features />
      <Testimonials />
      <MissionStatement />
      <Pricing />
      <FAQ />
    </PageLayout>
  );
}
