import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../themes";
import "@/styles/globals.css";
import { Layout } from "@/components/layouts/Layout";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
