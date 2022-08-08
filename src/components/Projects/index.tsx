import { Center, Text, Box, Heading } from "@chakra-ui/react";
import { layoutDimensions } from "@/layout/dimensions";
import { ProjectsList } from "./List";

export const Projects = () => (
  <Center id="projects">
    <Box w={layoutDimensions.width} my="12">
      <Box pb="12">
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        <Text mt="4" variant="lighter">
          Projects that I contributed to
        </Text>
      </Box>
      <ProjectsList />
    </Box>
  </Center>
);
