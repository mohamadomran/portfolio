import type { PortableTextBlock } from '@portabletext/types';
import { CustomPortableText } from 'components/shared/CustomPortableText';
import type { ShowcaseBlog } from 'types';

interface BlogProps {
  project: ShowcaseBlog;
}

export function BlogListItem(props: BlogProps) {
  const { project } = props;

  return (
    <div className="flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row">
      <div className="flex">
        <TextBox project={project} />
      </div>
    </div>
  );
}

function TextBox({ project }: { project: ShowcaseBlog }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {project.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">
          <CustomPortableText value={project.overview as PortableTextBlock[]} />
        </div>
      </div>
      {/* Tags */}
      <div className="mt-4 flex flex-row gap-x-2">
        {project.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
}
