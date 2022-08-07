import { Button, HStack, Link } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { ProjectUrls } from "../../types";

interface ProjectLinksProps {
  title: string;
  urls: ProjectUrls;
  shortLabels?: boolean;
}
export const ProjectLinks = ({ title, urls: { liveUrl }, shortLabels = true }: ProjectLinksProps) => (
  <HStack spacing="6">
    {liveUrl && (
      <Button
        colorScheme="black"
        as={Link}
        isExternal
        href={liveUrl}
        size="sm"
        variant="link"
        aria-label={`View ${title} Live`}
        rightIcon={<FiExternalLink />}
      >
        {shortLabels ? "Live" : "Live Website"}
      </Button>
    )}
  </HStack>
);
