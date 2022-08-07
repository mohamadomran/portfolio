import { Grid } from "@chakra-ui/react";
import { Main } from "./Main";

export const Layout = ({ children }) => {
    return (
        <Grid gap="6" templateRows="auto 1fr auto" templateColumns="100%" height="100vh">
            <Main>{children}</Main>
        </Grid>
    );
};
