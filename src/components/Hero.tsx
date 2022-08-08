import NextLink from "next/link"
import { Button, VStack, Heading, Text, Center, Image, Link } from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"

export const Hero = () => (
    <Center>
        <VStack spacing="6" textAlign="center" mb="16">
            <Text fontSize="4xl" paddingBottom="5" fontWeight="medium" variant="light" lineHeight="shorter" >
                Hi, I&apos;m Mohamad!
            </Text>
            <Image
                src="/assets/images/avatar.jpg" alt="avatar" borderRadius='full' boxSize={['150px', '200px', '300px']} />
            <Heading as="h1" size="xl" maxWidth="xl" lineHeight="shorter" paddingTop="5">
                I&apos;m a Software engineer at{" "}
                <Link color="red.500" href='https://postlight.com'>
                    Postlight.
                </Link>
            </Heading>
            <Text fontSize="md" maxWidth="lg" variant="light" lineHeight="base">
             With more than four years of experience working on a variety of digital products, and currently based in Beirut, Lebanon.
            </Text>
            <Text fontSize="md" maxWidth="lg" variant="light" lineHeight="base">
                I&apos;m always open to new adventures and challenges! Tryin&apos; to make the world a better place, one line of code at a time
            </Text>
            <NextLink href="#projects">
                <Button rightIcon={<FiArrowRight />}>Check what I&apos;ve worked on</Button>
            </NextLink>
        </VStack>
    </Center>
)
