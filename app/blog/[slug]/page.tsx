import React from 'react';
import PageLayout from '@/components/PageLayout';
import { articles } from '../page'; // Importing articles from the main blog page
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// This function is needed for Next.js to know which slugs to generate at build time.
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  const { slug } = params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <PageLayout>
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center">{article.title}</h1>
          <div className="text-center my-8 text-primary/60">
            <span>By {article.author}</span> | <span>{article.date}</span>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden my-12">
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="bg-surface"
            />
          </div>
          <div className="prose prose-invert lg:prose-xl mx-auto text-primary/80">
            {/* Dummy content for the article body */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h2>A Subheading for Structure</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
            </p>
            <blockquote>
              "This is an insightful blockquote to emphasize a key point from the article. It adds visual variety and breaks up the text."
            </blockquote>
            <p>
              Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.
            </p>
          </div>
        </article>
      </main>
    </PageLayout>
  );
};

export default ArticlePage;
