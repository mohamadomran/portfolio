import { ProjectListItem } from 'components/pages/projects/ProjectListItem';
import { Header } from 'components/shared/Header';
import type { ProjectsPayload } from 'types';

export interface ProjectsPageProps {
  data: ProjectsPayload[];
}

export function ProjectsPage({ data }) {
  console.log(data);

  return (
    <div className="space-y-20">
      <Header centered title="Projects" />
      {/* Showcase projects */}

      <div className="mx-auto max-w-[100rem] rounded-md border">
        {data.map((project, key) => {
          return <ProjectListItem key={key} project={project!} odd={key % 2} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
