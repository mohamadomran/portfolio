import { useEffect, useState } from "react"
import { Button, Heading, VStack, Text } from "@chakra-ui/react"
import { FiArrowLeft } from "react-icons/fi"
import { useRouter } from "next/router"

export default function FourOhFour() {
    const router = useRouter()
    const [buttonText, setButtonText] = useState("GET ME OUT OF HERE")

    useEffect(() => {
        if (window) {
            if (window.history.length <= 2) {
                setButtonText("Go to Homepage")
            }
        }
    }, [])

    const goBack = () => {
        if (window) {
            if (window.history.length > 2) {
                return router.back()
            }
            return router.push("/")
        }
    }

    return (
        <VStack spacing="6" mt="24" textAlign="center">
            <Heading as="h1" size="lg">
                Oh &amp;$!#%. This page was not found.
            </Heading>
            <Text variant="lighter">Just .. ermm.. click the button below to get back.. to uhmm...</Text>

            <Button leftIcon={<FiArrowLeft />} onClick={goBack}>
                {buttonText}
            </Button>
        </VStack>
    )
}
