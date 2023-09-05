import { BlogListItem } from 'components/shared/BlogListItem';
import { Header } from 'components/shared/Header';
import { ProjectCard } from 'components/shared/ProjectCard';
import { resolveHref } from 'lib/sanity.links';
import Link from 'next/link';
import type { HomePagePayload } from 'types';

export interface HomePageProps {
  data: HomePagePayload | null;
}

export function HomePage({ data }: HomePageProps) {
  const {
    overview = [],
    showcaseProjects = [],
    showcaseBlogs = [],
    title = '',
  } = data ?? {};

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <>
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug);
            if (!href) {
              return null;
            }
            return (
              <Link key={key} href={href}>
                <ProjectCard project={project} />
              </Link>
            );
          })}
        </>
      )}
      {/* Showcase blogs */}
      {showcaseBlogs && showcaseBlogs.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseBlogs.map((project, key) => {
            const href = resolveHref(project._type, project.slug);
            if (!href) {
              return null;
            }
            return (
              <Link key={key} href={href}>
                <BlogListItem project={project} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
