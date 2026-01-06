import { Link } from 'react-router-dom';
import { posts } from '../data/blog';
import { formatDate } from '../utils/formatDate';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';

export const Blog = () => {
  return (
    <div>
      <Section>
        <Container>
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Journal</p>
            <h1 className="text-4xl font-semibold">Ritual notes &amp; wellness stories</h1>
            <p className="text-sm text-charcoal/70">
              Stories from the garden, the studio, and the slow moments in between.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-dark">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-herb/10 bg-parchment p-8 shadow-soft"
              >
                <p className="text-xs uppercase tracking-wide text-sage-dark">{formatDate(post.date)}</p>
                <h2 className="mt-3 text-2xl font-semibold text-charcoal">{post.title}</h2>
                <p className="mt-3 text-sm text-charcoal/70">{post.excerpt[0]}</p>
                <Link to={`/blog/${post.slug}`} className="mt-6 inline-block text-sm font-semibold text-herb">
                  Read story
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

