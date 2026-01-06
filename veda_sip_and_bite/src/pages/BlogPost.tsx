import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/blog';
import { formatDate } from '../utils/formatDate';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { buttonStyles } from '../components/ui/Button';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <Section>
        <Container>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Post not found</h1>
            <Link to="/blog" className={buttonStyles('primary', 'md')}>
              Back to journal
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <article className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-sage-dark">{formatDate(post.date)}</p>
            <h1 className="text-4xl font-semibold">{post.title}</h1>
            <p className="text-sm text-charcoal/70">By {post.author}</p>
          </div>
          <div className="space-y-4 text-sm text-charcoal/70">
            {post.excerpt.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          {post.sections.map((section) => (
            <div key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-semibold text-herb">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm text-charcoal/70">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-herb">
            Back to journal
          </Link>
        </article>
      </Container>
    </Section>
  );
};

