import { SlideUpTransition } from "@/components/ui/animation/Transitions";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Service } from "../types";

export interface ServicesListItemProps {
  service: Service;
  order?: number;
}
export const ServicesListItem = (props: ServicesListItemProps) => {
  const { order = 0, service } = props;

  return (
    <SlideUpTransition order={order}>
      <Box maxW="md" textAlign="center">
        <VStack>
          <Box alignSelf="top">{service.icon}</Box>
          <Text as="h3" fontSize="2xl" fontWeight="bold">
            {service.title}
          </Text>
          <Text fontSize="lg">{service.description}</Text>
        </VStack>
      </Box>
    </SlideUpTransition>
  );
};
