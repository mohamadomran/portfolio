import { Card, Flex } from '@sanity/ui';
import type { Author } from 'lib/sanity.queries';

import AuthorAvatar from '@/components/sanity/AuthorAvatar';

export default function AuthorAvatarPreviewPane(props: Author) {
  const { name, picture } = props;
  return (
    <Card padding={6}>
      <Flex justify="center">
        <AuthorAvatar name={name!} picture={picture} />
      </Flex>
    </Card>
  );
}
