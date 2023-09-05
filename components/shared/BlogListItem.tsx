'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react';
import type { PortableTextBlock } from '@portabletext/types';
import { CustomPortableText } from 'components/shared/CustomPortableText';
import type { ShowcaseBlog } from 'types';

interface BlogProps {
  blog: ShowcaseBlog;
  href: string;
}

export function BlogListItem({ blog, href }: BlogProps) {
  return (
    <Card shadow="lg" isPressable className="bg-primary/10">
      <CardHeader className="flex 3 text-left px-5">
        <div className="flex flex-col">{blog.title}</div>
      </CardHeader>
      <Divider />
      <CardBody>
        <CustomPortableText value={blog.overview as PortableTextBlock[]} />
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          href={href}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="flat"
          className="justify-end"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
