import { type TailwindConfig } from "@react-email/tailwind";

export default {
  theme: {
    extend: {
      colors: {
        text: "#27282C",
        background: "#FAFAFA",
        primary: "#5353F5",
        "primary-foreground": "#FFFFFF",
        secondary: "#E5E5E5",
      },
    },
  },
} satisfies TailwindConfig;
