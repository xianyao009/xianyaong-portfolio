import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";

const NavbarLink = (props) => {
  return (
    <Link href={props.href}>
      <a>
        <Text
          color={useColorModeValue("gray.500", "whiteAlpha.900")}
          fontFamily="Verdana, sans-serif"
          fontSize={15}
          fontWeight="bold"
          p={6}
          _hover={{ color: "gray.800" }}
        >
          {props.text}
        </Text>
      </a>
    </Link>
  );
};

export default NavbarLink;
