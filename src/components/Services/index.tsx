import { layoutDimensions } from "@/layout/dimensions";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { WebMobileDevelopmentIcon } from "../Icons/WebAppDevelopment";
import { ConsultingIcon } from "../Icons/Consulting";
import { ServicesList } from "./List";
import { Service } from "./types";

export const Services = () => {
  const services: Service[] = [
    {
      title: "Web/Mobile Development",
      description:
        "I'll be assisting you in turning your ideas and concepts into products, whether you're developing a brand-new website or updating the look of an already-existing one.",
      icon: <WebMobileDevelopmentIcon />,
    },
    {
      title: "Consultancy",
      description:
        "I'd be glad to provide your team my knowledge. One of the choices is to have your design architecture audited. Another is to hold a session on cutting-edge web technologies.",
      icon: <ConsultingIcon />,
    },
  ];

  return (
    <Center id="services">
      <Box w={layoutDimensions.width} my="12">
        <Box pb="12">
          <Heading as="h2" size="xl">
         Services
          </Heading>
        </Box>
        <ServicesList services={services} />
      </Box>
    </Center>
  );
};
