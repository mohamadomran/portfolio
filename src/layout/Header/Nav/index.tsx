import { Box, Flex } from "@chakra-ui/react"
import { ThemeModeToggler } from "@/components/ui/ThemeModeToggler"
import { layoutDimensions } from "../../dimensions"
import { HeaderNavMobile } from "./Mobile"
import { HeaderNavDesktop } from "./Desktop"

export interface NavProps {
    isSmall: boolean
}
export const Nav = ({ isSmall = false }: NavProps) => (
    <Box px={4}>
        <Flex h={20} alignItems="center" justifyContent="space-between" w={layoutDimensions.width} mx="auto">
            {isSmall ? <HeaderNavMobile /> : <HeaderNavDesktop />}
            <ThemeModeToggler data-testid="theme-mode-toggler" />
        </Flex>
    </Box>
)
