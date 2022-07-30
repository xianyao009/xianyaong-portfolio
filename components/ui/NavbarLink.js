import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const isActive = router.pathname === props.href;
  const activeColor = useColorModeValue("gray.800", "orange.200");
  const inactiveColor = useColorModeValue("gray.500", "whiteAlpha.800");

  return (
    <Link href={props.href}>
      <a>
        <Box
          as={motion.h1}
          color={isActive ? activeColor : inactiveColor}
          fontFamily="Verdana, sans-serif"
          fontSize={15}
          fontWeight="bold"
          p={6}
          variants={navbarLinkVariants}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          {props.text}
        </Box>
      </a>
    </Link>
  );
};

export default NavbarLink;
