import { PortableText } from '@portabletext/react';

export default function PostBody({ content }: { content: any[] }) {
  return (
    <div className={`mx-auto max-w-2xl`}>
      <PortableText value={content} />
    </div>
  );
}
