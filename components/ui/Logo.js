import Link from "next/link";
import { Text, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const logoVariants = {
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

const Logo = () => {
  return (
    <Heading as="h1">
      <Link href="/">
        <a>
          <Text
            as={motion.h1}
            color={useColorModeValue("gray.600", "whiteAlpha.900")}
            fontFamily="Verdana, sans-serif"
            fontSize={22}
            fontWeight="bold"
            letterSpacing={"tighter"}
            variants={logoVariants}
            whileHover={{
              scale: 1.1,
            }}
          >
            Xian Yao
          </Text>
        </a>
      </Link>
    </Heading>
  );
};

export default Logo;
