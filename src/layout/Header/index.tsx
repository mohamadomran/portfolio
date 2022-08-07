import { Box, BoxProps, useBreakpointValue } from "@chakra-ui/react"
import { Nav } from "./Nav"

export const Header = (props: BoxProps) => {
    const isSmall = useBreakpointValue({ base: true, md: false })
    return (
        <Box as="header" {...props}>
            <Nav isSmall={isSmall} />
        </Box>
    )
}
