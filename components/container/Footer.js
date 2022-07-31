import Logo from "../ui/Logo";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Container,
  Stack,
  ButtonGroup,
  Divider,
  Text,
  IconButton,
} from "@chakra-ui/react";

const footerVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Footer = () => {
  return (
    <>
      <Container
        as={motion.footer}
        py={{ base: "12", md: "16" }}
        variants={footerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <Divider w="100%" borderColor="gray.400" />
        <Stack spacing={{ base: "4", md: "5" }} mt={12}>
          <Stack justify="space-between" direction="row" align="center">
            <Logo />
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/xianyaong"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://www.github.com/xianyao009"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://www.facebook.com/xianyao009"
                target="_blank"
                aria-label="Facebook"
                icon={<FaFacebook fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="gray.400">
            &copy; {new Date().getFullYear()} Xian Yao Ng. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
