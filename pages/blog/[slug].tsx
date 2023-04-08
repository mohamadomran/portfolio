import { Blog } from '@/types/Blog';
import { config, getBlog } from '@/utils/sanity-utils';
import { PortableText } from '@portabletext/react';
import { GetStaticProps } from 'next';
import { createClient } from 'next-sanity';

const BlogArticle = ({ title, content }: Blog) => {
    return (
        <article className=' self-center px-6 w-full  md:my-4 max-w-2xl lg:max-w-3xl prose prose-xl dark:prose-dark'>
            <div className='border-b-2 border-gray-400'>
                <h2>{title}</h2>
                <div className='mb-8 not-prose text-black dark:text-white'>
                    <PortableText value={content} />
                </div>
            </div>
        </article>
    );
};

export default BlogArticle;

export const getStaticPaths = async () => {
    const query = `*[_type == 'blog']{
          _id,
         slug {
          current
        }
        }`;

    const blogs = await createClient(config).fetch(query);

    // To figure out the paths and provide them to Next.JS. We provide them within an array whereby each object has a key called params, which would have the actual path inside of it:
    const paths = blogs.map((post: Blog) => ({
        // This means I'm going to directly return an object
        // The first one:
        params: {
            // The second one; is going to be the params that matches up to [slug]
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        // This will block the page from not showing or showing a 404 if it doesn't exist
        fallback: 'blocking',
    };
};

// This way we're getting the post information for each page
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
          _id,
          _createdAt,
          title,
          slug,
          content
      }`;
    const { title, content } = await createClient(config).fetch(query, {
        slug: params?.slug,
    });

    return {
        props: {
            title,
            content,
        },
    };
};
