import Link from "next/link";
import { Text, Heading, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Heading as="h1">
      <Link href="/">
        <a>
          <Text
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
            fontFamily="Verdana, sans-serif"
            fontSize={22}
            fontWeight="bold"
            letterSpacing={"tighter"}
            ml={7}
            _hover={{ color: "gray.800" }}
          >
            Xian Yao
          </Text>
        </a>
      </Link>
    </Heading>
  );
};

export default Logo;
