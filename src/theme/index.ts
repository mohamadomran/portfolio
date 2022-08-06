import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";
import { styles } from "./styles";
import { fonts } from "./fonts";
import { Button, Link, Text } from "./components";

const overrides = {
    config,
    styles,
    fonts,
    components: {
        Button,
        Link,
        Text,
    },
};

export default extendTheme(overrides);
