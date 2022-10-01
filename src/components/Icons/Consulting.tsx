import Image from 'next/image';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";

export const ConsultingIcon = () => {
  const color = useColorModeValue("purple.300", "purple.400");
  return (
    <Box color={color}>
          <Image src="/assets/images/web.svg" alt="Consulting" height="300" width="300"/>
    </Box>
  );
};
