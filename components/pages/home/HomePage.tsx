import ScrollUp from '@/components/global/ScrollUp';
import { Intro } from '@/components/pages/home/Intro';
import { ProjectListItem } from '@/components/pages/home/ProjectListItem';
import type { HomePagePayload } from '@/types';

export function HomePage({ data }: { data: HomePagePayload }) {
  const { showcaseProjects } = data;

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <Intro />

      {showcaseProjects &&
        showcaseProjects.length > 0 &&
        showcaseProjects.map((project, key) => (
          <ProjectListItem project={project} key={key} />
        ))}

      <ScrollUp />
    </div>
  );
}
