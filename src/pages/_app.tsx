import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { SWRConfig } from "swr";

import theme from "@/theme"
import { GlobalFonts } from "@/theme/fonts"
import { Layout } from "@/layout"
import { swrConfigOptions } from "@/config/swr";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <GlobalFonts />
            <SWRConfig value={swrConfigOptions}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SWRConfig>
        </ChakraProvider>
    )
}

export default MyApp
