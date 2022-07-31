import NextLink from "next/link";
import Logo from "../ui/Logo";
import ColorModeToggleButton from "../ui/ColorModeToggleButton";
import {
  Box,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavbarLink from "../ui/NavbarLink";
import { HamburgerIcon } from "@chakra-ui/icons";

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
        bg={useColorModeValue("#ffffff40", "#20202380")}
        backdropFilter="blur(7px)"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Logo />
          </Box>

          <Stack
            direction={"row"}
            display={{ base: "none", md: "flex" }}
            flexGrow={1}
            ml={100}
          >
            <NavbarLink href="/about" text="About"></NavbarLink>
            <NavbarLink href="/work" text="Work"></NavbarLink>
            <NavbarLink href="/contact" text="Contact"></NavbarLink>
          </Stack>

          <Box mr={5}>
            <ColorModeToggleButton />

            <Box ml={5} display={{ base: "inline-block", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <NextLink href="/about">
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="/work">
                    <MenuItem as={Link}>Work</MenuItem>
                  </NextLink>
                  <NextLink href="/contact">
                    <MenuItem as={Link}>Contact</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
