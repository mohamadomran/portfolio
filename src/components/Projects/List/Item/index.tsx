import { Button, Badge, Box, Heading, HStack, Text, Image, VStack, BadgeProps, useDisclosure } from "@chakra-ui/react";
import useSound from "use-sound";
import { HoverTransition, SlideUpTransition } from "@/components/ui/animation/Transitions";
import { ProjectLinks } from "./Links";
import { Project } from "../../types";

const Tag = (props: BadgeProps) => <Badge my="1" {...props} />;

export interface ProjectsListItemProps {
  data: Project;
  /** Animation order */
  order?: number;
}
export const ProjectsListItem = (props: ProjectsListItemProps) => {
  const {
    data: { title, description, featuredImage, liveUrl } = {},
    order = 0,
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [play] = useSound("assets/audio/menu-open-sound.mp3", { volume: 0.2 });

  // Display nothing if these required vars are not provided somehow
  if (!title || !description || !featuredImage?.url) return null;

  return (
    <SlideUpTransition order={order}>
      <Box maxW="md" textAlign="center">
        <VStack spacing="2">
          <HoverTransition>
            <a href={liveUrl} target="blank" rel="noopener noreferrer">
              <Image
                loading="lazy"
                objectFit="cover"
                src={featuredImage?.url}
                alt={`${title}-project-image`}
                rounded="xl"
                boxShadow="xl"
                mb="5"
              />
            </a>
          </HoverTransition>
          <Heading as="h3" size="md">
            {title}
          </Heading>

          <Text variant="lighter" pt="2">
            {description}
          </Text>
          <ProjectLinks title={title} urls={{ liveUrl }} />
        </VStack>
      </Box>
    </SlideUpTransition>
  );
};
