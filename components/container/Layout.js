import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Box pt={16}>{props.children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
