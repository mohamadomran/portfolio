import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "black")(props),
      lineHeight: "base",
    },
    li: {
      listStylePosition: "outside",
      marginLeft: "18px",
      marginBottom: "4px",
    },
  }),
};
