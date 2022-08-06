import NextLink from "next/link"
import { Button, VStack, Heading, Text, Center } from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"

export const Hero = () => (
    <Center>
        <VStack spacing="6" textAlign="center" mb="16">
            <Text fontSize="xl" fontWeight="medium" variant="light" lineHeight="shorter">
                Hi, I&apos;m Mohamad.
            </Text>
            <Heading as="h1" size="xl" maxWidth="xl" lineHeight="shorter">
                I&apos;m a Software engineer at Postlight with more than four years of experience working on a variety of digital products.
            </Heading>
            <Text fontSize="md" maxWidth="lg" variant="light" lineHeight="base">
                Based in Beirut, Lebanon. I&apos;m always open to new adventures and challenges! Tryin&apos; to make the world a better place, one line of code at a time
            </Text>
            <NextLink href="#projects">
                <Button rightIcon={<FiArrowRight />}>Check what I&apos;ve worked on</Button>
            </NextLink>
        </VStack>
    </Center>
)
