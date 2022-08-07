import { Box, Flex, FlexProps, HStack, Text, Link, LinkProps, IconButton, useColorModeValue, IconButtonProps } from "@chakra-ui/react"
import { layoutDimensions } from "../dimensions"
import { HEADER_SOCIAL_ICONS } from "@/config/social"

const currentYear = new Date().getFullYear()

const NavIcon = (props: IconButtonProps & LinkProps) => (
    <IconButton
        as={Link}
        size="md"
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.900"),
        }}
        variant="ghost"
        {...props}
    />
)

export const Footer = (props: FlexProps) => (
    <Box mt="8" py="8" px={layoutDimensions.px} bgColor="transparent" as="footer" {...props}>
        <Flex w={layoutDimensions.width} mx="auto" justifyContent="space-between">
            <Text fontSize="sm">&copy; Copyright Mohamad Omran {currentYear}</Text>
            <HStack spacing={4} alignItems="center">
                {HEADER_SOCIAL_ICONS.map((icon, index) => (
                    <NavIcon key={index} {...icon} />
                ))}
            </HStack>
        </Flex>
    </Box>
)
