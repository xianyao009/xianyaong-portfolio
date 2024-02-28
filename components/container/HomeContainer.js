import { Box, Button, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeContainer = () => {
  return (
    <Stack spacing={2} alignItems="center" mt={16}>
      <Heading size="md" fontWeight="light">
        Hi, I&apos;m
      </Heading>
      <Heading size="3xl">Xian Yao</Heading>
      <Box w="80%">
        <Text pt={4}>
          Motivated and dedicated Software Engineer currently employed at{" "}
          <Link as="a" href="https://www.tegus.com" color="blue.400" isExternal>
            Tegus
          </Link>{" "}
          with a proven ability to design and implement innovative solutions.
          Backed by solid internship experiences, adept at collaborating in
          fast-paced environments to solve complex technical challenges
        </Text>
      </Box>
      <Stack direction="row" pt={7}>
        <Button
          as="a"
          size="lg"
          href="https://www.linkedin.com/in/xianyaong"
          target="_blank"
          leftIcon={<FaLinkedin />}
          colorScheme="messenger"
        >
          LinkedIn
        </Button>
        <Button
          as="a"
          size="lg"
          href="https://www.github.com/xianyao009"
          target="_blank"
          leftIcon={<FaGithub />}
        >
          GitHub
        </Button>
      </Stack>
    </Stack>
  );
};

export default HomeContainer;
