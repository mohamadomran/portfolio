import Image from 'next/image';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";

export const ConsultingIcon = () => {
  const color = useColorModeValue("purple.300", "purple.400");
  return (
    <Box color={color}>
          <Image src="/assets/images/lightbulb.png" alt="Consulting" height="160" width="160"/>
    </Box>
  );
};
