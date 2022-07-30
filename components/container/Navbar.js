import Logo from "../ui/Logo";
import ColorModeToggleButton from "../ui/ColorModeToggleButton";
import { Box, Stack, Flex, useColorModeValue } from "@chakra-ui/react";
import NavbarLink from "../ui/NavbarLink";

const Navbar = () => {
  return (
    <>
      <Box
        as="nav"
        position="fixed"
        w="100%"
        bg={useColorModeValue("gray.200", "gray.800")}
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
