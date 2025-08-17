import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Four Sigmatic',
    description: 'Website Redesign + Brand Evolution',
    image: '/four-sigmatic.webp',
    link: '/project/four-sigmatic',
    category: 'Art Direction + Design',
    date: '05.08.2023',
  },
  {
    title: 'Kapsul',
    description: 'Web Design + Brand Campaign',
    image: '/kapsul.webp',
    link: '/project/kapsul',
    category: 'Art Direction + Design',
    date: '04.14.2020',
  },
  {
    title: 'TaylorMade',
    description: 'Product Design + Web Concepts',
    image: '/taylormade.webp',
    link: '/project/taylormade',
    category: 'Art direction + Design',
    date: '03.11.2022',
  },
];

const Projects = () => {
  return (
    <section className="py-32 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl mt-6 max-w-2xl mx-auto">
            Here are some select projects that showcase my passion for creating
            memorable web experiences, products, and brands to life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="group block">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-3xl font-bold mt-6">{project.title}</h3>
                <p className="text-xl mt-3">{project.description}</p>
                <div className="flex justify-between text-base text-gray-500 mt-5">
                  <span>{project.category}</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-24">
          <Link
            href="/projects"
            className="inline-block text-2xl font-bold underline hover:no-underline"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
