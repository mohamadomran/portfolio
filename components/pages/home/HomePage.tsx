import { Layout } from '@/components/global/Layout';
import ScrollUp from '@/components/global/ScrollUp';
import { Intro } from '@/components/pages/home/Intro';
import { ProjectListItem } from '@/components/pages/home/ProjectListItem';
import type { HomePagePayload } from '@/types';

export function HomePage({ data }: { data: HomePagePayload }) {
  const { showcaseProjects } = data;

  return (
    <Layout>
      <Intro />

      {showcaseProjects &&
        showcaseProjects.length > 0 &&
        showcaseProjects.map((project, key) => (
          <ProjectListItem project={project} key={key} />
        ))}

      <ScrollUp />
    </Layout>
  );
}
