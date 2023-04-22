import { Html, Head, Main, NextScript } from "next/document";
import { Favicon } from "../components/favicon/Favicon";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Favicon />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
