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
            ml={7}
            variants={logoVariants}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              transition: {
                duration: 0.3,
                yoyo: Infinity,
              },
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
