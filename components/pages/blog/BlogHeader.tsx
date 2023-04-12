import { PortableText } from '@portabletext/react';

export default function BlogHeader({
  title,
  description,
}: {
  title: string;
  description?: any[];
}) {
  return (
    <>
      <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      <h2 className={`my-5 text-lg`}>
        <PortableText value={description} />
      </h2>
    </>
  );
}
