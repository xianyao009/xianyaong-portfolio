import Logo from "../ui/Logo";
import ColorModeToggleButton from "../ui/ColorModeToggleButton";
import { Box, Stack, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavbarLink from "../ui/NavbarLink";

const navbarVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};

const Navbar = () => {
  return (
    <>
      <Box
        as={motion.nav}
        position="fixed"
        w="100%"
        bg={useColorModeValue("gray.200", "gray.800")}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Logo />
          </Box>

          <Stack direction={"row"} display={"flex"} flexGrow={1} ml={100}>
            <NavbarLink href="/about" text="About"></NavbarLink>
            <NavbarLink href="/work" text="Work"></NavbarLink>
            <NavbarLink href="/contact" text="Contact"></NavbarLink>
          </Stack>

          <Box mr={5}>
            <ColorModeToggleButton />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
