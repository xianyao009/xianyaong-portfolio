import Layout from "../components/container/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/Theme";
import "@fontsource/crete-round";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
