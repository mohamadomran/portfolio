import { BlogListItem } from 'components/shared/BlogListItem';
import { Header } from 'components/shared/Header';
import { resolveHref } from 'lib/sanity.links';
import type { BlogsPayload } from 'types';

export interface BlogsPageProps {
  data: BlogsPayload[] | null;
}

export function BlogsPage({ data }) {
  return (
    <>
      <Header title="Projects" />

      {data.map((blog, key) => {
        const href = resolveHref(blog._type, blog.slug);
        if (!href) {
          return null;
        }

        return (
          <div className="my-4" key={key}>
            <BlogListItem blog={blog} href={href} />
          </div>
        );
      })}
    </>
  );
}

export default BlogsPage;
