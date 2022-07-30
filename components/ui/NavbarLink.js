import Link from "next/link";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const navbarLinkVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const NavbarLink = (props) => {
  return (
    <Link href={props.href}>
      <a>
        <Box
          as={motion.h1}
          color={useColorModeValue("gray.500", "whiteAlpha.900")}
          fontFamily="Verdana, sans-serif"
          fontSize={15}
          fontWeight="bold"
          p={6}
          variants={navbarLinkVariants}
          whileHover={{
            scale: 1.1,
          }}
        >
          {props.text}
        </Box>
      </a>
    </Link>
  );
};

export default NavbarLink;
