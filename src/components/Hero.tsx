import { SOCIAL } from "@/config/social"
import { Button, VStack, Heading, Text, Center, Image, Stack, Link } from "@chakra-ui/react"
import { FiMessageSquare } from "react-icons/fi"

export const Hero = () => (
    <Center height="90vh">
        <Stack direction={['column', 'column', 'column', 'row']} spacing="12" textAlign="center" mb="12">
            <VStack spacing="6" textAlign="center">
                <Image
                    src="/assets/images/avatar.jpg" alt="avatar" borderRadius='full' boxSize={['200px', '300px', '450px']} />
            </VStack>
            <VStack spacing="6" textAlign="center">
                <Heading as="h1" size="2xl" maxWidth="lg" lineHeight="shorter" paddingTop="5">
                    Hi, I&apos;m Mohamad!, I&apos;m a Software engineer at{" "}
                    <Link color="red.500" href='https://www.linkedin.com/company/speedlane/'>
                        SpeedLane 🚀
                    </Link>
                </Heading>
                <Text fontSize="xl" maxWidth="lg" variant="light" lineHeight="base">
                    With more than four years of experience working on a variety of digital products, and currently based in Beirut, Lebanon 🇱🇧
                </Text>
                <Text fontSize="xl" maxWidth="lg" variant="light" lineHeight="base">
                    I&apos;m always open to new adventures and challenges! Tryin&apos; to make the world a better place, one line of code at a time
                </Text>

                <Link href={`mailto:${SOCIAL.EMAIL}`}><Button rightIcon={<FiMessageSquare />}>Got a project? Let’s talk</Button></Link>
            </VStack>
        </Stack>
    </Center >
)
