import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"

import theme from "@/theme"
import { GlobalFonts } from "@/theme/fonts"
import { Layout } from "@/layout"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <GlobalFonts />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp
