import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Xian Yao Ng" />
        <meta
          name="description"
          content="Hello guys, my name is Xian Yao Ng. I'm currently working as a Software Engineer Co-op at Tegus. I'm also a final year Computer Science student at the University of Victoria, Canada."
        />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon.ico"
        />
        <link rel="manifest" href="/public/site.webmanifest" />
        <title>Portfolio - Xian Yao Ng</title>
      </Head>
      <Navbar />
      <Box pt={16}>{props.children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
