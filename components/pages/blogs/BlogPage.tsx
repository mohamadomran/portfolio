import { BlogListItem } from 'components/shared/BlogListItem';
import { Header } from 'components/shared/Header';
import { ProjectCard } from 'components/shared/ProjectCard';
import type { BlogsPayload, ProjectsPayload } from 'types';

export interface BlogsPageProps {
  data: BlogsPayload[];
}

export function BlogsPage({ data }) {
  console.log(data);

  return (
    <div className="space-y-20">
      <Header centered title="Projects" />
      <div className="mx-auto max-w-[100rem] rounded-md border">
        {data.map((blog, key) => {
          return <BlogListItem key={key} project={blog!} />;
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
