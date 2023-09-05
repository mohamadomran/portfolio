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
  const { showcaseProjects = [], showcaseBlogs = [] } = data ?? {};

  return (
    <>
      <Header title="Featured Project" />

      {showcaseProjects &&
        showcaseProjects.length > 0 &&
        showcaseProjects.map((project, key) => {
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

      {/* Showcase blogs */}
      <Header title="Featured Articles" />
      {showcaseBlogs &&
        showcaseBlogs.length > 0 &&
        showcaseBlogs.map((project, key) => {
          const href = resolveHref(project._type, project.slug);
          if (!href) {
            return null;
          }
          return <BlogListItem key={key} blog={project} href={href} />;
        })}
    </>
  );
}

export default HomePage;
