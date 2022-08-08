import Image from 'next/image';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";

export const WebMobileDevelopmentIcon = () => {
  const color = useColorModeValue("purple.300", "purple.400");
  return (
    <Box color={color}>
          <Image src="/assets/images/laptop.png" alt="Application Development" height="150" width="200" />
    </Box>
  );
};
